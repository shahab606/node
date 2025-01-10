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
                script{
                docker.image('Pipeline3').inside{
                    sh 'node app.js'
                }
            }
        }
    }  
}
}    
