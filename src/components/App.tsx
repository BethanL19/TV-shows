import { Episode, EpisodeInfo } from "./Episode";
import { search } from "./episodeUtils";
import "./style.css";
import { useEffect, useState } from "react";
import shows from "../shows.json";

let count = 0;

function App() {
    const [typedSearch, setTypedSearch] = useState("");
    const handleSearch = (searchWord: string) => setTypedSearch(searchWord);
    const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);
    const [show, setShow] = useState<any>();

    const handleSelection = (selection: string) => {
        const showSelectionObj = shows.find((show) => show.name === selection);
        setShow(showSelectionObj);
    };

    useEffect(() => {
        const getEpisodes = async () => {
            const response = await fetch(
                `https://api.tvmaze.com/shows/${show.id}/episodes`
            );
            const jsonBody: EpisodeInfo[] = await response.json();
            console.log(count++);

            setEpisodes(jsonBody);
        };
        getEpisodes();
    }, [show]);

    const filteredData = search(typedSearch, episodes);

    const episodesOutput = filteredData.map((eachEp, index) => (
        <Episode key={index} episode={eachEp} />
    ));

    const countOfEps = () => {
        const totalEps: number = episodes.length;
        const displayedEps: number = filteredData.length;
        return "Displaying " + displayedEps + " / " + totalEps + " episodes";
    };

    const sortedShows = shows.sort((a, b) => a.name.localeCompare(b.name));
    const showTitles = sortedShows.map((eachShow, index) => (
        <option key={index}>{eachShow.name}</option>
    ));

    return (
        <>
            <select
                name="shows"
                id="shows-select"
                onChange={(event) => {
                    handleSelection(event.target.value);
                }}
            >
                <option value="">-- Please select a show --</option>
                {showTitles}
            </select>
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
