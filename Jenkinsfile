pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18'  // The name you gave in Jenkins global tools config
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Prajwalraikar1/my-login-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
