import React from "react";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ReloadOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { Button, QRCode, Space, Spin } from "antd";
import type { QRCodeProps } from "antd";

const customStatusRender: QRCodeProps["statusRender"] = (info) => {
  switch (info.status) {
    case "expired":
      return (
        <div className="absolute top-[35%] -translate-y-1/2 text-[6vw]">
          <CloseCircleFilled style={{ color: "red" }} /> 
          <p className="text-[4.5vw]">{info.locale?.expired}</p>
        </div>
      );
    case "loading":
      return (
        <Space direction="vertical" className="rounded-3xl">
          <Spin />
          <p className="text-[4.5vw]">Loading...</p>
        </Space>
      );
      case "cancelled":
      return (
        <div className="absolute top-[35%] -translate-y-1/2 text-[5vw]">
          <StopOutlined style={{ color: "red" }} />
          <p>{" Cancelled"}</p>
        </div>
      );
    default:
      return null;
  }
};

interface WalletQRProps {
  valueHref: string;
  status: "active" | "expired" | "loading" | "cancelled";
  refresh: () => void;
}

const WalletQR: React.FC<WalletQRProps> = ({ valueHref, status, refresh }) => {
  return (
    <div className="h-[95%] mx-auto my-auto -scale-95 flex flex-col items-center relative">
      <QRCode
        className="rotate-180"
        value={valueHref}
        status={status}
        onRefresh={refresh}
        statusRender={customStatusRender}
        errorLevel="H"
        icon="/qr-icon.png"
      />
      {(status === "expired" || status === "cancelled") && (
        <Button
          type="link"
          onClick={refresh}
          className='mt-6 absolute top-[10%] left-1/2 translate-x-[calc(-50%)] translate-y-[calc(-20%)] z-10 text-[4vw] rotate-180'
        >
          <ReloadOutlined /> Refresh
        </Button>
      )} 
    </div>
  );
};

export default WalletQR;
