---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "Longhorn"

project:
  title: "Longhorn"
  type: "Go"
  ci_url: "https://drone-publish.longhorn.io/longhorn/longhorn-engine"
  url: "Longhorn"
  project_official_url: "https://longhorn.io"
  logo: "/assets/projectLogos/longhorn.svg"
  overview: "Longhorn is a lightweight, reliable, and powerful distributed block storage system for Kubernetes."

supported_releases:
  - release:
    version: "v1.4.0"
    url: "https://longhorn.io/docs/1.4.0"

project_ci:
  - CI:
    title: "Longhorn Drone CI - default-arm64"
    status: "/assets/CI_status.png"
    url: "https://drone-publish.longhorn.io/longhorn/longhorn-engine"

work_items:
  - work:
    title: "Support for ARM64 Architecture"
    url: "https://github.com/longhorn/longhorn/issues/6"
    status: "DONE"

events:
  - event:
    title: "Longhorn extends Kubernetes-native storage capabilities to support edge deployments"
    type: "News"
    url: "https://www.suse.com/news/longhorn-1-1/"
    language: "English"
  - event:
    title: "Longhorn Kubernetes Block Storage Adds Snapshots, ARM64 Support"
    type: "Blog"
    url: "https://thenewstack.io/longhorn-kubernetes-block-storage-adds-snapshots-looks-to-edge-deployments-with-arm64-support/"
    language: "English"
---

<p>Longhorn</p>
