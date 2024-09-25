---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: cloud

meta:
  keywords: "Moby, Docker"

project:
  title: "Moby(Docker)"
  type: "Go"
  ci_url: "https://ci-next.docker.com/public/blue/organizations/jenkins/moby/activity"
  url: "Moby(Docker)"
  project_official_url: "https://mobyproject.org/"
  logo: "/public/assets/projectLogos/moby.png"
  overview: "Moby is an open framework created by Docker to assemble specialized container systems without reinventing the wheel. It provides a “lego set” of dozens of standard components and a framework for assembling them into custom platforms. At the core of Moby is a framework to assemble specialized container systems."

supported_releases:
  - release:
    version: "v20.10.17"
    url: "https://github.com/moby/moby/releases/tag/v20.10.17"

project_ci:
  - CI:
    title: "Moby Upstream CI"
    status: "/src/assets/images/content/CI_status.png"
    url: "https://ci-next.docker.com/public/blue/organizations/jenkins/moby/activity"
---

<p>Moby</p>
