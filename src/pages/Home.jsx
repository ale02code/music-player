// import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { SearchContextProvider } from "../context/SearchContext";

function Home() {
  return (
    <>
      <Navigation />
      <SearchContextProvider></SearchContextProvider>
    </>
  );
}

export default Home;
