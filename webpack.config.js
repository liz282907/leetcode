var path = require('path'),
    fs = require('fs');


module.exports = {
    entry:  getEntries(),
    // entry:  './array/main.js',
    output: {
        path: './build',
        filename:"[name].js"
    },
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
}

function getEntries(){
    var routeDir = path.join(__dirname,'array');
    var routeNames = routeDir?fs.readdirSync(routeDir):[];

    var nameMaps = {};
    routeNames.forEach(function(routeName){
        var filename = routeName.match(/(.+)\.js$/)[1];
        if(filename){
            var devEntryPath = path.join(routeDir,filename)
            nameMaps[filename] = devEntryPath;

        }
    });
    // nameMaps['main'] = path.join(__dirname,'main');
    console.log(nameMaps);
    return nameMaps;
}