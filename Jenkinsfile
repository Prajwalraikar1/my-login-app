pipeline {
    agent any

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
