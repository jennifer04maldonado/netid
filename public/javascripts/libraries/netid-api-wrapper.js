var NetidAPI = function(){
  console.log("Initializing");
  this.done = false
  this.account
  //can load ipfs options from local storage
  //var opt = require('./options.js').get()
  var NetidAPI = require('./netid-api.js')
  //version using option params
  //var ipfs = require('ipfs-api')(opt.addr || 'localhost',opt.port || 5001)

  var ipfs = require('ipfs-api')('localhost', 5001);

  //create a new netid api object with connection info as param
  this.account = new NetidAPI(ipfs)
  //this.account.init()
  this.account.getProfile()
  this.done = true
}

NetidAPI.prototype.use = function(f){
  if(!f || !f.apply || !f.call) return console.log('Non-function tried to use API:',f)
  if(this.done){
    f(this.account)
  } else {
    this.fa.push(f)
  }
}


var net = new NetidAPI()

/*if(net){
  console.log("Object Created")
  //console.log(net.account.getUsers())
}*/ 

/*net.use(account => {
  account.getProfile(234234)
})*/
//net.account.getProfile('QmdprAq8ZvnfpRfFsDUjLbNoZXEzrE8rc4quSaje3m5dgN')
module.exports = NetidAPI