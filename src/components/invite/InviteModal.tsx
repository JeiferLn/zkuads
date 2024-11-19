import React from "react";
import copy from "clipboard-copy";
import Icons from "../Icons";

function InviteModal({ onClose }: { onClose: () => void }) {
  const handleCopyClick = () => {
    const input = document.getElementById("invitelink") as HTMLInputElement;
    copy(input.value);
  };

  return (
    <div
      className="w-[90%] h-[30%] mx-auto mt-[25vh]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative w-full h-[25%] bg-[#3C2B99] rounded-t-lg grid place-content-center z-10">
        <h1 className="text-[7vw] [-webkit-text-stroke-width:0.78px] [-webkit-text-stroke-color:#000]">
          Invite Friend
        </h1>
        <div
          className="absolute top-1/2 right-[1%] -translate-y-1/2 w-12"
          onClick={onClose}
        >
          <Icons name="Close" />
        </div>
      </div>
      <div className="w-full h-[75%] bg-[#5E4ACF] rounded-b-lg px-[5%] pt-[5%] text-center">
        <h2 className="mb-2 text-start">Copy the link</h2>
        <div className="relative w-full h-[30%] bg-[#3B1578] border-[1.65px] border-[#09FBD3CC] rounded-xl flex items-center">
          <input
            type="text"
            id="invitelink"
            value="zkuads.com/invitefriend"
            disabled
            className="w-[90%] bg-transparent outline-none pl-[5%] text-[5vw]"
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 right-[4%] w-5"
            onClick={handleCopyClick}
          >
            <Icons name="Copy" />
          </div>
        </div>
        <button
          type="button"
          className="w-[60%] h-[23%] bg-[#09FBD3] rounded-full text-[5vw] mt-[5%] [box-shadow:0px_3.083px_3.083px_0px_rgba(0,0,0,0.25)] [text-shadow:0px_1.542px_2.467px_rgba(0,0,0,0.50)]"
          onClick={() => {
            handleCopyClick();
            onClose();
          }}
        >
          Invite
        </button>
      </div>
    </div>
  );
}

export default InviteModal;
