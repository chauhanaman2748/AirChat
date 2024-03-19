import { useConversation } from '../../hooks';
import MessageContainer from './MessageContainer';
import NoChatSelected from './NoChatSelected';

const SelectMessages = () => {
  const {selectedConversation} = useConversation();

  return (
    <>
      {selectedConversation ? <MessageContainer /> : <NoChatSelected />}
    </>
  );
};

export default SelectMessages;
