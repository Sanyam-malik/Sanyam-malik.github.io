---
title: Why I Switched from GitHub to Forgejo
description: A look at why I moved my repositories from GitHub to Forgejo, focusing on concerns around AI training on public code, platform control, and the benefits of self-hosted and community-driven Git services.
slug: switch-to-forgejo
date: 2022-03-06 00:00:00+0000
image: cover.png
categories:
    - selfhosting
    - homelab
tags:
    - homelab
weight: 5
---

## Introduction

For a long time, GitHub was my default place to host code. It’s convenient, widely used, and integrates well with many development tools.

However, as my home server setup evolved and my priorities around privacy and control changed, I started reconsidering where my code should live.

This journey eventually led me from **GitHub → Gogs → Gitea → Forgejo**, ending with a setup where I control my own Git infrastructure.

---

## Already Running Gogs

Since I already had a **home server**, I decided to experiment with running my own Git service.

My first choice was **Gogs**, mainly because it was:

- Lightweight
- Easy to install
- Perfect for low-power hardware
- Simple to manage

Running Gogs allowed me to host my own repositories locally and understand how self-hosted Git platforms work.

It worked well for basic repository hosting, but over time I started needing more features.

---

## Upgrading My Server Hardware

Originally, my server ran on a **Raspberry Pi Zero**, which was great for lightweight services but limited in performance.

As my usage increased, I upgraded my setup to:

- **Raspberry Pi 3B**
- **1GB RAM**

This upgrade gave me enough resources to run more services comfortably, including a more feature-rich Git platform.

---

## Switching from Gogs to Gitea

With the additional hardware resources available, I moved from **Gogs** to **Gitea**.

Gitea provided a much more complete development platform with features like:

- Better repository management
- Webhooks and integrations
- Issue tracking
- Pull requests
- CI/CD support

It felt much closer to a full development platform rather than just a Git server.

This made it a great central place to manage my personal projects.

---

## Handling Code That Contained Secrets

While testing some experimental projects, I occasionally had situations where:

- Code required **temporary secrets**
- Configuration values needed to stay private
- The repository wasn’t ready to be public

During these early development phases, I sometimes committed those values directly in the codebase for quick testing.

Obviously this is **not ideal for public repositories**, but inside a **self-hosted private Git server**, it was manageable for short-term experiments.

This made my self-hosted Git instance a **safe staging area** before publishing code elsewhere.

---

## Using Gitea as a Gateway Before Publishing to GitHub

Over time, my workflow evolved.

Instead of pushing code directly to GitHub, I started using my self-hosted Git server as the **primary development environment**.

The process became:

1. Develop and commit code locally
2. Push to my self-hosted Git server
3. Clean up sensitive configuration
4. Verify that nothing private is exposed
5. Publish to GitHub using a pipeline

In this model, my Git server became a **gateway or staging area** before anything became public.

---

## Distrust of GitHub After the Rise of AI Training

Another factor that influenced my decision was the growing discussion around **AI models being trained on public code repositories**.

When tools like ChatGPT and other code-generation models became popular, questions started appearing around:

- How public code is used for training
- Whether developers have meaningful consent
- How platforms manage user data

While GitHub remains an extremely useful platform, the increasing centralization of developer infrastructure made me rethink whether I wanted all of my work hosted there.

This pushed me further toward **owning my own infrastructure**.

---

## Why I Eventually Moved to Forgejo

Over time, I also started paying closer attention to the **governance and ownership structure** behind the tools I rely on.

Originally, Gitea was developed as a fully community-driven project. However, things changed when the maintainers created a **for-profit company and transferred the intellectual property (IP) ownership of the project to that company**.

The concern for many people in the community was not the existence of a company itself — companies supporting open source projects is very common and often healthy. The issue was **how the ownership structure was handled**.

Many contributors and community members had expected a different model:

- The **project IP would be placed in a neutral non-profit foundation**
- A **separate company would provide paid services, hosting, or enterprise support**

This model is used by many well-known open source projects because it helps ensure that the **project itself remains community-owned and protected from commercial control**.

Instead, ownership of the project IP was transferred directly to the newly created **for-profit entity**. For some contributors, this raised concerns about:

- Long-term project independence  
- Community governance  
- The possibility of future licensing or direction changes  

This situation eventually led to the creation of **Forgejo**, a community-driven fork of Gitea that aims to keep the project **fully open, transparent, and independent of corporate ownership**.

Because of these governance concerns, moving to Forgejo felt like the more aligned choice for me. It keeps the same familiar ecosystem while ensuring that the project remains **community-first and openly governed**.

---

## My Current Approach

Today, my workflow is much simpler.

Most of my repositories now live entirely on my **self-hosted Forgejo instance**.

I no longer publish new repositories directly to GitHub.

The only repositories that still exist on GitHub are things like:

- Portfolio projects
- Blog-related repositories
- Public examples meant for visibility

Everything else stays on infrastructure that **I control**.

---

## Final Thoughts

GitHub is still an incredible platform and has contributed enormously to the open source ecosystem.

However, self-hosting my Git infrastructure gave me several advantages:

- Full control over my code
- Better privacy
- Flexible workflows
- Independence from centralized platforms

Moving to Forgejo wasn’t about rejecting GitHub entirely — it was about **owning the foundation of my development workflow**.

For anyone running a home lab or personal infrastructure, hosting your own Git server is an incredibly rewarding step.