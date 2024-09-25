---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "AvxToNeon"

project:
  title: "AvxToNeon"
  type: "C++"
  url: "https://github.com/kunpengcompute/AvxToNeon"
  project_official_url: "https://github.com/kunpengcompute/AvxToNeon"
  logo: "/assets/projectLogos/avxtoneon.png"
  overview: "When applications using Intel intrinsic instructions are ported from the x86 architecture to the Kunpeng architecture, the instructions need to be further developed because the Arm64 instruction names and functions are different from that of x86. As a result, huge porting workloads are caused. In this project, the frequently used AVX instructions are encapsulated as independent modules to reduce repeated development workload. The AVX instructions are replaced with related NEON SIMD instructions, while the instruction names and functions remain unchanged. Users can invoke the corresponding instructions by importing related header files into the application software."

supported_releases:
  - release:
    version: "v1.0.0"
    url: "https://github.com/kunpengcompute/AvxToNeon/archive/refs/tags/v1.0.0.tar.gz"
---

<p>AvxToNeon</p>
