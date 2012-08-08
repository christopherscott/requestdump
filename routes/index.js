
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    headers: req.headers,
    asset_prefix: process.env.ASSET_PREFIX || '',
    title: 'Request Dump'
  });
};