import SoundUp from "../assets/icons/SoundUp.png";
import menuIcon from "../assets/icons/menu.svg";
import principalIcon from "../assets/icons/home.svg";
import compassIcon from "../assets/icons/compass.svg";
import bookshelfIcon from "../assets/icons/bookshelf.svg";
import ItemNav from "./ItemNav";
import PreviewPlaylist from "./PreviewPlaylist";
import additionIcon from "../assets/icons/addition.svg";

import { useState } from "react";

function Navigation() {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <aside
      className={`h-dvh w-${
        menu ? "60" : "20"
      } bg-black px-3 capitalize flex flex-col space-y-2`}
    >
      <header
        className={`${
          menu ? "justify-start pl-2" : "justify-center"
        } h-16 w-full flex  items-center gap-3`}
      >
        <img
          className="h-9 hover:cursor-pointer"
          draggable="false"
          src={menuIcon}
          alt="Menu"
          onClick={handleMenu}
        />
        {menu && (
          <div>
            <a
              className="flex items-center space-x-2 hover:cursor-pointer"
              href="https://"
            >
              <img className="h-10" src={SoundUp} alt="logo app" />
              <h3 className="text-white text-xl font-bold">SoundUp!</h3>
            </a>
          </div>
        )}
      </header>
      <section className="w-full">
        <nav className="w-full">
          <ItemNav img={principalIcon} text={"Principal"} menu={menu} />
          <ItemNav img={compassIcon} text={"Descubrir"} menu={menu} />
          <ItemNav img={bookshelfIcon} text={"Guardados"} menu={menu} />
        </nav>
      </section>
      {menu ? (
        <>
          <hr />
          <div className="w-full">
            <button className="h-10 bg-white text-neutral-700 w-full font-semibold rounded-lg active:bg-neutral-900 active:border-2 active:border-white active:text-white">
              Crear playlist
            </button>
          </div>
          <hr />
          <section className="w-full">
            <PreviewPlaylist
              name={"Tus me gusta"}
              author={"Playlist autogenerada"}
            />
          </section>
        </>
      ) : (
        <button>
          <img src={additionIcon} alt="add playlist button" />
        </button>
      )}
    </aside>
  );
}

export default Navigation;
