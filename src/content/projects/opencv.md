---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: ai

meta:
  keywords: "OpenCV"

project:
  title: "OpenCV"
  type: "C++"
  ci_url: "https://pullrequest.opencv.org/buildbot/waterfall?tag=arm"
  url: "https://opencv.org/"
  project_official_url: "https://opencv.org/"
  logo: "/assets/projectLogos/opencv.png"
  overview: "OpenCV (Open Source Computer Vision Library) is an open-source library that includes several hundreds of computer vision algorithms."

supported_releases:
  - release:
    version: "3.4"
    url: "https://docs.opencv.org/3.4/"
  - release:
    version: "4.x"
    url: "https://docs.opencv.org/4.x/"
  - release:
    version: "Latest"
    url: "https://opencv.org/releases/"

project_ci:
  - CI:
    title: "Opencv Pullrequest ARM CI"
    status: "/assets/CI_status.png"
    url: "https://pullrequest.opencv.org/buildbot/waterfall?tag=arm"

work_items:
  - work:
    title: "[hal][neon] Optimize the v_dotprod_fast intrinsics for aarch64."
    url: "https://github.com/opencv/opencv/pull/19486"
    status: "DONE"
  - work:
    title: "[hal][neon] Optimise v_expand for AArch64"
    url: "https://github.com/opencv/opencv/pull/19773"
    status: "DONE"
  - work:
    title: "AArch64 semihosting"
    url: "https://github.com/opencv/opencv/pull/20392"
    status: "DONE"

events:
  - event:
    title: "OpenCV DNN Acceleration on ARM"
    type: "Blog"
    url: "https://opencv.org/arm/"
    language: "English"
  - event:
    title: "Face recognition on Android using OpenVINO Toolkit with ARM plugin"
    type: "Blog"
    url: "https://opencv.org/face-recognition-on-android-using-openvino-toolkit-with-arm-plugin/"
    language: "English"
---

<p>OpenCV</p>
