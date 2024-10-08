---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "DPDK"

project:
  title: "DPDK"
  type: "C"
  ci_url: "https://www.dpdk.org/"
  url: "https://www.dpdk.org/"
  logo: "/assets/projectLogos/dpdk.png"
  overview: "DPDK is the Data Plane Development Kit that consists of libraries to accelerate packet processing workloads running on a wide variety of CPU architectures. Designed to run on x86, POWER and ARM processors, it runs mostly in Linux userland, with a FreeBSD port available for a subset of DPDK features. DPDK is licensed under the Open Source BSD License."

supported_releases:
  - release:
    version: "17.11.10(LTS)"
    url: "https://fast.dpdk.org/rel/dpdk-17.11.10.tar.xz"
  - release:
    version: "18.11.11(LTS)"
    url: "https://fast.dpdk.org/rel/dpdk-18.11.11.tar.xz"
  - release:
    version: "19.11.12(LTS)"
    url: "https://fast.dpdk.org/rel/dpdk-19.11.12.tar.xz"
  - release:
    version: "20.11.5(LTS)"
    url: "https://fast.dpdk.org/rel/dpdk-20.11.5.tar.xz"

project_ci:
  - CI:
    title: "DPDK Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://lab.dpdk.org/results/dashboard/status/"
---

<p>DPDK</p>
