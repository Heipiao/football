var Twit = require('twit');
var insertTwitter = require('./mysql_f');
var T = new Twit({
  consumer_key:         'FSu9mlFZrbfnggLqZIwu5MXLy',
  consumer_secret:      'xXBEPeCbnw5L7TgB65CuWD5aliYFlS2b95xzjMLFnIFCPGveuO',
  access_token:         '784846164868861952-KAoZ4M7Y45KEhYvip6O56hm7RAbKbXQ',
  access_token_secret:  'OEGm8yITHPc4DHQEhMluzYvlYewEtHK4chY3h4F7ORIoI',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var query = 'he from:ManUtd'
var twitterList = []
var twitterNode = {}

T.get('search/tweets', {q: query}, function(err, data, response) { 
  if(err){
    console.log(err);
  }
  for( var i =0 ;i< data.statuses.length;i++)
  {
    twitterNode = {
      id: data.statuses[i].id,
      time: data.statuses[i].created_at,
      text: data.statuses[i].text
    }
    insertTwitter(twitterNode);
    twitterList.push(twitterNode);
    //process.exit(0);
  } 
});

console.log(twitterList);



