import { poppins } from '@/components/Fonts';
import Icons from '@/components/Icons';
import React from 'react';

interface CheckboxInputProps {
    className?: string;
    icon?: string;
    placeholder?: string;
    label?: string;
    register: any;
    error?: string;
}

const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    return maxDate.toISOString().split('T')[0];
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({ className, icon, label, placeholder = label, register, error }) => (
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
                className={`${icon && 'pl-11'} bg-white bg-opacity-5 p-3.5 outline-none rounded-xl w-full border-1.5 lg:border-2 duration-200 ${error ? 'border-red-400' : 'border-white border-opacity-40 focus:border-extralight-pink focus:border-opacity-100'}`}
                type='date'
                max={getMaxDate()}
                min={'1900-01-01'}
                placeholder={placeholder}
                {...register}
            />
        </div>
        {error && error !== "true" && <p className={`text-red-400 text-sm mt-1 ${poppins.className}`}>{error}</p>}
    </div>
);

export default CheckboxInput;