del db.sqlite3

cd upload
rmdir /s /q migrations
cd ..

python manage.py makemigrations
python manage.py makemigrations upload

python manage.py migrate