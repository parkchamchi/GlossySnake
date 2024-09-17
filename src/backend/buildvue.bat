cd gs_index
call npm run build
ren dist\index.html vue.html
cd ..
xcopy gs_index\dist\* templates /E /I
