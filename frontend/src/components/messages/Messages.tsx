import { GetMessages } from "../../services";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useGetMessages } from "../../hooks";
import { useEffect, useRef } from "react";

const Messages = () => {
	const { messages, loading } = useGetMessages();
    const lastMessageRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading ? (
                [...Array(8)].map((_, idx) => <MessageSkeleton key={idx} />)
            ) : messages && messages.length > 0 ? (
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <GetMessages message={message} />
                    </div>
                ))
            ) : (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
		</div>
	);
};
export default Messages;