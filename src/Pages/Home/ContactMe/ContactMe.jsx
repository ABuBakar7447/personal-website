
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import SectionHead from '../../../Components/SectionHead/SectionHead';
import Swal from 'sweetalert2';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v4zh8xc', 'template_5waa2tx', form.current, 'YtFr8KK5VxrQPc-l5')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Email Has Been Send",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.current.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='pt-[20px] container min-h-screen my-10' id='contactme'>
            <div>
                <SectionHead headone={"Let's Work"} headtwo={"Together"}></SectionHead>
            </div>
            <form ref={form} onSubmit={sendEmail} className='w-3/4 flex flex-col space-y-5'>
                <div className='lg:flex gap-2'>
                    <div className='lg:flex lg:flex-col gap-5 w-1/2'>
                        <label className='text-white font-bold'>Name</label>
                        <input type="text" placeholder='enter your name' name="user_name" className='border-b-2 rounded-t-lg border-black bg-zinc-700 p-3 text-white' />
                    </div>
                    <div className='lg:flex lg:flex-col gap-5 w-1/2'>
                        <label className='text-white font-bold'>Email</label>
                        <input type="email" placeholder='enter your email' name="user_email" className='border-b-2 rounded-t-lg border-black bg-zinc-700 p-3 text-white' />
                    </div>
                </div>

                <label className='text-white font-bold'>Message</label>
                <textarea name="message" placeholder='enter your details ....' className='border-b-2 rounded-t-lg border-black bg-zinc-700 text-white p-5' />
                <input type="submit" value="Send" className='btn btn-success w-[256px] border-none bg-[#03C988] mx-auto' />
            </form>
        </div>
    );
};

export default ContactMe;