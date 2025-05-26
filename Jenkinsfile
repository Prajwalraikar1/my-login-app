pipeline {
  agent any

  tools {
    nodejs 'NodeJS 18.20.0'  // Name from Jenkins Global Tool Config
  }

  stages {
    stage('Install') {
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
