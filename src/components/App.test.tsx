import { render, screen } from "../testUtils/testUtils";
import App from "./App";

//An example of using react-testing-library
/*describe("App component", async () => {
    test("Should add padding to season episode codes", () => {
        render(<App />);
        const elem = screen.getByText("S01E01");
        expect(elem).toBeInTheDocument();
    });
});
*/


describe("App component", async () => {
    test("No visible <p> or </p>", () => {
        render(<App />);
        const elem1 = screen.queryByText("<p>");
        expect(elem1).toBeNull();
    });
});