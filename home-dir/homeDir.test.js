import { homeDir } from "./homeDir";

describe("homeDir", () => {
  test("should return the home directory", () => {
    expect(homeDir()).toBe("/home/yash");
  });
});
