import HamburgerIcon from "./HamburgerIcon";

const Header = () => {
  return (
    <header className="h-header-mobile flex justify-between items-center">
      <h1 className="text-white text-3xl font-Antonio">The Planets</h1>
      <HamburgerIcon />
    </header>
  )
}; 

export default Header;
