'use strict'

var should = require('should');

var china = require('../index.js');

describe('根据输入的地址，返回该地址的省市县', function(){
    it('定位省市县，默认带后缀', function(){
        var location = china.location('广东省广州市越秀区XXX路');
        location.should.be.an.instanceof(Array).and.have.lengthOf(3);
        location[0] = '广东省';
        location[1] = '广州市';
        location[2] = '越秀区';
    })

    it('定位省市县，不带后缀', function(){
        var location = china.location('广东省广州市越秀区XXX路', {postfix: false});
        location.should.be.an.instanceof(Array).and.have.lengthOf(3);
        location[0] = '广东';
        location[1] = '广州';
        location[2] = '越秀';
    })
})
