import { EpisodeInfo } from "./Episode";

export const padNumber = (num: number): string =>
    num < 10 ? "0" + num : num.toString();

export function removeTags(str: string): string {
    return str.replace(/<[^>]*>/g, "");
}

export function display(
    typedSearch: string,
    episodes: EpisodeInfo[],
    selection: EpisodeInfo | undefined
) {
    let filteredData;
    if (selection) {
        filteredData = episodes.filter((ep) => ep.id === selection.id);
    } else if (typedSearch.length > 0) {
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
    return filteredData;
}

export function seasonEpStructure(season: number, episode: number): string {
    return `S${padNumber(season)}E${padNumber(episode)}`;
}
