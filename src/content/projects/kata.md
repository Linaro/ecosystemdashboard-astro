---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: cloud

meta:
  keywords: "Katacontainers"

project:
  title: "Kata Containers"
  type: "Go"
  ci_url: "http://jenkins.katacontainers.io/"
  url: "KataContainers"
  project_official_url: "https://katacontainers.io/"
  logo: "/assets/projectLogos/kata.png"
  overview: "Kata Containers is Apache 2 licensed software consisting of two main components: the Kata agent, and the Kata Containerd shim v2 runtime. It also packages a Linux kernel and versions of QEMU, Cloud Hypervisor and Firecracker hypervisors."

supported_releases:
  - release:
    version: "2.4.3"
    url: "https://github.com/kata-containers/kata-containers/releases/tag/2.4.3"

project_ci:
  - CI:
    title: "Kata Containers Upstream CI"
    status: "/assets/CI_status.png"
    url: "http://jenkins.katacontainers.io/"
---

<p>Kata Containers</p>C
