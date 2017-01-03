function cleanScreen(){
	$('#output').empty();
}

function logError(message){
	printOutError(message);
}

function logInfo(message){
 	printOutInfo(message);
}

function convertMsg(msg){
	 var objectConstructor = {}.constructor;
	 
	if(msg != undefined)
	{
		if (msg.constructor === objectConstructor)
			return JSON.stringify(msg);
		else
			return msg;
	}
	else
		return msg_error_msg_undefined;
}

function printOutError(msg){
	msg = convertMsg(msg)
	$('#output').append('<em style="color: red;">'  + msg_error_error + msg + '</em><br /><br />');
}

function printOutInfo(msg){
	msg = convertMsg(msg)
	$('#output').append(msg + '<br /><br />');
}