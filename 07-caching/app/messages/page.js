import Messages from '@/components/Messages';
import {connection} from 'next/server';

// export const revalidate = 5;
export const dynamic = 'force-dynamic';

const MessagesPage = async () => {
  // unstable_noStore(); // DEPRECATED
  // await connection();

  const res = await fetch('http://localhost:8080/messages', {
    // cache: 'no-store'
    // cache: 'force-cache',
    // next: {
    //   revalidate: 5,
    // },
    // next: {tags: ['msg']}
  });
  const messages = await res.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages}/>;
};

export default MessagesPage;