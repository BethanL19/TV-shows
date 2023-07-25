import { padNumber, removeTags } from "./episodeUtils";

test("test padNumber function", () => {
    expect(padNumber(7)).toBe("07");
    expect(padNumber(10)).toBe("10");
});

test("test removeTags function", () => {
    expect(removeTags("<p>Hi I'm Beth</p>")).toBe("Hi I'm Beth");
    expect(removeTags("Hi I'm <p></p>Rosie")).toBe("Hi I'm Rosie");
});
