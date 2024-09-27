import { RiMenuUnfold2Fill } from "react-icons/ri";
import logo from "../../../../public/logo-removebg-preview.png";

const SideNavbar = () => {
  return (
    <div className="p-4 flex items-center justify-between bg-[#FFFFFF]">
      <img className="w-[62px]" src={logo} alt="nav_logo" />
      <RiMenuUnfold2Fill className="text-2xl"/>
    </div>
  );
};

export default SideNavbar;
