---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: libraries

meta:
  keywords: "Ruby"

project:
  title: "Ruby"
  type: "Ruby"
  ci_url: "http://www.ruby-lang.org/en/"
  url: "http://www.ruby-lang.org/en/"
  project_official_url: "https://www.ruby-lang.org/"
  logo: "/assets/projectLogos/ruby.png"
  overview: "Ruby is an interpreted object-oriented programming language often used for web development. It also offers many scripting features to process plain text and serialized files, or manage system tasks. It is simple, straightforward, and extensible."
supported_releases:
  - release:
    version: "2.7.5"
    url: "https://www.ruby-lang.org/en/news/2021/11/24/ruby-2-7-5-released/"
  - release:
    version: "3.0.3"
    url: "https://www.ruby-lang.org/en/news/2021/11/24/ruby-3-0-3-released/"
  - release:
    version: "Latest"
    url: "https://www.ruby-lang.org/en/news/2021/12/25/ruby-3-1-0-released/"

project_ci:
  - CI:
    title: "Ruby Cirrus-ci-arm"
    status: "/assets/CI_status.png"
    url: "https://cirrus-ci.com/github/junaruga/ruby/wip/cirrus-ci-arm"

work_items:
  - work:
    title: "Enable arm64 optimizations that exist for power/x86"
    url: "https://github.com/ruby/ruby/pull/3393"
    status: "DONE"
  - work:
    title: "Configure Cirrus CI to run Arm64 tests"
    url: "https://github.com/ruby/ruby/pull/4772"
    status: "DONE"

  - work:
    title: ".cirrus.yml: Add Cirrus CI for Arm64 tests."
    url: "https://github.com/ruby/ruby/pull/4875"
    status: "DONE"
  - work:
    title: ".travis.yml: Comment out the 2nd arm64 pipeline."
    url: "https://github.com/ruby/ruby/pull/4956"
    status: "DONE"

events:
  - event:
    title: "How to run Ruby on Rails on ARM?"
    type: "Blog"
    url: "https://dev.sweatco.in/rails-on-arm/"
    language: "English"
---

<p>Ruby</p>
