pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh "mvn clean"   //clear old builds
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh "mvn test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                "mvn package"
            }
        }
    }
}
