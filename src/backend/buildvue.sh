#!/bin/bash
cd gs_index
npm run build
mv dist/index.html dist/vue.html

# Add the line "{% load static %}" at the start of dist/vue.html
sed -i '1s/^/{% load static %}\n/' dist/vue.html

cd ..
cp gs_index/dist/vue.html templates/
cp gs_index/dist/static/* static/
