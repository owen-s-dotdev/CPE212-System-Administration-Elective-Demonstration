#!/bin/bash
#HELP: use *bash portfolio.sh --skip-install* command to skip lengthy installation process

if  [ -z "$1" ]; then
	#Section that sets up the ansible
	sudo apt remove -y ansible
	sudo apt install -y software-properties-common
	sudo add-apt-repository --yes --update ppa:ansible/ansible
	sudo apt install -y ansible git tree

	#Install required docker packages
	ansible-galaxy collection install -r requirements.yml
fi

if [ -z "$1" ] || [ "$1" = "--skip-install" ]; then
	#Run the docker image builder
	ansible-playbook build_image.yml -K

	#Run containers for all remote hosts
	ansible-playbook run_containers.yml -K
fi
