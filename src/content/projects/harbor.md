---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: cloud

meta:
  keywords: "Harbor"

project:
  title: "Harbor"
  type: "Go"
  logo: "/assets/projectLogos/harbor.png"
  url: "Harbor"
  ci_url: "https://github.com/goharbor/harbor/actions?query=event%3Apush+branch%3Amain+workflow%3ACI+"
  project_official_url: "https://goharbor.io"
  overview: "Harbor is an open source registry that secures artifacts with policies and role-based access control, ensures images are scanned and free from vulnerabilities, and signs images as trusted. Harbor, a CNCF Graduated project, delivers compliance, performance, and interoperability to help you consistently and securely manage artifacts across cloud native compute platforms like Kubernetes and Docker."

supported_releases:
  - release:
    version: "Latest"
    url: "https://github.com/goharbor/harbor/releases/tag/v2.8.4"
  - release:
    version: "v2.8.4-rc1"
    url: "https://github.com/goharbor/harbor/releases/tag/v2.8.4-rc1"
  - release:
    version: "v2.9.0-rc1"
    url: "https://github.com/goharbor/harbor/releases/tag/v2.9.0-rc1"

project_ci:
  - CI:
    title: "Harbor Pullrequest CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/goharbor/harbor/actions?query=event%3Apush+branch%3Amain+workflow%3ACI+"

events:
  - event:
    title: "Harbor v2.8 release - The KubeCon Release - Amsterdam"
    type: "Blog"
    url: "https://goharbor.io/blog/harbor-2.8/"
    language: "English"
  - event:
    title: "Harbor at KubeCon + CloudNativeCon 2023 in Amsterdam"
    type: "Blog"
    url: "https://goharbor.io/blog/harbor-at-kubecon-amsterdam-2023/"
    language: "English"
---

<p>Harbor</p>
