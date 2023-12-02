const fs = require('fs');

let filesCount = 0;
let linesCount = 0;

const countDir = (dir) => {
	const catalog = fs.readdirSync(dir);
	const files = catalog.filter(item => item.split('.')[1]);
	const folders = catalog.filter(item => !item.split('.')[1]);

	filesCount += files.length;

	if (files) {
		files.forEach((file) => {
			linesCount += fs.readFileSync(`${dir}/${file}`, 'utf-8').split('\n').length;
		});
	}
	if (folders) {
		folders.forEach((folder) => {
			countDir(`${dir}/${folder}`);
		});
	}
}

countDir('.');
console.log(filesCount);
console.log(linesCount);