import { useGetConversations } from "../../hooks";
import { GetConversations } from "../../services";
import { ObjectId } from 'bson';
import { getRandomEmoji } from "../../utils";

interface Conversation {
    _id: ObjectId,
    fullName: string,
    userName: string,
    gender: string,
    profilePic: string,
}

const Conversation = () => {
	const {loading, conversations} = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation: Conversation, idx) => (
				<GetConversations
					key={conversation._id.toString()}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div> 
	)
};
export default Conversation;