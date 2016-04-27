'use strict';
const Data=new Set()
const Dataset = require('./dataset.js');
const val = require('./val.js')
function Jurisdiction(entity,type){
    let subtype=subtype;
    let iso=val.obj(entity)
    if(!iso) console.log('no object')
    if(entity.type===subtype){} else{ console.log('no object') }
    //console.log(this.keys)
    //console.log(Object.keys(entity))
    if(iso && this.passes(entity) ) {
        let KEY = JSON.stringify(entity)
        if (Data.has(KEY)) {
            this.error = new Error('State Jurisdiction')
            this.error.code = 'exists'
        } else {
            Data.add(KEY);
        }
    }else{
        this.error = new Error('State Jurisdiction')
        this.error.code = 'invalid'
    }

}
Jurisdiction.prototype=new Dataset('jurisdictions')

class State extends Jurisdiction{
    constructor(data){
        super(data,'state')
        if(!this.error){
            Object.assign(this,data);
        }

    }
}

class School extends Jurisdiction{
    constructor(data){
        super(data,'school')
        if(!this.error){
            Object.assign(this,data);
        }
    }
}

class Org extends Jurisdiction{
    constructor(data){
        super(data,'organization')
        if(!this.error){
            Object.assign(this,data);
        }
    }
}

class Nation extends Jurisdiction{
    constructor(data){
        super(data,'nation')
        if(!this.error){
            Object.assign(this,data);
        }
    }
}

const J = {
    Jurisdiction:Jurisdiction,
    State:State,
    School:School,
    Org:Org,
    get schema(){return Jurisdiction.prototype.schema;},
};
module.exports = J;