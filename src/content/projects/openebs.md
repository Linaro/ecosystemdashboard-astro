---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: storage

meta:
  keywords: "OpenEBS"

project:
  title: "OpenEBS"
  type: "Go"
  ci_url: "https://github.com/openebs/openebs/actions"
  url: "OpenEBS"
  project_official_url: "https://openebs.io/"
  logo: "/assets/projectLogos/openebs.svg"
  overview: "OpenEBS turns any storage available to Kubernetes worker nodes into Local or Distributed Kubernetes Persistent Volumes. OpenEBS helps Application and Platform teams easily deploy Kubernetes Stateful Workloads that require fast and highly durable, reliable and scalable Container Attached Storage."

supported_releases:
  - release:
    version: "v2.3.0+"
    url: "https://github.com/openebs/openebs/releases/tag/v2.3.0"

project_ci:
  - CI:
    title: "OpenEBS CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/openebs/openebs/actions"

work_items:
  - work:
    title: "Support for arm64"
    url: "https://github.com/openebs/openebs/issues/1295"
    status: "DONE"

events:
  - event:
    title: "ARMing Kubernetes with OpenEBS"
    type: "Blog"
    url: "https://blog.openebs.io/arming-kubernetes-with-openebs-1-b450f41e0c1f"
    language: "English"
---

<p>OpenEBS</p>
