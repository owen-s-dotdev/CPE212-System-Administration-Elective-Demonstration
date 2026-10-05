#!/bin/bash

sudo apt remove -y ansible
sudo apt install -y software-properties-common
sudo add-apt-repository --yes --update ppa:ansible/ansible
sudo apt install -y ansible git tree
ansible-galaxy collection install -r ./CPE212-System-Administration-Elective-Demonstration/ansible/requirements.yml
ansible-playbook build_image.yml -K
ansible-playbook run_containers.yml -K
