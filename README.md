# hkims-copymp3s.js


```bash
$ node app/copymp3.js
$ cd app/output
$ tar czvf mp3s.tar.gz wp-content
$ rm -rf wp-content
$ docker run --rm --volumes-from wwwdata -v $(pwd):/new-data rija/docker-nginx-fpm-caches-wordpress:stable bash -c 'cd /usr/share/nginx/www && tar xzvf /new-data/mp3s.tar.gz'
```