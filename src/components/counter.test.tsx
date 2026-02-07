import { Counter } from "./counter";

import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

describe("test counter", () => {
	it("should render", () => {
		render(<Counter />);

		expect(
			screen.getByRole("button", { name: /count is/i }),
		).toBeInTheDocument();
	});

	it("should increment", async () => {
		render(<Counter />);

		const button = screen.getByRole("button");

		expect(button).toBeInTheDocument();

		await userEvent.click(button);

		expect(screen.getByText("count is 1")).toBeInTheDocument();
	});
});
