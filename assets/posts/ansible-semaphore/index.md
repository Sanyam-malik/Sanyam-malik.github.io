---
title: Automating Infrastructure with Ansible and Semaphore
description: A guide on using Ansible with Semaphore to automate infrastructure tasks. Covers writing playbooks, configuring Semaphore, and managing automated deployments and maintenance tasks in a clean and repeatable workflow.
slug: ansible-semaphore
date: 2022-03-06 00:00:00+0000
image: cover.png
categories:
    - homelab
    - selfhosting
tags:
    - homelab
    - ansible
weight: 4
---

## Introduction

As my home server setup started growing, managing everything manually quickly became tedious.

Spinning up new containers, updating packages, and maintaining services meant repeating the same commands again and again. While this works for a few machines, it becomes inefficient and error-prone as infrastructure grows.

To solve this, I started exploring **infrastructure automation** using **Ansible**, and eventually paired it with **Semaphore** to manage playbooks through a clean web interface.

This setup allows me to automate common infrastructure tasks and keep everything consistent.

---

## Why I Needed Automation

The main reason I started automating my infrastructure was simple:

**Too many repetitive tasks.**

Some of the things I had to do regularly included:

- Updating DNS entries whenever a new **LXC container** was created
- Running system package updates
- Installing common tools on new machines
- Configuring services in a consistent way
- Maintaining multiple containers across my home lab

Manually performing these tasks every time a new container was spun up was inefficient and easy to forget.

Automation solved this problem by allowing me to define the configuration **once** and apply it anywhere.

---

## Why I Chose Ansible

Ansible is a popular **configuration management and automation tool** used widely in DevOps environments.

What made Ansible appealing for my setup:

- Agentless (no software required on target machines)
- Uses simple **YAML playbooks**
- Works over SSH
- Easy to learn and extend
- Great for both small setups and large infrastructures

Instead of manually logging into each container, I could define tasks in a **playbook** and apply them automatically.

---

## Basic Inventory File

Ansible needs an **inventory file** that lists the servers it manages.

Example `inventory.ini`:

```ini
[lxc_containers]
web01 ansible_host=192.168.1.101
web02 ansible_host=192.168.1.102
db01 ansible_host=192.168.1.110

[lxc_containers:vars]
ansible_user=root
```

This tells Ansible which machines belong to the **lxc_containers** group.

---

## Example Playbook: Updating Packages

One of the simplest automations is **updating all systems**.

`update-packages.yml`

```yaml
---
- name: Update all LXC containers
  hosts: lxc_containers
  become: true

  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes

    - name: Upgrade all packages
      apt:
        upgrade: dist

    - name: Remove unused dependencies
      apt:
        autoremove: yes
```

Run it with:

```bash
ansible-playbook -i inventory.ini update-packages.yml
```

This will update every container in the inventory.

---

## Example Playbook: Installing Common Tools

When I spin up new containers, I usually want a few common tools installed.

`bootstrap.yml`

```yaml
---
- name: Bootstrap new containers
  hosts: lxc_containers
  become: true

  tasks:
    - name: Install common packages
      apt:
        name:
          - git
          - curl
          - htop
          - vim
          - unzip
        state: present
        update_cache: yes
```

This ensures all systems start with a consistent base environment.

---

## Example Playbook: Updating DNS Entries

One of the tasks I automated was updating DNS records whenever a new container was created.

Example playbook:

`update-dns.yml`

```yaml
---
- name: Update DNS entries
  hosts: localhost

  vars:
    hostname: web01
    ip_address: 192.168.1.101

  tasks:
    - name: Add DNS record
      lineinfile:
        path: /etc/dns/hosts
        line: "{{ ip_address }} {{ hostname }}"
        create: yes
```

This automatically updates a DNS hosts file when infrastructure changes.

---

## Running Playbooks with Semaphore

Instead of running playbooks manually every time, I use **Semaphore** to manage them.

Semaphore provides:

- A web UI for running playbooks
- Credential management
- Job scheduling
- Execution logs

Typical workflow:

1. Push playbooks to a Git repository
2. Link the repository in Semaphore
3. Create a **task template**
4. Run or schedule the automation job

For example, I schedule:

- **Weekly package updates**
- **Infrastructure maintenance tasks**

All without needing to log in manually.

---

## Benefits of This Setup

Using **Ansible + Semaphore** gave me several advantages:

- Repeatable infrastructure management
- Less manual work
- Consistent system configuration
- Easy automation of common tasks
- Visibility into automation runs

Even in a small home lab environment, automation helps keep systems **organized and reliable**.

---

## Final Thoughts

Infrastructure automation is often associated with large production environments, but it’s equally valuable for **personal servers and home labs**.

With tools like **Ansible** and **Semaphore**, it becomes easy to automate routine tasks and manage systems more efficiently.

For me, this setup turned infrastructure management from a series of manual steps into a **clean, repeatable workflow**.

And once automation is in place, expanding the infrastructure becomes much easier.