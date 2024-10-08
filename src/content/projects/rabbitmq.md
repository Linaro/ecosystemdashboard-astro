---
layout: ../../layouts/ProjectLayout.astro
permalink: /:title/
category: middleware

meta:
  keywords: "RabbitMQ"

project:
  title: "RabbitMQ"
  type: "Starlark"
  url: "RabbitMQ"
  project_official_url: "https://www.rabbitmq.com"
  logo: "/assets/projectLogos/rabbitmq.svg"
  overview: "RabbitMQ is an open-source message-broker software (sometimes called message-oriented middleware) that originally implemented the Advanced Message Queuing Protocol (AMQP) and has since been extended with a plug-in architecture to support Streaming Text Oriented Messaging Protocol (STOMP), MQ Telemetry Transport (MQTT), and other protocols."

supported_releases:
  - release:
    version: "v3.12.4"
    url: "https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.12.4"
  - release:
    version: "v3.12.3"
    url: "https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.12.3"
  - release:
    version: "v3.11.23"
    url: "https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.11.23"
  - release:
    version: "v3.11.21"
    url: "https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.11.21"

events:
  - event:
    title: "MQTT 5.0 support is coming in RabbitMQ 3.13"
    type: "Blog"
    url: "https://blog.rabbitmq.com/posts/2023/07/mqtt5/"
    language: "English"
  - event:
    title: "Announcing Rabbitmq Community Discord Server"
    type: "Blog"
    url: "https://blog.rabbitmq.com/posts/2023/04/announcing-rabbitmq-community-discord-server/"
    language: "English"

project_ci:
  - CI:
    title: "RabbitMQ Upstream CI"
    status: "/assets/CI_status.png"
    url: "https://github.com/rabbitmq/rabbitmq-server/actions"
---

<p>RabbitMQ</p>
