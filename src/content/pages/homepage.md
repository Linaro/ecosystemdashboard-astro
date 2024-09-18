---
layout: ../../layouts/Flow.astro
slug: "/"
title: Linaro Ecosystem Dashboard
description: >
  The Linaro Ecosystem Dashboard has been created to provide a centralized information hub for Arm developers across the world.
flow:
  - row: container_row
    sections:
      - component: text
        text_content:
          text: The hub for all Arm developers across the world
        style: text-center text-5xl mt-16
      - component: text
        text_content:
          text: Click the projects' logos to check Arm support details
        style: text-center text-2xl mt-16
      - component: text
        text_content:
          text: Want to submit a project? <br>[Click here](https://github.com/Linaro/ecosystemlandscape#project-details-structure) for guidelines and instructions first
        style: text-center text-2xl mb-0 mt-8
  - row: container_row
    sections:
      - component: projects
---
