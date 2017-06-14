#!/bin/bash
#==============================================================================
#
# FILE: startscript.sh
#
# USAGE: startscript.sh
#
# DESCRIPTION: Saves the old JSON-File with the current Date appended and then
# starts the Crawler.
#
# AUTHOR: Niklas Bendixen (nb)
# VERSION: 1.0
# CREATED: 14.06.2017
# REVISION:
#==============================================================================

# Define Variables
BASEDIR=./~
CRAWLERDIR=${BASEDIR}/crawler
DATADIR=${BASEDIR}/data
WEBSITEDIR=${BASEDIR}/website
WEBSITEDATADIR=${WEBSITEDIR}/data
JSON=${WEBSITEDATADIR}/complete.json
DATE=$(date +"%Y%m%d")

# Save old JSON
echo "Saving old complete.json to $DATE.json"
cp -a $JSON $WEBSITEDATADIR/$DATE.json

# Start crawler
echo "Starting crawling from $CRAWLERDIR with Crawler minkorrekt ..."
scrapy $CRAWLERDIR minkorrekt

# Build all JSONs
