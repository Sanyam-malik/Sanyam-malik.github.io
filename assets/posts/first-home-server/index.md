---
title: How I Set Up My First Home Server
description: A beginner-friendly guide to setting up your first home server. Learn how to choose the right hardware, install an operating system, and configure essential services to build a secure and reliable personal server for hosting applications, storage, and automation.
slug: first-home-server
date: 2022-03-06 00:00:00+0000
image: cover.png
categories:
    - homelab
    - selfhosting
tags:
    - homelab
    - ubuntu
    - raspberrypi
    - docker
weight: 2
---

## Introduction

Running a home server always sounded complicated to me—something only networking experts or system administrators could handle. But with affordable hardware like the Raspberry Pi and lightweight Linux distributions, it has become much easier to build a reliable personal server.

In this guide, I’ll walk through how I built my **first home server using a Raspberry Pi Zero**, set up a lightweight OS, configured **Pi-hole for network-wide ad blocking**, and deployed services like **Docker, Portainer, MySQL, and a Git server**.

This setup now runs quietly on my network, providing useful services for development and automation.

---

## Choosing Raspberry Pi Zero

![Raspberry Pi Zero Setup](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2024/09/raspberry-pi-zero.jpg?q=49&fit=crop&w=825&dpr=2)

For my first home server, I wanted something:

- Cheap
- Low power
- Always-on
- Small and silent

The **Raspberry Pi Zero** checked all those boxes.

- Extremely low power consumption
- Very affordable
- Perfect for lightweight services
- Large community and documentation

While it's not the most powerful Raspberry Pi model, it's more than capable of running small services like DNS, containers, and Git repositories.

---

## Installing DietPi Instead of Ubuntu or Raspbian

![DietPi Setup Screen](https://static0.xdaimages.com/wordpress/wp-content/uploads/wm/2025/08/dietpi-home-rpi-zero2w.jpg?q=49&fit=contain&w=711&h=400&dpr=2)

Most Raspberry Pi tutorials recommend **Raspberry Pi OS (Raspbian)** or **Ubuntu Server**, but I decided to use **DietPi**.

DietPi is a **lightweight and optimized Linux distribution** designed for single-board computers.

### Benefits

- Minimal resource usage
- Faster performance on low-end hardware
- Built-in software installer
- Easy configuration tools

This was perfect for the limited RAM and CPU of the Pi Zero.

### Installation Steps

1. Download the DietPi image
2. Flash it to the microSD card using **Balena Etcher**
3. Insert the card into the Pi
4. Power it on
5. SSH into the device

```bash
ssh root@dietpi.local
```

DietPi will automatically run its setup wizard the first time you log in.

---

---

## Using Pi-hole as My Local DNS and Ad Blocker

![Pi-hole Dashboard](https://www.techaddressed.com/wp-content/uploads/2022/04/pihole-dashboard.webp)

One of the first services I installed was **Pi-hole**.

Pi-hole works as a **network-wide DNS server** that blocks ads, trackers, and malicious domains before they even reach your devices.

### Benefits

- Blocks ads on all devices in the network
- Improves privacy
- Reduces bandwidth usage
- Speeds up browsing

### Installation

DietPi makes installation extremely simple.

```bash
dietpi-software
```

From the software list, select **Pi-hole** and install it.

After installation, configure your router to use the Pi's IP address as the **primary DNS server**.

---

---

## Installing Docker, Docker Compose, and Portainer

![Portainer Dashboard](https://cdn.prod.website-files.com/685ddfde8f36a9682093fa2b/686f42a4a161407a65245739_portainer-ui.png)

To make managing applications easier, I installed **Docker**.

Docker allows running applications inside **containers**, which keeps services isolated and easy to manage.

### Installing Docker

```bash
curl -sSL https://get.docker.com | sh
```

### Installing Docker Compose

```bash
sudo apt install docker-compose
```

### Installing Portainer

Portainer provides a **web interface for managing Docker containers**.

```bash
docker volume create portainer_data

docker run -d \
-p 9000:9000 \
--name portainer \
--restart=always \
-v /var/run/docker.sock:/var/run/docker.sock \
-v portainer_data:/data \
portainer/portainer-ce
```

You can now access Portainer at:

```
http://<pi-ip>:9000
```

---

---

## Installing MySQL from Portainer Template Images

![MySQL Container in Portainer](https://support.huaweicloud.com/intl/en-us/bestpractice-flexusl/en-us_image_0000001997606505.png)

Instead of installing MySQL manually, I used **Portainer templates**.

This made deployment much faster.

Steps:

1. Open **Portainer**
2. Go to **App Templates**
3. Select **MySQL**
4. Configure environment variables
5. Deploy the container

Within minutes, MySQL was running inside a Docker container.

---

## Installing Gogs Git Server

![Gogs Dashboard](https://elest.io/images/softwares/154/screenshot1.jpg)

To host my own Git repositories, I installed **Gogs**.

Gogs is a **lightweight self-hosted Git service**, perfect for low-powered hardware like the Raspberry Pi.

- Very lightweight
- Easy setup
- Clean web interface
- Supports Git over HTTP and SSH

It allows me to host my own code repositories without relying on external services.

---

## Website That Helped Me: Pi My Life Up

One website that helped me a lot during this process was:

👉 https://pimylifeup.com

It contains extremely detailed Raspberry Pi tutorials including:

- Docker
- Pi-hole
- Home servers
- Networking
- Automation

If you're getting started with Raspberry Pi projects, it's an amazing resource.

---

## Final Thoughts

Setting up my first home server turned out to be much easier than I expected.

With just a **Raspberry Pi Zero and a few open-source tools**, I now have:

- A **network-wide ad blocker**
- **Containerized services**
- A **local Git server**
- A **database server**

This project also helped me learn a lot about:

- Linux
- Docker
- Networking
- Self-hosting

If you're interested in learning DevOps, networking, or self-hosting, building a **home server is a great first step.**