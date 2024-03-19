import { useEffect } from "react";
import { useConversation } from "../../hooks";
import { ObjectId } from 'bson';

interface Conversation {
	_id: ObjectId,
	fullName: string,
    userName: string, 
    gender: string,
    profilePic: string,
}

interface GetConversationsTypes {
	conversation: Conversation, 
	emoji: string, 
	lastIdx: boolean
}

const GetConversations = ({conversation, emoji, lastIdx}: GetConversationsTypes) => {

	const {selectedConversation, setSelectedConversation} = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;

	useEffect(() => {
        return () => setSelectedConversation(null); 
    }, [setSelectedConversation]);

	const handleClick = () => {
        setSelectedConversation(conversation);
    };

	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			${isSelected ? "bg-sky-500" : ""}
			`}
				onClick={handleClick}
			>
				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default GetConversations;
