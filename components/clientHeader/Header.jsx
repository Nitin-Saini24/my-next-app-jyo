import React from "react";
import { TiMessages } from "react-icons/ti";
import { CiCamera } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";

export default function Header() {
  return (
    <div className="flex justify-between w-1/2">
      <div className="mt-4 mb-2">
        <p className="font-semibold">Walter White</p>
        <p className="text-sm text-gray-500">50.M He/Him</p>
      </div>
      <div className="mt-4 mb-2 flex gap-3 justify-center items-center">
        <span className="text-violet-900 bg-violet-200 rounded-md px-3 py-2">
          <PiPhoneCallLight className="w-5 h-5" />
        </span>
        <span className="text-violet-900 bg-violet-200 rounded-md px-3 py-2">
          <CiCamera className="w-5 h-5" />
        </span>
        <span className="text-violet-900 bg-violet-200 rounded-md px-3 py-2">
          <TiMessages className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}
