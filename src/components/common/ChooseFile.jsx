
"use client";

import { FileInput, Label } from "flowbite-react";

export function ChooseFile({value,htmlFor,name}) {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput  color="primery"  name={name} />
    </div>
  );
}
