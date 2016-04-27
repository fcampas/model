'use strict';
const CacheData = new WeakMap()
const Jurs=require('./jurisdictions')

function getConst(type){
    switch(type){
        case 'state':
            return Jurs.State;break;
        case 'organization':
            return Jurs.Org;break;
        case 'school':
            return Jurs.School;break;
        default:
            break;
    }
    return new Error('Invalid type '+type);
}

const Cache={
    jurs:new Map([['state',new Set()],['origanization',new Set()],['school',new Set()]]),
    sets:new Map(),
};



class Model{
    constructor(){ CacheData.set(this,Cache); }
    get data(){ return CacheData.get(this); }
    get jurs(){ return this.data.jurs; }
    get sets(){ return this.data.sets; }
    get states(){ return this.jurs.get('state') }
    get orgs(){ return this.jurs.get('organization') }
    get schools(){ return this.jurs.get('school') }
    getSubclass(type){return getConst(type);}
    make(data){
        if(typeof data === "object" && typeof data.type === "string"){
            let c = getConst(data.type)
            if(c instanceof Error) {
                console.error(c);
                return c;
            }else{
                return new c(data);
            }
        }
        return new Error('invalid data');
    }
}

module.exports=new Model(CacheData);