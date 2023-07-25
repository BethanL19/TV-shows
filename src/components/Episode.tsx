import { padNumber, removeTags } from "./episodeUtils";

export interface EpisodeInfo {
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    type: string;
    airdate: string;
    airtime: string;
    airstamp: string;
    rating: { average: number | null };
    runtime: number;
    image: {
        medium: string | undefined;
        original: string | undefined;
    } | null;
    summary: string | null;
    _links: { self: { href: string } };
}

interface EpisodeProps {
    episode: EpisodeInfo;
}

export function Episode(props: EpisodeProps): JSX.Element {
    return (
        <div className="episode">
            <h3>
                <span>
                    {props.episode.name} - S{padNumber(props.episode.season)}E
                    {padNumber(props.episode.number)}
                </span>
            </h3>
            {props.episode.image !== null && (
                <img alt="medium" src={props.episode.image.medium} />
            )}
            {props.episode.summary !== null && (
                <p>{removeTags(props.episode.summary)}</p>
            )}
        </div>
    );
}
