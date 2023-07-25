import { padNumber, removeTags, search } from "./episodeUtils";

test("test padNumber function", () => {
    expect(padNumber(7)).toBe("07");
    expect(padNumber(10)).toBe("10");
});

test("test removeTags function", () => {
    expect(removeTags("<p>Hi I'm Beth</p>")).toBe("Hi I'm Beth");
    expect(removeTags("Hi I'm <p></p>Rosie")).toBe("Hi I'm Rosie");
});

test("test filtering function", () => {
    expect(
        search("three", [
            { name: "one two three", summary: "one" },
            { name: "one two", summary: "three" },
            { name: "one", summary: "one" },
        ])
    ).toStrictEqual([
        { name: "one two three", summary: "one" },
        { name: "one two", summary: "three" },
    ]);
});
