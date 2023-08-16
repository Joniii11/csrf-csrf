import { createTestSuite } from "./testsuite.js";
import { getSecret } from "./utils/helpers.js";

createTestSuite("csrf-csrf", {
  getSecret,
});
createTestSuite("csrf-csrf with custom options", {
  getSecret,
  cookieOptions: { sameSite: "strict" },
  size: 128,
  cookieName: "__Host.test-the-thing.token",
});
