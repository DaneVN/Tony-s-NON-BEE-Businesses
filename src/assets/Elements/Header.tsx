import { NavLink } from "react-router-dom";
import beeIcon from "/bee-icon.png";
function Header() {
  return (
    <header
      className="h-3/24 w-full bg-(--cl-dark-accent) text-(--cl-text-light) flex justify-between 
    items-center fixed top-0 left-0 z-90"
    >
      <NavLink to="/" className="h-full flex items-center">
        <img src={beeIcon} className="object-contain h-full" alt="bee logo" />
      </NavLink>
      <h1 className="text-l font-bold m-4">Where you can find your needs</h1>
    </header>
  );
}
export default Header;
