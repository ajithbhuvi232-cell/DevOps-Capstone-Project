pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "ajithkumar0104/capstoneproject:latest"
        APP_SERVER = "ubuntu@172.31.0.5"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ajithbhuvi232-cell/DevOps-Capstone-Project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('DockerHub Login & Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub_token', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push $DOCKER_IMAGE
                    '''
                }
            }
        }

        stage('Deploy to App Server') {
            steps {
                sshagent(['app_server_key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no $APP_SERVER "
                    docker pull $DOCKER_IMAGE;
                    docker stop car-app || true;
                    docker rm car-app || true;
                    docker run -d -p 3000:3000 --name car-app $DOCKER_IMAGE
                    "
                    '''
                }
            }
        }
    }
}