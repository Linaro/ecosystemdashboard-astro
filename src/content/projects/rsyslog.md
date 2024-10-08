---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "rsyslog"

project:
  title: "rsyslog"
  type: "C"
  url: "rsyslog"
  project_official_url: "https://www.rsyslog.com"
  logo: "/assets/projectLogos/rsyslog.png"
  overview: "RSYSLOG is the rocket-fast system for log processing. It offers high-performance, great security features and a modular design. While it started as a regular syslogd, rsyslog has evolved into a kind of swiss army knife of logging, being able to accept inputs from a wide variety of sources, transform them, and output to the results to diverse destinations."

supported_releases:
  - release:
    version: "v8.2310.0"
    url: "https://github.com/rsyslog/rsyslog/releases/tag/v8.2310.0"
  - release:
    version: "v8.2308.0"
    url: "https://github.com/rsyslog/rsyslog/releases/tag/v8.2308.0"
  - release:
    version: "v8.2306.0"
    url: "https://github.com/rsyslog/rsyslog/releases/tag/v8.2306.0"

project_ci:
  - CI:
    title: "rsyslog Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/rsyslog/rsyslog/actions"
---

<p>rsyslog</p>
