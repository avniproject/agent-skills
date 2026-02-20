# Test Example Extraction Report

**Total Examples**: 284  
**High Value Examples** (confidence > 0.7): 0  
**Average Complexity**: 0.11  

## Examples by Category

- **instantiation**: 284

## Examples by Language

- **JavaScript**: 284

## Extracted Examples

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:198*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:240*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:242*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:1987*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:3100*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:3106*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:3112*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:3118*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:3131*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/node-polyglot/node_modules/es-abstract/test/tests.js:3140*

### should populate national number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate national number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:54*

### should populate international number template (digit by digit) (default country)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit) (default country)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:66*

### should populate international number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:90*

### should populate national number template (attempt to format complete number)

**Category**: instantiation  
**Description**: Test: should populate national number template (attempt to format complete number)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:112*

### should filter out formats that require a national prefix and no national prefix has been input

**Category**: instantiation  
**Description**: Test: should filter out formats that require a national prefix and no national prefix has been input  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('AF')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:277*

### should work when a digit is not a national prefix but a part of a valid national number

**Category**: instantiation  
**Description**: Test: should work when a digit is not a national prefix but a part of a valid national number  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:289*

### should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('FR')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:310*

### should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:316*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
var asYouType = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:344*

### should fall back to the default country

**Category**: instantiation  
**Description**: Test: should fall back to the default country  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/AsYouType.test.js:357*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1059*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1073*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var copy = new Buffer(obj)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1076*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1091*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(16)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1095*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1145*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(bits / 8 - 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1159*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1179*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer.js:1196*

### should populate national number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate national number template (digit by digit)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:21*

### should populate international number template (digit by digit) (default country)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit) (default country)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:34*

### should populate international number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:59*

### should populate national number template (attempt to format complete number)

**Category**: instantiation  
**Description**: Test: should populate national number template (attempt to format complete number)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:82*

### should filter out formats that require a national prefix and no national prefix has been input

**Category**: instantiation  
**Description**: Test: should filter out formats that require a national prefix and no national prefix has been input  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('AF')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:302*

### should work when a digit is not a national prefix but a part of a valid national number

**Category**: instantiation  
**Description**: Test: should work when a digit is not a national prefix but a part of a valid national number  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:317*

### should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('FR')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:339*

### should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:346*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
const asYouType = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:380*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouType.test.js:398*

### reads a 20MB file (autoClose on)

**Category**: instantiation  
**Description**: Test: reads a 20MB file (autoClose on)  
**Confidence**: 0.60  

```javascript
var pend = new Pend()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:49*

### reads 4 chunks simultaneously

**Category**: instantiation  
**Description**: Test: reads 4 chunks simultaneously  
**Confidence**: 0.60  

```javascript
var pend = new Pend()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:75*

### writes 4 chunks simultaneously

**Category**: instantiation  
**Description**: Test: writes 4 chunks simultaneously  
**Confidence**: 0.60  

```javascript
var pend = new Pend()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:140*

### fdSlicer.read

**Category**: instantiation  
**Description**: Test: fdSlicer.read  
**Confidence**: 0.60  

```javascript
var outBuf = new Buffer(1024)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:270*

### read and write

**Category**: instantiation  
**Description**: Test: read and write  
**Confidence**: 0.60  

```javascript
var buf = new Buffer("through the tangled thread the needle finds its way")
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:300*

### read and write

**Category**: instantiation  
**Description**: Test: read and write  
**Confidence**: 0.60  

```javascript
var outBuf = new Buffer(1024)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:302*

### createReadStream

**Category**: instantiation  
**Description**: Test: createReadStream  
**Confidence**: 0.60  

```javascript
var buf = new Buffer(str)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:315*

### createReadStream

**Category**: instantiation  
**Description**: Test: createReadStream  
**Confidence**: 0.60  

```javascript
var sink = new StreamSink()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:318*

### createWriteStream ok

**Category**: instantiation  
**Description**: Test: createWriteStream ok  
**Confidence**: 0.60  

```javascript
var buf = new Buffer(1024)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/fd-slicer/test/test.js:338*

### getResult() should returns JSON

**Category**: instantiation  
**Description**: Test: getResult() should returns JSON  
**Confidence**: 0.60  

```javascript
var parser1 = new UAParser(uaString, {browser: myOwnBrowser})
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/ua-parser-js/test/test.js:87*

### getResult() should returns JSON

**Category**: instantiation  
**Description**: Test: getResult() should returns JSON  
**Confidence**: 0.60  

```javascript
var parser2 = new UAParser({browser: myOwnBrowser})
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/ua-parser-js/test/test.js:92*

### should loaded automatically

**Category**: instantiation  
**Description**: Test: should loaded automatically  
**Confidence**: 0.60  

```javascript
var parser = new ua('Dillo/1.0')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/ua-parser-js/test/test.js:108*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:198*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:240*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:242*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:1987*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3100*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3106*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3112*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3118*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3131*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3140*

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

### should search for phone numbers

**Category**: instantiation  
**Description**: Test: should search for phone numbers  
**Confidence**: 0.60  

```javascript
const finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/legacy/findPhoneNumbers.test.js:189*

### should search for phone numbers (no options)

**Category**: instantiation  
**Description**: Test: should search for phone numbers (no options)  
**Confidence**: 0.60  

```javascript
const finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/legacy/findPhoneNumbers.test.js:213*

### should work in edge cases

**Category**: instantiation  
**Description**: Test: should work in edge cases  
**Confidence**: 0.60  

```javascript
const search = new PhoneNumberSearch('', undefined, metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/legacy/findPhoneNumbers.test.js:227*

### should parse a carrier code when there is no national prefix transform rule

**Category**: instantiation  
**Description**: Test: should parse a carrier code when there is no national prefix transform rule  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.test.js:6*

### should return undefined for non-defined types

**Category**: instantiation  
**Description**: Test: should return undefined for non-defined types  
**Confidence**: 0.60  

```javascript
const FR = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:11*

### should tell if a national prefix is mandatory when formatting a national number

**Category**: instantiation  
**Description**: Test: should tell if a national prefix is mandatory when formatting a national number  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:43*

### should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV4)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:84*

### should work around `nonGeographic` metadata not existing before `1.7.35`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographic` metadata not existing before `1.7.35`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV3)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:90*

### should work with metadata from version `1.1.11`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.1.11`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV2)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:96*

### should work with metadata from version `1.0.0`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.0.0`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:119*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:141*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:145*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:151*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/metadata.test.js:155*

### should throw when no string is passed

**Category**: instantiation  
**Description**: Test: should throw when no string is passed  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('1')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:9*

### should match a one-digit pattern

**Category**: instantiation  
**Description**: Test: should match a one-digit pattern  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('4')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:42*

### should match a two-digit pattern

**Category**: instantiation  
**Description**: Test: should match a two-digit pattern  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('44')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:58*

### should match a one-digit one-of set (single digit)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (single digit)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:80*

### should match a one-digit one-of set (multiple digits)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (multiple digits)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[479]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:96*

### should match a one-digit one-of set using a dash notation (not inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (not inclusive)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[2-5]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:112*

### should match a one-digit one-of set using a dash notation (inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (inclusive)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[3-4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:128*

### should match a one-digit one-of set including a dash notation

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set including a dash notation  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[124-68]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:144*

### should match a two-digit one-of set

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[479][45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:186*

### should match a two-digit one-of set (regular digit and a one-of set)

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set (regular digit and a one-of set)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('1[45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:209*

### should throw when no string is passed

**Category**: instantiation  
**Description**: Test: should throw when no string is passed  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('1')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:9*

### should match a one-digit pattern

**Category**: instantiation  
**Description**: Test: should match a one-digit pattern  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('4')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:50*

### should match a two-digit pattern

**Category**: instantiation  
**Description**: Test: should match a two-digit pattern  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('44')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:63*

### should match a one-digit one-of set (single digit)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (single digit)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:80*

### should match a one-digit one-of set (multiple digits)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (multiple digits)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[479]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:93*

### should match a one-digit one-of set using a dash notation (not inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (not inclusive)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[2-5]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:106*

### should match a one-digit one-of set using a dash notation (inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (inclusive)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[3-4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:119*

### should match a one-digit one-of set including a dash notation

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set including a dash notation  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[124-68]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:132*

### should match a two-digit one-of set

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[479][45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:163*

### should match a two-digit one-of set (regular digit and a one-of set)

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set (regular digit and a one-of set)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('1[45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:181*

### Proxies that return an undefined descriptor

**Category**: instantiation  
**Description**: Test: Proxies that return an undefined descriptor  
**Confidence**: 0.60  

```javascript
var proxy = new Proxy(obj, {
			getOwnPropertyDescriptor: function (target, key)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/test/tests.js:111*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var NZ_NUMBER = new PhoneNumber('64', '33316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:18*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var nzFromPhoneContext = new PhoneNumber('64', '3033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:22*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var brFromPhoneContext = new PhoneNumber('55', '5033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:24*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var usFromPhoneContext = new PhoneNumber('1', '23033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:26*

### should extract a national number when using old metadata

**Category**: instantiation  
**Description**: Test: should extract a national number when using old metadata  
**Confidence**: 0.60  

```javascript
const _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/extractNationalNumber.test.js:8*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:148*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:150*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:269*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:1979*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:3092*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:3098*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:3104*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:3110*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:3123*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/es-abstract/test/tests.js:3132*

### custom errors

**Category**: instantiation  
**Description**: Test: custom errors  
**Confidence**: 0.60  

```javascript
const cust = new Cust('foo is not bar')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/errno/test.js:24*

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

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/errno/test.js:77*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:198*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:240*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:242*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:1987*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3100*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3106*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3112*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3118*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3131*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimstart/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3140*

### sticky

**Category**: instantiation  
**Description**: Test: sticky  
**Confidence**: 0.60  

```javascript
var regex = new RegExp('\\B', 'y')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.matchall/test/tests.js:223*

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

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/miller-rabin/test/api-test.js:10*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:148*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:150*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:269*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:1979*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:3092*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:3098*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:3104*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:3110*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:3123*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/es-abstract/test/tests.js:3132*

### Basic behavior

**Category**: instantiation  
**Description**: Test: Basic behavior  
**Confidence**: 0.60  

```javascript
var buf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/to-arraybuffer/test.js:17*

### Behavior when input is a subarray 1

**Category**: instantiation  
**Description**: Test: Behavior when input is a subarray 1  
**Confidence**: 0.60  

```javascript
var origBuf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/to-arraybuffer/test.js:30*

### Behavior when input is a subarray 2

**Category**: instantiation  
**Description**: Test: Behavior when input is a subarray 2  
**Confidence**: 0.60  

```javascript
var origBuf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/to-arraybuffer/test.js:45*

### set headers

**Category**: instantiation  
**Description**: Test: set headers  
**Confidence**: 0.60  

```javascript
const noAuthSession = new NoAuthSession()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/common/utils/httpClient.test.js:9*

### should work for old metadata

**Category**: instantiation  
**Description**: Test: should work for old metadata  
**Confidence**: 0.60  

```javascript
var _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:25*

### should work for old metadata

**Category**: instantiation  
**Description**: Test: should work for old metadata  
**Confidence**: 0.60  

```javascript
var _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:34*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var key = new Buffer(vec.key, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/des-test.js:87*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var input = new Buffer(vec.input, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/des-test.js:88*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var out = new Buffer(enc.update(input)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/des-test.js:98*

### should buffer during encryption/decryption

**Category**: instantiation  
**Description**: Test: should buffer during encryption/decryption  
**Confidence**: 0.60  

```javascript
var key = new Buffer('0102030405060708', 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/des-test.js:111*

### should buffer during encryption/decryption

**Category**: instantiation  
**Description**: Test: should buffer during encryption/decryption  
**Confidence**: 0.60  

```javascript
var chunk = new Buffer('01020304050607', 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/des-test.js:112*

### should buffer during encryption/decryption

**Category**: instantiation  
**Description**: Test: should buffer during encryption/decryption  
**Confidence**: 0.60  

```javascript
var expected = new Buffer(
          new Array(count + 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/des-test.js:114*

### round trip key 

**Category**: instantiation  
**Description**: Test: round trip key   
**Confidence**: 0.60  

```javascript
var r = new bn(crypto.randomBytes(len)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/browserify-rsa/test.js:34*

### round trip key 

**Category**: instantiation  
**Description**: Test: round trip key   
**Confidence**: 0.60  

```javascript
var buf = new Buffer(r.toArray()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/browserify-rsa/test.js:38*

### round trip key 

**Category**: instantiation  
**Description**: Test: round trip key   
**Confidence**: 0.60  

```javascript
var tmp = new Buffer(priv.modulus.byteLength()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/browserify-rsa/test.js:40*

### should accept country code argument

**Category**: instantiation  
**Description**: Test: should accept country code argument  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('RU', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:12*

### should format number with options

**Category**: instantiation  
**Description**: Test: should format number with options  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('7', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:19*

### should allow setting extension

**Category**: instantiation  
**Description**: Test: should allow setting extension  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:39*

### should return possible countries

**Category**: instantiation  
**Description**: Test: should return possible countries  
**Confidence**: 0.60  

```javascript
let phoneNumber = new PhoneNumber('599', '123456', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:51*

### should return possible countries in case of ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of ambiguity  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '2223334444', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:69*

### should return empty possible countries when no national number has been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when no national number has been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:76*

### should return empty possible countries when not enough national number digits have been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when not enough national number digits have been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '222', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:82*

### should return possible countries in case of no ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of no ambiguity  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('US', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:88*

### should return empty possible countries in case of an unknown calling code

**Category**: instantiation  
**Description**: Test: should return empty possible countries in case of an unknown calling code  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('777', '123', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:94*

### should validate phone number length

**Category**: instantiation  
**Description**: Test: should validate phone number length  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('RU', '800', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/PhoneNumber.test.js:100*

### should populate national number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate national number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:49*

### should populate international number template (digit by digit) (default country)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit) (default country)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:61*

### should populate international number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:85*

### should populate national number template (attempt to format complete number)

**Category**: instantiation  
**Description**: Test: should populate national number template (attempt to format complete number)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:107*

### should filter out formats that require a national prefix and no national prefix has been input

**Category**: instantiation  
**Description**: Test: should filter out formats that require a national prefix and no national prefix has been input  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('AF')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:272*

### should work when a digit is not a national prefix but a part of a valid national number

**Category**: instantiation  
**Description**: Test: should work when a digit is not a national prefix but a part of a valid national number  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:284*

### should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('FR')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:305*

### should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:311*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
var asYouType = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:339*

### should fall back to the default country

**Category**: instantiation  
**Description**: Test: should fall back to the default country  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/AsYouType.test.js:352*

### should accept country code argument

**Category**: instantiation  
**Description**: Test: should accept country code argument  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('RU', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:16*

### should format number with options

**Category**: instantiation  
**Description**: Test: should format number with options  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('7', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:22*

### should allow setting extension

**Category**: instantiation  
**Description**: Test: should allow setting extension  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('1', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:40*

### should return possible countries

**Category**: instantiation  
**Description**: Test: should return possible countries  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('599', '123456', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:50*

### should return possible countries in case of ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of ambiguity  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('1', '2223334444', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:64*

### should return empty possible countries when no national number has been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when no national number has been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:69*

### should return empty possible countries when not enough national number digits have been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when not enough national number digits have been input  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('1', '222', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:75*

### should return possible countries in case of no ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of no ambiguity  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('US', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:80*

### should return empty possible countries in case of an unknown calling code

**Category**: instantiation  
**Description**: Test: should return empty possible countries in case of an unknown calling code  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('777', '123', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:85*

### should validate phone number length

**Category**: instantiation  
**Description**: Test: should validate phone number length  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('RU', '800', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:89*

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

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/browserify-des/test.js:37*

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

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/browserify-des/test.js:70*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:148*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:150*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:269*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:1979*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:3092*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:3098*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:3104*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:3110*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:3123*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.trimend/node_modules/es-abstract/test/tests.js:3132*

### should parse a carrier code when there is no national prefix transform rule

**Category**: instantiation  
**Description**: Test: should parse a carrier code when there is no national prefix transform rule  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/extractNationalNumberFromPossiblyIncompleteNumber.test.js:7*

### should search for phone numbers

**Category**: instantiation  
**Description**: Test: should search for phone numbers  
**Confidence**: 0.60  

```javascript
var finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/legacy/findPhoneNumbers.test.js:185*

### should search for phone numbers (no options)

**Category**: instantiation  
**Description**: Test: should search for phone numbers (no options)  
**Confidence**: 0.60  

```javascript
var finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/legacy/findPhoneNumbers.test.js:207*

### should work in edge cases

**Category**: instantiation  
**Description**: Test: should work in edge cases  
**Confidence**: 0.60  

```javascript
var search = new PhoneNumberSearch('', undefined, metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/legacy/findPhoneNumbers.test.js:220*

### basic version

**Category**: instantiation  
**Description**: Test: basic version  
**Confidence**: 0.60  

```javascript
var cipher = new Cipher()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/cipher-base/test.js:19*

### hash mode

**Category**: instantiation  
**Description**: Test: hash mode  
**Confidence**: 0.60  

```javascript
var cipher = new Cipher()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/cipher-base/test.js:39*

### hash mode as stream

**Category**: instantiation  
**Description**: Test: hash mode as stream  
**Confidence**: 0.60  

```javascript
var cipher = new Cipher()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/cipher-base/test.js:60*

### mix and match encoding

**Category**: instantiation  
**Description**: Test: mix and match encoding  
**Confidence**: 0.60  

```javascript
var cipher = new Cipher()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/cipher-base/test.js:87*

### handle long uft8 plaintexts

**Category**: instantiation  
**Description**: Test: handle long uft8 plaintexts  
**Confidence**: 0.60  

```javascript
var cipher = new Cipher()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/cipher-base/test.js:103*

### handle long uft8 plaintexts

**Category**: instantiation  
**Description**: Test: handle long uft8 plaintexts  
**Confidence**: 0.60  

```javascript
var decipher = new Cipher()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/cipher-base/test.js:104*

### should return empty possible countries when no national number has been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when no national number has been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/PhoneNumber.test.js:75*

### should validate phone number length

**Category**: instantiation  
**Description**: Test: should validate phone number length  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('RU', '800', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/PhoneNumber.test.js:95*

### should validate phone number length

**Category**: instantiation  
**Description**: Test: should validate phone number length  
**Confidence**: 0.60  

```javascript
const phoneNumberValid = new PhoneNumber('RU', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/build/PhoneNumber.test.js:98*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/utils-test.js:14*

### should rev-permute properly

**Category**: instantiation  
**Description**: Test: should rev-permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/utils-test.js:31*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/utils-test.js:50*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/utils-test.js:85*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:148*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:150*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:269*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:1979*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:3092*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:3098*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:3104*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:3110*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:3123*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/es-abstract/test/tests.js:3132*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var key = new Buffer(vec.key, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/ede-test.js:47*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var iv = new Buffer(vec.iv, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/ede-test.js:48*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var input = new Buffer(vec.input, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/ede-test.js:49*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var out = new Buffer(enc.update(input)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/ede-test.js:56*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:198*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:240*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:242*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:1987*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3100*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3106*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3112*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3118*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3131*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/string.prototype.repeat/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3140*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const NZ_NUMBER = new PhoneNumber('64', '33316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:15*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const nzFromPhoneContext = new PhoneNumber('64', '3033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:28*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const brFromPhoneContext = new PhoneNumber('55', '5033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:34*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const usFromPhoneContext = new PhoneNumber('1', '23033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:40*

### should work for old metadata

**Category**: instantiation  
**Description**: Test: should work for old metadata  
**Confidence**: 0.60  

```javascript
const _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:30*

### should work for old metadata

**Category**: instantiation  
**Description**: Test: should work for old metadata  
**Confidence**: 0.60  

```javascript
const _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:37*

### should create and update question group obs

**Category**: instantiation  
**Description**: Test: should create and update question group obs  
**Confidence**: 0.60  

```javascript
const observationsHolder = new ObservationsHolder(subject.observations)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:70*

### should create and update repeatable question group obs

**Category**: instantiation  
**Description**: Test: should create and update repeatable question group obs  
**Confidence**: 0.60  

```javascript
const observationsHolder = new ObservationsHolder(subject.observations)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:89*

### should handle validation errors and not proceed to next group

**Category**: instantiation  
**Description**: Test: should handle validation errors and not proceed to next group  
**Confidence**: 0.60  

```javascript
const emptyObservationsHolder = new ObservationsHolder(emptySubject.observations)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:377*

### should validate form element data

**Category**: instantiation  
**Description**: Test: should validate form element data  
**Confidence**: 0.60  

```javascript
const emptyObsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:779*

### should return validation errors for ID fields without observations

**Category**: instantiation  
**Description**: Test: should return validation errors for ID fields without observations  
**Confidence**: 0.60  

```javascript
const emptyObsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:1112*

### should not return validation errors for ID fields with observations

**Category**: instantiation  
**Description**: Test: should not return validation errors for ID fields with observations  
**Confidence**: 0.60  

```javascript
const obsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:1129*

### should not return validation errors for non-ID fields

**Category**: instantiation  
**Description**: Test: should not return validation errors for non-ID fields  
**Confidence**: 0.60  

```javascript
const emptyObsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:1142*

### should return validation errors for mandatory fields without observations

**Category**: instantiation  
**Description**: Test: should return validation errors for mandatory fields without observations  
**Confidence**: 0.60  

```javascript
const emptyObsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:1156*

### should not return validation errors for mandatory fields with observations

**Category**: instantiation  
**Description**: Test: should not return validation errors for mandatory fields with observations  
**Confidence**: 0.60  

```javascript
const obsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:1172*

### should not return validation errors for non-mandatory fields without observations

**Category**: instantiation  
**Description**: Test: should not return validation errors for non-mandatory fields without observations  
**Confidence**: 0.60  

```javascript
const emptyObsHolder = new ObservationsHolder([])
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/dataEntryApp/reducers/commonFormUtil.test.js:1186*

### should return undefined for non-defined types

**Category**: instantiation  
**Description**: Test: should return undefined for non-defined types  
**Confidence**: 0.60  

```javascript
var FR = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:11*

### should tell if a national prefix is mandatory when formatting a national number

**Category**: instantiation  
**Description**: Test: should tell if a national prefix is mandatory when formatting a national number  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:40*

### should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV4)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:115*

### should work around `nonGeographic` metadata not existing before `1.7.35`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographic` metadata not existing before `1.7.35`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV3)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:120*

### should work with metadata from version `1.1.11`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.1.11`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV2)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:125*

### should work with metadata from version `1.0.0`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.0.0`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:143*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:160*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:163*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:168*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/metadata.test.js:171*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var regErrorMsg = new RegExp('First argument must be a string, Buffer, ' +
                               'ArrayBuffer, Array, or array-like object.')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/buffer/test/node/test-buffer-alloc.js:1449*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:198*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var invalid = new Date(NaN)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:240*

### dates

**Category**: instantiation  
**Description**: Test: dates  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:242*

### thisTimeValue

**Category**: instantiation  
**Description**: Test: thisTimeValue  
**Confidence**: 0.60  

```javascript
var date = new Date(timestamp)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:1987*

### SecFromTime

**Category**: instantiation  
**Description**: Test: SecFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3100*

### MinFromTime

**Category**: instantiation  
**Description**: Test: MinFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3106*

### HourFromTime

**Category**: instantiation  
**Description**: Test: HourFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3112*

### msFromTime

**Category**: instantiation  
**Description**: Test: msFromTime  
**Confidence**: 0.60  

```javascript
var now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3118*

### Day

**Category**: instantiation  
**Description**: Test: Day  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3131*

### TimeWithinDay

**Category**: instantiation  
**Description**: Test: TimeWithinDay  
**Confidence**: 0.60  

```javascript
var later = new Date(time + (add * msPerDay)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/object.getownpropertydescriptors/node_modules/object.assign/node_modules/es-abstract/test/tests.js:3140*

### should extract a national number when using old metadata

**Category**: instantiation  
**Description**: Test: should extract a national number when using old metadata  
**Confidence**: 0.60  

```javascript
var _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.test.js:6*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var ab = new ArrayBuffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/arraybuffer.prototype.slice/test/tests.js:21*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var ab2 = new ArrayBuffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/arraybuffer.prototype.slice/test/tests.js:39*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var one = new ArrayBuffer(1)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/arraybuffer.prototype.slice/test/tests.js:55*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var arr = new Uint8Array(one)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/arraybuffer.prototype.slice/test/tests.js:56*

### ArrayBuffers

**Category**: instantiation  
**Description**: Test: ArrayBuffers  
**Confidence**: 0.60  

```javascript
var arr2 = new Uint8Array(two)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/arraybuffer.prototype.slice/test/tests.js:61*

### SharedArrayBuffers

**Category**: instantiation  
**Description**: Test: SharedArrayBuffers  
**Confidence**: 0.60  

```javascript
var sab = new SharedArrayBuffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/arraybuffer.prototype.slice/test/tests.js:71*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var key = new Buffer(vec.key, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/cbc-test.js:47*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var iv = new Buffer(vec.iv, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/cbc-test.js:48*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var input = new Buffer(vec.input, 'hex')
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/cbc-test.js:49*

### should encrypt vector 

**Category**: instantiation  
**Description**: Test: should encrypt vector   
**Confidence**: 0.60  

```javascript
var out = new Buffer(enc.update(input)
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/node_modules/des.js/test/cbc-test.js:56*

### can map form element

**Category**: instantiation  
**Description**: Test: can map form element  
**Confidence**: 0.60  

```javascript
const feg = new WebFormElementGroup()
```

*Source: /Users/himeshr/IdeaProjects/avni-webapp/src/common/adapters.test.js:66*

