import { GetConversations } from "../../services";

const Conversation = () => {
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			<GetConversations />
			<GetConversations />
			<GetConversations />
			<GetConversations />
			<GetConversations />
			<GetConversations />
		</div>
	);
};
export default Conversation;