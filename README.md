# leetcode-submit

A GitHub Action that submits LeetCode solutions from within a CI workflow. Given a `LEETCODE_SESSION` token, a list of solution files, and per-file metadata (such as the question ID), it submits each solution to LeetCode and reports the result. It is designed for incremental use, so it typically operates only on files that changed in a given push or pull request rather than resubmitting the entire solution set.
