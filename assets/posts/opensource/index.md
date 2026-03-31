---
title: Open Source vs “Source Available” Understanding OSI Licenses
description: An exploration of the difference between true open source software and “source-available” licenses used by some modern projects. This article explains what qualifies as an OSI-approved license, why licenses like SSPL (used by MongoDB) are controversial, and how licensing choices impact developers, companies, and the open source ecosystem.
slug: opensource
date: 2022-03-06 00:00:00+0000
image: cover.png
categories:
    - general
tags:
    - general
weight: 3
---

## Introduction

The terms **“open source”** and **“source available”** are often used interchangeably, but they do not mean the same thing.

Many modern software projects publish their source code publicly, which can make them appear open source. However, the license attached to the code determines what people are actually allowed to do with it.

Understanding the difference between **true open source software** and **source-available software** is important for developers, companies, and anyone building products on top of existing tools.

---

## What Is True Open Source?

True open source software follows the **Open Source Definition (OSD)** established by the **Open Source Initiative (OSI)**.

For software to be considered open source, its license must allow:

- Free redistribution  
- Access to source code  
- The ability to modify the software  
- The ability to distribute modified versions  
- No discrimination against users or fields of use  

These freedoms ensure that software remains **collaborative, transparent, and community-driven**.

Some well-known **OSI-approved licenses** include:

- MIT License
- Apache License 2.0
- GNU General Public License (GPL)
- BSD License

These licenses guarantee that anyone can use, study, modify, and distribute the software.

---

## What Is “Source Available” Software?

Source-available software is software where the **source code is visible**, but the license places **restrictions on how it can be used**.

In many cases, companies release their source code publicly while still limiting:

- Commercial usage
- Cloud hosting
- Redistribution
- Competing services

Because of these restrictions, **source-available licenses are not considered open source** by the OSI.

Examples of source-available licenses include:

- Server Side Public License (SSPL)
- Business Source License (BSL)
- Elastic License

These licenses are often used by companies that want to **protect their business model while still maintaining transparency around their codebase**.

---

## Why SSPL Became Controversial

One of the most discussed examples of a source-available license is the **Server Side Public License (SSPL)**.

The SSPL was introduced by MongoDB as a modification of the GPL.

The key idea behind SSPL is that if a company offers the software **as a service**, they must release the source code for the entire service stack.

This means companies cannot simply take the software, run it as a hosted service, and keep their surrounding infrastructure proprietary.

While this was intended to protect MongoDB from large cloud providers monetizing their software, it created controversy.

### Why it’s controversial

- The license requires releasing **much more than the original software**
- Cloud providers must open source their entire service stack
- Many organizations consider the requirements too restrictive

---

Because of these concerns, the **Open Source Initiative rejected SSPL as an open source license**.

As a result, software under SSPL is considered **source-available rather than open source**.

---

## Why Companies Use Source-Available Licenses

Over the past decade, many companies have faced a challenge.

Open source software can be used by anyone — including large cloud providers that may build profitable services around the project without contributing back.

To address this, some companies introduced **source-available licenses** to protect their commercial interests.

Common goals include:

- Preventing large cloud providers from reselling the software
- Encouraging companies to buy commercial licenses
- Maintaining control over hosted services

While these licenses can help companies sustain development, they also blur the line between **open source collaboration and proprietary control**.

---

## How Licensing Impacts Developers

Licensing decisions have a significant impact on developers and organizations.

### For individual developers

Developers need to understand:

- Whether they can modify the software
- Whether they can redistribute it
- Whether they can build commercial products on top of it

### For companies

Organizations must consider:

- Legal risks when using software
- Compliance with license requirements
- Whether the license allows commercial usage

---

Using software without understanding its license can lead to **legal and operational complications** later.

---

## Why the Distinction Matters

The difference between **open source** and **source available** may seem subtle, but it has important implications.

Open source software ensures:

- Freedom to use the software for any purpose
- Community-driven development
- Long-term sustainability through open collaboration

Source-available software, on the other hand, provides **transparency without full freedom**.

This distinction affects how software can be:

- Distributed
- Monetized
- Integrated into other systems

For developers building products or infrastructure, understanding licensing is just as important as understanding the code itself.

---

## Final Thoughts

The software ecosystem continues to evolve, and licensing models are evolving with it.

Traditional open source licenses prioritize **freedom and collaboration**, while newer source-available licenses try to balance **openness with business sustainability**.

Neither approach is inherently wrong, but they serve different purposes.

For developers and organizations, the key takeaway is simple:

**Always check the license before using software.**

Understanding whether a project is truly open source or simply source-available can save time, prevent legal issues, and help you make better technology decisions.