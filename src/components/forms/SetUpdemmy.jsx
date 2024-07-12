import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import InputLabel from "../common/InputLabel";
import InputField from "../common/InputField";

function SetUpdemmy() {
  return (
    <form className=" gap-4 w-full   p-5">
      <h1 className="text-2xl text-center">Contact information</h1>
      <div className="grid grid-cols-3 gap-3 my-5">
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name"  />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
        <div>
          <div className="mb-2 block">
            <InputLabel label="Company Name" />
          </div>
          <InputField />
        </div>
      </div>

    <div className="flex flex-col justify-end items-end space-y-5 ">
     <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          <Link
            href="#"
            className="text-cyan-600 hover:underline dark:text-cyan-500"
          >
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button className="w-max"  type="submit">Register new account</Button>
    </div>
    </form>
  );
}

export default SetUpdemmy;
