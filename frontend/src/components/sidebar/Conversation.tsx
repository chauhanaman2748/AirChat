import { useGetConversations } from "../../hooks";
import { GetConversations } from "../../services";
import { getRandomEmoji } from "../../utils";

const Conversation = () => {
	const {loading, conversations} = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<GetConversations
					key={conversation._id}
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