'use strict';
const Schema = {
    jurisdictions:{
        id:'api-object-id',
        title:'title-of-jurisdiction',
        type:'type-of-jurisdiction'
    },
    standard_sets:{
        id:'api-object-id',
        title:'title-of-standard'
    },
    keys:function(){return Object.keys(this);},
    types:function(){
        return this.keys().filter((t)=>{
            if(typeof this[t] === "function") {return false;}
            return true;
        });
    },
    has:function(typeName){
        try{
            typeName=typeName.trim();
            return this.types().indexOf(typeName) >= 0;
        }catch(e){}
        return false;
    }

};

Object.freeze(Schema.jurisdictions);
Object.freeze(Schema.standard_sets);
Object.freeze(Schema);

module.exports=Schema;