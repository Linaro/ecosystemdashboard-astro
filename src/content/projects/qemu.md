---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: cloud

meta:
  keywords: "Qemu"

project:
  title: "Qemu"
  type: "C"
  ci_url: "https://gitlab.com/qemu-project/qemu/-/pipelines"
  url: "Qemu"
  project_official_url: "https://www.qemu.org/"
  logo: "/assets/projectLogos/qemu.png"
  overview: "QEMU is a generic and open source machine emulator and virtualizer."

supported_releases:
  - release:
    version: "7.0.0"
    url: "https://download.qemu.org/qemu-7.0.0.tar.xz"

project_ci:
  - CI:
    title: "Qemu Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://gitlab.com/qemu-project/qemu/-/pipelines"
---

<p>Qemu</p>
