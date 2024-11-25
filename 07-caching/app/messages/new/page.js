import {addMessage} from '@/lib/messages';
import {redirect} from 'next/navigation';
import {revalidatePath, revalidateTag} from 'next/cache';

const NewMessagePage = () => {

  const createMessage = async (formData) => {
    'use server';

    const message = formData.get('message');
    addMessage(message);
    // revalidatePath('/messages', 'layout');
    // revalidateTag('msg');
    redirect('/messages');
  };

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" cols="30" rows="5"/>
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
};

export default NewMessagePage;