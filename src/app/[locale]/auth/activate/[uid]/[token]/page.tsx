import Button from '@/components/Button';
import { poppins } from '@/components/Fonts';
import axiosInstance from '@/utils/axiosInstance';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FaUserCheck } from 'react-icons/fa';
import { IoIosWarning } from 'react-icons/io';

interface IParams {
    uid: string;
    token: string;
}

const Page = async ({ params }: any) => {
    const ErrorsTranlation = useTranslations('Errors.ActivateError');
    const data = {
        uid: params.uid,
        token: params.token
    }
    try {
        const response = await axiosInstance.post('/auth/users/activation/', data);
        return (
            <div className='text-center mt-16'>
                <div className='inline-block rounded-2xl mb-6 bg-green-400 p-3'>
                    <FaUserCheck className='w-10 h-10' />
                </div>
                <h2 className='text-2xl mb-3'>Activation Successful!</h2>
                <p className={`${poppins.className} opacity-70`}>Your account has been successfully activated. You can now access all the features and services we offer. Thank you for joining us!</p>
                <Button className='mt-8 w-full' mainButton type="button">Go to Login</Button>
            </div>
        )
    } catch (error) {
        return (
            <div className='text-center mt-16'>
                <div className='inline-block rounded-2xl mb-6 bg-red-400 p-3'>
                    <IoIosWarning className='w-10 h-10' />
                </div>
                <h2 className='text-2xl mb-3'>Something went wrong!</h2>
                <p className={`${poppins.className} opacity-70`}>Your account has been successfully activated. You can now access all the features and services we offer. Thank you for joining us!</p>
                <Button className='mt-8 w-full' mainButton type="button">Go to Login</Button>
            </div>
        )
    }
}

export default Page