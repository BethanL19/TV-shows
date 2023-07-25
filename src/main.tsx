import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <div className="footer">
            Source: <a href="TVMaze.com">TVMaze.com</a>
        </div>
    </React.StrictMode>
);
