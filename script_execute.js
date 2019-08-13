//Node JS bash Terminal execution Functions 
//Developer : Immanuel Walthrust 
//GitHub Account : https://github.com/manny516/node

const exec = require('child_process').exec;
const spawn = require('child_process');
const fs = require('fs');
const path = require('path');


//White Space Encoded
let cleanSpace = (fileName) => {
	let cleanUp = fileName.replace(/\s/g ,"\\ ");
	return cleanUp;
}


//Remove File Exex Function 
let removeFile = (directory,fileName) => {

	let filesdr = cleanSpace(fileName);
	exec(`rm ${directory}${filesdr}`, (err) => {
		if(err){
			throw err;
		}else{
			console.log("Successfully Removed : " + directory + fileName);
		}

	});
}


//Remove empty Directory
let removeDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);

	exec(`rm -d ${directory}${whiteSpace}`, (err) => {

		if(err){
			throw err;
		}else{
			console.log("Successfully Removed Empty Directory : " + directory + folderName);
		}

	});
}


//Force Remove Driectory even if file and folder exsist 
let forceRemoveDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);

	exec(`rm -r ${directory}${whiteSpace}`, (err) => {

		if(err){
			throw err;
		}else{
			console.log("Directory has been Successfully removed : " + directory + folderName );
		}

	});

}

let createDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);

	directory = directory || '';

	exec(`mkdir ${directory}${whiteSpace}`, (err) => {

		if(err){
			throw err;
		}else{
			console.log(directory + folderName + ": Directory has been created successfully");
		}

	});

}

//Search Dir Script 
let searchDir = (directory,folderName) => {

	directory || '';

	let whiteSpace = cleanSpace(folderName);

	fs.readdir(`${directory}/${whiteSpace}`, (err,files) => {

		if(err){
			throw err;
		}else{
			console.log(files);
		}
	});

}



let readFile = (directory) => {

	let whiteSpace = cleanSpace(directory);
	//let stats = fs.stateSync(whiteSpace)
	fs.readdir(`${whiteSpace}`, (err,files) => {

		files.forEach((fileName) => {

			let file = path.join('',`${whiteSpace}`,fileName)
			let stats = fs.statSync(file);

			if(stats.isFile()){

				fs.readFile(file,'UTF-8', (err,content) => {

					if(err){
						throw err;
					}else{

						console.log(content);
					}

				});
			}

		});


	});


}

