import { AiFillPlusCircle } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Topbar = ({setShowsidebar,
  showsidebar}) => {
  return (
    <div className=" w-full flex items-center justify-between pr-10">
  {showsidebar === false &&     <div className=" flex items-center gap-3 pl-4">
        <VscThreeBars onClick={()=>setShowsidebar(!showsidebar)} className="w-8 h-8 text-white cursor-pointer "/>
        <Link to="/">
        <img className=" hidden lg:block  cursor-pointer lg:w-48 object-contain lg:ml-3  w-20"  src={logo} alt="" />
        </Link>
      </div>}

        <div className=" h-40"></div>
      <button className=" bg-nr text-white  py-2 px-3 flex items-center  rounded-md gap-1 shadow-lg hover:bg-blue-500">
        <AiFillPlusCircle className=" w-5 h-5"/>
        Connect Wallet
      </button>
    </div>

    
  );
};

export default Topbar;
