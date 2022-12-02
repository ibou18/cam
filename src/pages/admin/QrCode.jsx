import { useRef, useState } from "react";
import { QrReader } from "react-qr-reader";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

// const WebcamCapture = () => (
//   <Webcam
//     audio={false}
//     height={720}
//     screenshotFormat="image/jpeg"
//     width={1280}
//     videoConstraints={videoConstraints}
//   >
//     {({ getScreenshot }) => (
//       <button
//         onClick={() => {
//           const imageSrc = getScreenshot();
//         }}
//       >
//         Capture photo
//       </button>
//     )}
//   </Webcam>
// );

const QrCode = () => {
  const [code, setCode] = useState(null);
  const [showDialog, setDiaglog] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [precScan, setPrecScan] = useState("");
  const [selected, setSelected] = useState("environment");
  const [activeScan, setActiveScan] = useState(false);

  let datas = ["https://labo.fnac.com/", "www.laguiplus.com"];

  const handleScan = (scanData) => {
    if (scanData && scanData) {
      // window.location.href = scanData;
      console.log(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const videoRef = useRef(null);
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 700 } })
      .then((stream) => {
        let video = videoRef.current;
        console.log("stream", stream);
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  return (
    <div className="px-5">
      {/* <WebcamCapture /> */}
      {/* <video ref={videoRef} className="mx-auto mt-10" />
      <canvas /> */}

      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi
        consectetur recusandae officiis illo officia praesentium ducimus sunt
        tempora eligendi? Dolore ipsum assumenda possimus deleniti soluta nisi
        rerum repudiandae quaerat.
      </p>

      <select onChange={(e) => setSelected(e.target.value)}>
        <option value={"environment"}>Cámara trasera</option>
        <option value={"user"}>Cámara delantera</option>
      </select>
      <button
        className="bg-teal-500 rounded-lg px-5 py-2 mt-5 ml-10"
        onClick={() => {
          getVideo();
          setActiveScan(!activeScan);
        }}
      >
        {" "}
        Activer le Scan
      </button>
      {!showDialog && !processing && activeScan && (
        <QrReader
          facingMode={"environment"}
          delay={500}
          onScan={handleScan}
          className="qr-reader"
        />
      )}
    </div>
  );
};

export default QrCode;
