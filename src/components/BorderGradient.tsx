import React from 'react';

interface GradientBorderButtonProps {
    className: string;
}

export const GradientBorderSmallButton: React.FC<GradientBorderButtonProps> = ({ className }) => {
    return (
        <svg width="134" height="10" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="LoginWeb_Btn">
                <rect
                    className='w-[99%] h-[85%]'
                    x="0"
                    y="4"
                    width="0"
                    height="0"
                    rx="9"
                    stroke="url(#paint0_linear_5_10187)"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_5_10187"
                    x1="48.8143"
                    y1="0"
                    x2="66.9924"
                    y2="26.493"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF53C0" stopOpacity="0" />
                    <stop offset="1" stopColor="#FF53C0" />
                </linearGradient>
            </defs>
        </svg>
    );
};
export const GradientBorderMediumButton: React.FC<GradientBorderButtonProps> = ({ className }) => {
    return (
        <svg width="337" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="Continue_Btn">
                <rect
                    className='w-[99%] h-[90%]'
                    x="2"
                    y="2"
                    width="334.794"
                    height="54" 
                    rx="9"
                    stroke="url(#paint0_linear_5_10322)"
                    strokeWidth="2" 
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_5_10322"
                    x1="122.689" y1="1.21388e-06"
                    x2="136.887" y2="42.7183"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF53C0" stopOpacity="0" />
                    <stop offset="1" stopColor="#FF53C0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const GradientBorderLargeButton: React.FC<GradientBorderButtonProps> = ({ className }) => {
    return (
        <svg width="1064" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="MoreGames_Btn">
                <rect
                    className='w-[99%] h-[92%]'
                    x="9"
                    y="1"
                    width="1062"
                    height="54"
                    rx="19"
                    stroke="url(#paint0_linear_5_8689)"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <linearGradient id="paint0_linear_5_8689"
                    x1="387.6" y1="1.21388e-06"
                    x2="392.536"
                    y2="46.9175"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF53C0" stopOpacity="0" />
                    <stop offset="1" stopColor="#FF53C0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const GradientBorderExtraLargeButton: React.FC<GradientBorderButtonProps> = ({ className }) => {
    return (
        <svg width="1064" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g id="MoreGames_Btn">
                <rect
                    className='w-[100%] h-[92%]'
                    x="-1"
                    y="1"
                    width="1062"
                    height="54"
                    rx="19"
                    stroke="url(#paint0_linear_5_8689)"
                    strokeWidth="2"
                />
            </g>
            <defs>
                <linearGradient id="paint0_linear_5_8689"
                    x1="387.6" y1="1.21388e-06"
                    x2="392.536"
                    y2="46.9175"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF53C0" stopOpacity="0" />
                    <stop offset="1" stopColor="#FF53C0" />
                </linearGradient>
            </defs>
        </svg>
    )
}