---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: database

meta:
  keywords: "RocksDB"

project:
  title: "RocksDB"
  type: "C++"
  ci_url: "https://travis-ci.org/github/facebook/rocksdb/pull_requests"
  url: "https://travis-ci.org/github/facebook/rocksdb/pull_requests"
  project_official_url: "https://rocksdb.org/"
  logo: "/assets/projectLogos/rocksdb.png"
  overview: "RocksDB is an embeddable persistent key-value store for fast storage."

supported_releases:
  - release:
    version: "6.2.2"
    url: "https://github.com/facebook/rocksdb/releases/tag/v6.2.2"
  - release:
    version: "Latest"
    url: "https://github.com/facebook/rocksdb/releases"

work_items:
  - work:
    title: "Support rocksdbjava aarch64 build and test"
    url: "https://github.com/facebook/rocksdb/pull/5258"
    status: "DONE"
  - work:
    title: "Fixes for building RocksJava releases on arm64v8"
    url: "https://github.com/facebook/rocksdb/pull/5674/"
    status: "DONE"
  - work:
    title: "Add Arm64 builds to Travis"
    url: "https://github.com/facebook/rocksdb/pull/5932"
    status: "DONE"
  - work:
    title: "Remove -Wshorten-64-to-32 FreeBSD on aarch64 as it breaks compilation"
    url: "https://github.com/facebook/rocksdb/pull/9010"
    status: "DONE"
---

<p>RocksDB</p>
