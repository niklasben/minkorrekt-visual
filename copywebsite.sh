#!/bin/bash
#==============================================================================
#
# FILE: copywebsite.sh
#
# USAGE: copywebsite.sh
#
# DESCRIPTION: Copies the Website-Files from the GitHub-Folder to the
# Apache-Folder.
#
# OPTIONS: see function ’usage’ below
# AUTHOR: Niklas Bendixen (nb)
# VERSION: 1.0
# CREATED: 14.06.2017
#==============================================================================

sudo cp -R website/* /var/www/html/minkorrekt/
