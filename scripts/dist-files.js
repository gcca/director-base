var fs = require('fs');


if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}


var resources = [
	'node_modules/core-js/client/shim.min.js',
	'node_modules/zone.js/dist/zone.min.js',
  'src/build.js'
];

resources.map(function(f) {
	var path = f.split('/');
	var t = 'dist/' + path[path.length-1];
	fs.createReadStream(f).pipe(fs.createWriteStream(t));
});


var index = `<!DOCTYPE html>
<html>
  <head>
    <base href="/">
    <title>CiX</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles.css">
    <script src="shim.min.js"></script>
    <script src="zone.min.js"></script>
    <script>window.module = 'aot';</script>
  </head>
  <body>
    <cix-app>Loading...</cix-app>
  </body>
  <script src="build.js"></script>
</html>
`;

fs.writeFile('dist/index.html', index, function(e) {
  if (e) {
    console.log('Error creating index.html:');
    console.log(e);
  }
});
