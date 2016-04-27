'use strict';
const Schema = require('./schemas')
function Dataset(name){ this.schemaName=name; }
Dataset.prototype={
    get schema(){ return Schema[this.schemaName]; },
    get keys(){ return Object.keys(this.schema); },
    passes:function(v){
        let vkeys=Object.keys(v);
        var skip=true;
       this.keys.forEach((k)=>{
           if(vkeys.indexOf(k)>=0){}
           else{skip=false;}
       });
        return skip;
    }
};
module.exports=Dataset;