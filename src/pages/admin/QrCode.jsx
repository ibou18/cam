import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrCode = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
      setMessage("Scan Ok");
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div className="mx-auto mt-10 p-5 text-center grid gap-y-2">
      <h1 className="text-center">Scan de billet</h1>
      <h2>
        Last Scan:
        {selected}
      </h2>

      <button
        className="bg-blue-500 text-white px-2 w-36 mx-auto rounded-xl py-1"
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>

      <h1> {message} </h1>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Caméra Arrière</option>
            <option value={"user"}>Caméra Avant</option>
          </select>
          <QrReader
            facingMode={"environment"}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default QrCode;
