#!/bin/bash

for file in $(ls {*.jpg,*.JPG,*.png}); do 
	newfileName=$(echo $file | sed 's/.jpg|.JPG|.png//')
	mv $file $newfileName.png
done
