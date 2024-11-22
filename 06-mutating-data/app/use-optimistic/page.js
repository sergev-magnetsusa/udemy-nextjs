'use client';

import {useOptimistic, useRef, useState} from 'react';
import {deliverMessage} from '@/app/actions/messages';

const Thread = ({messages, sendMessage}) => {
  const formRef = useRef();

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMessage) => {
    return [
      ...state,
      {text: newMessage, sending: true},
    ];
  });

  const formAction = async (formData) => {
    addOptimisticMessage(formData.get('message'));
    formRef.current.reset();
    await sendMessage(formData);
  };

  return (<>
    {optimisticMessages.map((message, index) => (
      <div key={index}>
        {message.text}
        {!!message.sending && <small> (Sending...) </small>}
      </div>
    ))}

    <form action={formAction} ref={formRef}>
      <input type="text" name="message" placeholder="..."/>
      <button type="submit">Send</button>
    </form>
  </>);
};

const UseOptimisticPage = () => {
  const [messages, setMessages] = useState([
    {text: 'Initial message!', sending: false, key: 1},
  ]);

  const sendMessage = async (formData) => {
    const sentMessage = await deliverMessage(formData.get('message'));
    setMessages((messages) => [...messages, {text: sentMessage}]);
  }

  return (
    <section>
      <Thread messages={messages} sendMessage={sendMessage}/>
    </section>
  );
};

export default UseOptimisticPage;