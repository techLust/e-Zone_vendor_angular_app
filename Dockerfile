ARG IMAGE=node:18-alpine
FROM $IMAGE

ENV NGINX_VERSION 1.22.0
ENV NJS_VERSION   0.7.4
ENV PKG_RELEASE   1

ARG UID=101
ARG GID=101

RUN set -x \
# create nginx user/group first, to be consistent throughout docker variants
    && addgroup -g $GID -S nginx || true \
    && adduser -S -D -H -u $UID -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx || true  \
    && apk add nginx \
    && ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log \
# create a docker-entrypoint.d directory
    && mkdir /docker-entrypoint.d
RUN mkdir /var/cache/nginx/
# implement changes required to run NGINX as an unprivileged user
RUN  sed -i '/user  nginx;/d' /etc/nginx/nginx.conf \
    && sed -i 's,/var/run/nginx.pid,/tmp/nginx.pid,' /etc/nginx/nginx.conf \
    && sed -i "/^http {/a \    proxy_temp_path /tmp/proxy_temp;\n    client_body_temp_path /tmp/client_temp;\n    fastcgi_temp_path /tmp/fastcgi_temp;\n    uwsgi_temp_path /tmp/uwsgi_temp;\n    scgi_temp_path /tmp/scgi_temp;\n" /etc/nginx/nginx.conf \
# nginx user must own the cache and etc directory to write cache and tweak the nginx config
    && chown -R $UID:0 /var/cache/nginx \
    && chmod -R g+w /var/cache/nginx \
    && chown -R $UID:0 /etc/nginx \
    && chmod -R g+w /etc/nginx
    
# COPY ./dockerEntryPoint/docker-entrypoint.sh /
# ENTRYPOINT ["/docker-entrypoint.sh"]  
# Copy the content into nginx folder
COPY ./dist/vertikalitiFirebase /usr/share/nginx/
# copy the nginx congif file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

STOPSIGNAL SIGQUIT

USER $UID

CMD ["nginx", "-g", "daemon off;"]