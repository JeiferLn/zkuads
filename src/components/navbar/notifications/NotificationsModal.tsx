import Icons from "@/components/Icons";
import React from "react";

function NotificationsModal({ handleClose }: { handleClose: () => void }) {
  return (
    <div className="w-full h-full flex justify-center pt-[20%] relative">
      <div
        className="bg-black/50 w-full h-full absolute top-0 left-0"
        onClick={handleClose}
      />

      <div className="w-[95%] h-[60%] bg-[#5E4ACF] rounded-[11px] [box-shadow:5px_5px_11.1px_0px_rgba(9,251,211,0.50)] z-10">
        <div className="w-full h-[15%] bg-[#3C2B99] rounded-t-[11px] relative grid place-content-center">
          <h1 className="h-full flex justify-end items-center text-[7vw]">
            Notifications
          </h1>
          <div
            className="absolute right-0 w-[15vw] h-full flex justify-end items-center"
            onClick={handleClose}
          >
            <Icons name="Close" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationsModal;
