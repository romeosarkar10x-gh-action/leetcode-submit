"use strict";
import * as core from "@actions/core";
async function main() {
  const manifestFilePathname = core.getInput("manifest-file");
  const leetcodeSessionCookie = core.getInput("leetcode-session-cookie");
  console.log("manifestFilePathname:", manifestFilePathname);
  console.log("leetcodeSessionCookie:", leetcodeSessionCookie);
}
main();
