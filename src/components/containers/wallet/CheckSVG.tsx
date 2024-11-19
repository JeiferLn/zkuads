import React from 'react';

interface CheckIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  width = 119,
  height = 100,
  color = 'white',
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 119 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_i_440_12314)">
        <path
          d="M109.155 10L43.0516 90L10 50"
          stroke={color}
          strokeWidth="19.1549"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_440_12314"
          x="0.421875"
          y="0.422363"
          width="118.311"
          height="103.662"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.50704" />
          <feGaussianBlur stdDeviation="2.25352" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.117647 0 0 0 0 0.803922 0 0 0 0 0.811765 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_440_12314"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckIcon;
