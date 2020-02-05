const Job = require('./job.js')
let job = new Job()

job.on('done', function(details){
    console.log('Weekly email job was completed at', details.completedOn)
})

job.emit('start')
