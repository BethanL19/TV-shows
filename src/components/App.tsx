import Episode from "./Episode";
import "./style.css";
import episodes from "../episodes.json";
import { useState } from "react";

function App() {
    const [typedSearch, setTypedSearch] = useState("");
    const handleSearch = (searchWord: string) => setTypedSearch(searchWord);

    let filteredData;
    if (typedSearch.length > 0) {
        filteredData = episodes.filter(
            (ep) =>
                ep.name.toLowerCase().includes(typedSearch.toLowerCase()) ||
                (ep.summary !== null &&
                    ep.summary
                        .toLowerCase()
                        .includes(typedSearch.toLowerCase()))
        );
    } else {
        filteredData = episodes;
    }

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
