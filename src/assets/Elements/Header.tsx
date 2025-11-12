import beeIcon from "/bee-icon.jpg";
function Header() {
  return (
    <header className="h-1/12 p-4 bg-(--cl-dark-accent) text-(--cl-text-light) flex justify-between items-center">
      <img src={beeIcon} className="object-contain w-1/4" alt="bee logo" />
      <h1 className="text-3xl font-bold">Tony NonBEE</h1>
    </header>
  );
}
export default Header;
