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
        stage('Build') {
            steps {
                script {
                    docker.build('Pipeline_3')
            }
        }
    }
        stage('Run'){
            steps{
                docker.image('Pipeline_3').inside{
                    sh 'Pipeline_3'
                }
            }
        }
    }  
}
