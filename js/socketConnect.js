var websocket;
var ping;
var answ;
var rec;

function init(){
	//btns events
	$('#clean').click(cleanScreen); 
	$('#connect').click(doConnect);
	$('#disconnect').click(doDisconnect);

	$('#send').click(function () {
		doSend($('#message').val())
	});
	
	//txtbox evnts
	$("#message").keypress(function(e) {
		if(e.which == 13) 
			doSend($('#message').val())
	});

	//do disabled
	$('#disconnect').prop("disabled", true);
	$('#send').prop( "disabled", true);
}

function doConnect() {
	try
	{
		websocket = new WebSocket($("#target").val());
	}
	catch(ex)
	{
		logError(msg_error_onConnect);
		return;
	}

	// webscoket evts
	websocket.onopen = onOpen;
	websocket.onclose = onClose;
	websocket.onmessage = onMessage;
	websocket.onerror = onError;
}

function doDisconnect() {
	websocket.close();
}

function onOpen(evt) {
	$('#connect').prop("disabled", true);
	$('#disconnect').prop( "disabled", false);
	$('#send').prop( "disabled", false);
	$('#send').prop( "disabled", false);

	logInfo(msg_info_connect);
}

function onClose(evt) {
	$('#connect').prop("disabled", false) ;
	$('#disconnect').prop("disabled", true);
	$('#send').prop( "disabled", true);

	logInfo(msg_info_disconnected);
}

function onMessage(evt) {
	answ = evt.data;
	rec = evt;
	logInfo('"' + evt.data + '"' + msg_info_recieved);
}

function onError(evt) {
	if(evt.data == undefined)
		logError(msg_error_invalid_url);
	else
		logError(evt.data);
}

function doSend(message) {
	websocket.send(message);
}	  