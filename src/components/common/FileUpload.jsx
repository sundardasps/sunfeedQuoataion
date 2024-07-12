import { useRef, useState } from "react";
import { upload } from "../../assets";




function FileUploade({name,setFieldValue}) {
  const [file, setFile] = useState();
  const [isDragging, setDraging] = useState(null);
  const onSelectRef = useRef(null);



  const handleSelectFile = (event) => {
    const file = event.target.files[0];
    if (file.length === 0) return;
    setFile({ name: file.name, url: URL.createObjectURL(file) });
    setFieldValue("file", file);
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
    setFile();
    const file = event.dataTransfer.files[0];
    console.log(file);
    setFile({ name: file.name, url: URL.createObjectURL(file) });
    setFieldValue("file", file);
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
            className="hidden"
            name={name}
            ref={onSelectRef}
            onSelect={handleSelectFile}
            onChange={handleSelectFile}
          />
        </div>
      </div>
      {file && (
        <p className="text-center ">
          file: &nbsp; <span>{file.name}</span>
        </p>
      )}
     </>

  );
}

export default FileUploade;
