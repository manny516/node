//Node JS bash Terminal execution Fuctions 
//Developer : Immanuel Walthrust 
//GitHub Account : https://github.com/manny516/node

const exec = require('child_process').exec;

//Remove File Exex Function 
let remove_file = (directory,fileName)=>{

	let cleanUp = fileName.replace(/\s/g ,"\\ ");
	exec(`rm ${directory}${cleanUp.toString()}`, (err,file)=>{
		if(err){
			throw err;
		}else{
			console.log("Successfully Removed : " +  file);
		}

	});
}

remove_file("/Users/ww2kvn/Desktop/","Screen Shot 2019-08-05 at 12.31.09 PM.png");


