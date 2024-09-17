#!/bin/bash
cd gs_index
npm run build
mv dist/index.html dist/vue.html
cd ..
cp gs_index/dist/vue.html templates/
cp gs_index/dist/static/* static/
