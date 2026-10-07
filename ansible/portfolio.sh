#!/bin/bash
#	HELP: use *bash portfolio.sh --skip-install* command to skip 
#	lengthy installation process and password setup
#	Use it when the script was already run at least once

if  [ -z "$1" ]; then
	#Section that sets up the ansible
	sudo apt remove -y ansible
	sudo apt install -y software-properties-common
	sudo add-apt-repository --yes --update ppa:ansible/ansible
	sudo apt install -y ansible git tree

	#Install required docker packages
	ansible-galaxy collection install -r requirements.yml
fi

#Setup the ansible-vault
if [ -z "$1" ] ; then
	echo "pass123" > vaultpass.txt
	chmod 600 vaultpass.txt
	ansible-playbook create_vault.yaml
fi

if [ -z "$1" ]; then
	#Run the docker image builder
	ansible-playbook build_image.yml --vault-password-file vaultpass.txt

	#Run containers for all remote hosts
	ansible-playbook run_containers.yml --vault-password-file vaultpass.txt
fi

if [ "$1" = "--skip-install" ]; then
	ansible-playbook build_image.yml --skip-tags "install" --vault-password-file vaultpass.txt

	ansible-playbook run_containers.yml --vault-password-file vaultpass.txt
fi
