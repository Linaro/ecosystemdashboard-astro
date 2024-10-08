---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "LLVM"

project:
  title: "LLVM"
  type: "C++"
  ci_url: "https://github.com/llvm/llvm-project/actions"
  url: "LLVM"
  project_official_url: "https://llvm.org/"
  logo: "/assets/projectLogos/llvm.png"
  overview: "The LLVM Project is a collection of modular and reusable compiler and toolchain technologies. Despite its name, LLVM has little to do with traditional virtual machines. The name LLVM itself is not an acronym; it is the full name of the project. LLVM began as a research project at the University of Illinois, with the goal of providing a modern, SSA-based compilation strategy capable of supporting both static and dynamic compilation of arbitrary programming languages. Since then, LLVM has grown to be an umbrella project consisting of a number of subprojects, many of which are being used in production by a wide variety of commercial and open source projects as well as being widely used in academic research. Code in the LLVM project is licensed under the Apache 2.0 License with LLVM exceptions."

supported_releases:
  - release:
    version: "16.0.0"
    url: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-16.0.0"
  - release:
    version: "15.0.7"
    url: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-15.0.7"
  - release:
    version: "15.0.6"
    url: "https://github.com/llvm/llvm-project/releases/tag/llvmorg-15.0.6"

work_items:
  - work:
    title: "arm64 host: apt install clang doesn't install the nightly toolchain #64790"
    url: "https://github.com/llvm/llvm-project/issues/64790"
    status: "Open"
  - work:
    title: "Backport fix for clangd#1568 to 17.x branch #64788"
    url: "https://github.com/llvm/llvm-project/issues/64788"
    status: "Open"
  - work:
    title: "Bacport [BPF] Reset machine register kill mark in BPFMISimplifyPatchable. #64787"
    url: "https://github.com/llvm/llvm-project/issues/64787"
    status: "Open"

events:
  - event:
    title: "2023 LLVM Developers' Meeting"
    type: "Online Session"
    url: "https://llvm.swoogo.com/2023devmtg"
    language: "English"
---

<p>Apache Hadoop</p>
