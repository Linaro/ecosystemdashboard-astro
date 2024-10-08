---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "HDFS"

project:
  title: "HDFS"
  type: "Java"
  ci_url: "https://ci-hadoop.apache.org/"
  url: "HDFS"
  project_official_url: "https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html"
  logo: "/assets/projectLogos/hdfs.png"
  overview: "The Hadoop Distributed File System (HDFS) is a distributed file system designed to run on commodity hardware. It has many similarities with existing distributed file systems. However, the differences from other distributed file systems are significant. HDFS is highly fault-tolerant and is designed to be deployed on low-cost hardware. "

supported_releases:
  - release:
    version: "3.3.0"
    url: "https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.3.0/hadoop-3.3.0-aarch64.tar.gz"
  - release:
    version: "3.3.1"
    url: "https://www.apache.org/dyn/closer.cgi/hadoop/common/hadoop-3.3.1/hadoop-3.3.1-aarch64.tar.gz"

project_ci:
  - CI:
    title: "Hadoop Upstream AArch64 CI"
    status: "/assets/CI_status.png"
    url: "https://ci-hadoop.apache.org/view/Hadoop/job/hadoop-qbt-linux-ARM-trunk/"
---

<p>Rook</p>
