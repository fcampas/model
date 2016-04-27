'use strict';
const v={}
v.obj=function isData(v){return (typeof v === "object" && v !== null && !Array.isArray(v));}
module .exports=v;