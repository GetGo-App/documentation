---
sidebar_position: 1
---

# Introduction

Welcome to GetGo! Our app makes your travels easier by combining three key features: a chatbot to help you find information and create routes, a social media platform to share and view travel photos, and a list of popular destinations with location details.

## Getting Started

To use GetGo, simply install the app using the provided `apk` file. Once installed, you can start exploring all the features right away.

If you'd like to set up your own version of the app, follow these steps:


### Frontend Setup

**Requirements:** Android Studio

**Installation Steps:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GetGo-App/getgo-frontend
   ```

2. **Open the project in Android Studio:**

   - Open Android Studio.
   - Select "Open an existing Android Studio project."
   - Find the GetGo-Mobile folder in the cloned repository.

3. **Build and Run:**

   - Sync the project with Gradle files.
   - Build the project by selecting **Build > Rebuild Project**.
   - Connect your Android device or start an emulator.
   - Click the Run button or select **Run > Run 'app'**.

### AI Engine Setup

**Requirements:**

- Python 3.10
- Docker
- Bash
- Required libraries (listed in `requirements.txt`)

**Installation Steps:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/pphuc25/GetGo-AI.git
   ```

2. **Start Searxng:**

   ```bash
   cd searxng-docker
   docker-compose up -d
   ```

3. **Configure Environment Variables:**

   - Open the `.env` file in the project root.
   - Enter your API keys and other necessary values.

4. **Build and run the Docker container:**

   ```bash
   docker build -t GetGo-AI .
   docker run -p 7860:7860 GetGo-AI
   ```

### Backend Setup

**Requirements:** Visual Studio 2022 or Visual Studio Code (with C# Dev Kit extension)

**Installation Steps:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GetGo-App/getgo-backend
   ```

2. **Install NPM packages using NuGet:**

   - Refer to Stack Overflow for more details on installing NuGet packages.

3. **Build and Run:**

   - Set `getgo-backend` as the Startup Project.
   - Press F5 or click the `getgo-backend` button to build and run the project.
