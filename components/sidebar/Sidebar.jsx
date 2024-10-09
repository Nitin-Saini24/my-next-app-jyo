"use client";
// import { button } from "shadcn-ui";
import { TbSmartHome } from "react-icons/tb";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { TiMessages } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const pathname = usePathname();
  const isActive = pathname;
  return (
    <div className="bg-white h-screen p-4  absolute left-0 top-0 z-[9999] flex flex-col items-center">
      <nav
        className="border h-[100%] inline-block
       rounded-full w-16  bg-gray-100 shadow-lg overflow-y-auto no-scrollbar"
      >
        <aside className="flex-col flex items-center py-3 justify-between h-full ">
          <div className="flex-col flex items-center ">
            <span
              className={
                isActive === "/dashboard"
                  ? "bg-white p-1 rounded-lg my-3 shadow-md"
                  : "my-3"
              }
            >
              <Link href="dashboard">
                <TbSmartHome
                  className={`md:w-6 md:h-6  ${
                    isActive === "/dashboard"
                      ? "text-violet-400"
                      : "text-gray-400"
                  }  `}
                />
              </Link>
            </span>
            <span
              className={
                isActive === "/clients"
                  ? "bg-white p-1 rounded-lg my-3 shadow-md"
                  : "my-3"
              }
            >
              <Link href="clients">
                <AiOutlineUserSwitch
                  className={`md:w-6 md:h-6  ${
                    isActive === "/clients"
                      ? "text-violet-400"
                      : "text-gray-400"
                  }  `}
                />
              </Link>
            </span>
            <span
              className={
                isActive === "/messages"
                  ? "bg-white p-1 rounded-lg my-3 shadow-md"
                  : "my-3"
              }
            >
              <Link href="messages">
                <TiMessages
                  className={`md:w-6 md:h-6  ${
                    isActive === "/messages"
                      ? "text-violet-400"
                      : "text-gray-400"
                  }  `}
                />
              </Link>
            </span>
          </div>
          <div className="flex-col flex items-center">
            <span className=" my-3">
              <AiOutlineUserSwitch className="  md:w-5 md:h-5 text-gray-400" />
            </span>
            <span className=" my-3  ">
              <TiMessages className=" md:w-5 md:h-5 text-gray-400" />
            </span>
            <span className="h-10 w-10 rounded-full">
              {/* <Image src={user01} alt="Dashboard Icon" /> */}
            </span>
          </div>
        </aside>
      </nav>
    </div>
  );
};
