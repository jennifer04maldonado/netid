var NetidAPI = function(){
  this.done = false
  this.fa = []
  this.account
  //can load ipfs options from local storage
  //var opt = require('./options.js').get()
  var NetidAPI = require('./netid-api.js')
  //version using option params
  //var ipfs = require('ipfs-api')(opt.addr || 'localhost',opt.port || 5001)

  var ipfs = require('ipfs-api')('localhost', 5001);

  //create a new netid api object with connection info as param
  this.account = new NetidAPI(ipfs)
  this.account.init()
  //set state to done if init passes
  if(this.account.init()){
    console.log("We have Init");
    this.done = true
  }

  this.fa.forEach(fn => fn(this.account))
  this.fa = undefined
}

NetidAPI.prototype.use = function(f){
  if(!f || !f.apply || !f.call) return console.log('Non-function tried to use API:',f)
  if(this.done){
    f(this.account)
  } else {
    this.fa.push(f)
  }
}

var net = new NetidAPI();
    if(net){
      console.log("net")
      if(net.done){
        console.log("test");
      }
     } 

module.exports = NetidAPI