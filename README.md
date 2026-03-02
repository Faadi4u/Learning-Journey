# 🚀 The Learning Journey : From MERN to Modern Full Stack Engineer 

**Goal:** 
 ## Transition from a MERN Stack:
 - MongoDB  
 - React 
 - Express 
 - Node.js
 - TYpescript 
 - TailwindCSS

 ## to a Senior Full-Stack:
 - Frontend:
	1.	TypeScript
	2.	Next.js + Tailwind CSS + TanStack Query

 - Backend:
	3.	PostgreSQL + Prisma + NextAuth.js
	4.	NestJS + Redis
	5.	BullMQ + WebSockets / Real-time
	6.	tRPC

 - INFRA:
	7.	Docker + Docker Compose
	8.	Kubernetes
	9.	AWS (S3, ECS, Lambda) + Terraform

- DevOps & Observability:
	10.	GitHub Actions (CI/CD)
	11.	Observability: OpenTelemetry + Grafana 


by building **GateKeeper**—an evolving, production-grade Identity & Access Management (IAM) system.

This repository documents the evolution of a single application through 4 major architectural shifts.

---

## Project 1: v1-gatekeeper-mern(Baseline)

This is a monorepo tracking the evolution of **GateKeeper**:

## 🛠️ Tech Stack - MERN:
*   **Frontend:** React (Vite) + Tailwind CSS + Typescript
*   **Backend:** Node.js + Express + Typescript
*   **Database:** MongoDB (Mongoose ODM)
*   **Security:** JSON Web Tokens (JWT), Bcrypt.js

--- 

## 🛠️ The "GateKeeper" Project

**GateKeeper** is an Authentication Provider (similar to Auth0 or Clerk).

### Core Features (v1 Baseline):
- User Registration (Bcrypt hashing)
- User Login (JWT generation)
- Protected Routes (Custom Middleware)
- Profile Management

---

## 🧠 Daily Learning Log

### Phase 1: MERN Baseline
*Focus: Understanding the core logic of Authentication.*
- **[3-2-2026]**: Initialized project structure. Connected MongoDB.

---

## 🚀 How to Run

Each version is self-contained. Navigate to the specific folder and follow its internal README.

This project is split into `server` and `client`. You need two terminals.

```bash
# Example for v1
cd v1-gatekeeper-mern/client or /server 
npm install
npm run dev