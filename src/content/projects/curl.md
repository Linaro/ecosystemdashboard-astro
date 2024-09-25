---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "curl"

project:
  title: "curl"
  type: "C"
  url: "curl"
  project_official_url: "https://curl.se"
  logo: "/public/assets/projectLogos/curl.svg"
  overview: "A command line tool and library for transferring data with URL syntax, supporting DICT, FILE, FTP, FTPS, GOPHER, GOPHERS, HTTP, HTTPS, IMAP, IMAPS, LDAP, LDAPS, MQTT, POP3, POP3S, RTMP, RTMPS, RTSP, SCP, SFTP, SMB, SMBS, SMTP, SMTPS, TELNET, TFTP, WS and WSS. libcurl offers a myriad of powerful features."

supported_releases:
  - release:
    version: "curl-8_4_0"
    url: "https://github.com/curl/curl/releases/tag/curl-8_4_0"
  - release:
    version: "curl-8_3_0"
    url: "https://github.com/curl/curl/releases/tag/curl-8_3_0"
  - release:
    version: "curl-8_2_0"
    url: "https://github.com/curl/curl/releases/tag/curl-8_2_0"

project_ci:
  - CI:
    title: "curl Upstream CI"
    status: "/src/assets/images/content/CI_status.png"
    url: "https://github.com/curl/curl/actions"
---

<p>curl</p>
