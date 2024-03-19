import { GetMessages } from "../../services";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import { useGetMessages } from "../../hooks";

const Messages = () => {
	const { messages, loading } = useGetMessages();


	return (
		<div className='px-4 flex-1 overflow-auto'>
			{loading ? (
                [...Array(8)].map((_, idx) => <MessageSkeleton key={idx} />)
            ) : messages && messages.length > 0 ? (
                messages.map((message) => (
                    <div key={message._id}>
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