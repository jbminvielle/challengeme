$(document).ready(function(){

	//slider page d'accueil :

	$('#main-slider ul').cycle({
	fx:'scrollLeft',
	speed:700,
	timeout:4000,
	next:   '#next-slide', 
	prev:   '#prev-slide'
	});	
});

// get/set webservices
// string webserviceName : 	the name of the webservice we want to contact
// object args			 : 	the object of arguments to pass to the webservice
// list of webservices :
// 		"get_best_submissions"
//		"get_challenger"

webservice = function (webserviceName, args) {
	var renderObj;

	$.ajax({
		data: args,
		url: "webservices/"+webserviceName+'.json',
		async: false,
		success: function(obj) {
			renderObj = obj;
		},
		error: function(obj) {
			renderObj = obj;
		}
	});

	return renderObj;
}