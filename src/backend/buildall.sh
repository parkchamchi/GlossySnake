git pull origin master
source ~/.venv_gs/bin/activate
./buildvue.sh
python3.11 manage.py collectstatic
systemctl restart uwsgi
