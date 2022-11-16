#!/bin/bash

for file in *.heif; do
	new_file_name=$(echo $file | sed 's/.heif//')
	heif-convert -q 100 $file $new_file_name.jpg;
done
