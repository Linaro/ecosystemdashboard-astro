---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: web

meta:
  keywords: "Varnish"

project:
  title: "Varnish"
  type: "C"
  ci_url: "https://app.circleci.com/pipelines/github/varnishcache/varnish-cache?branch=master"
  url: "Varnish"
  project_official_url: "https://varnish-cache.org"
  logo: "/assets/projectLogos/varnish.png"
  overview: "Varnish Cache is a web application accelerator also known as a caching HTTP reverse proxy. You install it in front of any server that speaks HTTP and configure it to cache the contents. Varnish Cache is really, really fast. It typically speeds up delivery with a factor of 300 - 1000x, depending on your architecture."

supported_releases:
  - release:
    version: "7.3.0"
    url: "https://varnish-cache.org/downloads/varnish-7.3.0.tgz"
  - release:
    version: "7.2.1"
    url: "https://varnish-cache.org/downloads/varnish-7.2.1.tgz"
  - release:
    version: "6.0.11"
    url: "https://varnish-cache.org/downloads/varnish-6.0.11.tgz"

project_ci:
  - CI:
    title: "Varnish Cache CI"
    status: "/assets/CI_status.png"
    url: "https://app.circleci.com/pipelines/github/varnishcache/varnish-cache?branch=master"

events:
  - event:
    title: "VSV00012 Base64 decoding vulnerability in vmod-digest"
    type: "News"
    url: "https://superuser.openstack.org/articles/arm-interop-openstack/"
    language: "English"
  - event:
    title: "Varnish 7.3.0 is released"
    type: "News"
    url: "https://varnish-cache.org/releases/rel7.3.0.html#rel7-3-0"
    language: "English"
  - event:
    title: "VSV00011 Varnish HTTP/2 Request Forgery Vulnerability"
    type: "News"
    url: "https://varnish-cache.org/security/VSV00011.html#vsv00011"
    language: "English"
---

<p>Varnish</p>
