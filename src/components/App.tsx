import { MyComponent } from "./MyComponent";
import "./style.css";
import episodes from "../episodes.json";

function App() {
    console.log(`Imported ${episodes.length} episode(s)`);
    console.log(`First episode's name is ${episodes[0].name}`);

    return (
        <div className="App">
            <MyComponent />

            {"Hello World"}
        </div>
    );
}

export default App;
