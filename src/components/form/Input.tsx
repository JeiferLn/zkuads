import React, { useState } from 'react';
import Icons from '../Icons';
import { poppins } from '../Fonts';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface InputProps {
    className?: string;
    icon?: string;
    placeholder?: string;
    label?: string;
    register: any;
    name: string;
    type?: string;
    required?: boolean | string;
    error?: string;
    validate?: (value: string) => string | boolean;
}

const Input: React.FC<InputProps> = ({ className, icon, placeholder, label, register, name, type = "text", required, error, validate }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={`${className ? className : 'block'} text-left`}>
            {label && <p className={`text-left mb-2 opacity-70 text-sm ${poppins.className}`}>{label}</p>}
            <div className='relative'>
                {icon &&
                    <div className='absolute h-full top-0 px-4 grid items-center'>
                        <div className='w-4 opacity-60'>
                            <Icons name={icon}></Icons>
                        </div>
                    </div>
                }
                {type === 'date' &&
                    // Date Input
                    <div className={`${icon && 'pl-11'} relative inline-block bg-white bg-opacity-5 p-3.5 outline-none rounded-xl w-full border-1 lg:border-2 ${error ? 'border-red-400' : 'border-extralight-pink'}`}>
                        <span className='opacity-0'>{placeholder}</span>
                        <input
                            className={`${icon && 'pl-11'} text-left absolute top-0 left-0 pl-11 w-[calc(100%-0.875rem)] h-full opacity-100 bg-opacity-0 bg-white outline-none`}
                            type={type}
                            placeholder={placeholder}
                            {...register(name, { required, validate })}
                            autoComplete='off'
                        />
                    </div>
                }
                {type === 'text' &&
                    <input
                        className={`${icon && 'pl-11'} bg-[#3B1578] border-2 p-3.5 outline-none rounded-xl w-full lg:border-2 ${error ? 'border-red' : 'border-[#09FBD3CC]'}`}
                        type={type}
                        placeholder={placeholder}
                        {...register(name, { required, validate })}
                        autoComplete='off'
                    />
                }
                {type === 'password' &&
                    <>
                        <input
                            className={`${icon && 'pl-11'} bg-[#3B1578] p-3.5 outline-none rounded-xl w-full border-2 lg:border-2 ${error ? 'border-red' : 'border-[#09FBD3CC]'}`}
                            type={showPassword ? 'text' : type}
                            placeholder={placeholder}
                            {...register(name, { required, validate })}
                            autoComplete='off'
                        />
                        <div className='absolute right-0 top-0 h-full px-5 flex justify-center items-center opacity-70' onClick={handleShowPassword}>
                            <FaEye className={`${showPassword ? 'hidden' : 'block'} w-5 h-5`} />
                            <FaEyeSlash className={`${showPassword ? 'block' : 'hidden'} w-5 h-5`} />
                        </div>
                    </>
                }
                {type === 'checkbox' &&
                    <label className='flex items-center'>
                        <input
                            type={type}
                            {...register(name, { required, validate })}
                            autoComplete='off'
                        />
                        <div className={`border-1 ${error ? 'border-red-400' : 'border-extralight-pink'} w-5 aspect-square rounded-md bg-white bg-opacity-5`} />
                        <p className='ml-2'>{placeholder}</p>
                    </label>
                }
            </div>
            {error && error !== "true" && <p className={`text-red-400 text-sm mt-1 ${poppins.className}`}>{error}</p>}
        </div>
    );
};

export default Input;