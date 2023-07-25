export const padNumber = (num: number): string =>
    num < 10 ? "0" + num : num.toString();

export function removeTags(str: string): string {
    return str.replace(/<[^>]*>/g, "");
}

type Ep = { name: string; summary: string };
export function search(typedSearch: string, episodes: Ep[]) {
    let filteredData;
    if (typedSearch.length > 0) {
        filteredData = episodes.filter(
            (ep) =>
                ep.name.toLowerCase().includes(typedSearch.toLowerCase()) ||
                ep.summary.toLowerCase().includes(typedSearch.toLowerCase())
        );
    } else {
        filteredData = episodes;
    }
    return filteredData;
}
