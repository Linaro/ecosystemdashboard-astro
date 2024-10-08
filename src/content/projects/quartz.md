---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "Quartz"

project:
  title: "Quartz"
  type: "Java"
  ci_url: "https://dev.azure.com/TerracottaCI/quartz/_build?definitionId=24"
  url: "Quartz"
  project_official_url: "http://www.quartz-scheduler.org/"
  logo: "/assets/projectLogos/quartz.jpeg"
  overview: "Quartz is a richly featured, open source job scheduling library that can be integrated within virtually any Java application - from the smallest stand-alone application to the largest e-commerce system. Quartz can be used to create simple or complex schedules for executing tens, hundreds, or even tens-of-thousands of jobs; jobs whose tasks are defined as standard Java components that may execute virtually anything you may program them to do. The Quartz Scheduler includes many enterprise-class features, such as support for JTA transactions and clustering. Quartz is freely usable, licensed under the Apache 2.0 license."

supported_releases:
  - release:
    version: "2.3.0"
    url: "http://www.quartz-scheduler.org/downloads/files/quartz-2.3.0-distribution.tar.gz"
  - release:
    version: "2.2.3"
    url: "http://www.quartz-scheduler.org/downloads/files/quartz-2.2.3-distribution.tar.gz"
  - release:
    version: "2.2.2"
    url: "http://www.quartz-scheduler.org/downloads/files/quartz-2.2.2-distribution.tar.gz"

work_items:
  - work:
    title: "Add and use quartz.properties file for example5"
    url: "https://github.com/quartz-scheduler/quartz/pull/961"
    status: "Open"
  - work:
    title: "Fix format of PR template to adhere to markdown"
    url: "https://github.com/quartz-scheduler/quartz/pull/958"
    status: "Open"
  - work:
    title: "Fix typo in JobDetail interface"
    url: "https://github.com/quartz-scheduler/quartz/pull/954"
    status: "Open"
---

<p>Quartz</p>
