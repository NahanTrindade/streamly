import { Logo } from "./logo";
import Search from "./search";
import Actions from "./actions";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[50] bg-navbar px-4 gap-4 lg:gap-0">
      <Logo />
      <Search />
      <Actions />
    </div>
  );
};

export default Navbar;
