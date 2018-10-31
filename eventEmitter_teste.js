var eventEmitter = require('events').EventEmitter;
  var count = 0;
  var em = new eventEmitter();
  setInterval(function(){
    em.emit('timed', count++);
    if (count >= 3) process.exit(0);
  }, 3000);
  
  em.on('timed', function(data){
    console.log('timed ' + data);
  });
