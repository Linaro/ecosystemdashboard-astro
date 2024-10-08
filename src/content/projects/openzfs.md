---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "OpenZFS"

project:
  title: "OpenZFS"
  type: "C"
  ci_url: "https://github.com/openzfs/zfs/actions"
  url: "OpenZFS"
  project_official_url: "https://openzfs.org/"
  logo: "/assets/projectLogos/openzfs.png"
  overview: "OpenZFS is an advanced file system and volume manager which was originally developed for Solaris and is now maintained by the OpenZFS community. OpenZFS supports illumos, Linux, FreeBSD and OS X platforms. OpenZFS combines the functionality of traditional filesystems, volume manager, and more. OpenZFS includes protection against data corruption, support for high storage capacities, efficient data compression, snapshots and copy-on-write clones, continuous integrity checking and automatic repair, remote replication with ZFS send and receive, and RAID-Z."

supported_releases:
  - release:
    version: "v0.7.1+"
    url: "https://github.com/openzfs/zfs/releases/tag/zfs-0.7.1"

work_items:
  - work:
    title: "aarch64: Use proper guards for NEON instructions"
    url: "https://github.com/openzfs/zfs/pull/11055"
    status: "DONE"
  - work:
    title: "Fix aarch64 build"
    url: "https://github.com/openzfs/zfs/pull/6424"
    status: "DONE"

events:
  - event:
    title: "Ubuntu 20.04 Root on ZFS for Raspberry Pi"
    type: "Blog"
    url: "https://openzfs.github.io/openzfs-docs/Getting%20Started/Ubuntu/Ubuntu%2020.04%20Root%20on%20ZFS%20for%20Raspberry%20Pi.html"
    language: "English"
  - event:
    title: "ZFS NAS with NFS and Samba on ROCK64 ARM SBC"
    type: "Blog"
    url: "https://icicimov.github.io/blog/server/ZFS-NAS-ROCK64-NFS-Samba/"
    language: "English"

---

<p>OpenZFS</p>
