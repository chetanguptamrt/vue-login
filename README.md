# Vue Login
Vue Login Sample

### Requirements-
1. Nodejs - 18.*
2. MongoDB - 5.*
3. Nginx

### To start server-
1. cd server
2. npm i
3. npm start

### To start client-
1. cd /etc/nginx/sites-available
2. sudo nano default
~~~
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /home/user/workspace/Vue/client;
        index index.html;

	server_name _;

	location / {
                try_files $uri $uri/ /index.html;
	}

	location /api {
	        proxy_pass http://localhost:5001;
	        proxy_http_version 1.1;
	        proxy_set_header Upgrade $http_upgrade;
	        proxy_set_header Connection 'upgrade';
	        proxy_set_header Host $host;
	        proxy_cache_bypass $http_upgrade;
		proxy_set_header X-Forwarded-For $remote_addr;
	}
}
~~~
3. sudo systemctl restart nginx
