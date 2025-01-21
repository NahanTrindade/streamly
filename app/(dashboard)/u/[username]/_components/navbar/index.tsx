import { Logo } from "./logo";
import Actions from "./actions";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[50px] bg-navbar px-4 gap-4 lg:gap-0">
      <Logo />
      <Actions />
    </div>
  );
};

export default Navbar;
