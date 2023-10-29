#!/usr/bin/env bash
# exit on error
set -o errexit

# Install necessary gems
bundle install

# Run database migrations
bundle exec rake db:migrate
