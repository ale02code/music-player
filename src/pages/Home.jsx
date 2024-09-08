import Header from "../components/Header";
import Results from "../components/Results";
import { SearchContextProvider } from "../context/SearchContext";

function Home() {
  return (
    <>
      <SearchContextProvider>
        <Header />
        <Results />
      </SearchContextProvider>
    </>
  );
}

export default Home;
