---
layout: ../../layouts/Flow.astro
slug: ""
title: Linaro Ecosystem Dashboard
description: >
  The Linaro Ecosystem Dashboard has been created to provide a centralized information hub for Arm developers across the world.
hero:
  # title: Homepage Hero Text
  # background_image: "../../assets/images/hero.jpg"
  # inner_image:
  #   src: "../../assets/images/linaro-logo-white.svg"
  #   alt: Linaro logo
  # style: text-center uppercase

  style: text-center font-weight-bold
  title: Ecosystem Dashboard
  background_image: ../../assets/images/content/Mesadetrabajo13.png
flow:
  - row: container_row
    style:
    sections:
      # - component: title
      #   style: text-center
      #   title_content:
      #     style: font-bold
      #     size: h2
      #     text: Welcome to linaro-astro-template
      - component: text
        style: text-center text-color-white
        text_content:
          text: |-
            The hub for all Arm developers across the world

            Click the projects' logos to check Arm support details

            Want to submit a project? 

            Click here for guidelines and instructions first
  - row: container_row
    sections:
      - component: projects
---

12
