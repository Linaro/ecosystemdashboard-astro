---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "Filebeat"

project:
  title: "Filebeat"
  type: "Go"
  url: "Filebeat"
  project_official_url: "https://www.elastic.co/cn/beats/filebeat"
  logo: "/src/assets/images/content/projectLogos/filebeat.png"
  overview: "Filebeat is a lightweight shipper for forwarding and centralizing log data. Installed as an agent on your servers, Filebeat monitors the log files or locations that you specify, collects log events, and forwards them either to Elasticsearch or Logstash for indexing."

supported_releases:
  - release:
    version: "filebeat-8-10-1"
    url: "https://www.elastic.co/downloads/past-releases/filebeat-8-10-1"
  - release:
    version: "filebeat-8-10-0"
    url: "https://www.elastic.co/downloads/past-releases/filebeat-8-10-0"
  - release:
    version: "filebeat-8-9-2"
    url: "https://www.elastic.co/downloads/past-releases/filebeat-8-9-2"
  - release:
    version: "filebeat-8-9-1"
    url: "https://www.elastic.co/downloads/past-releases/filebeat-8-9-1"

project_ci:
  - CI:
    title: "Filebeat Upstream CI"
    status: "/src/assets/images/content/CI_status.png"
    url: "https://beats-ci.elastic.co/job/Beats/"
---

<p>Filebeat</p>
