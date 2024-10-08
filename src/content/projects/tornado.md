---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "Tornado"

project:
  title: "Tornado"
  type: "Python"
  url: "Tornado"
  project_official_url: "http://www.tornadoweb.org//"
  logo: "/assets/projectLogos/tornado.webp"
  overview: "Tornado is a Python web framework and asynchronous networking library, originally developed at FriendFeed. By using non-blocking network I/O, Tornado can scale to tens of thousands of open connections, making it ideal for long polling, WebSockets, and other applications that require a long-lived connection to each user."

supported_releases:
  - release:
    version: "v6.3.3"
    url: "https://github.com/tornadoweb/tornado/releases/tag/v6.3.3"
  - release:
    version: "v6.3.2"
    url: "https://github.com/tornadoweb/tornado/releases/tag/v6.3.2"
  - release:
    version: "v6.3.1"
    url: "https://github.com/tornadoweb/tornado/releases/tag/v6.3.1"

project_ci:
  - CI:
    title: "Tornado Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/tornadoweb/tornado/actions"
---

<p>Tornado</p>
