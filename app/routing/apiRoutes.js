var friends = require("../data/friends");
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
      var newScores = req.body;
      var userScores = newScores.scores;
      var bestMatch = {};
      var bestIndex = 0;
      var bestDif = 40;
      for (var i = 0; i < friends.length; i++) {
        var totalDif = 0;
        for (var index = 0; index < friends[i].scores.length; index++) {
          var thisDif = Math.abs(friends[i].scores[index] - newFriend.scores[index]);
          totalDif += thisDif;
        }
        if (totalDif < bestDif) {
          bestIndex = i;
          bestDif = totalDif;
        }
      }
      bestMatch = friends[bestIndex];
      friends.push(newFriend);
      res.json(bestMatch);
    });
  };