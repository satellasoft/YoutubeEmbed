"use strict"
//Youtube Embed
//Author: Gunnar Correa
//E-mail: gunnercorrea@gmail.com
//Web site: www.gunnarcorrea.com
//Usage
/*
	var data = {
		youtubeURL : GetValueId("youtubeURL"),
		youtubeRESULT : "youtubeRESULT"
		};
	CreateYoutube(data);
*/

function CreateYoutube(data){
	var queryName = "v";
	var token = getParameterByName(queryName, data.youtubeURL);
	var element = CreateYoutubeDiv(token);
	SetElementId(element, data);
}

var token = getParameterByName('v');
			
			
function CreateYoutubeDiv(token){
				var stringDiv = "<div class='videoWrapper'><iframe width='560' height='315'"+
				"src='https://www.youtube.com/embed/"+token+"'"+ 
				"frameborder='0' allow='autoplay; encrypted-media'"+
				"allowfullscreen></iframe></div>";
	return stringDiv;
}
			
function getParameterByName(name, url) {
	//Get in Stackoverflow
	if (!url) url = window.location.href;
				name = name.replace(/[\[\]]/g, '\\$&');
				var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return '';
				return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
			
function GetValueId(field){
	return document.getElementById(field).value;
}

function SetElementId(element, data){
	document.getElementById(data.youtubeRESULT).innerHTML = element;
}