# CNL2Decrypt
## Decrypt Click'n'Load 2 links

## Installation
```shell script
npm install cnl2-decrypt
```

## Usage
```javascript
const cnl2 = require('cnl2-decrypt');

let rawkey = "function+f(){+return+'6653705553628279363377636c76645a';}";
let crypted = "abufV7k8bGeoYPoJU5Nh.....uc0un4=";

let urls = cnl2.decrypt(rawkey, crypted); // array of url strings
```

## Inspired by https://github.com/schlan/clicknload