import { createContext, useState, useEffect, ReactNode } from "react";
import io, { Socket } from "socket.io-client";
import { useAuthContext } from "../../hooks";
import { ObjectId } from 'bson';


interface SocketContextType {
    socket: Socket | null,
    onlineUsers: ObjectId[] 
}

export const SocketContext = createContext<SocketContextType>({ socket: null, onlineUsers: [] });

export const SocketContextProvider = ({ children }: { children: ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<ObjectId[]>([]); 
    const { authUser } = useAuthContext();

    useEffect(() => {
        let socketInstance: Socket | undefined;

        if (authUser) {
            socketInstance = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                },
            });

            console.log("User Id from inside", authUser._id)

            setSocket(socketInstance);

            socketInstance.on("getOnlineUsers", (users: ObjectId[]) => { 
                setOnlineUsers(users);
            });
        }

        return () => {
            if (socketInstance) {
                socketInstance.close();
            }
        };
    }, [authUser]);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
