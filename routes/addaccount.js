var accounts = require("../accounts.json");

exports.addFriend = function(req, res){
	req.query.name;
	req.query.pass;
	var newAccount = {
		"name": req.query.name,
		"pass": req.query.pass
	};
	console.log();
	accounts.accounts.push(newAccount);
	res.render('index');
}