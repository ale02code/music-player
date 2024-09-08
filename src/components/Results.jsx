import { useContext, useEffect } from "react";
import { FetchingDataContext } from "../context/FetchingDataContext";
import NoFound from "./NoFound";
import PlayIcon from "../assets/icons/play.svg";

function Results() {
  const { fetching, setFetching } = useContext(FetchingDataContext);

  useEffect(() => {
    const pullData = async () => {
      try {
        const response = await fetch("/api/search?q=corazon+de+piedra");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const showData = await setFetching(data);
        console.log(fetching);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    pullData();
  }, [setFetching]);

  return (
    // bg-neutral-900
    <section className="w-full">
      {fetching && fetching.data ? (
        <>
          <section className="flex justify-center items-start flex-col gap-5 py-5 mx-auto w-[90%] overflow-hidden">
            {fetching?.data.map((song) => (
              <div
                key={song.id}
                className="w-full flex justify-center items-center gap-5 h-20 overflow-hidden"
              >
                <img src={song.album.cover_medium} alt="" className="h-20" />
                <div className="w-9/12 flex justify-between items-normal">
                  <div className="flex flex-col justify-between items-normal w-9/12">
                    <p className="font-semibold text-xl">{song.title}</p>
                    <b className="font-bold text-lg">{song.artist.name}</b>
                  </div>
                  <div>
                    <img
                      src={PlayIcon}
                      alt="play Icon"
                      className="h-full w-14"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>
        </>
      ) : (
        <NoFound />
      )}
    </section>
  );
}

export default Results;
