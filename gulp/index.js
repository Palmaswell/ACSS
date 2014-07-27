var fs             = require('fs');
var onlyScripts    = require('./util/scriptFilter');
var tasks          = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
// var tasks = fs.readdirSync('./gulp/tasks/');

tasks.forEach(function(task) {
	require('./tasks/' + task);
});
