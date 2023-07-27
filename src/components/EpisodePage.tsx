import { Episode, EpisodeInfo } from "./Episode";
import { display, seasonEpStructure } from "./episodeUtils";
import { useEffect, useState } from "react";
import { ShowInfo } from "../showsInfo";

interface EpisodePageProps {
    show: ShowInfo;
    displayShowPage: (display: boolean) => void;
}

function EpisodePage(props: EpisodePageProps) {
    const [typedSearch, setTypedSearch] = useState("");
    const handleSearch = (searchWord: string) => setTypedSearch(searchWord);
    const [episodes, setEpisodes] = useState<EpisodeInfo[]>([]);
    const [selectedEpisode, setSelectedEpisode] = useState<
        EpisodeInfo | undefined
    >();

    const handleBackToShowsPage = () => {
        props.displayShowPage(true);
    };

    const handleEpisodeSelection = (selection: string) => {
        const episodeSelectionObj = episodes.find(
            (episode) =>
                `${seasonEpStructure(episode.season, episode.number)} - ${
                    episode.name
                }` === selection
        );
        setSelectedEpisode(episodeSelectionObj);
    };

    useEffect(() => {
        if (props.show) {
            const getEpisodes = async () => {
                const response = await fetch(
                    `https://api.tvmaze.com/shows/${props.show.id}/episodes`
                );
                const jsonBody: EpisodeInfo[] = await response.json();
                setEpisodes(jsonBody);
            };
            getEpisodes();
        }
    }, [props.show]);

    const filteredData = display(typedSearch, episodes, selectedEpisode);

    const episodesOutput = filteredData.map((eachEp, index) => (
        <Episode key={index} episode={eachEp} />
    ));

    const countOfEps = () => {
        const totalEps: number = episodes.length;
        const displayedEps: number = filteredData.length;
        return "Displaying " + displayedEps + " / " + totalEps + " episodes";
    };

    const episodeTitles = episodes.map((eachEpisode, index) => (
        <option key={index}>{`${seasonEpStructure(
            eachEpisode.season,
            eachEpisode.number
        )} - ${eachEpisode.name}`}</option>
    ));

    return (
        <>
            <button className="backToShows" onClick={handleBackToShowsPage}>
                Back to Shows
            </button>
            <select
                className="episodesDropdown"
                id="episodes-select"
                onChange={(event) => {
                    handleEpisodeSelection(event.target.value);
                }}
            >
                <option value="">-- All episodes --</option>
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
            <h3 className="ShowTitle">{props.show.name} </h3>
            <div className="EpisodePage">{episodesOutput}</div>;
        </>
    );
}

export default EpisodePage;
