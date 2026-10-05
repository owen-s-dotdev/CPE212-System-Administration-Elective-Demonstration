#!/bin/bash

#Section that sets up the ansible
sudo apt remove -y ansible
sudo apt install -y software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install -y ansible git tree

#Install the collections
ansible-galaxy collection install -r requirements.yml

#Build Image for all remote hosts
ansible-playbook build_image.yml -K

#Run containers for all remote hosts
ansible-playbook run_containers.yml -K
