import SoundUp from "../assets/icons/SoundUp.png";
import menuIcon from "../assets/icons/menu.svg";
import principalIcon from "../assets/icons/home.svg";
import ItemNav from "./ItemNav";

function Navigation() {
  return (
    <aside className="h-dvh w-1/5 bg-black">
      <header className=" h-16 w-full flex justify-start items-center gap-3 pl-2">
        <img className="h-10" src={menuIcon} alt="Menu" />
        <div className="flex items-center gap-2">
          <img className="h-12" src={SoundUp} alt="logo app" />
          <h3 className="text-white text-2xl font-bold">SoundUp!</h3>
        </div>
      </header>
      <section className="w-full ">
        <nav>
          <ItemNav img={principalIcon} text={"Principal"} />
        </nav>
      </section>
      <div></div>
    </aside>
  );
}

export default Navigation;
