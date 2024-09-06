rm db.sqlite3
cd upload
rm -rf migrations
cd ..

python3.11 manage.py makemigrations
python3.11 manage.py makemigrations upload

python3.11 manage.py migrate
