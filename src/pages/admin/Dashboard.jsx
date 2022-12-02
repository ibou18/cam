import React from "react";
import { QRCodeSVG } from "qrcode.react";

export default function Dashboard() {
  return (
    <div className="p-10">
      test
      <p></p>
      <QRCodeSVG value="https://reactjs.org/" />
    </div>
  );
}
