var express = require('express');
var app = express();
var ect = require('ect');

var renderer = ect({
  root: __dirname + 'views',
  ext: '.ect'
})
app.use(express.static(__dirname + '/app'));
app.set('view engine','ect');
app.engine('ect',renderer.render);
app.set('views','./app/views');


app.get("/",function(req,res){
  res.render('video');
});



var port=3000
app.listen(port,function(){
  console.log('Server is running at port ' + port);
});
