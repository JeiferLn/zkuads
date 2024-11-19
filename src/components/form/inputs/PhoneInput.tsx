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

const PhoneInput: React.FC<TextInputProps> = ({ className, icon, label, placeholder = label, register, error }) => (
    <div className={`${className ? className : 'block'} text-left`}>
        {label && <p className={`font-medium mb-2 ${poppins.className}`}>{label}</p>}
        <div className='relative'>
            {icon && (
                <div className='absolute top-0 grid items-center h-full px-4'>
                    <div className='w-4 opacity-80'>
                        <Icons name={icon} />
                    </div>
                </div>
            )}
            <input
                className={`${icon && 'pl-11'} bg-[#3B1578] p-2.5 outline-none rounded-xl w-full border-1.5 lg:border-2 duration-200 ${error ? 'border-red' : 'border-[#09FBD3CC]'}`}
                type="number"
                placeholder={placeholder}
                {...register}
                autoComplete='off'
                onKeyDown={(e) => {
                    if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
                        e.preventDefault();
                    }
                }}
            />
        </div>
        {error && error !== "true" && <p className={`text-red-400 text-sm mt-1 ${poppins.className}`}>{error}</p>}
    </div>
);

export default PhoneInput;