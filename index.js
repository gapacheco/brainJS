var DATA = require('./dataset').DATA;
var getAccuracy = require('./getAccuracy').getAccuracy
var brain = require('./node_modules/brain.js')

const SPLIT = 99;
const trainData = DATA.slice(0, SPLIT);
const testData = DATA.slice(SPLIT + 1);


const net = new brain.NeuralNetwork({
  activation: 'sigmoid',
  hiddenLayers: [2],
  iterations: 20000,
  learningRate: 0.5
});


net.train(trainData);

const accuracy = getAccuracy(net, testData);
console.log('accuracy: ', accuracy);