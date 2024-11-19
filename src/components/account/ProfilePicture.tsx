import Cookie from "js-cookie";
import Image from "next/image";
import React from "react";

interface ProfilePictureProps {
  className?: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  className,
}) => {
  const zkuad = Number(Cookie.get("team_id"));

  const zkuadInformation = {
    bgborderProfile: "",
  }

  switch (zkuad) {
    case 1:
      zkuadInformation.bgborderProfile = "bg-[#1956BE]";
      break;
    case 2:
      zkuadInformation.bgborderProfile = "bg-[#B67C00]";
      break;
    case 3:
      zkuadInformation.bgborderProfile = "bg-[#EF0F19]";
      break;
    default:
      break;
  }

  return (
    <div
      className={`relative inline-grid items-center ${className} select-none`}
    >
      <div className="relative inline-block">
        <div>
          <div
            className={`${className} absolute [clip-path:polygon(50%_0%,95%_25%,95%_75%,50%_100%,5%_75%,5%_25%)] ${zkuadInformation.bgborderProfile} flex items-center justify-center`}
          >
            <div
              className={` w-full h-full p-1 [clip-path:polygon(50%_3%,93%_26%,93%_73%,50%_97%,7%_74%,7%_26%)] flex items-center justify-center bg-white`}
            >
              <Image
                src="/default-pfp.jpg"
                width={100}
                height={100}
                alt="logo-zkuad"
                className={`w-full h-full`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
