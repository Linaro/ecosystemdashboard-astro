---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "Ceph"

project:
  title: "Ceph"
  type: "C++"
  ci_url: "https://jenkins.ceph.com/view/all/job/ceph-pull-requests-arm64/"
  url: "Ceph"
  project_official_url: "http://ceph.io/"
  logo: "/assets/projectLogos/ceph.png"
  overview: "Ceph is an open-source software (software-defined storage) storage platform, implements object storage on a single distributed computer cluster, and provides 3-in-1 interfaces for object-, block- and file-level storage. Ceph aims primarily for completely distributed operation without a single point of failure, scalable to the exabyte level, and freely available. Ceph replicates data and makes it fault-tolerant, using commodity hardware, Ethernet IP and requiring no specific hardware support. The Ceph’s system offers disaster recovery and data redundancy through techniques such as replication, erasure coding, snapshots and storage cloning. As a result of its design, the system is both self-healing and self-managing, aiming to minimize administration time and other costs."

supported_releases:
  - release:
    version: "Luminous"
    url: "https://docs.ceph.com/en/latest/releases/luminous/"
  - release:
    version: "Mimic"
    url: "https://docs.ceph.com/en/latest/releases/mimic"
  - release:
    version: "Nautilus"
    url: "https://docs.ceph.com/en/latest/releases/nautilus"
  - release:
    version: "Octopus"
    url: "https://docs.ceph.com/en/latest/releases/octopus"
  - release:
    version: "Pacific"
    url: "https://docs.ceph.com/en/latest/releases/pacific"

project_ci:
  - CI:
    title: "Ceph Upstream Pull Request CI"
    status: "/assets/CI_status.png"
    url: "https://jenkins.ceph.com/view/all/job/ceph-pull-requests-arm64/"

work_items:
  - work:
    title: "ceph-pull-requests-arm64: reenable test on arm64"
    url: "https://github.com/ceph/ceph-build/pull/1857"
    status: "DONE"
  - work:
    title: "ceph.spec.in, debian/rules: enable rbd-rwl-cache by default"
    url: "https://github.com/ceph/ceph/pull/41998"
    status: "DONE"
  - work:
    title: "Ceph make-check Dependencies package build and upload"
    url: "https://linaro.atlassian.net/browse/STOR-22"
    status: "DONE"
  - work:
    title: "Build Crimson Linking failure on Arm64"
    url: "https://github.com/ceph/ceph/pull/42367"
    status: "DONE"
  - work:
    title: "Run Ceph Integration Test Locally"
    url: "https://linaro.atlassian.net/browse/STOR-28"
    status: "WIP"
  - work:
    title: "Tcmalloc build/test and comparison with gperftools tcmalloc funtion"
    url: "https://linaro.atlassian.net/browse/STOR-40"
    status: "WIP"

events:
  - event:
    title: "Ceph Month 2021: Optimizing Ceph on Arm64"
    type: "Online Session"
    url: "https://www.youtube.com/watch?v=IzYYOdm2nuE"
    language: "English"
  - event:
    title: "Ceph Month 2021: Performance Optimization for All Flash based on aarch64"
    type: "Online Session"
    url: "https://www.youtube.com/watch?v=SLOfsUC71J8"
    language: "English"
  - event:
    title: "Linaro Connect BKK19: Latest storage status on Arm"
    type: "Online Session"
    url: "https://connect.linaro.org/resources/bkk19/bkk19-104/"
    language: "English"
  - event:
    title: "Linaro Connect HKG18: Accelerate Ceph by SPDK on AArch64"
    type: "Online Session"
    url: "https://connect.linaro.org/resources/hkg18/hkg18-112/"
    language: "English"
---

<p>Ceph</p>
