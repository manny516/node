//Node JS bash Terminal execution Fuctions 
//Developer : Immanuel Walthrust 
//GitHub Account : https://github.com/manny516/node

const exec = require('child_process').exec;


//White Space Encoded
function cleanSpace(fileName){
	let cleanUp = fileName.replace(/\s/g ,"\\ ");
	return cleanUp;
}


//Remove File Exex Function 
let removeFile = (directory,fileName)=>{
	
	let filesdr = cleanSpace(fileName);
	exec(`rm ${directory}${filesdr}`, (err,file)=>{
		if(err){
			throw err;
		}else{
			console.log("Successfully Removed : " +  file);
		}

	});

}

//removeFile("/Users/ww2kvn/Desktop/","Screen Shot 2019-07-24 at 2.48.51 PM.png");


let removeEmptyDir = (directory,folderName) =>{

	let whiteSpace = cleanSpace(folderName);

	exec(`rm -d ${directory}${whiteSpace}`, (err,folder)=>{

		if(err){
			throw err;
		}else{
			console.log("Successfully Removed Empty Directory : " + folder);
		}

	});

}


removeEmptyDir("/Users/ww2kvn/Desktop/","test Hello");