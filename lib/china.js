var province = require('../data/province.json');
var municipalObj = require('../data/municipal.json');
var countyObj = require('../data/county.json');

function matchProvince(addr){
    for(var i=0,l=province.length; i<l; i++){
        var p = province[i];
        if(addr.indexOf(p.name) > -1){
            return p;
        }
    };
}

function matchMunicipal(addr, p){
    var municipal = municipalObj[p.code];
    for(var i=0,l=municipal.length; i<l; i++){
        var m = municipal[i];
        if(addr.indexOf(m.name) > -1){
            return m;
        }
    };
}

function matchCounty(addr, m){
    var county = countyObj[m.code];
    for(var i=0,l=county.length; i<l; i++){
        var c = county[i];
        if(addr.indexOf(c.name) > -1){
            return c;
        }
    };
}

function location(addr, options){
    var location = ['', '', ''];
    var objArr = [];
    var matchFuncArr = [matchProvince, matchMunicipal, matchCounty];
    var isPostfix = options && options.postfix;

    var result = null;
    for(var i=0,l=matchFuncArr.length; i<l; i++){
        result = matchFuncArr[i](addr, result);
        if(result){
            objArr.push(result);
        }else{
            break;
        }
    }

    for(var i=0,l=objArr.length; i<l; i++){
        if(isPostfix){
            location[i] = objArr[i].name + objArr[i].postfix;
        }else{
            location[i] = objArr[i].name;
        }
    }

    return location;
}

exports.location = location;
