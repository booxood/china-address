# china-address


[![Build Status](https://travis-ci.org/booxood/china-address.png?branch=master)](https://travis-ci.org/booxood/china-address)

提供中国地址的 省 市 县 信息查询.

## Install

```
npm install china-address
```

Example:
```javascript
  var china = require('china-address');
  var location = china.location('广东省广州市越秀区XXX路');
  console.log(location); // [ '广东', '广州', '越秀' ]
```

## API

### location(address, [options])
- address `String`
- options `Object`
  - postfix `Boolean` default = false

返回一个包含该地址所属省市县信息的数组.


## License
[The MIT License](https://github.com/booxood/readlines/blob/master/LICENSE)

  
