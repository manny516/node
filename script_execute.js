//Node JS bash Terminal execution Fuctions 
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
	exec(`rm ${directory}${filesdr}`, (err,file) => {
		if(err){
			throw err;
		}else{
			console.log("Successfully Removed : " +  file);
		}

	});

}



let removeEmptyDir = (directory,folderName) => {

	let whiteSpace = cleanSpace(folderName);

	exec(`rm -d ${directory}${whiteSpace}`, (err,folder) => {

		if(err){
			throw err;
		}else{
			console.log("Successfully Removed Empty Directory : " + folder);
		}

	});

}
