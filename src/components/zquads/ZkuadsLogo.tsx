import React from "react";
import { motion } from "framer-motion";

interface ZkuadsLogo {
  className?: string;
  colorZkuads?: string;
  initial?: "hidden" | "visible";
  disable?: boolean;
}

const ZkuadsLogo: React.FC<ZkuadsLogo> = ({
  className,
  colorZkuads,
  initial = "hidden",
  disable
}) => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <motion.svg
      className={`${className} itemZkuadsLogo ${
        colorZkuads ? colorZkuads : ""
      }`}
      viewBox="0 0 110 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!disable && (
        <g filter="url(#filter0_f_440_23639)">
          <path
            d="M15.132 20.062C15.8211 18.4297 16.5119 16.7996 17.2037 15.1712C15.8104 15.3281 14.4178 15.4923 13.0259 15.6653C13.9461 13.5876 14.8688 11.5139 15.793 9.44353C15.7693 7.75809 15.7458 6.07265 15.7214 4.38721C10.8041 4.95799 5.89602 5.63102 1 6.40527C1.02979 7.95258 1.05925 9.49922 1.08887 11.046C3.9912 10.4243 6.89879 9.83861 9.80942 9.28881C8.74994 11.6937 7.69318 14.1031 6.63912 16.5177C4.82791 16.7754 3.01806 17.0482 1.21007 17.3341C1.24054 18.8808 1.26999 20.4274 1.30029 21.9742C2.38803 21.74 3.47696 21.5097 4.56673 21.2858C3.50404 23.733 2.44457 26.185 1.38916 28.6424C1.43232 30.1873 1.47464 31.7319 1.51713 33.2772C6.3688 32.5092 11.2316 31.8428 16.1041 31.2776C16.0811 29.7294 16.0598 28.1814 16.0379 26.6333C13.1921 27.126 10.3504 27.6536 7.51274 28.2149C8.68934 25.5228 9.87069 22.8367 11.0553 20.1562C12.4135 20.1166 13.7724 20.0855 15.132 20.062Z"
            fill="#0F449D"
          />
          <path
            d="M36.5952 29.4402C35.1858 25.973 33.7709 22.5141 32.3529 19.0631C33.246 18.3141 34.0607 17.5857 34.7969 16.877C34.7605 12.1494 34.7241 7.42163 34.6878 2.69336C32.7654 2.81371 30.8445 2.94998 28.925 3.10114C28.9634 7.11017 29.0015 11.1194 29.0406 15.1284C27.4388 16.542 26.048 17.7125 24.8689 18.6318C24.8122 13.5742 24.7558 8.51665 24.7 3.45915C22.7542 3.63553 20.8103 3.82816 18.8672 4.03602C18.984 12.982 19.102 21.9277 19.2189 30.8729C21.1441 30.6671 23.0702 30.4765 24.9982 30.3016C24.9779 28.4532 24.9573 26.6049 24.9361 24.7573C25.6563 24.2297 26.4749 23.6259 27.3929 22.9488C28.387 25.2465 29.3791 27.5492 30.3694 29.8552C32.4438 29.6987 34.5187 29.5605 36.5952 29.4402Z"
            fill="#0F449D"
          />
          <path
            d="M48.6323 24.4309C48.5392 24.4329 48.4471 24.4353 48.3548 24.4375C48.0371 24.4585 47.7404 24.4719 47.4624 24.48C46.0084 24.5196 45.0313 24.4167 44.5278 24.1594C43.971 23.8667 43.6899 23.028 43.6838 21.641C43.6528 15.176 43.6233 8.71112 43.5935 2.24612C41.643 2.31975 39.6925 2.40896 37.7432 2.51476C37.7894 9.42934 37.8352 16.3429 37.8818 23.2575C37.8884 24.3818 38.1697 25.3912 38.7231 26.2866C39.2764 27.1829 40.0761 27.8796 41.1218 28.3825C42.1667 28.8853 43.4212 29.108 44.8859 29.0568C48.0706 28.9472 51.2583 28.8797 54.4456 28.8557C54.4368 19.9039 54.4286 10.9518 54.4207 2C52.4688 2.01557 50.5174 2.0457 48.5662 2.0931C48.5884 9.53886 48.6108 16.9845 48.6323 24.4309Z"
            fill="#0F449D"
          />
          <path
            d="M60.6862 2.83139C59.6401 3.37103 58.8379 4.10482 58.2785 5.02752C57.7192 5.95039 57.4406 6.975 57.4399 8.09947C57.4399 10.8046 57.4392 13.5091 57.4392 16.214C56.723 16.2133 56.0075 16.2155 55.292 16.2186C56.0082 17.7649 56.7244 19.3122 57.4392 20.8614C57.4384 23.523 57.4384 26.1843 57.4377 28.8456C59.3782 28.847 61.3187 28.8644 63.2586 28.8976C63.264 26.0679 63.2699 23.2376 63.276 20.4079C63.283 20.4079 63.2898 20.4079 63.2964 20.4089C64.9305 20.5366 66.5641 20.6759 68.1978 20.826C68.1875 23.5562 68.1775 26.2855 68.1666 29.0156C70.1065 29.0755 72.045 29.1508 73.9833 29.2431C74.036 20.2918 74.0874 11.3412 74.1397 2.3906C70.9251 2.23826 67.7098 2.12992 64.4933 2.06391C63.0015 2.03361 61.7321 2.29209 60.6862 2.83139ZM63.2992 9.35056C63.3018 7.98961 63.59 7.16915 64.162 6.89307C64.6143 6.67708 65.4664 6.58144 66.7156 6.61445C67.1679 6.62663 67.6734 6.65355 68.2315 6.69553C68.2381 6.69553 68.245 6.6962 68.2516 6.6962C68.2396 9.92541 68.2272 13.1549 68.2152 16.3843C66.5718 16.3337 64.928 16.2941 63.285 16.2665C63.2898 13.9612 63.2945 11.6559 63.2992 9.35056Z"
            fill="#0F449D"
          />
          <path
            d="M92.6279 6.78104C92.0821 5.8018 91.2888 4.98676 90.2462 4.3398C89.2035 3.69369 87.9446 3.30657 86.4694 3.18638C83.3739 2.93332 80.2758 2.71987 77.1756 2.54688C77.1144 11.4976 77.0532 20.4472 76.9912 29.3978C80.063 29.5691 83.1331 29.7804 86.2001 30.0305C87.6621 30.1506 88.9146 29.9869 89.9608 29.5332C91.0061 29.0802 91.8111 28.422 92.3752 27.5522C92.9392 26.6834 93.2286 25.6877 93.2433 24.5637C93.3039 19.688 93.3645 14.8123 93.425 9.93644C93.4385 8.81247 93.1733 7.76028 92.6279 6.78104ZM83.0005 7.4561C83.3719 7.47032 83.7111 7.48911 84.0162 7.51196C85.3964 7.61572 86.3174 7.82291 86.779 8.12388C87.3193 8.46835 87.5826 9.3098 87.5692 10.6457C87.5269 14.6862 87.4844 18.7259 87.4426 22.7659C87.428 24.1026 87.1494 24.8969 86.6054 25.1521C86.141 25.3761 85.2244 25.4313 83.8525 25.3285C83.5483 25.3057 83.2125 25.2747 82.8428 25.2354C82.8954 19.309 82.9481 13.3826 83.0005 7.4561Z"
            fill="#0F449D"
          />
          <path
            d="M111 6.04324C108.266 5.62937 105.53 5.24699 102.789 4.89642C101.319 4.7087 100.056 4.83108 99.002 5.25782C97.9468 5.68455 97.1383 6.33151 96.5764 7.1948C96.0152 8.05859 95.7256 9.05273 95.7109 10.1758C95.6858 12.0983 95.6604 14.0212 95.6355 15.9441C98.9524 18.6156 102.259 21.3336 105.552 24.0978C105.55 24.2103 105.548 24.3227 105.547 24.4351C105.529 25.4828 105.438 26.2245 105.273 26.6582C105.107 27.093 104.808 27.3204 104.373 27.3439C103.939 27.3678 103.405 27.3373 102.775 27.2557C102.539 27.2256 102.283 27.1865 102.007 27.1394C101.613 27.0768 101.172 27.0157 100.686 26.9554C100.52 25.3589 100.352 23.7631 100.184 22.1674C98.6454 21.8746 97.1055 21.591 95.5641 21.3185C95.5218 24.5083 95.4793 27.6985 95.4375 30.8883C98.2362 31.1904 101.032 31.5264 103.826 31.8958C105.281 32.0878 106.527 31.9867 107.565 31.5842C108.603 31.1821 109.405 30.5633 109.973 29.7225C110.54 28.8817 110.834 27.9003 110.855 26.7777C110.886 25.0872 110.918 23.3961 110.95 21.7061C107.66 18.9353 104.36 16.21 101.047 13.5318C101.048 13.4443 101.05 13.357 101.05 13.2693C101.053 13.1071 101.059 12.9047 101.07 12.6623C101.079 12.4197 101.09 12.1802 101.1 11.9441C101.11 11.7078 101.124 11.5092 101.139 11.3482C101.194 10.3299 101.474 9.75097 101.98 9.61437C102.485 9.47844 103.36 9.4886 104.601 9.65415C104.866 9.68902 105.156 9.73506 105.473 9.79007C105.512 9.79549 105.553 9.80074 105.591 9.80632C105.56 11.672 105.53 13.5378 105.499 15.4035C107.04 15.7198 108.578 16.0457 110.117 16.382C110.411 12.9355 110.705 9.48945 111 6.04324Z"
            fill="#0F449D"
          />
        </g>
      )}

      <motion.path
        d="M14.131 18.062C14.8201 16.4297 15.5109 14.7996 16.2027 13.1712C14.8095 13.3281 13.4169 13.4923 12.0249 13.6653C12.9451 11.5876 13.8678 9.51389 14.792 7.44353C14.7683 5.75809 14.7448 4.07265 14.7204 2.38721C9.80308 2.95799 4.89504 3.63102 -0.000976562 4.40527C0.0288153 5.95258 0.0582685 7.49922 0.0878911 9.04603C2.99023 8.42429 5.89781 7.83861 8.80844 7.28881C7.74897 9.69366 6.6922 12.1031 5.63815 14.5177C3.82694 14.7754 2.01708 15.0482 0.20909 15.3341C0.239559 16.8808 0.269012 18.4274 0.299312 19.9742C1.38705 19.74 2.47598 19.5097 3.56575 19.2858C2.50306 21.733 1.44359 24.185 0.388179 26.6424C0.431344 28.1873 0.473662 29.7319 0.516149 31.2772C5.36782 30.5092 10.2307 29.8428 15.1032 29.2776C15.0801 27.7294 15.0588 26.1814 15.037 24.6333C12.1912 25.126 9.34943 25.6536 6.51176 26.2149C7.68837 23.5228 8.86972 20.8367 10.0543 18.1562C11.4125 18.1166 12.7714 18.0855 14.131 18.062Z"
        fill="white"
        variants={icon}
        initial={initial}
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M35.5942 27.4402C34.1849 23.973 32.7699 20.5141 31.3519 17.0631C32.245 16.3141 33.0597 15.5857 33.7959 14.877C33.7595 10.1494 33.7231 5.42163 33.6869 0.693359C31.7644 0.813712 29.8436 0.949975 27.924 1.10114C27.9624 5.11017 28.0005 9.11938 28.0396 13.1284C26.4378 14.542 25.0471 15.7125 23.8679 16.6318C23.8112 11.5742 23.7548 6.51665 23.699 1.45915C21.7532 1.63553 19.8093 1.82816 17.8662 2.03602C17.983 10.982 18.101 19.9277 18.218 28.8729C20.1431 28.6671 22.0692 28.4765 23.9972 28.3016C23.9769 26.4532 23.9563 24.6049 23.9351 22.7573C24.6554 22.2297 25.474 21.6259 26.3919 20.9488C27.3861 23.2465 28.3782 25.5492 29.3684 27.8552C31.4428 27.6987 33.5178 27.5605 35.5942 27.4402Z"
        fill="white"
        variants={icon}
        initial={initial}
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M47.6313 22.4309C47.5382 22.4329 47.4461 22.4353 47.3538 22.4375C47.0361 22.4585 46.7394 22.4719 46.4614 22.48C45.0074 22.5196 44.0304 22.4167 43.5268 22.1594C42.97 21.8667 42.6889 21.028 42.6828 19.641C42.6518 13.176 42.6224 6.71112 42.5926 0.246121C40.642 0.319755 38.6915 0.408961 36.7422 0.514756C36.7884 7.42934 36.8343 14.3429 36.8808 21.2575C36.8874 22.3818 37.1688 23.3912 37.7221 24.2866C38.2755 25.1829 39.0751 25.8796 40.1209 26.3825C41.1658 26.8853 42.4202 27.108 43.885 27.0568C47.0696 26.9472 50.2574 26.8797 53.4446 26.8557C53.4358 17.9039 53.4277 8.95177 53.4197 0C51.4678 0.015573 49.5165 0.0457034 47.5653 0.0930996C47.5874 7.53886 47.6098 14.9845 47.6313 22.4309Z"
        fill="white"
        variants={icon}
        initial={initial}
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M59.6852 0.831388C58.6391 1.37103 57.8369 2.10482 57.2775 3.02752C56.7182 3.95039 56.4396 4.975 56.4389 6.09947C56.4389 8.8046 56.4382 11.5091 56.4382 14.214C55.722 14.2133 55.0065 14.2155 54.291 14.2186C55.0072 15.7649 55.7234 17.3122 56.4382 18.8614C56.4374 21.523 56.4374 24.1843 56.4367 26.8456C58.3772 26.847 60.3178 26.8644 62.2576 26.8976C62.263 24.0679 62.269 21.2376 62.2751 18.4079C62.282 18.4079 62.2888 18.4079 62.2954 18.4089C63.9295 18.5366 65.5632 18.6759 67.1968 18.826C67.1865 21.5562 67.1765 24.2855 67.1657 27.0156C69.1055 27.0755 71.044 27.1508 72.9824 27.2431C73.035 18.2918 73.0865 9.3412 73.1388 0.390604C69.9241 0.238259 66.7088 0.129925 63.4923 0.063909C62.0005 0.0336093 60.7311 0.292088 59.6852 0.831388ZM62.2983 7.35056C62.3008 5.98961 62.5891 5.16915 63.161 4.89307C63.6133 4.67708 64.4654 4.58144 65.7147 4.61445C66.167 4.62663 66.6724 4.65355 67.2305 4.69553C67.2371 4.69553 67.244 4.6962 67.2506 4.6962C67.2386 7.92541 67.2263 11.1549 67.2142 14.3843C65.5708 14.3337 63.927 14.2941 62.284 14.2665C62.2888 11.9612 62.2935 9.65587 62.2983 7.35056Z"
        fill="white"
        variants={icon}
        initial={initial}
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M91.6269 4.78104C91.0812 3.8018 90.2878 2.98676 89.2452 2.3398C88.2025 1.69369 86.9436 1.30657 85.4684 1.18638C82.373 0.933323 79.2748 0.719871 76.1746 0.546875C76.1135 9.49763 76.0522 18.4472 75.9902 27.3978C79.062 27.5691 82.1321 27.7804 85.1991 28.0305C86.6611 28.1506 87.9136 27.9869 88.9599 27.5332C90.0051 27.0802 90.8102 26.422 91.3742 25.5522C91.9382 24.6834 92.2276 23.6877 92.2424 22.5637C92.303 17.688 92.3636 12.8123 92.424 7.93644C92.4375 6.81247 92.1723 5.76028 91.6269 4.78104ZM81.9996 5.4561C82.3709 5.47032 82.7102 5.48911 83.0152 5.51196C84.3954 5.61572 85.3164 5.82291 85.778 6.12388C86.3184 6.46835 86.5816 7.3098 86.5682 8.64569C86.5259 12.6862 86.4834 16.7259 86.4416 20.7659C86.427 22.1026 86.1484 22.8969 85.6044 23.1521C85.1401 23.3761 84.2235 23.4313 82.8515 23.3285C82.5473 23.3057 82.2115 23.2747 81.8418 23.2354C81.8944 17.309 81.9471 11.3826 81.9996 5.4561Z"
        fill="white"
        variants={icon}
        initial={initial}
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M111 4.04324C108.266 3.62937 105.53 3.24699 102.789 2.89642C101.319 2.7087 100.056 2.83108 99.002 3.25782C97.9468 3.68455 97.1383 4.33151 96.5764 5.1948C96.0152 6.05859 95.7256 7.05273 95.7109 8.17584C95.6858 10.0983 95.6604 12.0212 95.6355 13.9441C98.9524 16.6156 102.259 19.3336 105.552 22.0978C105.55 22.2103 105.548 22.3227 105.547 22.4351C105.529 23.4828 105.438 24.2245 105.273 24.6582C105.107 25.093 104.808 25.3204 104.373 25.3439C103.939 25.3678 103.405 25.3373 102.775 25.2557C102.539 25.2256 102.283 25.1865 102.007 25.1394C101.613 25.0768 101.172 25.0157 100.686 24.9554C100.52 23.3589 100.352 21.7631 100.184 20.1674C98.6454 19.8746 97.1055 19.591 95.5641 19.3185C95.5218 22.5083 95.4793 25.6985 95.4375 28.8883C98.2362 29.1904 101.032 29.5264 103.826 29.8958C105.281 30.0878 106.527 29.9867 107.565 29.5842C108.603 29.1821 109.405 28.5633 109.973 27.7225C110.54 26.8817 110.834 25.9003 110.855 24.7777C110.886 23.0872 110.918 21.3961 110.95 19.7061C107.66 16.9353 104.36 14.21 101.047 11.5318C101.048 11.4443 101.05 11.357 101.05 11.2693C101.053 11.1071 101.059 10.9047 101.07 10.6623C101.079 10.4197 101.09 10.1802 101.1 9.94406C101.11 9.70776 101.124 9.5092 101.139 9.34822C101.194 8.32988 101.474 7.75097 101.98 7.61437C102.485 7.47844 103.36 7.4886 104.601 7.65415C104.866 7.68902 105.156 7.73506 105.473 7.79007C105.512 7.79549 105.553 7.80074 105.591 7.80632C105.56 9.67204 105.53 11.5378 105.499 13.4035C107.04 13.7198 108.578 14.0457 110.117 14.382C110.411 10.9355 110.705 7.48945 111 4.04324Z"
        fill="white"
        variants={icon}
        initial={initial}
        animate="visible"
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
};

export default ZkuadsLogo;