import { poppins } from '@/components/Fonts';
import Icons from '@/components/Icons';
import React from 'react';

interface TextInputProps {
    className?: string;
    icon?: string;
    placeholder?: string;
    label?: string;
    register: any;
    error?: string;
}

const TextInput: React.FC<TextInputProps> = ({ className, icon, label, placeholder = label, register, error }) => (
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
                type='text'
                placeholder={placeholder}
                {...register}
                autoComplete='off'
            />
        </div>
        {error && error !== "true" && <p className={`text-red-400 text-sm mt-1 ${poppins.className}`}>{error}</p>}
    </div>
);

export default TextInput;