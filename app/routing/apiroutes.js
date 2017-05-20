let friends = require('../data/friends.js');


module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	app.post('/api/friends', function(req, res){

		let greatestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		let userData 	= req.body;
		let userName 	= userData.name;
		let userPhoto 	= userData.photo;
		let userScores 	= userData.scores;

		let overalDiff = 0;

		for  (let i=0; i< friends.length; i++) {

			console.log(friends[i].name);
			overalDiff = 0;

			
			for (let i=0; i< friends[i].scores[i]; i++){


				overalDiff += Math.abs(parseInt(participandScores[i]) - parseInt(friends[i].scores[i]));

				if (overalDiff <= greatestMatch.friendDifference){

					greatestMatch.name = friends[i].name;
					greatestMatch.photo = friends[i].photo;
					greatestMatch.friendDifference = overalDiff;
				}
			}
		}

		friends.push(userData);

		res.json(greatestMatch);

	});

}