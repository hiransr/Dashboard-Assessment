import React, { useState, useEffect } from 'react'
import google_logo from '../Assets/google-color-svgrepo-com.svg'
import apple_logo from '../Assets/apple-color-svgrepo-com.svg'
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useProfileContext } from '../context/Profile';
const Signup = () => {
    const navigate = useNavigate()
    // const [profile, setProfile] = useState([]);
    const [user, setUser] = useState(null);
    const { profile, setProfile } = useProfileContext()
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    useEffect(
        () => {
            if (profile) {
                navigate('/dashboard')
            }
        }, [profile])
    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data)
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );
    return (
        <div className='flex flex-col md:flex-row h-[100vh]'>
            <div className=' bg-black  w-[clamp(400px,40vw,588px)] hidden md:flex items-center justify-center '>
                <div>
                    <p className='text-7xl font-bold text-white '>Board.</p>
                </div>
            </div>
            <div className='bg-black w-full h-20 md:hidden flex justify-center items-center'>
                <p className=' text-4xl font-bold text-white'>Board.</p>
            </div>
            <div className='bg-[#f5f5f5] flex-1 flex justify-center items-center'>
                <div className='flex flex-col'>
                    <p className=' font-bold text-4xl'>Sign In</p>
                    <p className=' text-xs mt-[7px]'>Sign in to your account</p>
                    <div className='flex flex-row pt-[26px]'>
                        {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}
                        <button className=' bg-white h-[30px] w-[180px] rounded-[10px] mr-[25px] hover:bg-black/10 ' onClick={login} >
                            <div className='flex items-center gap-2 justify-center'>
                                <img className='w-[18px]' src={google_logo} alt="google logo" />
                                <p className='text-[#858585] text-[12px]'>Sign in with Google</p>
                            </div>
                        </button>
                        <button className=' bg-white h-[30px] w-[180px] justify-center rounded-[10px] hover:bg-black/10'>
                            <div className=' flex items-center gap-2 justify-center'>
                                <img className='w-[18px]' src={apple_logo} alt="apple logo" />
                                <p className='text-[#858585] text-[12px]'>Sign in with Apple</p>
                            </div>
                        </button>
                    </div>
                    <div className='bg-white mt-[25px] h-[337px] w-[385px] rounded-[20px] flex flex-col p-[30px]'>
                        <div className='flex flex-col'>
                            <p className='text-[16px]'>Email address</p>
                            <input className='bg-[#f5f5f5] w-[325px] h-[40px] rounded-[10px] mt-[10px] p-[10px]' type='text' id='email' name='email' placeholder='Enter your email' />
                            <p className='text-[16px] mt-[20px]'>Password</p>
                            <input className='bg-[#f5f5f5] w-[325px] h-[40px] rounded-[10px] mt-[10px] p-[10px]' type='password' id='password' name='password' placeholder='Enter your password' />
                        </div>
                        <div className='mt-[20px]'>
                            <a href="" className='text-[#346BD5]'>Forgot password?</a>
                        </div>
                        <button type="button" className='bg-black text-white rounded-[10px] h-[40px] w-[325px] mt-[20px] hover:bg-black/10 hover:text-black'>
                            Sign In
                        </button>
                    </div>
                    <div>
                        <div className='flex flex-row gap-1 justify-center mt-[20px]'>
                            <p>Don't have an account? </p>
                            <a href='' className='text-[#346BD5]' >Register here</a>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Signup