import { padNumber, removeTags } from "./episodeUtils";

interface EpisodeInfo {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    rating: { average: number };
    runtime: number;
    image: {
        medium: string;
        original: string;
    };
    summary: string;
    _links: { self: { href: string } };
}

interface EpisodeProps {
    episode: EpisodeInfo;
}

function Episode(props: EpisodeProps): JSX.Element {
    return (
        <div className="episode">
            <h3>
                <span>
                    {props.episode.name} - S{padNumber(props.episode.season)}E
                    {padNumber(props.episode.number)}
                </span>
            </h3>
            <img alt="medium" src={props.episode.image.medium} />
            <p>{removeTags(props.episode.summary)}</p>
        </div>
    );
}

export default Episode;
