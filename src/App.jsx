import { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import profile from "./assets/profile.jpeg";
import "./App.css";
import Hamburger from "./components/Hamburger";
import logo from "./assets/googlelogo.svg";
import Placeholderbox from "./components/Placeholderbox";
import SideNavbar from "./components/SideNavbar";
function App() {
  const [open, setOpen] = useState(false);

  const Opensidebar = () => {
    console.log("hash");
    setOpen(!open);
  };

  return (
    <dvi className="font-sans overflow-x-hidden ">
      {open ? <SideNavbar openbar={Opensidebar} /> : null}
      <div className=" flex bg-red justify-between px-3 border-b-2 border-[#5f6368]/20  py-2">
        <div className="flex items-center gap-1" onClick={Opensidebar}>
          <Placeholderbox
            content="Main menu"
            styles="py-4 px-3 "
            toolX="10px"
            className="  hover:bg-[#5f6368]/20  rounded-full  "
          >
            <Hamburger />
          </Placeholderbox>

          <div className="flex gap-1 items-center mt-2">
            <img src={logo} alt="google logo" />
            <p className="text-[22px] text-[#5f6368]"> Translate</p>
          </div>
        </div>

        <div>
          <div className="flex gap-0 items-center text-center mt-2">
            <div className="   ">
              <Placeholderbox
                content="Settings"
                styles="py-3 px-3 "
                toolX="30px"
                className="  text-[#5f6368] "
              >
                <IoSettingsOutline className="w-[22px] h-[22px]" />
              </Placeholderbox>
            </div>

            <div>
              <Placeholderbox
                content="Google Apps"
                styles="py-3 px-3 "
                toolX="20px"
              >
                <IoApps className=" w-[22px] h-[22px] text-[#5f6368]" />
              </Placeholderbox>
            </div>

            <div className="pr-2">
              <Placeholderbox
                shouldRender={true}
                email="Hashan.chanaka@gmail.com"
                fullName="hashan Chanaka"
                accountName="Google Account"
              >
                <img
                  src={profile}
                  alt="profile"
                  className=" rounded-full w-[35px] border-2 border-white hover:border-[#5f6368]/10"
                />
              </Placeholderbox>
            </div>
          </div>
        </div>
      </div>
    </dvi>
  );
}

export default App;
