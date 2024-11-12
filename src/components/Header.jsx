import Search from "./Search";
import Title from "./Title";

function Header() {
  return (
    <header className="bg-black text-white p-5">
      <Title />
      <Search />
    </header>
  );
}

export default Header;
