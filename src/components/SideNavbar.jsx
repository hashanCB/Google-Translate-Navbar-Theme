import { useRef, useEffect } from "react";
import { useState } from "react";
import logo from "../assets/googlelogo.svg";
const SideNavbar = ({ openbar }) => {
  const [nav, setNav] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNav(false);
        openbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <div
        className={
          nav
            ? " fixed  top-0 left-0 bottom-0 lg:left-0 p-0 w-[275px]  text-center bg-white shadow-lg  ease-in-out duration-1000 z-10 "
            : "ease-in-out w-[275px] duration-1000 fixed top-0 bottom-0 left-[-100%] z-10"
        }
      >
        <div className="flex flex-col w-full mt-0 text-right p pt-5">
          <div className="flex w-full justify-start gap-1 items-center  ml-5 pb-5">
            <img src={logo} alt="google logo" />
            <p className="text-[22px] text-[#5f6368]"> Translate</p>
          </div>
          <div className=" text-start text-[13px] text-[#5f6368] justify-start flex flex-col gap-4  mt-5">
            <div className=" border-b-2   border-b-[#f5f5f5]/98 pb-5 underline h-[48px] flex items-center hover:bg-[#f5f5f5] pl-8">
              About Google Translate
            </div>

            <div className="  h-[48px] flex items-center hover:bg-[#f5f5f5] pl-8">
              Privacy & Terms
            </div>

            <div className="  h-[48px] flex items-center hover:bg-[#f5f5f5] pl-8">
              Help
            </div>

            <div className="   h-[48px] flex items-center hover:bg-[#f5f5f5] pl-8">
              Send feedback
            </div>

            <div className="  h-[48px] flex items-center hover:bg-[#f5f5f5] pl-8">
              About Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
