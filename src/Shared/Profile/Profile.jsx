import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import pic from "../../Asset/Profile Pic.jpeg"



const Profile = () => {
    return (
        <div className="w-full px-auto">
            <div >

                <div className="card w-96 border-[1px] border-white lg:fixed lg:z-10">

                    <div className="flex justify-around mt-7">
                        <p className="text-3xl font-bold text-[#03C988]">Md. Abu Bakar</p>
                        <p className="text-white">Mern Stack <br /> Web Developer</p>
                    </div>
                    <figure className="px-10 pt-10">
                        <img src={pic} alt="Shoes" className="rounded-xl h-[250px] w-[250px] object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="text-xl font-bold text-white">mdabsiddiq04@gmail.com</h2>
                        <p className="text-white mb-5">Dhaka, Bangladesh</p>

                        <div className="flex space-x-5 text-white mb-5">
                            <Link to='https://github.com/ABuBakar7447' className="">
                                <div className="border border-white rounded-full p-3 hover:border-[#03C988] hover:text-[#03C988]">

                                    <Icon className="w-5 h-5" icon="uiw:github" />

                                </div>
                            </Link>

                            <Link to='https://www.linkedin.com/in/md-abu-bakar-siddiq-tapu/'>
                                <div className="border border-white rounded-full p-3 text-white hover:border-[#03C988] hover:text-[#03C988]">

                                    <Icon className="w-5 h-5"  icon="akar-icons:linkedin-fill" />

                                </div>
                            </Link>

                            <Link to='https://www.facebook.com/profile.php?id=100008633739655&mibextid=ZbWKwL'>
                                <div className="border border-white rounded-full p-3 text-white hover:border-[#03C988] hover:text-[#03C988]">

                                    <Icon className="w-5 h-5" icon="basil:facebook-solid" />

                                </div>
                            </Link>

                            <Link to=''>
                                <div className="border border-white rounded-full p-3 text-white hover:border-[#03C988] hover:text-[#03C988]">

                                    <Icon className="w-5 h-5" icon="mdi:whatsapp" />

                                </div>
                            </Link>

                        </div>
                        <div className="card-actions mb-3">
                            <button className="btn btn-success w-[256px] border-none bg-[#03C988]">HIRE ME</button>
                        </div>
                    </div>
                </div>



                {/* <div className='lg:w-[380px] border-[1px] border-[#bbb] rounded-3xl px-6 py-10 fixed z-10 opacity-80 top-16'>
                    <div className='flex justify-between mb-6'>
                        <h2 className=' text-4xl font-bold text-[#03C988]'>Shahtaz</h2>
                        <h2 className='text-white leading-[20px]'>Full-Stack<br />Web Developer</h2>
                    </div>
                    <img src={''} alt="" className="h-[250px] w-[250px] object-cover rounded-3xl mx-auto" />
                    <div className='flex flex-col items-center'>
                        <h2 className='text-white text-lg mt-8'>shahtazrahman17@gmail.com</h2>
                        <h2 className='text-white text-lg mt-2 mb-6'>Dhaka, Bangladesh</h2>

                        SOCIAL MEDIA ICONS 
                        <SocialLinks 
                        <a href='#contact'>
                            <button className='btn btn-wide btn-primary mt-8'>Hire Me</button>
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Profile;