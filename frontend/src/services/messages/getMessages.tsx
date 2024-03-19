import { ObjectId } from 'bson';
import { useAuthContext, useConversation } from '../../hooks';
import { extractTime } from '..';

interface Messages { 
    _id: ObjectId,
    senderId: ObjectId,
    receiverId: ObjectId,
    message: string,
    createdAt: string,
    updatedAt: string
}

const Message: React.FC<{ message: Messages }> = ({message}) => {
	const {selectedConversation} = useConversation();
	const {authUser} = useAuthContext();
	const fromMe = message.senderId === authUser?._id;
	const chatClassName = fromMe ? 'chat-end' : 'chat-start';
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? 'bg-blue-500': "bg-blue-100";
	const bubbleTextColor = fromMe ? 'text-white': "text-black";
	const sentTime = extractTime(message.createdAt);

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble ${bubbleTextColor} pb-2 ${bubbleBgColor}`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 text-white items-center'>{sentTime}</div>
		</div>
	);
};
export default Message;