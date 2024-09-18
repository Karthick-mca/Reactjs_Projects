import { useState } from "react"


const QRcode = () => {
    const [img, setImg] = useState("")
    const [loading, setLoading] = useState(false)
    const [qrData, setqrData] = useState("https://github.com/dashboard")
    const [qrSize, setqrSize] = useState("250")

    async function generateQR(){
        setLoading(true);
        try {
            const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        } catch (error) {
            console.error("Error while generating QR Code", error);
        } finally{
            setLoading(false);
        }
    }
    function downloadQR(){
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link = document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="img 5.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error)=>{
            console.error("Error downloading QR Code", error);
        });
    }

  return (
    <div className="app-container"> 
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please Wait...</p>}
        {img && <img src={img} alt="" className="qr-code-image"/>}
      <div>
        <label htmlFor="dataInput" className="input-label">Data for QR Code:</label>
        <input type="text" value={qrData} id="dataInput" placeholder="Enter Data for QR Code" onChange={(e)=>setqrData(e.target.value)}/>
        <label htmlFor="sizeInput" className="input-label">Image size(e.g.,150):</label>
        <input type="text" value={qrSize} id="sizeInput" placeholder="Enter Image Size" onChange={(e)=>setqrSize(e.target.value)}/>
        <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className="download-button" onClick={downloadQR}>Download QR Code</button>
      </div>
      <p className="footer">Designed by <a href="https://github.com/dashboard">Karthick Rajendran</a></p>
    </div>
  )
}

export default QRcode   
