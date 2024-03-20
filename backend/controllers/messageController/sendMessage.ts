import { Request, Response } from 'express';
import { Conversation, Message } from '../../models';
import { getReceiverSocketId, io } from '../../services';

declare global {
    namespace Express {
        interface Request {
            user?: any; 
        }
    }
}

const sendMessage = async (req: Request, res: Response) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message ({
            senderId,
            receiverId,
            message
        })

        if(newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(200).json(newMessage);

    } catch (error: any) {
        console.log("Error in sending message", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default sendMessage;