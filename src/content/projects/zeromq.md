---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "ZeroMQ"

project:
  title: "ZeroMQ"
  type: "C++"
  ci_url: "https://circleci.com/gh/zeromq/jeromq"
  url: "ZeroMQ"
  project_official_url: "https://zeromq.org/"
  logo: "/assets/projectLogos/zeromq.png"
  overview: "ZeroMQ (also known as ØMQ, 0MQ, or zmq) looks like an embeddable networking library but acts like a concurrency framework. It gives you sockets that carry atomic messages across various transports like in-process, inter-process, TCP, and multicast. You can connect sockets N-to-N with patterns like fan-out, pub-sub, task distribution, and request-reply. It's fast enough to be the fabric for clustered products. Its asynchronous I/O model gives you scalable multicore applications, built as asynchronous message-processing tasks. It has a score of language APIs and runs on most operating systems."

supported_releases:
  - release:
    version: "0.5.4"
    url: "https://github.com/zeromq/jeromq/releases/tag/v0.5.4"
  - release:
    version: "0.5.3"
    url: "https://github.com/zeromq/jeromq/releases/tag/v0.5.3"
  - release:
    version: "0.5.2"
    url: "https://github.com/zeromq/jeromq/releases/tag/v0.5.2"

work_items:
  - work:
    title: "Add JPMS module descriptor"
    url: "https://github.com/zeromq/jeromq/pull/963"
    status: "Open"
  
events:
  - event:
    title: "ZeroMQ – Relicense from LGPL3 and exceptions to MPL 2.0"
    type: "Online Session"
    url: "https://news.ycombinator.com/item?id=37819566"
    language: "English"
  - event:
    title: "ZeroMQ is quickly becoming an even bigger hammer in the premature optimization planet of Newbo-Thumbia"
    type: "Online Session"
    url: "https://news.ycombinator.com/item?id=1660714"
    language: "English" 
---

<p>ZeroMQ</p>
