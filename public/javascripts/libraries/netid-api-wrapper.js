var NetidAPI = function(){
  this.done = false
  this.fa = []
  this.account
  var NetidAPI = require('./netid-api.js')
  //var ipfs = require('ipfs-api')(opt.addr || 'localhost',opt.port || 5001)
  //var ipfs = require('ipfs-api')('localhost', 5001);
  var ipfs = window.ipfsAPI('localhost', 5001);
  this.account = new NetidAPI(ipfs)
  this.account.init()
  this.done = true
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

module.exports = NetidAPI