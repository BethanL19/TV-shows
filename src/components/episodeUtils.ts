export const padNumber = (num: number): string =>
    num < 10 ? "0" + num : num.toString();

export function removeTags(str: string): string {
    return str.replace(/<[^>]*>/g, "");
}
