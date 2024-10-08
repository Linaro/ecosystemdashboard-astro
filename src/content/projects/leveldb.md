---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: database

meta:
  keywords: "LevelDB"

project:
  title: "LevelDB"
  type: "C++"
  ci_url: "https://github.com/google/leveldb"
  url: "https://github.com/google/leveldb"
  project_official_url: "https://github.com/google/leveldb"
  logo: "/assets/projectLogos/leveldb.png"
  overview: "LevelDB is a fast key-value storage library written at Google that provides an ordered mapping from string keys to string values."

supported_releases:
  - release:
    version: "1.19"
    url: "https://github.com/google/leveldb/releases/tag/v1.19"
  - release:
    version: "Latest"
    url: "https://github.com/google/leveldb/releases/tag/1.23"
    
work_items:
  - work:
    title: "BloomFilterPolicy not interoperable between ARM and x86"
    url: "https://github.com/google/leveldb/issues/243"
    status: "DONE"
  - work:
    title: "broken db: fix assertion in leveldb::InternalKey::Encode, mark base as corrupt"
    url: "https://github.com/google/leveldb/pull/411"
    status: "DONE"
---

<p>LevelDB</p>
