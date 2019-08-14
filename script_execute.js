//Node JS bash Terminal execution Functions 
//Developer : Immanuel Walthrust 
//GitHub Account : https://github.com/manny516/node

const exec = require('child_process').exec;
const spawn = require('child_process');
const fs = require('fs');
const path = require('path');


class ESX {


	//White Space Encoded
	static cleanSpace(fileName){
		let cleanUp = fileName.replace(/\s/g ,"\\ ");
		return cleanUp;
	}


	//Error Handler Fiunction
	static errHandler(error,success){
		if(error){
			throw error;
		}else{
			console.log(`${success}`);
		}

	}


	//Remove File Exex Function 
	static removeFile(directory,fileName){

		let filesdr = this.cleanSpace(fileName);
		let successMessage  = "Successfully Removed : " + directory + fileName;

		exec(`rm ${directory}${filesdr}`, (err) => {
			this.errHandler(err,successMessage);

		});
	}
	

}

ESX.removeFile('/Users/ww2kvn/Desktop/','Screen Shot 2019-08-14 at 2.31.40 PM.png');


//White Space Encoded
let cleanSpace = (fileName) => {
	let cleanUp = fileName.replace(/\s/g ,"\\ ");
	return cleanUp;
}


//Error Handler Fiunction
let errHandler = (error,success) => {
	if(error){
		throw error;
	}else{
		console.log(`${success}`);
	}

}


//Remove File Exex Function 
let removeFile = (directory,fileName) => {

	let filesdr = cleanSpace(fileName);
	let successMessage  = "Successfully Removed : " + directory + fileName;

	exec(`rm ${directory}${filesdr}`, (err) => {
		
		errHandler(err,successMessage);

	});
}


//Remove empty Directory
let removeDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);
	let successMessage = "Successfully Removed Empty Directory : " + directory + folderName;

	exec(`rm -d ${directory}${whiteSpace}`, (err) => {

		errHandler(err,successMessage);

	});
}


//Force Remove Driectory even if file and folder exsist 
let forceRemoveDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);
	let successMessage = "Directory has been Successfully removed : " + directory + folderName ;

	exec(`rm -r ${directory}${whiteSpace}`, (err) => {
		errHandler(err,successMessage);		

	});

}

let createDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);

	directory = directory || '';

	let successMessage = directory + folderName + ": Directory has been created successfully";

	exec(`mkdir ${directory}${whiteSpace}`, (err) => {

		errHandler(err, successMessage);

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


/*let createFile = (directory,fileName,fileExe,fileContent)=> {

	let cleanDir = cleanSpace(directory);
	let cleanFile = cleanSpace(fileName);


	fs.writeFile(`${cleanDir}${cleanFile}${fileExe}`, fileContent,);


}*/
