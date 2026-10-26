---
title: Start with the workflow
description: A small exercise for making a useful interface before choosing components.
date: "2026-10-23"
tags:
  - Product
  - Interfaces
---

An interface starts with a task. Before choosing a layout, write down what someone needs to do and what a successful result looks like.

## Follow one task from start to finish

Take a simple example: reviewing an application. The reviewer needs enough context to make a decision, a clear action, and confirmation that the decision was saved.

1. Find the application that needs attention.
2. Read the relevant details.
3. Approve it or request a change.
4. See the updated status.

That sequence provides a useful starting point for the page structure.

> Make the next step clear before adding more options.

## Include the less exciting states

A polished screen is only one part of the experience. Consider what happens when there are no applications, when a request is loading, or when saving fails.

| State   | What the interface should explain            |
| ------- | -------------------------------------------- |
| Empty   | What will appear here and how to get started |
| Loading | That the request is still in progress        |
| Error   | What happened and whether the user can retry |
| Success | What changed and what can happen next        |

## Keep the first version focused

A short workflow can reveal more than a large collection of screens. Start with one complete task, then expand when another task needs its own space.
