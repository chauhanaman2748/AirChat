import { useEffect } from "react";
import { ObjectId } from 'bson';
import { useConversation, useSocketContext } from "..";
import notificationSound from '../../utils/notification.mp3';

interface Messages { 
    _id: ObjectId,
    senderId: ObjectId,
    receiverId: ObjectId,
    message: string,
    createdAt: string,
    updatedAt: string,
    shouldShake: boolean
}

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();
 
    useEffect(() => {
        if (!socket) return; 

        const handleNewMessage = (newMessage: Messages) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessages, messages]);
};

export default useListenMessages;
