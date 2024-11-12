import KittyImg from "../assets/icons/kitty.png";

function Login() {
  return (
    <main className="h-dvh w-screen flex justify-center items-center overflow-hidden relative">
      <section className="w-1/2">
        <img src={KittyImg} alt="" />
      </section>
      <section className="w-1/2 h-full flex justify-center items-center z-10 relative">
        <div className="w-96">
          <header></header>
          <section>
            <form>
              <input type="text" />
              <input type="text" />
            </form>
          </section>
          <footer>
            <div>
              <img src="" alt="google" />
              <img src="" alt="facebook" />
            </div>
          </footer>
        </div>
      </section>

      <div className="-skew-x-12 bg-[#4e5171] h-full w-[60%] absolute -right-20 top-0"></div>
    </main>
  );
}

export default Login;
