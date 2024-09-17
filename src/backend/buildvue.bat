cd gs_index
call npm run build
ren dist\index.html vue.html
cd ..
copy gs_index\dist\vue.html templates\
xcopy gs_index\dist\static\* static\ /E /I /Y
