# ZKUADS

This project is a web application built with [Next.js](https://nextjs.org/). Follow the steps below to download, install, and run the application on your local machine.

## Prerequisites

Make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (Recommended version v20.18.0 LTS).

- npm (package manager that comes with Node.js) ``npm install -g npm``

You can verify the installation by running the following commands:

```bash
node -v
npm -v
```

## Clone the repository

You can clone the repository with the following command:

```bash
(SSH) git clone git@bitbucket.org:pow-gaming/zkuads-frontend.git

(HTTPS) git clone https://user@bitbucket.org/pow-gaming/zkuads-frontend.git
```

> *if you clone the repository using HTTPS, remember to replace 'user' with your Bitbucket username.*

## Installation and Branch switching
Navigate to the project root folder and install the dependencies with `npm`
```bash
cd zkuads-frontend
npm install
```
Switch to the `develop` branch to see the latest stable changes.
```bash
git checkout develop
```

## Run in production

To build and optimize the application for production, run:
```bash
npm run build
```
After building the project, you can run the app in production mode with:
```bash
npm run start
```