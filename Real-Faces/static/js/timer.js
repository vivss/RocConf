
var focus_running = 0;

var timeLine = [];
var count = 0;

function proposeStop()
{
	realFaces.socket.socketio.emit("propose_stop","stop");
}

function focus_sample()
{
	
}

function focus_end()
{
	running = 0;
	var myJSONString = JSON.stringify(timeLine); 
	console.log(myJSONString);

	console.log("Session key: "+realFaces.sessionKey);
	console.log("Name: "+realFaces.userName);

	var JSONkey = realFaces.sessionKey + "_" + realFaces.userName;
	
	var JSONData = {
		JSONkey : JSONkey,
		myJSONString : myJSONString
	}

	//stopRecordingOnHangup();

	realFaces.socket.socketio.emit("FOCUS_JSON", JSONData);
	document.getElementById("Start").innerHTML = "Resume";
}

/*
function startPause(){
	if(running == 0){
		//captureVideo(commonConfig);
		//startRecordingAfterActive();
		running = 1;
		increment();
		document.getElementById("Start").innerHTML = "Pause";
}else{
	running = 0;
	var myJSONString = JSON.stringify(timeLine); 
	console.log(myJSONString);

	console.log("Session key: "+realFaces.sessionKey);
	console.log("Name: "+realFaces.userName);

	var JSONkey = realFaces.sessionKey + "_" + realFaces.userName;
	
	var JSONData = {
		JSONkey : JSONkey,
		myJSONString : myJSONString
	}

	//stopRecordingOnHangup();

	realFaces.socket.socketio.emit("FOCUS_JSON", JSONData);
	document.getElementById("Start").innerHTML = "Resume";
	
	}
}

function reset(){
	running = 0;
	time = 0;
	document.getElementById("Start").innerHTML = "Start";
	document.getElementById("Output").innerHTML = "00:00:00";

}

function increment(){
	if(running == 1){
	setTimeout(function(){
		time++;
		var mins = Math.floor(time/10/60);
		var secs = Math.floor(time/10);
		var tenths = time % 10;

		if(mins<10)
		{
			mins = "0" + mins;
		}

		if(secs<10)
		{
			secs = "0" + secs;
		}

		if(time%10===0){
			var info = document.getElementById("playerFocusHUDNotifitcation").innerHTML;
			
			// if (info="0"){
			// 	var infoVal = 0;
			// }
			// if (info="1"){
			// 	var infoVal = 1;
			// }
			// if (info="2"){
			// 	var infoVal = 2;
			// }
			// if (info="3"){
			// 	var infoVal = 3;
			// }
			// if (info="4"){
			// 	var infoVal = 4;
			// }

			var focusObject = {timeValue: count, focus: info};
			console.log(info);
			timeLine.push(focusObject);
			count++;
		}


		document.getElementById("Output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
		increment();
	}, 100);
}
}
*/