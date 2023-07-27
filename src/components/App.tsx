import { useState } from "react";
import { ShowsPage } from "./ShowsPage";
import EpisodePage from "./EpisodePage";
import { ShowInfo } from "../showsInfo";

export function App(): JSX.Element {
    const [displayShowsPage, setDisplayShowPage] = useState(true);
    const [selectedShow, setSelectedShow] = useState<ShowInfo>();

    const handleDisplayChange = (display: boolean) => {
        setDisplayShowPage(display);
    };
    const handleShowChange = (selection: ShowInfo) => {
        setSelectedShow(selection);
    };

    return (
        <>
            {displayShowsPage === false && selectedShow !== undefined ? (
                <EpisodePage
                    show={selectedShow}
                    displayShowPage={handleDisplayChange}
                />
            ) : (
                <ShowsPage
                    clickedShow={handleShowChange}
                    displayShowPage={handleDisplayChange}
                />
            )}
        </>
    );
}
