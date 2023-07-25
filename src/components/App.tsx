import { Episode, EpisodeInfo } from "./Episode";
import { search } from "./episodeUtils";
import "./style.css";
import { useEffect, useState } from "react";

let count = 0;

function App() {
    const [typedSearch, setTypedSearch] = useState("");
    const handleSearch = (searchWord: string) => setTypedSearch(searchWord);
    const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);

    useEffect(() => {
        const getEpisodes = async () => {
            const response = await fetch(
                "https://api.tvmaze.com/shows/82/episodes"
            );
            const jsonBody: EpisodeInfo[] = await response.json();
            console.log(count++);

            setEpisodes(jsonBody);
        };
        getEpisodes();
    }, []);

    const filteredData = search(typedSearch, episodes);

    const episodesOutput = filteredData.map((eachEp, index) => (
        <Episode key={index} episode={eachEp} />
    ));

    const countOfEps = () => {
        const totalEps: number = episodes.length;
        const displayedEps: number = filteredData.length;
        return "Displaying " + displayedEps + " / " + totalEps + " episodes";
    };

    return (
        <>
            <input
                className="searchBar"
                placeholder="Search..."
                value={typedSearch}
                onChange={(event) => {
                    handleSearch(event.target.value);
                }}
            />
            <div className="countOfEps">{countOfEps()}</div>
            <div className="App">{episodesOutput}</div>;
        </>
    );
}

export default App;
