"use client"

import { poppins } from '@/components/Fonts';
import Icons from '@/components/Icons';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface PasswordInputProps {
    className?: string;
    icon?: string;
    placeholder?: string;
    label?: string;
    register: any;
    error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ className, icon, label, placeholder = label, register, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={`${className ? className : 'block'} text-left`}>
            {label && <p className={`font-medium mb-2 ${poppins.className}`}>{label}</p>}
            <div className='relative'>
                {icon && (
                    <div className='absolute h-full top-0 px-4 grid items-center'>
                        <div className='w-4 opacity-80'>
                            <Icons name={icon} />
                        </div>
                    </div>
                )}
                <input
                    className={`${icon && 'pl-11'} bg-[#3B1578] p-2.5 outline-none rounded-xl w-full border-2 duration-200 ${error ? 'border-red' : 'border-[#09FBD3CC]'}`}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    {...register}
                    autoComplete='off'
                />
                <div className='absolute right-0 top-0 h-full px-5 flex justify-center items-center opacity-70' onClick={handleShowPassword}>
                    <FaEye className={`${showPassword ? 'hidden' : 'block'} w-5 h-5`} />
                    <FaEyeSlash className={`${showPassword ? 'block' : 'hidden'} w-5 h-5`} />
                </div>
            </div>
            {error && error !== "true" && <p className={`text-red-400 text-sm mt-1 ${poppins.className}`}>{error}</p>}
        </div>
    );
};

export default PasswordInput;