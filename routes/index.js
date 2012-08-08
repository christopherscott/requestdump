
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log(req.headers['user-agent']);
  res.render('index', { headers: req.headers, title: 'Request Dump' });
};