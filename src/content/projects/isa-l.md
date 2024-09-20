---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "ISA-L"

project:
  title: "ISA-L"
  type: "C"
  ci_url: "https://travis-ci.org/github/intel/isa-l"
  url: "https://travis-ci.org/github/intel/isa-l"
  logo: "/src/assets/images/content/projectLogos/isa-l.jpg"
  overview: "ISA-L is a collection of optimized low-level functions targeting storage applications."

project_ci:
  - CI:
    title: "ISA-L Upstream CI"
    status: "/src/assets/images/content/CI_status.png"
    url: "https://travis-ci.org/github/intel/isa-l"

supported_releases:
  - release:
    version: "v2.3.0"
    url: "https://github.com/intel/isa-l/releases/tag/v2.30.0"

work_items:
  - work:
    title: "ISA-L erasure codes SVE Support"
    status: "WIP"
  - work:
    title: "ISA-L erasure codes NEON Support"
    status: "DONE"
---

<p>ISA-L</p>
