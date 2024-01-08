
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SectionHead from '../../../Components/SectionHead/SectionHead';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v4zh8xc', 'template_5waa2tx', form.current, 'YtFr8KK5VxrQPc-l5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div>
                <SectionHead headone={"Let's Work"} headtwo={"Together"}></SectionHead>
            </div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-5'>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactMe;