# 🚀 Portfolio Website

A modern, containerized portfolio website showcasing my skills, projects, and journey as a Cloud & DevOps Engineer.

The application is fully automated with a CI/CD pipeline using GitHub Actions, Amazon ECR, Docker, and Amazon EC2.

---

## 🌍 Live Demo

**Website**

https://ifeanyidivine-dev.vercel.app/

> A custom domain with HTTPS will be added soon.

---

# 📖 Overview

This project demonstrates how a static website can be deployed using modern DevOps practices.

Instead of manually copying files to a server, every code change pushed to GitHub automatically:

- Builds a Docker image
- Pushes the image to Amazon ECR
- Connects securely to an EC2 instance
- Pulls the latest image
- Deploys the updated application automatically

This project serves as both my personal portfolio and a practical demonstration of CI/CD automation on AWS.

---

# 🛠️ Tech Stack

### Cloud

- Amazon EC2
- Amazon ECR
- IAM

### DevOps

- Docker
- Docker Compose
- GitHub Actions
- CI/CD

### Frontend

- HTML5
- CSS3
- JavaScript

### Web Server

- Nginx

### Version Control

- Git
- GitHub

---

# 📂 Project Structure

```text
portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

# ⚙️ CI/CD Workflow

Every push to the `main` branch automatically triggers:

```
Git Push
     │
     ▼
GitHub Actions
     │
     ▼
Build Docker Image
     │
     ▼
Push Image to Amazon ECR
     │
     ▼
SSH into Amazon EC2
     │
     ▼
Pull Latest Image
     │
     ▼
Restart Docker Container
     │
     ▼
Portfolio Updated
```

---

# 🚀 Running Locally

Clone the repository

```bash
git clone https://github.com/Semicrypt/Portfolio.git
```

Move into the project

```bash
cd Portfolio
```

Build and start

```bash
docker compose up --build
```

Open

```
http://localhost:8080
```

---

# 📦 Deployment

Deployment is fully automated through GitHub Actions.

Whenever changes are pushed to the `main` branch:

1. Docker image is built
2. Image is pushed to Amazon ECR
3. EC2 server pulls latest image
4. Docker Compose updates the running container

No manual deployment is required.

---

# 🎯 Features

- Responsive Design
- Dockerized Application
- Automated CI/CD Pipeline
- Amazon EC2 Deployment
- Amazon ECR Image Registry
- GitHub Actions Automation
- Nginx Web Server

---

# 📈 Future Improvements

- Custom Domain
- HTTPS (SSL)
- Terraform Infrastructure
- Monitoring with Prometheus & Grafana
- Kubernetes Deployment

---

# 👨‍💻 Author

## Nwachukwu Ifeanyi Divine

Cloud & DevOps Engineer

GitHub

https://github.com/Semicrypt

LinkedIn

https://www.linkedin.com/in/nwachukwu-ifeanyi-divine-31b9793a6

Email

ifeanyidivine1999@gmail.com

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.