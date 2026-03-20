---
title: Switching from Jenkins to Forgejo Actions
description: An overview of migrating CI/CD pipelines from Jenkins to Forgejo Actions. This article explains the motivations, migration process, and how Forgejo Actions simplifies automation while integrating seamlessly with self-hosted Git workflows.
slug: jenkins-to-actions
date: 2022-03-06 00:00:00+0000
image: cover.png
categories:
    - homelab
    - selfhosting
tags:
    - homelab
weight: 6
---

## Introduction

As my self-hosted infrastructure grew, I started setting up **CI/CD pipelines** to automate builds and deployments.

Initially, I used **Jenkins**, which is one of the most widely used automation servers. While Jenkins is extremely powerful, over time I realized it was not the best fit for my relatively small self-hosted environment.

Eventually, I decided to migrate my pipelines to **Forgejo Actions**, which integrates directly with my Git server and provides a simpler workflow for automation.

---

## Jenkins Was Heavy on Resources

One of the first issues I noticed with Jenkins was its **resource consumption**.

Jenkins is designed for large-scale CI environments, which means it comes with a lot of components and overhead.

In my home server environment, that translated to:

- Higher RAM usage
- Higher CPU usage
- Slower startup times
- More system resources consumed by the CI service

For a small infrastructure running on limited hardware, this felt unnecessary.

---

## A Large Application Just for Deploying

Another thing that stood out was how **large Jenkins is for simple tasks**.

In my case, most of my CI pipelines were fairly straightforward:

- Pull code from the repository
- Build the application
- Deploy it to my server

Running an entire Jenkins instance just for a few deployment pipelines started to feel excessive.

What I really wanted was something **lighter and tightly integrated with my Git workflow**.

---

## Jenkins Pipeline Syntax Was Harder to Maintain

Jenkins pipelines are typically written using **Groovy-based syntax**.

While powerful, it can be harder to read and maintain compared to simpler YAML-based configurations used by many modern CI systems.

For example, a Jenkins pipeline might look like this:

```groovy
pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh './deploy.sh'
      }
    }
  }
}
```

While this works well, maintaining multiple pipelines in this format becomes cumbersome compared to simpler declarative CI systems.

---

## Plugin Ecosystem Issues

Jenkins relies heavily on **plugins**.

While the plugin ecosystem is one of Jenkins' strengths, it can also become a problem over time.

Some challenges I ran into included:

- Plugins becoming outdated
- Some plugins no longer being actively maintained
- Compatibility issues between plugins
- Upgrades occasionally breaking pipelines

Managing plugin dependencies added extra complexity that I wanted to avoid.

---

## Why Forgejo Actions Made More Sense

Since I was already hosting my repositories on **Forgejo**, using **Forgejo Actions** felt like a natural next step.

Forgejo Actions is compatible with the **GitHub Actions workflow format**, which makes it easy to define CI pipelines using simple YAML files stored inside the repository.

Example workflow:

`.forgejo/workflows/deploy.yml`

```yaml
name: Deploy Application

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: docker

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm install

      - name: Deploy
        run: ./deploy.sh
```

This approach keeps the CI configuration **inside the repository**, version-controlled alongside the code.

---

## Benefits of Forgejo Actions

Moving to Forgejo Actions simplified my workflow significantly.

Some of the advantages include:

- Lightweight compared to Jenkins
- No separate large CI server required
- YAML-based workflows that are easy to read
- CI configuration stored directly in the repository
- Native integration with my self-hosted Git server

Since everything is tied directly to the Git platform, the workflow feels much more streamlined.

---

## Migration Process

Migrating from Jenkins to Forgejo Actions was relatively straightforward.

The steps I followed were:

1. Review existing Jenkins pipelines
2. Convert pipeline logic into YAML workflows
3. Add workflow files to the repository
4. Configure Forgejo runners
5. Test deployments

After migrating a few pipelines, the new system quickly became easier to maintain.

---

## Final Thoughts

Jenkins remains a powerful and widely used automation platform, especially in large enterprise environments.

However, for **self-hosted infrastructure and smaller setups**, it can sometimes be more complex than necessary.

Switching to **Forgejo Actions** gave me:

- A simpler CI/CD workflow
- Lower resource usage
- Better integration with my Git platform
- Easier pipeline maintenance

For anyone already running **Forgejo or Gitea**, using built-in CI features like Forgejo Actions can be a great way to simplify automation.