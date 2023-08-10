import { useState } from "react";
import shows from "../shows.json";
import { Show } from "./Show";
import { displayShow } from "./showUtls";
import { ShowInfo } from "../showsInfo";

// recieve shows state from app
// app will handle show selection (sending state to shows & ep pages)

// onClick change show state (pass handle click to Show component)
// css

interface ShowsPageProps {
    clickedShow: (selection: ShowInfo) => void;
    displayShowPage: (display: boolean) => void;
}

export function ShowsPage(props: ShowsPageProps): JSX.Element {
    const [typedSearch, setTypedSearch] = useState("");
    const [dropdownShow, setDropdownShow] = useState<ShowInfo>();

    const handleSearch = (searchWord: string) => setTypedSearch(searchWord);

    const handleShowSelection = (selection: string) => {
        const showSelectionObj = shows.find((show) => show.name === selection);
        setDropdownShow(showSelectionObj);
    };
    const handleShowClicked = (show: ShowInfo) => {
        props.clickedShow(show);
        props.displayShowPage(false);
    };

    const sortedShows = shows.sort((a, b) => a.name.localeCompare(b.name));
    const filteredData = displayShow(typedSearch, sortedShows, dropdownShow);

    const countOfShows = () => {
        const displayedShows: number = filteredData.length;
        return "Displaying " + displayedShows + " shows";
    };

    const showTitles = sortedShows.map((eachShow, index) => (
        <option key={index}>{eachShow.name}</option>
    ));
    const showsArray = filteredData.map((show, index) => (
        <Show key={index} show={show} click={() => handleShowClicked(show)} />
    ));

    return (
        <div className="ShowPage">
            <input
                className="searchBar"
                placeholder="Search..."
                value={typedSearch}
                onChange={(event) => {
                    handleSearch(event.target.value);
                }}
            />
            <div className="countOfShows">{countOfShows()}</div>
            <select
                className="showsDropdown"
                id="shows-select"
                onChange={(event) => {
                    handleShowSelection(event.target.value);
                }}
            >
                <option value="">-- All shows --</option>
                {showTitles}
            </select>
            <div className="ShowGrid">{showsArray}</div>
        </div>
    );
}
