import { ShowInfo } from "../showsInfo";

export function displayShow(
    typedSearch: string,
    shows: ShowInfo[],
    selection: ShowInfo | undefined
) {
    let filteredData;
    if (selection) {
        filteredData = shows.filter((show) => show.id === selection.id);
    } else if (typedSearch.length > 0) {
        filteredData = shows.filter(
            (show) =>
                show.name.toLowerCase().includes(typedSearch.toLowerCase()) ||
                (show.summary !== null &&
                    show.summary
                        .toLowerCase()
                        .includes(typedSearch.toLowerCase())) ||
                (show.genres !== null &&
                    show.genres
                        .toString()
                        .toLowerCase()
                        .includes(typedSearch.toLowerCase()))
        );
    } else {
        filteredData = shows;
    }
    return filteredData;
}
