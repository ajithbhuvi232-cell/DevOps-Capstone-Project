# 🚀 DevOps Capstone Project - Car Inventory App

## 📌 Project Overview
This project demonstrates an end-to-end DevOps pipeline for a Node.js Car Inventory application.

It includes CI/CD automation using Jenkins, containerization using Docker, deployment on AWS EC2, and monitoring using Prometheus and Grafana.

---

## 🛠️ Tech Stack
- Node.js
- Docker
- Jenkins
- AWS EC2
- Prometheus
- Grafana
- Bash & Cron

---

## 🏗️ Architecture
GitHub → Jenkins → DockerHub → EC2 (App Server) → Monitoring (Prometheus + Grafana)

---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/ajithbhuvi232-cell/DevOps-Capstone-Project.git
cd DevOps-Capstone-Project

### 2. Install Dependencies
npm install

### 3. Run Application
node index.js

---

## 🐳 Docker Commands

### Build Image
docker build -t ajithkumar0104/capstoneproject .

### Run Container
docker run -d -p 3000:3000 ajithkumar0104/capstoneproject

---

## 🔄 CI/CD Pipeline
1. Code pushed to GitHub
2. Jenkins pipeline triggers
3. Docker image is built
4. Image pushed to DockerHub
5. Application deployed on EC2 via SSH

---

## 📊 Monitoring
- Node Exporter installed on EC2
- Prometheus collects metrics
- Grafana dashboard for visualization

---

## ⏰ Automation
Cron jobs used for:
- Log cleanup
- Backup tasks

---
