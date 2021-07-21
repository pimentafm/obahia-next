#!/bin/bash

cp -rf out homepage 

find homepage -type f | xargs sed -i 's/images\/image01.png/html\/homepage\/images\/image01.png/g'
find homepage -type f | xargs sed -i 's/images\/image02.png/html\/homepage\/images\/image02.png/g'
find homepage -type f | xargs sed -i 's/images\/image03.png/html\/homepage\/images\/image03.png/g'


find homepage -type f | xargs sed -i 's/href="ruralprofit"/href="\/html\/homepage\/ruralprofit.html"/g'
find homepage -type f | xargs sed -i 's/href="governance"/href="\/html\/homepage\/governance.html"/g'
