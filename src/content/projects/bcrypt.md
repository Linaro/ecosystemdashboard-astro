---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "Bcrypt"

project:
  title: "Bcrypt"
  type: "Java"
  url: "Bcrypt"
  project_official_url: "https://github.com/patrickfav/bcrypt"
  logo: "/assets/projectLogos/bcrypt.png"
  overview: "This is an implementation of the OpenBSD Blowfish password hashing algorithm, as described in A Future-Adaptable Password Scheme by Niels Provos and David Mazieres. It's core is based on jBcrypt, but heavily refactored, modernized and with a lot of updates and enhancements. It supports all common versions, has a security sensitive API and is fully tested against a range of test vectors and reference implementations."

supported_releases:
  - release:
    version: "v0.10.2"
    url: "https://github.com/patrickfav/bcrypt/releases/tag/v0.10.2"
  - release:
    version: "v0.10.1"
    url: "https://github.com/patrickfav/bcrypt/releases/tag/v0.10.1"
  - release:
    version: "v0.10.0-rc"
    url: "https://github.com/patrickfav/bcrypt/releases/tag/v0.10.0-rc"
  - release:
    version: "v0.9.0"
    url: "https://github.com/patrickfav/bcrypt/releases/tag/v0.9.0"

events:
  - event:
    title: "bcrypt at 25: A retrospective on password security"
    type: "News"
    url: "https://blog.apnic.net/2023/08/02/bcrypt-at-25-a-retrospective-on-password-security/"
    language: "English"

project_ci:
  - CI:
    title: "Bcrypt Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/patrickfav/bcrypt/actions/workflows/build_deploy.yml/badge.svg"
---

<p>Bcrypt</p>
