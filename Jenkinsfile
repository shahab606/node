pipeline {
    agent any

    stages {
        stage('PreBuild') {
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
        stage('Build Docker image') {
            steps {
                script {
                    sh 'docker build -t node-image .'
            }
        }
    }
        stage('Run Docker Container'){
            steps{
                script{
                    sh 'docker run -d -p 3000:3000 --name my-node-app node-image'
                    sh 'init -y'
                    sh 'npm install express'
                    sh 'node app.js'
                }
            }
         }
        }  
      post {
        always{
            clean up docker container and image after build
            script{
                sh 'docker stop my-node-app || true'
                sh 'docker rm my-node-app || true'
                sh 'docker image rmi node-image || true'
            }       
        }
    }     
  } 

