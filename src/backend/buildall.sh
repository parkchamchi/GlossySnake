git pull origin master
./buildvue.sh
python3.11 manage.py collectstatic
systemctl restart uwsgi
