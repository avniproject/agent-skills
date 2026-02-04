# Test Example Extraction Report

**Total Examples**: 49  
**High Value Examples** (confidence > 0.7): 0  
**Average Complexity**: 0.14  

## Examples by Category

- **instantiation**: 49

## Examples by Language

- **JavaScript**: 49

## Extracted Examples

### Basic behavior

**Category**: instantiation  
**Description**: Test: Basic behavior  
**Confidence**: 0.60  

```javascript
var buf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/to-arraybuffer/test.js:17*

### Behavior when input is a subarray 1

**Category**: instantiation  
**Description**: Test: Behavior when input is a subarray 1  
**Confidence**: 0.60  

```javascript
var origBuf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/to-arraybuffer/test.js:30*

### Behavior when input is a subarray 2

**Category**: instantiation  
**Description**: Test: Behavior when input is a subarray 2  
**Confidence**: 0.60  

```javascript
var origBuf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/to-arraybuffer/test.js:45*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/des.js/test/utils-test.js:14*

### should rev-permute properly

**Category**: instantiation  
**Description**: Test: should rev-permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/des.js/test/utils-test.js:31*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/des.js/test/utils-test.js:50*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/des.js/test/utils-test.js:85*

### should test number for primality

**Category**: instantiation  
**Description**: Test: should test number for primality  
**Confidence**: 0.60  

```javascript
var p = new bn('dba8191813fe8f51eaae1de70213aafede8f323f95f32cff' +
                   '8b64ebada275cfb18a446a0150e5fdaee246244c5f002ce0' +
                   'aca97584be1745f2dd1eea2849c52aac8c4b5fb78a1c4da7' +
                   '052774338d3310a6e020c46168cb1f94014e9312511cc4fb' +
                   '79d695bb732449f0e015745b86bfa371dc6ca7386e9c7309' +
                   '5549c2e4b8002873', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/miller-rabin/test/api-test.js:10*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1059*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1073*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var copy = new Buffer(obj)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1076*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1091*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(16)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1095*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1145*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(bits / 8 - 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1159*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1179*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer.js:1196*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var regErrorMsg = new RegExp('First argument must be a string, Buffer, ' +
                               'ArrayBuffer, Array, or array-like object.')
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/node-libs-browser/node_modules/buffer/test/node/test-buffer-alloc.js:1449*

### custom errors

**Category**: instantiation  
**Description**: Test: custom errors  
**Confidence**: 0.60  

```javascript
const cust = new Cust('foo is not bar')
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/errno/test.js:24*

### error without message

**Category**: instantiation  
**Description**: Test: error without message  
**Confidence**: 0.60  

```javascript
const cust = new Cust({
    code: 22,
    message: '',
    name: 'QuotaExceededError'
  })
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/errno/test.js:77*

### Proxies that return an undefined descriptor

**Category**: instantiation  
**Description**: Test: Proxies that return an undefined descriptor  
**Confidence**: 0.60  

```javascript
var proxy = new Proxy(obj, {
			getOwnPropertyDescriptor: function (target, key)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/object.getownpropertydescriptors/test/tests.js:110*

### run: 

**Category**: instantiation  
**Description**: Test: run:   
**Confidence**: 0.60  

```javascript
var ourDecrypt = new DES({
          mode: mode,
          key: key,
          iv: iv,
          decrypt: true
        })
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/browserify-des/test.js:37*

### run text: 

**Category**: instantiation  
**Description**: Test: run text:   
**Confidence**: 0.60  

```javascript
var ourDecrypt = new DES({
          mode: mode,
          key: key,
          iv: iv,
          decrypt: true
        })
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/browserify-des/test.js:70*

### an empty map

**Category**: instantiation  
**Description**: Test: an empty map  
**Confidence**: 0.60  

```javascript
const mapWithValues = new Map()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/pretty-format/perf/test.js:151*

### an empty map

**Category**: instantiation  
**Description**: Test: an empty map  
**Confidence**: 0.60  

```javascript
const mapWithNonStringKeys = new Map()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/pretty-format/perf/test.js:152*

### an empty set

**Category**: instantiation  
**Description**: Test: an empty set  
**Confidence**: 0.60  

```javascript
const setWithValues = new Set()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/pretty-format/perf/test.js:172*

### converting a date to tokens

**Category**: instantiation  
**Description**: Test: converting a date to tokens  
**Confidence**: 0.60  

```javascript
var date = new Date(Date.UTC(2013, 0, 1, 12)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/lunr/test/tokenizer_test.js:53*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var ab = new ArrayBuffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/arraybuffer.prototype.slice/test/tests.js:21*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var ab2 = new ArrayBuffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/arraybuffer.prototype.slice/test/tests.js:39*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var one = new ArrayBuffer(1)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/arraybuffer.prototype.slice/test/tests.js:55*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var arr = new Uint8Array(one)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/arraybuffer.prototype.slice/test/tests.js:56*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var arr2 = new Uint8Array(two)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/arraybuffer.prototype.slice/test/tests.js:61*

### SharedArrayBuffers

**Category**: instantiation  
**Description**: Test: SharedArrayBuffers  
**Confidence**: 0.60  

```javascript
var sab = new SharedArrayBuffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/arraybuffer.prototype.slice/test/tests.js:71*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:19*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:35*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:59*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:74*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:88*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:108*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:127*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:165*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/bl/test/test.js:178*

### first matcher is a proxy

**Category**: instantiation  
**Description**: Test: first matcher is a proxy  
**Confidence**: 0.60  

```javascript
const proxy = new Proxy({}, {
          get: ()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/jest-when/src/when.test.js:255*

### accepts a spied method:

**Category**: instantiation  
**Description**: Test: accepts a spied method:  
**Confidence**: 0.60  

```javascript
const theInstance = new TheClass()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/jest-when/src/when.test.js:1003*

### keeps default function implementation when not matched

**Category**: instantiation  
**Description**: Test: keeps default function implementation when not matched  
**Confidence**: 0.60  

```javascript
const instance = new TheClass()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/jest-when/src/when.test.js:1019*

### keeps call context when not matched

**Category**: instantiation  
**Description**: Test: keeps call context when not matched  
**Confidence**: 0.60  

```javascript
const theInstance = new TheClass()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/jest-when/src/when.test.js:1059*

### keeps call context when matched

**Category**: instantiation  
**Description**: Test: keeps call context when matched  
**Confidence**: 0.60  

```javascript
const theInstance = new TheClass()
```

*Source: /Users/himeshr/IdeaProjects/avni-models/node_modules/jest-when/src/when.test.js:1082*

