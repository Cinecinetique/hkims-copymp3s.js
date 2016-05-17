var fs = require('node-fs/lib/fs');
var url = require('url');
var path = require('path');
var _ = require('underscore');
var find = require('find') ;
var getHrefs = require('get-hrefs');
var ncp = require('ncp').ncp;
var S = require('string');
const util = require('util');


var dest_base_dir = '/usr/share/nginx/www/';
//var dest_base_dir = __dirname + "/output";
var source_path = "/medias_source";
ncp.limit = 16;

fs.readFile('audio_page.html', 'utf8', (err, data) => {
  if (err) throw err;
  uris = getHrefs(data);

  mp3s = _.filter(uris, function (uri) {
  	return '.mp3' === path.extname(url.parse(uri).pathname) && S(path.dirname(url.parse(uri).pathname)).contains('wp-content') ;
  });

  paths_to_mp3s = _.map(mp3s, function (mp3) {
  	return path.format(path.parse(url.parse(mp3).pathname));
  });

  _.each(paths_to_mp3s, function (mp3_path) {

    fs.mkdir(path.dirname(dest_base_dir + mp3_path), 0777, true, function (err) {
     if (err) console.log(err);
    });

    find.file(path.basename(mp3_path), source_path, function(f) {

      console.log(mp3_path + " | " + f);
      //console.log("source: " + f + " dest: " + dest_base_dir + mp3_path);
      ncp(f[0], dest_base_dir + mp3_path, function (err) {
        if (err) {
         return console.error(err);
        }
        console.log('done!');
      });
      
    });

  }) ;
  



});