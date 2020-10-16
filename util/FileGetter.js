//Reqs
const fs = require("fs");
//Not catching Util files for errors, take caution if used
exports.getFiles = function getFiles(path) {
  let results = [];
    const list = fs.readdirSync(path);
    list.forEach(function(file) {
        file = path + '/' + file;
        file_type = file.split(".").pop();
        file_name = file.split(/(\\|\/)/g).pop();
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (file_type == "js") results.push(file);
        }
    });
    return results;
}
exports.getSubDirs = function(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}