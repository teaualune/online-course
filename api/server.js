require('babel-core/register')({
    presets: ['es2015-node5', 'stage-0'],
    'plugins': ['transform-object-rest-spread']
});

require('./src');
