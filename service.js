var foundation = require('agrifoundation');
var worker = require('./lib/worker');

foundation.init({
    elasticsearch: ['default'],
    mongodb: ['default'],
    baucis: true,
    worker: worker
});

foundation.run();