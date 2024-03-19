import { create } from 'zustand';
import { ObjectId } from 'bson';

interface Conversation {
    _id: ObjectId,
    fullName: string,
    userName: string,
    gender: string,
    profilePic: string,
}

interface Messages { 
    _id: ObjectId,
    senderId: string,
    receiverId: string,
    message: string,
    createdAt: Date,
    updatedAt: Date
}

interface ConversationState {
    selectedConversation: Conversation | null;
    setSelectedConversation: (selectedConversation: Conversation | null) => void;
    messages: Messages[] | null;
    setMessages: (messages: Messages[]) => void;
}

export const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation: Conversation | null) => set((state) => ({ ...state, selectedConversation })),
    messages: [],
    setMessages: (messages: Messages[]) => set({ messages }),
}));

