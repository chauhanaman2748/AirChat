import MessageContainer from './MessageContainer';
import NoChatSelected from './NoChatSelected';

const SelectMessages = () => {
  const showMessages = true; 

  return (
    <>
      {showMessages ? <MessageContainer /> : <NoChatSelected />}
    </>
  );
};

export default SelectMessages;
