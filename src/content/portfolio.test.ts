import { describe, expect, it } from "vitest";
import { answerQuestion } from "./portfolio";

describe("Ask me guide", () => {
  it("answers location questions with Johannesburg", () => {
    expect(answerQuestion("Where are you based?")).toContain("Johannesburg");
  });
  it("answers contact questions with the email address", () => {
    expect(answerQuestion("How can I contact you?")).toContain("chabi.seopa@gmail.com");
  });
  it("names Robot Framework for testing tools", () => {
    expect(answerQuestion("Which testing tools do you use?")).toContain("Robot Framework");
  });
  it("falls back to a helpful prompt for unknown questions", () => {
    expect(answerQuestion("favourite pizza topping")).toContain("Try asking");
  });
});
