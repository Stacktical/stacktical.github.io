---
layout: post
featured: true
title:  "DSLA.eth ENS Domain Name Acquired"
author: Team
categories: [ blockchain, ethereum ]
image: assets/img/2019-08-23-dsla-dot-eth-secured-ens-ethereum-name-service.jpg
---

# Host a IPFS node on Google Cloud Platform in 3 Steps
# The definite guide to protected IPFS code in the Cloud

## Storage layer


Add to fstab:
```
UUID=aefaa284-e247-4c81-a9c6-1493b4aa4e9b /mnt/disks/ipfs ext4 discard,defaults,nofail 0 2
```

```
echo 'export IPFS_PATH=/data/ipfs' >>~/.bash_profile
source ~/.bash_profile
sudo chown -R  ubuntu:ubuntu $IPFS_PATH/*
```

```
silversurfer@influxdb-dsla-vm:~/influxdb/influxdb-fetcher$ sudo ipfs-update install v0.4.22
fetching go-ipfs version v0.4.22
binary downloaded, verifying...
success! tests all passed.
stashing old binary
installing new binary to /usr/local/bin/ipfs
checking if repo migration is needed...

Installation complete!
Remember to restart your daemon before continuing
```

We can now automate the IPFS daemon management with 

Create 
```
sudo bash -c 'cat >/lib/systemd/system/ipfs.service <<EOL
[Unit]
Description=IPFS Daemon
After=network.target

[Service]
ExecStart=/usr/local/bin/ipfs daemon
User=ipfs
Restart=always
LimitNOFILE=10240
Environment="IPFS_PATH=/mnt/disks/ipfs/ipfs_data/"

[Install]
WantedBy=multi-user.target
EOL'
```
```
$ sudo systemctl daemon-reload
$ sudo systemctl enable ipfs
$ sudo systemctl start ipfs
```

## About the Ethereum Name Service (ENS)


## Hardening

we strongly recommend enabling unattended upgrades on your server

## Welcome to the Decentralized Web


## Secure your IPFS server

### Install Certbot

`https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx.html`


```
server {
    server_name ipfs.dsla.network; # managed by Certbot

    location /api/v0/add {
            proxy_pass http://localhost:5001;
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            allow all;
    }

    location /ipfs {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        allow all;
    }

    location / {
            proxy_pass http://localhost:5001;
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
            deny all;
    }


    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/ipfs.dsla.network/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/ipfs.dsla.network/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = ipfs.dsla.network) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80 ;
        listen [::]:80 ;
    server_name ipfs.dsla.network;
    return 404; # managed by Certbot
}
```

We can now restart the nginx server:
```
sudo systemctl restart nginx
```

And try our `add` endpoint:

