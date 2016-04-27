'use strict';
const Dataset = require('./dataset.js')
function StandardSet(){}
StandardSet.prototype=new Dataset('standard_sets')

const SS = {
    StandardSet:StandardSet,
    get shema(){return StandardSet.prototype.schema;}
};
module.exports = SS;