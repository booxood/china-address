'use strict'

var should = require('should');

var china = require('../index.js');

describe('根据输入的地址，返回该地址的省市县', function(){
    describe('定位省市县，带后缀', function(){
        it('广东省广州市越秀区XXX路', function(){
            var location = china.location('广东省广州市越秀区XXX路', {postfix: true});
            location.should.be.an.instanceof(Array).and.have.lengthOf(3);
            location[0].should.be.equal('广东省');
            location[1].should.be.equal('广州市');
            location[2].should.be.equal('越秀区');
        });
    });

    describe('定位省市县，默认不带缀', function(){
        it('广东省广州市越秀区XXX路', function(){
            var location = china.location('广东省广州市越秀区XXX路');
            location.should.be.an.instanceof(Array).and.have.lengthOf(3);
            location[0].should.be.equal('广东');
            location[1].should.be.equal('广州');
            location[2].should.be.equal('越秀');
        });
        it('上海市嘉定区谢泾一路', function(){
            var location = china.location('上海市嘉定区谢泾一路');
            location.should.be.an.instanceof(Array).and.have.lengthOf(3);
            location[0].should.be.equal('上海');
            location[1].should.be.equal('上海');
            location[2].should.be.equal('嘉定');
        });
        it('香港薄扶林道', function(){
            var location = china.location('香港薄扶林道');
            location.should.be.an.instanceof(Array).and.have.lengthOf(3);
            location[0].should.be.equal('香港');
            location[1].should.be.equal('香港');
            location[2].should.be.equal('');
        });
        it('西藏自治区拉萨市民族北路', function(){
            var location = china.location('西藏自治区拉萨市民族北路');
            location.should.be.an.instanceof(Array).and.have.lengthOf(3);
            location[0].should.be.equal('西藏');
            location[1].should.be.equal('拉萨');
            location[2].should.be.equal('');
        });
    });
});
