var NetidAPI = function(home){
  this.done = false
  this.fa = []
  this.account
  this.id = Math.random()
  var NetidAPI = require('./netid-api.js')
  //var ipfs = require('ipfs-api')(opt.addr || 'localhost',opt.port || 5001)
  //var ipfs = require('ipfs-api')('localhost', 5001);
  var ipfs = window.ipfsAPI('localhost', 5001);
/*  this needs to be in the html for now, gulp cant require the full web3.js
  var Web3 = require('web3')
  var web3 = new Web3()*/
  this.account = new NetidAPI(ipfs, web3)
  if(home){
    this.account.initHome()
  }else{
    this.account.init()
  }
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