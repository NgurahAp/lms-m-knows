import { useState } from "react";
import { FaUpload, FaFileWord, FaFileImage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import SubmitDialog from "../../quiz/components/SubmitDialog";


export const FileUploadForm = () => {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    switch (extension) {
      case "pdf":
        return <img src="/penugasan/pdf.png" className="w-1/3" alt="" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-500 text-4xl" />;
      case "jpg":
      case "jpeg":
      case "png":
        return <FaFileImage className="text-green-500 text-4xl" />;
      default:
        return <FaUpload className="text-gray-500 text-4xl" />;
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(null);
  };

  const handleSubmitClick = () => {
    setShowDialog(true);
  };

  const handleConfirmSubmit = () => {
    setShowDialog(false);
    onSubmit({ description, file });
  };

  const onSubmit = ({
    description,
    file,
  }: {
    description: string;
    file: File | null;
  }) => {
    console.log("Description:", description);
    console.log("File:", file);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleCancelClick = () => {
    setDescription("");
    setFile(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Penyerahan Berkas</h1>
      <div>
        {/* Description Box */}
        <label
          htmlFor="description"
          className="block text-sm pt-3 font-medium text-gray-700"
        >
          Deskripsi
        </label>
        <textarea
          id="description"
          name="description"
          rows={8}
          className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tulis Deskripsi Disini"
        />
        {/* File Box */}
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Unggah Berkas File
          </label>
          <div className="mt-2 border-2 border-dashed border-gray-300 bg-gray-50 py-3 rounded-md">
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".jpg,.png,.pdf,.doc,.docx"
              onClick={(e) => {
                // Reset file input value if needed
                const target = e.target as HTMLInputElement;
                target.value = "";
              }}
            />

            <label
              htmlFor="file"
              className="block text-center h-56 text-gray-500 cursor-pointer"
            >
              {file ? (
                <div className="w-1/5">
                  <div className="flex justify-between mx-3 p-3 border border-gray-200 rounded-t-md bg-white">
                    <p className="font-medium text-gray-700 text-left pr-5 truncate">
                      {file.name}
                    </p>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="text-3xl hover:text-red-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="mx-3 h-36 bg-gray-300">
                    <div className="flex items-center justify-center h-full">
                      {getFileIcon(file.name)}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center h-full">
                  <FaUpload className="flex justify-center items-center w-full text-4xl pb-3" />
                  Klik untuk upload atau drag and drop
                  <p className="mt-1 text-xs text-gray-500">
                    Max. File Size: 2MB
                  </p>
                  <div className="flex justify-center pt-5">
                    <div className="flex gap-2 py-2 px-3 text-sm bg-blue-500 text-white rounded-lg items-center justify-center">
                      <CiSearch />
                      Cari File
                    </div>
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between pt-8">
          <button
            type="button"
            onClick={handleCancelClick}
            className="px-14 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            className="px-14 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            onClick={handleSubmitClick}
            disabled={!description.trim() && !file}
          >
            Kirim
          </button>
        </div>
      </div>
      {showDialog && (
        <SubmitDialog
          onClose={handleCloseDialog}
          onSubmit={handleConfirmSubmit}
        />
      )}
    </div>
  );
};
