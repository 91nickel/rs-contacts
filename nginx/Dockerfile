FROM nginx:1.23.1

# nginx
RUN apt-get update -y && apt-get install -y apt-utils
RUN apt update && apt install -y python python3 python3-pip
RUN apt-get update -y && apt-get install -y nginx-extras cron curl certbot python3-certbot-nginx dnsutils

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

# timezone
RUN echo "Europe/Moscow" > /etc/timezone && dpkg-reconfigure -f noninteractive tzdata

COPY crontab.cfg /crontab.cfg
RUN crontab /crontab.cfg
RUN apt-get update && apt-get install -y systemd

CMD service cron start && nginx -g "daemon off;"
