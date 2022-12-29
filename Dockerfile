FROM nginx:stable-alpine as production-stage
COPY 	./ /USER/share/nginx/html
EXPOSE 80
CMD ["NGINX", "-g", "daemon off;"]
