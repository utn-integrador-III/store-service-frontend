#!/bin/sh

# Generar env.js con variables de entorno para frontend en runtime
cat <<EOF > /usr/share/nginx/html/env.js
window.env = {
  API_URL: "${API_URL}"
};
EOF

exec "$@"