import { create } from 'zustand';

interface Conversation {
    fullName: string;
    userName: string;
    gender: string;
    profilePic: string;
}

interface ConversationState {
    selectedConversation: Conversation | null;
    setSelectedConversation: (selectedConversation: Conversation | null) => void;
    messages: string[];
    setMessages: (messages: string[]) => void;
}

export const useConversation = create<ConversationState>((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation: Conversation | null) => set({ selectedConversation }),
    messages: [],
    setMessages: (messages: string[]) => set({ messages }),
}));

