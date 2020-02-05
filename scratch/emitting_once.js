const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()
emitter.once('knock', function(){
    console.log('who is there?')   
}) 
emitter.once('knock', function(){
    console.log('Go away !')  
}) 
emitter.emit('knock')
emitter.emit('knock')