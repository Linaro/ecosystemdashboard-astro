---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "jemalloc"

project:
  title: "jemalloc"
  type: "C"
  url: "jemalloc"
  project_official_url: "http://jemalloc.net"
  logo: "/assets/projectLogos/jemalloc.png"
  overview: "jemalloc is a general purpose malloc(3) implementation that emphasizes fragmentation avoidance and scalable concurrency support. jemalloc first came into use as the FreeBSD libc allocator in 2005, and since then it has found its way into numerous applications that rely on its predictable behavior. In 2010 jemalloc development efforts broadened to include developer support features such as heap profiling and extensive monitoring/tuning hooks. Modern jemalloc releases continue to be integrated back into FreeBSD, and therefore versatility remains critical."

supported_releases:
  - release:
    version: "5.3.0"
    url: "https://github.com/jemalloc/jemalloc/releases/tag/5.3.0"
  - release:
    version: "5.2.1"
    url: "https://github.com/jemalloc/jemalloc/releases/tag/5.2.1"
  - release:
    version: "5.2.0"
    url: "https://github.com/jemalloc/jemalloc/releases/tag/5.2.0"
  - release:
    version: "5.1.0"
    url: "https://github.com/jemalloc/jemalloc/releases/tag/5.1.0"

project_ci:
  - CI:
    title: "jemalloc Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/jemalloc/jemalloc-ci"
---

<p>jemalloc</p>
