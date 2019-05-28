var express=require('express')
var app=express()
var mysql=require('mysql')

app.get('/characters',function(req,res){
	var connection=mysql.createConnection({
		host:'localhost',
		user:'root',
		database:'application',
		port:3306
	})
	var que1="SELECT * FROM characters"
	connection.query(que1,function(err,rows,fields){
		if(err){
			console.log("Error "+err.toString())
			res.end()
		}
		else{
			res.json(rows)
		}
	})

})
app.get('/characters/:id',function(req,res){
	var number=req.params.id
	console.log(number.toString())
	var connection=mysql.createConnection({
		host: 'localhost',
		user: 'root',
		database: 'application',
		port: 3306

	})
	var quer2="SELECT * FROM characters Where id = ?"
	connection.query(quer2,[number],function(err,rows,fields){
		if(err){
			console.log("Error "+err.toString())
			res.end()
		}else{
			res.json(rows)
		}
	})

})

app.listen(8080,function(){
	console.log("Server on....")
})