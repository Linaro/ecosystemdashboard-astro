---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: cloud

meta:
  keywords: "Open vSwitch"

project:
  title: "Open vSwitch"
  type: "C"
  ci_url: "https://travis-ci.org/openvswitch/ovs"
  url: "OpenvSwitch"
  project_official_url: "https://www.openvswitch.org/"
  logo: "/public/assets/projectLogos/ovs.png"
  overview: "Open vSwitch is a production quality, multilayer virtual switch licensed under the open source Apache 2.0 license.  It is designed to enable massive network automation through programmatic extension, while still supporting standard management interfaces and protocols (e.g. NetFlow, sFlow, IPFIX, RSPAN, CLI, LACP, 802.1ag)."

supported_releases:
  - release:
    version: "2.13.8"
    url: "https://www.openvswitch.org/releases/openvswitch-2.13.8.tar.gz"

project_ci:
  - CI:
    title: "OpenvSwitch Upstream CI"
    status: "/src/assets/images/content/CI_status.png"
    url: "https://travis-ci.org/openvswitch/ovs"
---

<p>Open vSwitch</p>
