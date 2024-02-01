#!/bin/sh

set -x -e -u -o pipefail

if [ "$#" -ne '0' ]
then
  printf '%s\n' 'No arguments should be passed.'

  exit 1
fi

prettier --cache --cache-location './.cache/prettier' -w '.'
