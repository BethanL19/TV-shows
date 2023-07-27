import { ShowInfo } from "../showsInfo";
import { removeTags } from "./episodeUtils";

interface ShowProps {
    show: ShowInfo;
    click: () => void;
}

export function Show(props: ShowProps): JSX.Element {
    return (
        <button className="show" onClick={props.click}>
            <h3 className="showTitle">{props.show.name}</h3>
            <div className="showImg">
                {props.show.image !== null && (
                    <img alt="medium" src={props.show.image.medium} />
                )}
            </div>
            <div className="showSummary">
                {props.show.summary !== null && (
                    <p>{removeTags(props.show.summary)}</p>
                )}
            </div>
            <ul className="showDetails">
                {props.show.rating.average !== null && (
                    <li>{`Rated: ${props.show.rating.average}`}</li>
                )}
                {props.show.genres !== null && (
                    <li>{`Genres: ${props.show.genres}`}</li>
                )}
                {props.show.status !== null && (
                    <li>{`Status: ${props.show.status}`}</li>
                )}
                {props.show.runtime !== null && (
                    <li>{`Runtime: ${props.show.runtime} minutes`}</li>
                )}
            </ul>
        </button>
    );
}
