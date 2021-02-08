FROM nginx
COPY ./default.conf /etc/nginx/conf.d
COPY ./dist/admin-manager-client/* /usr/share/nginx/html
