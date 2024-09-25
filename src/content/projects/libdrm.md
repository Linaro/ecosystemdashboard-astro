---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "drm"

project:
  title: "LibDRM"
  type: "C"
  ci_url: "https://gitlab.freedesktop.org/mesa/drm/-/pipelines"
  url: "https://gitlab.freedesktop.org/mesa/drm"
  project_official_url: "https://gitlab.freedesktop.org/mesa/drm"
  logo: "/assets/projectLogos/libdrm.png"
  overview: "This is libdrm, a userspace library for accessing the DRM, direct rendering manager, on Linux, BSD and other operating systems that support the ioctl interface. The library provides wrapper functions for the ioctls to avoid exposing the kernel interface directly, and for chipsets with drm memory manager, support for tracking relocations and buffers. New functionality in the kernel DRM drivers typically requires a new libdrm, but a new libdrm will always work with an older kernel. libdrm is a low-level library, typically used by graphics drivers such as the Mesa drivers, the X drivers, libva and similar projects."

supported_releases:
  - release:
    version: "2022-08-22.0"
    url: "https://gitlab.freedesktop.org/mesa/drm/container_registry/27367"
  - release:
    version: "2023-09-01.0"
    url: "https://gitlab.freedesktop.org/mesa/drm/container_registry/27367"
---

<p>LibDRM</p>
