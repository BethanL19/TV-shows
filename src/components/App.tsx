import { Episode, EpisodeInfo } from "./Episode";
import {display, seasonEpStructure } from "./episodeUtils";
import "./style.css";
import { useEffect, useState } from "react";
import showsRaw from "../shows.json";
import { ShowInfo } from "../showsInfo";

const shows: ShowInfo[] = showsRaw

function App() {
    const [typedSearch, setTypedSearch] = useState("");
    const handleSearch = (searchWord: string) => setTypedSearch(searchWord);
    const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);
    const [show, setShow] = useState<ShowInfo>();
    const [selectedEpisode, setSelectedEpisode] = useState<
        EpisodeInfo | undefined
    >();

    const handleShowSelection = (selection: string) => {
        const showSelectionObj = shows.find((show) => show.name === selection);
        setShow(showSelectionObj);
    };

    const handleEpisodeSelection = (selection: string) => {
        const episodeSelectionObj = episodes.find(
            (episode) => `${seasonEpStructure(episode.season, episode.number)} - ${episode.name}` === selection
        );
        setSelectedEpisode(episodeSelectionObj);
    };

    useEffect(() => {
        if (show){
        const getEpisodes = async () => {
            const response = await fetch(
                `https://api.tvmaze.com/shows/${show.id}/episodes`
            );
            const jsonBody: EpisodeInfo[] = await response.json();
            setEpisodes(jsonBody);
        };
        getEpisodes();
    }}, [show]);

    const filteredData = display(typedSearch, episodes, selectedEpisode);

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

    
    const episodeTitles = episodes.map((eachEpisode, index) => (
        <option key={index}>{`${seasonEpStructure(eachEpisode.season, eachEpisode.number)} - ${eachEpisode.name}`}</option>
    ));

    return (
        <>
            <select
                name="shows"
                id="shows-select"
                onChange={(event) => {
                    handleShowSelection(event.target.value);
                }}
            >
                <option value="">-- Please select a show --</option>
                {showTitles}
            </select>
            <select
                name="episodes"
                id="episodes-select"
                onChange={(event) => {
                    handleEpisodeSelection(event.target.value);
                }}
            >
                <option value="">-- Please select an episode --</option>
                {episodeTitles}
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
