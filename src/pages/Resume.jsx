import myPDF from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 mt-4 mb-4">
      <iframe
        src={myPDF}
        style={{
          width: "800px",
          height: "800px",
        }}
      ></iframe>
    </div>
  );
}
