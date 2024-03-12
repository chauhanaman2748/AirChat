import { Request, Response } from 'express';
import { Conversation } from '../../models';

const getMessage = async (req: Request, res: Response) => {
    try {
        
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages"); // Gives object of messages in Message collection instead of messages reference (ids).

        if(!conversation) return res.status(200).json([]);

        return res.status(200).json(conversation.messages);

    } catch (error: any) {
        console.log("Error in getting messages", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export default getMessage;