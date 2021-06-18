# Generate key and cert for https server
## Self-signed key
    openssl req -newkey rsa:2048 -new -nodes -keyout server-key.pem -out csr.pem
## Self-signed certificate
    openssl x509 -req -days 365 -in csr.pem -signkey server-key.pem -out server-crt.pem
# npm run pretty 
