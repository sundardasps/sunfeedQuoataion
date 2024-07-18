"use client";

import { useState } from "react";
import { FileInput, Label } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";

export function ChooseFile({
  value,
  htmlFor,
  name,
  handleChange,
  setFieldValue,
  fileType,
  alertType,
  disabled
}) {
  const [fileName, setFileName] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!fileType.includes(file.type)) {
      toast.error(
        `File type '${file.type}' is not allowed. Please select a ${alertType}  file.`
      );
      return;
    }
    if (file) {
      setFileName(file.name);
      setFieldValue(name, [file]);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="h-auto">
      <div className="relative text-center rounded-md border">
        <label
          className="flex cursor-pointer text-xs sm:text-sm justify-center rounded-l-md items-center w-[26%] bg-[#65AC32] h-full text-white absolute"
          htmlFor={htmlFor}
        >
          Choose file
        </label>
        {fileName ? (
          <p className="absolute top-[30%] text-xs left-[29%] ">{fileName}</p>
        ) : (
          <p className="absolute top-[20%]  left-[30%] ">No file chosen</p>
        )}
        <input
          id={htmlFor}
          type="file"
          name={name}
          onChange={handleFileChange}
          className="rounded-md opacity-0 w-full h-full cursor-pointer"
          style={{ position: "relative", zIndex: 1 }}
          disabled={disabled}
        />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
