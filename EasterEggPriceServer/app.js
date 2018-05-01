var express = require('express');
var api = require('./routes/api');
var mockedData = require('./data/mockedData');
var users = require('./data/usersData');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());


app.get('/data/mockedData', function (req, res) {
  res.send(mockedData);
});

app.get('/data/mockedData/:id', function(req, res){
	var aux = 0;
	for(var i = 0; i < mockedData.length; i++)
	{
		if(mockedData[i].id == req.params.id)
		{
			res.send(mockedData[i]);
			aux = 1;
		}
	}
	if(aux > 0)
	{
		res.send('Não encontrado');
	}
});

app.post('/data/users', function(req, res, next){

	var username = req.body.username;
	var password = req.body.password;
	var userFound = false;
	var userNumber = 0;

	for(var i = 0; i< users.length; i++){
		if(users[i].username == username && users[i].password == password){
			userFound = true;
			userNumber = i;
		}
	}

	if(userFound == true){
		res.send({ 'success': true, 'user': users[userNumber].username });
	}
	else
	{
		res.send({ 'success': false, 'message': 'User not found'});
	}

});





app.use(api);

app.listen(3000);