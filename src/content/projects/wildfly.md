---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: web

meta:
  keywords: "WildFly, JBOSS"

project:
  title: "WildFly(JBOSS)"
  type: "java"
  ci_url: "https://ci-next.docker.com/public/blue/organizations/jenkins/moby/activity"
  url: "https://github.com/wildfly/wildfly"
  project_official_url: "https://www.jboss.org/"
  logo: "/assets/projectLogos/wildfly.png"
  overview: "WildFly is a powerful, modular, & lightweight application server that helps you build amazing applications."

supported_releases:
  - release:
    version: "28.0.1"
    url: "https://github.com/wildfly/wildfly/releases/download/28.0.1.Final/wildfly-28.0.1.Final.tar.gz"
  - release:
    version: "28.0.0"
    url: "https://github.com/wildfly/wildfly/releases/download/28.0.0.Final/wildfly-28.0.0.Final.tar.gz"

work_items:
  - work:
    title: "[WFLY-17921] Add missing org.jboss.vfs to RESTEasy Spring deployments"
    url: "https://issues.redhat.com/browse/WFLY-17921"
    status: "DONE"
  - work:
    title: "[WFLY-17949] Improve quickstart CI with provisioned-server, openshift and bootable jar profiles"
    url: "https://issues.redhat.com/browse/WFLY-17949"
    status: "DONE"
---

<p>WildFly</p>
