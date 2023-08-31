#!/bin/sh
# vim:sw=4:ts=4:et
set -e

if [ -z "${NGINX_ENTRYPOINT_QUIET_LOGS:-}" ]; then
    exec 3>&1
else
    exec 3>/dev/null
fi

exec "$@"
``