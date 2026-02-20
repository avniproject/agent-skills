# Test Example Extraction Report

**Total Examples**: 70  
**High Value Examples** (confidence > 0.7): 0  
**Average Complexity**: 0.10  

## Examples by Category

- **instantiation**: 70

## Examples by Language

- **JavaScript**: 70

## Extracted Examples

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1059*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1073*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var copy = new Buffer(obj)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1076*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1091*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(16)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1095*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1145*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(bits / 8 - 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1159*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1179*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer.js:1196*

### should test Date

**Category**: instantiation  
**Description**: Test: should test Date  
**Confidence**: 0.60  

```javascript
const d = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:158*

### should test day roll-over

**Category**: instantiation  
**Description**: Test: should test day roll-over  
**Confidence**: 0.60  

```javascript
const start = new Date(2012, 3, 16, hr, 30, 30)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:168*

### should test next date

**Category**: instantiation  
**Description**: Test: should test next date  
**Confidence**: 0.60  

```javascript
const nextDate = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:184*

### should throw an exception because next date is invalid

**Category**: instantiation  
**Description**: Test: should throw an exception because next date is invalid  
**Confidence**: 0.60  

```javascript
const nextDate = new Date('My invalid date string')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:194*

### should test next real date

**Category**: instantiation  
**Description**: Test: should test next real date  
**Confidence**: 0.60  

```javascript
const initialDate = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:203*

### should test next real date

**Category**: instantiation  
**Description**: Test: should test next real date  
**Confidence**: 0.60  

```javascript
const nextDate = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:207*

### should expose _getNextDateFrom as a public function

**Category**: instantiation  
**Description**: Test: should expose _getNextDateFrom as a public function  
**Confidence**: 0.60  

```javascript
const testDate = new Date('2018-08-10T02:19:59.999Z')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:299*

### should generate the right next days when cron is set to every minute

**Category**: instantiation  
**Description**: Test: should generate the right next days when cron is set to every minute  
**Confidence**: 0.60  

```javascript
let previousDate = new Date(Date.UTC(2018, 5, 3, 0, 0)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:312*

### should generate the right next days when cron is set to every 15 min

**Category**: instantiation  
**Description**: Test: should generate the right next days when cron is set to every 15 min  
**Confidence**: 0.60  

```javascript
let previousDate = new Date(Date.UTC(2016, 6, 3, 0, 0)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:323*

### should work around time zone changes that shifts time back (1)

**Category**: instantiation  
**Description**: Test: should work around time zone changes that shifts time back (1)  
**Confidence**: 0.60  

```javascript
const d = new Date('10-7-2018')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/crontime.test.js:331*

### child circular reference with toJSON

**Category**: instantiation  
**Description**: Test: child circular reference with toJSON  
**Confidence**: 0.60  

```javascript
const otherParentObject = new TestObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/fast-safe-stringify/test-stable.js:192*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:19*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:35*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:59*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:74*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:88*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:108*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:127*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:165*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/bl/test/test.js:178*

### child circular reference with toJSON

**Category**: instantiation  
**Description**: Test: child circular reference with toJSON  
**Confidence**: 0.60  

```javascript
const otherParentObject = new TestObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/fast-safe-stringify/test.js:191*

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/client/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

### \n

**Category**: instantiation  
**Description**: Test: \n  
**Confidence**: 0.60  

```javascript
const err = new Error(msg)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/supertest/lib/test.js:335*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var regErrorMsg = new RegExp('First argument must be a string, Buffer, ' +
                               'ArrayBuffer, Array, or array-like object.')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer-alloc.js:1449*

### should run on a specific date

**Category**: instantiation  
**Description**: Test: should run on a specific date  
**Confidence**: 0.60  

```javascript
const d = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:281*

### should run on a specific date with oncomplete

**Category**: instantiation  
**Description**: Test: should run on a specific date with oncomplete  
**Confidence**: 0.60  

```javascript
const d = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:303*

### should wait and not fire immediately

**Category**: instantiation  
**Description**: Test: should wait and not fire immediately  
**Confidence**: 0.60  

```javascript
const d = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:330*

### should wait but fire on init

**Category**: instantiation  
**Description**: Test: should wait but fire on init  
**Confidence**: 0.60  

```javascript
const d = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:346*

### should start, change time, exception

**Category**: instantiation  
**Description**: Test: should start, change time, exception  
**Confidence**: 0.60  

```javascript
var time = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:476*

### should test start of month

**Category**: instantiation  
**Description**: Test: should test start of month  
**Confidence**: 0.60  

```javascript
const d = new Date('12/31/2014')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:576*

### should run every day

**Category**: instantiation  
**Description**: Test: should run every day  
**Confidence**: 0.60  

```javascript
const d = new Date('12/31/2014')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:614*

### should run every 2 hours between hours

**Category**: instantiation  
**Description**: Test: should run every 2 hours between hours  
**Confidence**: 0.60  

```javascript
const d = new Date('12/31/2014')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:637*

### should run every minute

**Category**: instantiation  
**Description**: Test: should run every minute  
**Confidence**: 0.60  

```javascript
const d = new Date('12/31/2014')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:664*

### should run every day at 12:30

**Category**: instantiation  
**Description**: Test: should run every day at 12:30  
**Confidence**: 0.60  

```javascript
const d = new Date('12/31/2014')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/cron/tests/cron.test.js:688*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1059*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1073*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var copy = new Buffer(obj)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1076*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1091*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(16)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1095*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1145*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(bits / 8 - 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1159*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1179*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/buffer/test/node/test-buffer.js:1196*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var regErrorMsg = new RegExp('First argument must be a string, Buffer, ' +
                               'ArrayBuffer, Array, or array-like object.')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/buffer/test/node/test-buffer-alloc.js:1449*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:19*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:35*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:59*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:74*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:88*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:108*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:127*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:165*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/scripts/node_modules/bl/test/test.js:178*

### sticky

**Category**: instantiation  
**Description**: Test: sticky  
**Confidence**: 0.60  

```javascript
var regex = new RegExp('\\B', 'y')
```

*Source: /Users/himeshr/IdeaProjects/avni-media/client/node_modules/string.prototype.matchall/test/tests.js:223*

### mapper throws flush

**Category**: instantiation  
**Description**: Test: mapper throws flush  
**Confidence**: 0.60  

```javascript
const error = new Error()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/split2/test.js:367*

### mapper throws on transform

**Category**: instantiation  
**Description**: Test: mapper throws on transform  
**Confidence**: 0.60  

```javascript
const error = new Error()
```

*Source: /Users/himeshr/IdeaProjects/avni-media/server/node_modules/split2/test.js:381*

