import { useRef, useState } from "react";
import { logo, upload } from "../../assets";
import toast, { Toaster } from "react-hot-toast";

function FileUploade({
  field,
  setFile,
  storedFile,
  allowedFileTypes,
  setFieldValue,
  alertType,
  disabled
}) {
  const [isDragging, setDraging] = useState(null);
  const onSelectRef = useRef(null);

  const handleSelectFile = (event) => {
    const selectedFiles = event.target.files;
    let totalFileSize = 0;

    if (!selectedFiles) return;
    Array.from(selectedFiles).forEach((file) => {
      const fileSizeInMb = file.size / (1024 * 1024);
      if (totalFileSize + fileSizeInMb > 30) {
        toast.error(
          `Adding file '${file.name}' exceeds the total size limit of 30 MB. Please select fewer files.`
        );
        return;
      }
      if (!allowedFileTypes.includes(file.type)) {
        toast.error(
          `File type '${file.type}' is not allowed. Please select a valid ${alertType}  file.`
        );
        return;
      }

      if (storedFile.some((storedFile) => storedFile.name === file.name)) {
        toast.error(
          `File '${file.name}' is already added. Please select a different file.`
        );
        return;
      }

      totalFileSize += fileSizeInMb;
      console.log(totalFileSize);
      setFile((prevFiles) => {
        const updatedFiles = [...prevFiles, file];
        setFieldValue(field, updatedFiles);
        return updatedFiles;
      });
    });
  };

  const handle = () => {
    onSelectRef.current.click();
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setDraging(true);
    event.dataTransfer.dropEffect = "copy";
  };

  const onDragleave = (event) => {
    event.preventDefault();
    setDraging(false);
  };

  const onDrop = (event) => {
    event.preventDefault();
    setDraging(false);
    const selectedFile = event.dataTransfer.files[0];

    let totalFileSize = 0;

    if (!selectedFile) return;

    const fileSizeInMb = selectedFile.size / (1024 * 1024);
    if (totalFileSize + fileSizeInMb > 30) {
      toast.error(
        `Adding file '${selectedFile.name}' exceeds the total size limit of 30 MB. Please select fewer files.`
      );
      return;
    }
    if (!allowedFileTypes.includes(selectedFile.type)) {
      toast.error(
        `File type '${selectedFile.type}' is not allowed. Please select a valid image file.`
      );
      return;
    }
    if (
      storedFile.some((storedFile) => storedFile.name === selectedFile.name)
    ) {
      toast.error(
        `File '${file.name}' is already added. Please select a different file.`
      );
      return;
    }

    totalFileSize += fileSizeInMb;
    setFile((prevFiles) => {
      const updatedFiles = [...prevFiles, selectedFile];
      setFieldValue(field, updatedFiles);
      return updatedFiles;
    });
  };

  return (
    <>
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragleave}
        onDrop={onDrop}
        className="flex justify-center items-center w-full outline-dashed rounded-md outline-slate-300  hover:bg-slate-100  group"
      >
        <div className="flex flex-col justify-center items-center text-center m-5 sm:m-10">
          <img
            src={upload}
            className="w-6 sm:w-10 my-2  group-hover:scale-105 transition-all"
            alt="upload"
          />
          <h4
            className="text-sm text-slate-500 sm:text-base cursor-pointer hover:text-blue-400  transition-all"
            onClick={handle}
          >
            {isDragging ? (
              <span>Drop here</span>
            ) : (
              <span>Click to upload or drag and drop</span>
            )}
          </h4>
          <p className="text-[0.6rem] text-slate-500 sm:text-sm group-hover:text-black transition-all">
            Taille maximale de fichier : 30MB
          </p>
          <input
            type="file"
            multiple
            className="hidden"
            name={name}
            ref={onSelectRef}
            onSelect={handleSelectFile}
            onChange={handleSelectFile}
            disabled={disabled}
          />
        </div>
      </div>
      {storedFile && (
        <p className="text-center ">
          file: &nbsp;{" "}
          <span className="text-xs font-bold">
            {storedFile.map((file) => file.name)}
          </span>
        </p>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default FileUploade;
