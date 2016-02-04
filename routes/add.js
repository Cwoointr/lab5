var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here
	var newFriend = {
		"name" : req.query.name,
		"description" : req.query.description,
		"imageURL" : "http://lorempixel.com/500/500/people/"
	}
	console.log("%s %s", newFriend.name, newFriend.description)
	data["friends"].push(newFriend);
	res.render('add', data);
 }
