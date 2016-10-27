  function getTWitchData(){
	  var twUsers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	  var twChannelURL = 'https://wind-bow.hyperdev.space/twitch-api/channels/'; 
	  var twStreamsURL = 'https://wind-bow.hyperdev.space/twitch-api/streams/'; 

	  twUsers.forEach(function(twUser) {
			$.getJSON(twStreamsURL + twUser+'?callback=?', function(data) {
			  var game,
				  status;
			  if (data.stream === null) {
				game = "Offline";
				status = "offline";
			  } else if (data.stream === undefined) {
				game = "Account Closed";
				status = "offline";
			  } else {
				game = data.stream.game;
				status = "online";
			  };
        $.getJSON(twChannelURL + twUser+'?callback=?', function(data) {
         	$("#flwInfo").append('<div class="row" style="margin-bottom:10px">');
			$("#flwInfo").append('<div class="col-md-4"><img style="height:75px" src="' + data.logo + '"></div>');
			$("#flwInfo").append('<div class="col-md-4"><h3>' + data.display_name+'</h3><p>' + game + '</p></div>');
            $("#flwInfo").append('<div class="col-md-4"><h3>' + status + '</h3></div></div>');
        });
			});
      
	  });
  };
      
$(document).ready(function(){  
  getTWitchData();
});