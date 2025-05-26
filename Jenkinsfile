pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root'
        }
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
