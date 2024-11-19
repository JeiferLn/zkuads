import { poppins } from '@/components/Fonts';
import Icons from '@/components/Icons';
import React from 'react';

interface DateInputProps {
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

const DateInput: React.FC<DateInputProps> = ({ className, icon, label, placeholder = label, register, error }) => (
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

export default DateInput;