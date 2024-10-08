---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "Netdata"

project:
  title: "Netdata"
  type: "C"
  url: "Netdata"
  project_official_url: "https://www.netdata.cloud"
  logo: "/assets/projectLogos/netdata.svg"
  overview: "Netdata collects metrics per second and presents them in beautiful low-latency dashboards. It is designed to run on all of your physical and virtual servers, cloud deployments, Kubernetes clusters, and edge/IoT devices, to monitor your systems, containers, and applications."

supported_releases:
  - release:
    version: "latest"
    url: "https://github.com/netdata/netdata/releases/tag/v1.43.0"
  - release:
    version: "v1.42.4"
    url: "https://github.com/netdata/netdata/releases/tag/v1.42.4"
  - release:
    version: "v1.42.3"
    url: "https://github.com/netdata/netdata/releases/tag/v1.42.3"

project_ci:
  - CI:
    title: "Netdata Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/netdata/netdata/actions"
---

<p>Netdata</p>
