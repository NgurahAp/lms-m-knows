import { FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const handleDownload = () => {
    // Path to your PDF file
    const pdfUrl = "/path/to/your/file.pdf";

    // Create a temporary link to download the file
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Materi_Pendahuluan.pdf"); // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center text-blue-500 font-bold py-2 px-4"
    >
      <FaDownload />
    </button>
  );
};

export default DownloadButton;
