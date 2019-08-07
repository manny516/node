//Node JS bash Terminal execution Functions 
//Developer : Immanuel Walthrust 
//GitHub Account : https://github.com/manny516/node

const exec = require('child_process').exec;


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
			console.log("Successfully Removed Empty Directory : " directory + folderName);
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

