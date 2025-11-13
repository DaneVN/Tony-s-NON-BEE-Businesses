import { NavLink } from "react-router-dom";
import beeIcon from "/bee-icon.png";
function Header() {
  return (
    <header className="h-3/24 sm:h-[20vw] p-4 bg-(--cl-dark-accent) text-(--cl-text-light) flex justify-between items-center fixed top-0 left-0 z-10">
      <NavLink to="/" className="w-1/3">
        <img src={beeIcon} className="object-contain w-1/2" alt="bee logo" />
      </NavLink>
      <h1 className="text-l font-bold">Where you can find your needs</h1>
    </header>
  );
}
export default Header;
