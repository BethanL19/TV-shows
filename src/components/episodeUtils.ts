import { EpisodeInfo } from "./Episode";

export const padNumber = (num: number): string =>
    num < 10 ? "0" + num : num.toString();

export function removeTags(str: string): string {
    return str.replace(/<[^>]*>/g, "");
}

export function search(typedSearch: string, episodes: EpisodeInfo[]) {
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
    return filteredData;
}

// export interface ShowsInfo {
//     id: number;
//     url: string;
//     name: string;
//     type: string | null;
//     language: string | null;
//     genres: never[] | null;
//     status: string | null;
//     runtime: number | null;
//     averageRuntime: number | null;
//     premiered: string | null;
//     ended: string | null;
//     officialSite: string | null;
//     schedule: {
//         time: string | null;
//         days: string[] | null;
//     } | null;
//     rating: { average: number | null };
//     weight: number | null;
//     network: {
//         id: number | null;
//         name: string | null;
//         country: {
//             name: string | null;
//             code: string | null;
//             timezone: string | null;
//         };
//         officialSite: string | null;
//     } | null;
//     webChannel: {
//         id: number | null;
//         name: string | null;
//         country: {
//             name: string | null;
//             code: string | null;
//             timezone: string | null;
//         } | null;
//         officialSite: string | null;
//     } | null ;
//     dvdCountry: string | null;
//     externals: {
//         tvrage: number | null ;
//         thetvdb: number | null;
//         imdb: string | null;
//     } | null;
//     image: {
//         medium: string | null;
//         original: string | null;
//     } | null;
//     summary: string | null;
//     updated: number | null;
//     _links: {
//         self: { href: string | null} | null;
//         previousepisode: {
//             href: string | null;
//         } | null | undefined;
//     } | null ;
// }
export interface ShowsInfo {
    id: number;
    name: string;
}
