import Episode from "./Episode";
import "./style.css";
import episodes from "../episodes.json";

function App() {
    const episodesOutput = episodes.map((eachEp, index) => (
        <Episode key={index} episode={eachEp} />
    ));
    return <div className="App">{episodesOutput}</div>;
}

export default App;
