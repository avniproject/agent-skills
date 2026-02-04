# Test Example Extraction Report

**Total Examples**: 310  
**High Value Examples** (confidence > 0.7): 0  
**Average Complexity**: 0.13  

## Examples by Category

- **instantiation**: 310

## Examples by Language

- **JavaScript**: 310

## Extracted Examples

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-windows/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

### should populate national number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate national number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:36*

### should populate international number template (digit by digit) (default country)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit) (default country)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:48*

### should populate international number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:72*

### should populate national number template (attempt to format complete number)

**Category**: instantiation  
**Description**: Test: should populate national number template (attempt to format complete number)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:94*

### should filter out formats that require a national prefix and no national prefix has been input

**Category**: instantiation  
**Description**: Test: should filter out formats that require a national prefix and no national prefix has been input  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('AF')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:297*

### should work when a digit is not a national prefix but a part of a valid national number

**Category**: instantiation  
**Description**: Test: should work when a digit is not a national prefix but a part of a valid national number  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:311*

### should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('FR')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:332*

### should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:338*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
var asYouType = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:368*

### should fall back to the default country

**Category**: instantiation  
**Description**: Test: should fall back to the default country  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/AsYouType.test.js:381*

### should throw when no string is passed

**Category**: instantiation  
**Description**: Test: should throw when no string is passed  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('1')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:9*

### should match a one-digit pattern

**Category**: instantiation  
**Description**: Test: should match a one-digit pattern  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('4')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:50*

### should match a two-digit pattern

**Category**: instantiation  
**Description**: Test: should match a two-digit pattern  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('44')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:63*

### should match a one-digit one-of set (single digit)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (single digit)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:80*

### should match a one-digit one-of set (multiple digits)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (multiple digits)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[479]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:93*

### should match a one-digit one-of set using a dash notation (not inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (not inclusive)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[2-5]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:106*

### should match a one-digit one-of set using a dash notation (inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (inclusive)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[3-4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:119*

### should match a one-digit one-of set including a dash notation

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set including a dash notation  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[124-68]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:132*

### should match a two-digit one-of set

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('[479][45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:163*

### should match a two-digit one-of set (regular digit and a one-of set)

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set (regular digit and a one-of set)  
**Confidence**: 0.60  

```javascript
var matcher = new PatternMatcher('1[45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouTypeFormatter.PatternMatcher.test.js:181*

### emits event

**Category**: instantiation  
**Description**: Test: emits event  
**Confidence**: 0.60  

```javascript
var emitter = new NavigationEventEmitter(context)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEventEmitter-test.js:40*

### does not emit event that has no listeners

**Category**: instantiation  
**Description**: Test: does not emit event that has no listeners  
**Confidence**: 0.60  

```javascript
var emitter = new NavigationEventEmitter(context)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEventEmitter-test.js:66*

### puts nested emit call in a queue

**Category**: instantiation  
**Description**: Test: puts nested emit call in a queue  
**Confidence**: 0.60  

```javascript
var emitter = new NavigationEventEmitter(context)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEventEmitter-test.js:79*

### puts nested emit call in a queue should be in sequence order

**Category**: instantiation  
**Description**: Test: puts nested emit call in a queue should be in sequence order  
**Confidence**: 0.60  

```javascript
var emitter = new NavigationEventEmitter(context)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEventEmitter-test.js:105*

### calls callback after emitting

**Category**: instantiation  
**Description**: Test: calls callback after emitting  
**Confidence**: 0.60  

```javascript
var emitter = new NavigationEventEmitter(context)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEventEmitter-test.js:131*

### calls callback after emitting the current event and before 

**Category**: instantiation  
**Description**: Test: calls callback after emitting the current event and before   
**Confidence**: 0.60  

```javascript
var emitter = new NavigationEventEmitter(context)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEventEmitter-test.js:165*

### getUserAgent version match

**Category**: instantiation  
**Description**: Test: getUserAgent version match  
**Confidence**: 0.60  

```javascript
const userAgent = new UserAgent()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/UserAgentDefault.test.js:6*

### Happy case for syncing

**Category**: instantiation  
**Description**: Test: Happy case for syncing  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:75*

### Get all keys throws errors

**Category**: instantiation  
**Description**: Test: Get all keys throws errors  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:93*

### Multiget throws errors

**Category**: instantiation  
**Description**: Test: Multiget throws errors  
**Confidence**: 0.60  

```javascript
const err = new Error('Storage Error')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:106*

### Multiget throws errors

**Category**: instantiation  
**Description**: Test: Multiget throws errors  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:114*

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

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/miller-rabin/test/api-test.js:10*

### should throw when no string is passed

**Category**: instantiation  
**Description**: Test: should throw when no string is passed  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('1')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:9*

### should match a one-digit pattern

**Category**: instantiation  
**Description**: Test: should match a one-digit pattern  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('4')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:42*

### should match a two-digit pattern

**Category**: instantiation  
**Description**: Test: should match a two-digit pattern  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('44')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:58*

### should match a one-digit one-of set (single digit)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (single digit)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:80*

### should match a one-digit one-of set (multiple digits)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set (multiple digits)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[479]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:96*

### should match a one-digit one-of set using a dash notation (not inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (not inclusive)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[2-5]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:112*

### should match a one-digit one-of set using a dash notation (inclusive)

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set using a dash notation (inclusive)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[3-4]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:128*

### should match a one-digit one-of set including a dash notation

**Category**: instantiation  
**Description**: Test: should match a one-digit one-of set including a dash notation  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[124-68]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:144*

### should match a two-digit one-of set

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('[479][45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:186*

### should match a two-digit one-of set (regular digit and a one-of set)

**Category**: instantiation  
**Description**: Test: should match a two-digit one-of set (regular digit and a one-of set)  
**Confidence**: 0.60  

```javascript
const matcher = new PatternMatcher('1[45]')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouTypeFormatter.PatternMatcher.test.js:209*

### should extract a national number when using old metadata (no `country` or `defaultCountry` specified)

**Category**: instantiation  
**Description**: Test: should extract a national number when using old metadata (no `country` or `defaultCountry` specified)  
**Confidence**: 0.60  

```javascript
const _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractNationalNumber.test.js:8*

### should extract a national number when using old metadata (`country` is specified)

**Category**: instantiation  
**Description**: Test: should extract a national number when using old metadata (`country` is specified)  
**Confidence**: 0.60  

```javascript
const _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractNationalNumber.test.js:17*

### should create a phone number via a public constructor

**Category**: instantiation  
**Description**: Test: should create a phone number via a public constructor  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('+78005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:6*

### should accept country code argument

**Category**: instantiation  
**Description**: Test: should accept country code argument  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('RU', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:31*

### should format number with options

**Category**: instantiation  
**Description**: Test: should format number with options  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('7', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:38*

### should allow setting extension

**Category**: instantiation  
**Description**: Test: should allow setting extension  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:63*

### should return possible countries

**Category**: instantiation  
**Description**: Test: should return possible countries  
**Confidence**: 0.60  

```javascript
let phoneNumber = new PhoneNumber('599', '123456', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:75*

### should return possible countries in case of ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of ambiguity  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '2223334444', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:93*

### should return empty possible countries when no national number has been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when no national number has been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:100*

### should return empty possible countries when not enough national number digits have been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when not enough national number digits have been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '222', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:106*

### should return possible countries in case of no ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of no ambiguity  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('US', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:112*

### should return empty possible countries in case of an unknown calling code

**Category**: instantiation  
**Description**: Test: should return empty possible countries in case of an unknown calling code  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('777', '123', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumber.test.js:118*

### should parse a carrier code when there is no national prefix transform rule

**Category**: instantiation  
**Description**: Test: should parse a carrier code when there is no national prefix transform rule  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.test.js:6*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var NZ_NUMBER = new PhoneNumber('64', '33316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:16*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var nzFromPhoneContext = new PhoneNumber('64', '3033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:21*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var brFromPhoneContext = new PhoneNumber('55', '5033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:23*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
var usFromPhoneContext = new PhoneNumber('1', '23033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.test.js:25*

### should create a phone number via a public constructor

**Category**: instantiation  
**Description**: Test: should create a phone number via a public constructor  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('+78005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:5*

### should accept country code argument

**Category**: instantiation  
**Description**: Test: should accept country code argument  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('RU', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:47*

### should format number with options

**Category**: instantiation  
**Description**: Test: should format number with options  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('7', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:53*

### should allow setting extension

**Category**: instantiation  
**Description**: Test: should allow setting extension  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('1', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:71*

### should return possible countries

**Category**: instantiation  
**Description**: Test: should return possible countries  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('599', '123456', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:82*

### should return possible countries in case of ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of ambiguity  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('1', '2223334444', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:96*

### should return empty possible countries when no national number has been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when no national number has been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:103*

### should return empty possible countries when not enough national number digits have been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when not enough national number digits have been input  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('1', '222', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:109*

### should return possible countries in case of no ambiguity

**Category**: instantiation  
**Description**: Test: should return possible countries in case of no ambiguity  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('US', '2133734253', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:114*

### should return empty possible countries in case of an unknown calling code

**Category**: instantiation  
**Description**: Test: should return empty possible countries in case of an unknown calling code  
**Confidence**: 0.60  

```javascript
var phoneNumber = new PhoneNumber('777', '123', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumber.test.js:119*

### Constructing a CognitoID Token

**Category**: instantiation  
**Description**: Test: Constructing a CognitoID Token  
**Confidence**: 0.60  

```javascript
const cognitoToken = new CognitoIdToken('testToken')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoIdToken.test.js:5*

### Undefined Name

**Category**: instantiation  
**Description**: Test: Undefined Name  
**Confidence**: 0.60  

```javascript
const undefinedCognitoName = new CognitoUserAttribute({ Value: testValue })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserAttribute.test.js:43*

### Undefined Value

**Category**: instantiation  
**Description**: Test: Undefined Value  
**Confidence**: 0.60  

```javascript
const undefinedCognitoValue = new CognitoUserAttribute({ Name: testName })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserAttribute.test.js:48*

### Undefined cognito attributes

**Category**: instantiation  
**Description**: Test: Undefined cognito attributes  
**Confidence**: 0.60  

```javascript
const undefinedCognitoAttr = new CognitoUserAttribute()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserAttribute.test.js:53*

### Calculate the client

**Category**: instantiation  
**Description**: Test: Calculate the client  
**Confidence**: 0.60  

```javascript
const hexA = new BigInteger('abcd1234', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:726*

### Calculate the client

**Category**: instantiation  
**Description**: Test: Calculate the client  
**Confidence**: 0.60  

```javascript
const hexB = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:727*

### Calculate the client

**Category**: instantiation  
**Description**: Test: Calculate the client  
**Confidence**: 0.60  

```javascript
const expected = new BigInteger(hashed, 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:732*

### Test hexHash function produces a valid hex string with regex

**Category**: instantiation  
**Description**: Test: Test hexHash function produces a valid hex string with regex  
**Confidence**: 0.60  

```javascript
const awsCryptoHash = new Sha256()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:741*

### happy path hkdf algorithm returns a length 16 hex string

**Category**: instantiation  
**Description**: Test: happy path hkdf algorithm returns a length 16 hex string  
**Confidence**: 0.60  

```javascript
const realServerValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:768*

### happy path hkdf algorithm returns a length 16 hex string

**Category**: instantiation  
**Description**: Test: happy path hkdf algorithm returns a length 16 hex string  
**Confidence**: 0.60  

```javascript
const salt = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:769*

### Getting a U Value of zero

**Category**: instantiation  
**Description**: Test: Getting a U Value of zero  
**Confidence**: 0.60  

```javascript
const realServerValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:829*

### Getting a U Value of zero

**Category**: instantiation  
**Description**: Test: Getting a U Value of zero  
**Confidence**: 0.60  

```javascript
const xValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:844*

### Getting a U Value of zero

**Category**: instantiation  
**Description**: Test: Getting a U Value of zero  
**Confidence**: 0.60  

```javascript
const serverValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:845*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const NZ_NUMBER = new PhoneNumber('64', '33316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:15*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const nzFromPhoneContext = new PhoneNumber('64', '3033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:28*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const brFromPhoneContext = new PhoneNumber('55', '5033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:34*

### should parse RFC 3966 phone number URIs

**Category**: instantiation  
**Description**: Test: should parse RFC 3966 phone number URIs  
**Confidence**: 0.60  

```javascript
const usFromPhoneContext = new PhoneNumber('1', '23033316005', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractPhoneContext.test.js:40*

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-clipboard/clipboard/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

### should support Node.js Buffers

**Category**: instantiation  
**Description**: Test: should support Node.js Buffers  
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('message áßäöü', 'utf8')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/md5/test.js:38*

### should support Uint8Array

**Category**: instantiation  
**Description**: Test: should support Uint8Array  
**Confidence**: 0.60  

```javascript
var result = new Array(src.length)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/md5/test.js:54*

### should support Uint8Array

**Category**: instantiation  
**Description**: Test: should support Uint8Array  
**Confidence**: 0.60  

```javascript
var result = new Uint8Array(src.length)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/md5/test.js:62*

### autolink with incomplete windows project

**Category**: instantiation  
**Description**: Test: autolink with incomplete windows project  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: {} }, {}, { check: true, logging: false })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:26*

### autolink fixup sln

**Category**: instantiation  
**Description**: Test: autolink fixup sln  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.' } }, {}, { check: true, logging: false, sln: 'foo' })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:65*

### autolink fixup proj

**Category**: instantiation  
**Description**: Test: autolink fixup proj  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {}, {
        check: true,
        logging: false,
        proj: 'projects/WithWinUI3/windows/WithWinUI3/WithWinUI3.vcxproj',
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:77*

### empty cpp autolink dependencies

**Category**: instantiation  
**Description**: Test: empty cpp autolink dependencies  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {}, {
        check: true,
        logging: false,
        proj: 'projects/WithWinUI3/windows/WithWinUI3/WithWinUI3.vcxproj',
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:96*

### one invalid cpp autolink dependency

**Category**: instantiation  
**Description**: Test: one invalid cpp autolink dependency  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {},
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/WithWinUI3/windows/WithWinUI3/WithWinUI3.vcxproj',
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:106*

### one invalid cs autolink dependency

**Category**: instantiation  
**Description**: Test: one invalid cs autolink dependency  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {},
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/SimpleCSharpApp/windows/SimpleCSharpApp/SimpleCSharpApp.csproj',
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:124*

### one valid cpp autolink dependency

**Category**: instantiation  
**Description**: Test: one valid cpp autolink dependency  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {
                    sourceDir: __dirname,
                    projects: [
                        {
                            directDependency: true,
                            projectFile: 'superModule.vcxproj',
                            cppHeaders: ['Garfield.h', 'Snoopy.h'],
                            cppPackageProviders: ['FamousAnimalCartoons'],
                        },
                    ],
                },
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/WithWinUI3/windows/WithWinUI3/WithWinUI3.vcxproj',
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:142*

### one valid cs autolink dependency

**Category**: instantiation  
**Description**: Test: one valid cs autolink dependency  
**Confidence**: 0.60  

```javascript
const autolink = new AutoLinkTest({ windows: { folder: __dirname, sourceDir: '.', solutionFile: 'foo.sln' } }, {
        superModule: {
            name: 'superModule',
            root: 'theRoot',
            platforms: {
                windows: {
                    sourceDir: __dirname,
                    projects: [
                        {
                            directDependency: true,
                            csNamespaces: ['Garfield'],
                            projectFile: 'superModule.vcxproj',
                            cppHeaders: ['Garfield.h', 'Snoopy.h'],
                            csPackageProviders: ['FamousAnimalCartoons'],
                        },
                    ],
                },
            },
        },
    }, {
        check: true,
        logging: false,
        proj: 'projects/SimpleCSharpApp/windows/SimpleCSharpApp/SimpleCSharpApp.csproj',
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:171*

### ensureXAMLDialect - useWinUI3=true in react-native.config.js, useWinUI3=false in ExperimentalFeatures.props

**Category**: instantiation  
**Description**: Test: ensureXAMLDialect - useWinUI3=true in react-native.config.js, useWinUI3=false in ExperimentalFeatures.props  
**Confidence**: 0.60  

```javascript
const al = new AutoLinkTest({ windows: config }, {}, {
        check: false,
        logging: false,
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:207*

### ensureXAMLDialect - useWinUI3=false in react-native.config.js, useWinUI3=true in ExperimentalFeatures.props

**Category**: instantiation  
**Description**: Test: ensureXAMLDialect - useWinUI3=false in react-native.config.js, useWinUI3=true in ExperimentalFeatures.props  
**Confidence**: 0.60  

```javascript
const al = new AutoLinkTest({ windows: config }, {}, {
        check: false,
        logging: false,
    })
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/cli/lib-commonjs/e2etest/autolink.test.js:232*

### gets index

**Category**: instantiation  
**Description**: Test: gets index  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(1, ['a', 'b', 'c'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:50*

### gets size

**Category**: instantiation  
**Description**: Test: gets size  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(1, ['a', 'b', 'c'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:55*

### gets route

**Category**: instantiation  
**Description**: Test: gets route  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, ['a', 'b', 'c'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:60*

### converts to an array

**Category**: instantiation  
**Description**: Test: converts to an array  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, ['a', 'b'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:65*

### creates a new stack after mutation

**Category**: instantiation  
**Description**: Test: creates a new stack after mutation  
**Confidence**: 0.60  

```javascript
var stack1 = new NavigationRouteStack(0, ['a', 'b'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:70*

### finds index

**Category**: instantiation  
**Description**: Test: finds index  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, ['a', 'b'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:86*

### gets key for route

**Category**: instantiation  
**Description**: Test: gets key for route  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, ['a'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:94*

### gets a key of larger value for route

**Category**: instantiation  
**Description**: Test: gets a key of larger value for route  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, ['a'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:106*

### gets an unique key for a different route

**Category**: instantiation  
**Description**: Test: gets an unique key for a different route  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, ['a'])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:116*

### gets the same unique key for the same route

**Category**: instantiation  
**Description**: Test: gets the same unique key for the same route  
**Confidence**: 0.60  

```javascript
var stack = new NavigationRouteStack(0, [route])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationRouteStack-test.js:131*

### Chance() does return differing results if differing seeds provided

**Category**: instantiation  
**Description**: Test: Chance() does return differing results if differing seeds provided  
**Confidence**: 0.60  

```javascript
let chance1 = new Chance(12345)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:74*

### Chance() does return differing results if differing seeds provided

**Category**: instantiation  
**Description**: Test: Chance() does return differing results if differing seeds provided  
**Confidence**: 0.60  

```javascript
let chance2 = new Chance(54321)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:75*

### Chance() does not return repeatable results if no seed provided

**Category**: instantiation  
**Description**: Test: Chance() does not return repeatable results if no seed provided  
**Confidence**: 0.60  

```javascript
let chance1 = new Chance()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:81*

### Chance() does not return repeatable results if no seed provided

**Category**: instantiation  
**Description**: Test: Chance() does not return repeatable results if no seed provided  
**Confidence**: 0.60  

```javascript
let chance2 = new Chance()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:83*

### Chance() returns repeatable results if seed provided on the Chance object

**Category**: instantiation  
**Description**: Test: Chance() returns repeatable results if seed provided on the Chance object  
**Confidence**: 0.60  

```javascript
let seed = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:90*

### Chance() returns repeatable results if seed provided on the Chance object

**Category**: instantiation  
**Description**: Test: Chance() returns repeatable results if seed provided on the Chance object  
**Confidence**: 0.60  

```javascript
let chance1 = new Chance(seed)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:91*

### Chance() returns repeatable results if seed provided on the Chance object

**Category**: instantiation  
**Description**: Test: Chance() returns repeatable results if seed provided on the Chance object  
**Confidence**: 0.60  

```javascript
let chance2 = new Chance(seed)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:92*

### Chance() returns repeatable results if a string is provided as a seed

**Category**: instantiation  
**Description**: Test: Chance() returns repeatable results if a string is provided as a seed  
**Confidence**: 0.60  

```javascript
let chance1 = new Chance(seed)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:101*

### Chance() returns repeatable results if a string is provided as a seed

**Category**: instantiation  
**Description**: Test: Chance() returns repeatable results if a string is provided as a seed  
**Confidence**: 0.60  

```javascript
let chance2 = new Chance(seed)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:102*

### Chance() returns different results if two different strings are provided

**Category**: instantiation  
**Description**: Test: Chance() returns different results if two different strings are provided  
**Confidence**: 0.60  

```javascript
let chance1 = new Chance("foo")
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.basic.js:110*

### Promisify request throws an error

**Category**: instantiation  
**Description**: Test: Promisify request throws an error  
**Confidence**: 0.60  

```javascript
const client = new Client(region, endpoint, {})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:40*

### Network Error case for request

**Category**: instantiation  
**Description**: Test: Network Error case for request  
**Confidence**: 0.60  

```javascript
const networkError = new TypeError('Network Error')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:71*

### uses default endpoint when none is provided

**Category**: instantiation  
**Description**: Test: uses default endpoint when none is provided  
**Confidence**: 0.60  

```javascript
const clientWithEndpoint = new Client(region, null, {})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:94*

### uses a provided endpoint for requests

**Category**: instantiation  
**Description**: Test: uses a provided endpoint for requests  
**Confidence**: 0.60  

```javascript
const clientWithEndpoint = new Client(region, MOCK_ENDPOINT, {})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:112*

### Decoding error

**Category**: instantiation  
**Description**: Test: Decoding error  
**Confidence**: 0.60  

```javascript
const badJWT = new CognitoJwtToken('incorrect Encoding')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoJwtToken.test.js:32*

### Bad parameters

**Category**: instantiation  
**Description**: Test: Bad parameters  
**Confidence**: 0.60  

```javascript
const noPayloadToken = new CognitoJwtToken()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoJwtToken.test.js:37*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:19*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:35*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:59*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:74*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:88*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:108*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:127*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:165*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
const bl = new BufferList()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/bl/test/test.js:178*

### defaults `currentRoute` to null

**Category**: instantiation  
**Description**: Test: defaults `currentRoute` to null  
**Confidence**: 0.60  

```javascript
var context = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:36*

### updates `currentRoute`

**Category**: instantiation  
**Description**: Test: updates `currentRoute`  
**Confidence**: 0.60  

```javascript
var context = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:41*

### has parent

**Category**: instantiation  
**Description**: Test: has parent  
**Confidence**: 0.60  

```javascript
var parent = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:47*

### has parent

**Category**: instantiation  
**Description**: Test: has parent  
**Confidence**: 0.60  

```javascript
var child = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:48*

### has `top`

**Category**: instantiation  
**Description**: Test: has `top`  
**Confidence**: 0.60  

```javascript
var top = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:54*

### has `top`

**Category**: instantiation  
**Description**: Test: has `top`  
**Confidence**: 0.60  

```javascript
var parent = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:55*

### has `top`

**Category**: instantiation  
**Description**: Test: has `top`  
**Confidence**: 0.60  

```javascript
var child = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:56*

### captures event

**Category**: instantiation  
**Description**: Test: captures event  
**Confidence**: 0.60  

```javascript
var parent = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:63*

### captures event

**Category**: instantiation  
**Description**: Test: captures event  
**Confidence**: 0.60  

```javascript
var child = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:64*

### bubbles events

**Category**: instantiation  
**Description**: Test: bubbles events  
**Confidence**: 0.60  

```javascript
var parent = new NavigationContext()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationContext-test.js:101*

### should search for phone numbers

**Category**: instantiation  
**Description**: Test: should search for phone numbers  
**Confidence**: 0.60  

```javascript
var finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/legacy/findPhoneNumbers.test.js:196*

### should search for phone numbers (no options)

**Category**: instantiation  
**Description**: Test: should search for phone numbers (no options)  
**Confidence**: 0.60  

```javascript
var finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/legacy/findPhoneNumbers.test.js:218*

### should work in edge cases

**Category**: instantiation  
**Description**: Test: should work in edge cases  
**Confidence**: 0.60  

```javascript
var search = new PhoneNumberSearch('', undefined, metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/legacy/findPhoneNumbers.test.js:231*

### should parse a carrier code when there is no national prefix transform rule

**Category**: instantiation  
**Description**: Test: should parse a carrier code when there is no national prefix transform rule  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/extractNationalNumberFromPossiblyIncompleteNumber.test.js:7*

### should extract a national number when using old metadata (no `country` or `defaultCountry` specified)

**Category**: instantiation  
**Description**: Test: should extract a national number when using old metadata (no `country` or `defaultCountry` specified)  
**Confidence**: 0.60  

```javascript
var _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.test.js:6*

### should extract a national number when using old metadata (`country` is specified)

**Category**: instantiation  
**Description**: Test: should extract a national number when using old metadata (`country` is specified)  
**Confidence**: 0.60  

```javascript
var _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.test.js:14*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/des.js/test/utils-test.js:14*

### should rev-permute properly

**Category**: instantiation  
**Description**: Test: should rev-permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/des.js/test/utils-test.js:31*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/des.js/test/utils-test.js:50*

### should permute properly

**Category**: instantiation  
**Description**: Test: should permute properly  
**Confidence**: 0.60  

```javascript
var out = new Array(2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/des.js/test/utils-test.js:85*

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

### :

**Category**: instantiation  
**Description**: Test: :  
**Confidence**: 0.60  

```javascript
const promise = new Promise(r => resolve = r)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-windows/node_modules/@react-native/debugger-frontend/dist/third-party/front_end/legacy_test_runner/test_runner/test_runner.js:1*

### should allow POST request with form-data as body

**Category**: instantiation  
**Description**: Test: should allow POST request with form-data as body  
**Confidence**: 0.60  

```javascript
var form = new FormData()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:675*

### should allow POST request with form-data using stream as body

**Category**: instantiation  
**Description**: Test: should allow POST request with form-data using stream as body  
**Confidence**: 0.60  

```javascript
var form = new FormData()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:694*

### should allow POST request with form-data as body and custom headers

**Category**: instantiation  
**Description**: Test: should allow POST request with form-data as body and custom headers  
**Confidence**: 0.60  

```javascript
var form = new FormData()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:714*

### should support chunked encoding, html4 detect

**Category**: instantiation  
**Description**: Test: should support chunked encoding, html4 detect  
**Confidence**: 0.60  

```javascript
var padding = new Array(10 + 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:982*

### should only do encoding detection up to 1024 bytes

**Category**: instantiation  
**Description**: Test: should only do encoding detection up to 1024 bytes  
**Confidence**: 0.60  

```javascript
var padding = new Array(1200 + 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:994*

### should allow iterating through all headers

**Category**: instantiation  
**Description**: Test: should allow iterating through all headers  
**Confidence**: 0.60  

```javascript
var headers = new Headers({
			a: 1
			, b: [2, 3]
			, c: [4]
		})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:1110*

### should ignore unsupported attributes while reading headers

**Category**: instantiation  
**Description**: Test: should ignore unsupported attributes while reading headers  
**Confidence**: 0.60  

```javascript
var h1 = new Headers(res)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:1177*

### should wrap headers

**Category**: instantiation  
**Description**: Test: should wrap headers  
**Confidence**: 0.60  

```javascript
var h1 = new Headers({
			a: '1'
		})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:1201*

### should wrap headers

**Category**: instantiation  
**Description**: Test: should wrap headers  
**Confidence**: 0.60  

```javascript
var h2 = new Headers(h1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:1205*

### should wrap headers

**Category**: instantiation  
**Description**: Test: should wrap headers  
**Confidence**: 0.60  

```javascript
var h3 = new Headers(h2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/node-fetch/test/test.js:1208*

### should work for old metadata

**Category**: instantiation  
**Description**: Test: should work for old metadata  
**Confidence**: 0.60  

```javascript
var _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:47*

### should work for old metadata (no `country` specified)

**Category**: instantiation  
**Description**: Test: should work for old metadata (no `country` specified)  
**Confidence**: 0.60  

```javascript
var _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:52*

### should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-

**Category**: instantiation  
**Description**: Test: should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-  
**Confidence**: 0.60  

```javascript
var _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:57*

### should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-

**Category**: instantiation  
**Description**: Test: should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-  
**Confidence**: 0.60  

```javascript
var _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:65*

### should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-

**Category**: instantiation  
**Description**: Test: should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-  
**Confidence**: 0.60  

```javascript
var _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/helpers/checkNumberLength.test.js:70*

### Constructor works given a token as a string

**Category**: instantiation  
**Description**: Test: Constructor works given a token as a string  
**Confidence**: 0.60  

```javascript
const cognitoAccess = new CognitoAccessToken({
			AccessToken: sampleEncodedToken,
		})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoAccessToken.test.js:6*

### Constructor works with no token

**Category**: instantiation  
**Description**: Test: Constructor works with no token  
**Confidence**: 0.60  

```javascript
const cognitoAccess = new CognitoAccessToken()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoAccessToken.test.js:13*

### Constructor with local storage and operations defined

**Category**: instantiation  
**Description**: Test: Constructor with local storage and operations defined  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:27*

### Checking the constructor catches the exception

**Category**: instantiation  
**Description**: Test: Checking the constructor catches the exception  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:34*

### Setting items in the MemoryStorage implementation

**Category**: instantiation  
**Description**: Test: Setting items in the MemoryStorage implementation  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:39*

### Getting items in the MemoryStorage implementation happy path

**Category**: instantiation  
**Description**: Test: Getting items in the MemoryStorage implementation happy path  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:46*

### Getting items in the MemoryStorage implementation does not have key in MemoryStorage

**Category**: instantiation  
**Description**: Test: Getting items in the MemoryStorage implementation does not have key in MemoryStorage  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:51*

### Removing an item in the MemoryStorage implementation

**Category**: instantiation  
**Description**: Test: Removing an item in the MemoryStorage implementation  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:56*

### Clearing storage

**Category**: instantiation  
**Description**: Test: Clearing storage  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:61*

### should throw when calling `.next()` and there\

**Category**: instantiation  
**Description**: Test: should throw when calling `.next()` and there\  
**Confidence**: 0.60  

```javascript
const matcher = new PhoneNumberMatcher('+54 23 1234 0000', { v2: true }, metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/PhoneNumberMatcher.test.js:89*

### :

**Category**: instantiation  
**Description**: Test: :  
**Confidence**: 0.60  

```javascript
const promise = new Promise(r => resolve = r)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-clipboard/clipboard/node_modules/@react-native/debugger-frontend/dist/third-party/front_end/legacy_test_runner/test_runner/test_runner.js:1*

### should return empty possible countries when no national number has been input

**Category**: instantiation  
**Description**: Test: should return empty possible countries when no national number has been input  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('1', '', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/PhoneNumber.test.js:106*

### should validate phone number length

**Category**: instantiation  
**Description**: Test: should validate phone number length  
**Confidence**: 0.60  

```javascript
const phoneNumber = new PhoneNumber('RU', '800', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/PhoneNumber.test.js:128*

### should validate phone number length

**Category**: instantiation  
**Description**: Test: should validate phone number length  
**Confidence**: 0.60  

```javascript
const phoneNumberValid = new PhoneNumber('RU', '8005553535', metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/build/PhoneNumber.test.js:131*

### Domain not supplied

**Category**: instantiation  
**Description**: Test: Domain not supplied  
**Confidence**: 0.60  

```javascript
const storage = new CookieStorage()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:14*

### Has an expiration value

**Category**: instantiation  
**Description**: Test: Has an expiration value  
**Confidence**: 0.60  

```javascript
const cookieExpires = new CookieStorage({
				domain: cookieStorageDomain,
				secure: false,
				expires: 200,
			})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:40*

### Has an expiration value

**Category**: instantiation  
**Description**: Test: Has an expiration value  
**Confidence**: 0.60  

```javascript
const cookieStore = new CookieStorage(cookieStoreData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:50*

### Clearing cookies should remove all items within the storage

**Category**: instantiation  
**Description**: Test: Clearing cookies should remove all items within the storage  
**Confidence**: 0.60  

```javascript
const cookieStore = new CookieStorage(cookieStoreData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:64*

### Telemetry run test command end to end, verify event fires

**Category**: instantiation  
**Description**: Test: Telemetry run test command end to end, verify event fires  
**Confidence**: 0.60  

```javascript
const expectedError = new Error('error FOO2020: test error')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/telemetry/lib-commonjs/e2etest/telemetry.test.js:412*

### Telemetry run test command end to end, verify event fires

**Category**: instantiation  
**Description**: Test: Telemetry run test command end to end, verify event fires  
**Confidence**: 0.60  

```javascript
const expectedError = new Error()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/telemetry/lib-commonjs/e2etest/telemetry.test.js:424*

### Telemetry run test command end to end, verify event fires

**Category**: instantiation  
**Description**: Test: Telemetry run test command end to end, verify event fires  
**Confidence**: 0.60  

```javascript
const expectedError = new Error('hello world')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/telemetry/lib-commonjs/e2etest/telemetry.test.js:474*

### Telemetry run test command end to end, verify event fires

**Category**: instantiation  
**Description**: Test: Telemetry run test command end to end, verify event fires  
**Confidence**: 0.60  

```javascript
const expectedError = new Error(`hello ${process.cwd()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/telemetry/lib-commonjs/e2etest/telemetry.test.js:489*

### Telemetry run test command end to end, verify event fires

**Category**: instantiation  
**Description**: Test: Telemetry run test command end to end, verify event fires  
**Confidence**: 0.60  

```javascript
const expectedError = new CustomTestError('some message')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native-windows/telemetry/lib-commonjs/e2etest/telemetry.test.js:504*

### constructs

**Category**: instantiation  
**Description**: Test: constructs  
**Confidence**: 0.60  

```javascript
var event = new NavigationEvent('foo', target, 123)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEvent-test.js:36*

### prevents default

**Category**: instantiation  
**Description**: Test: prevents default  
**Confidence**: 0.60  

```javascript
var event = new NavigationEvent('foo', {}, 123)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationEvent-test.js:51*

### should populate national number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate national number template (digit by digit)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:21*

### should populate international number template (digit by digit) (default country)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit) (default country)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:34*

### should populate international number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:59*

### should populate national number template (attempt to format complete number)

**Category**: instantiation  
**Description**: Test: should populate national number template (attempt to format complete number)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:82*

### should filter out formats that require a national prefix and no national prefix has been input

**Category**: instantiation  
**Description**: Test: should filter out formats that require a national prefix and no national prefix has been input  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('AF')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:302*

### should work when a digit is not a national prefix but a part of a valid national number

**Category**: instantiation  
**Description**: Test: should work when a digit is not a national prefix but a part of a valid national number  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:317*

### should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('FR')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:339*

### should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:346*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
const asYouType = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:380*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
const formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/AsYouType.test.js:398*

### :

**Category**: instantiation  
**Description**: Test: :  
**Confidence**: 0.60  

```javascript
const promise = new Promise(r => resolve = r)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/@react-native/debugger-frontend/dist/third-party/front_end/legacy_test_runner/test_runner/test_runner.js:1*

### weighted() works with just 2 items

**Category**: instantiation  
**Description**: Test: weighted() works with just 2 items  
**Confidence**: 0.60  

```javascript
let chance = new Chance(Math.random)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.helpers.js:289*

### weighted() returns results properly weighted

**Category**: instantiation  
**Description**: Test: weighted() returns results properly weighted  
**Confidence**: 0.60  

```javascript
let chance = new Chance(Math.random)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.helpers.js:343*

### weighted() works with fractional weights

**Category**: instantiation  
**Description**: Test: weighted() works with fractional weights  
**Confidence**: 0.60  

```javascript
let chance = new Chance(Math.random)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.helpers.js:369*

### should search for phone numbers

**Category**: instantiation  
**Description**: Test: should search for phone numbers  
**Confidence**: 0.60  

```javascript
const finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/legacy/findPhoneNumbers.test.js:205*

### should search for phone numbers (no options)

**Category**: instantiation  
**Description**: Test: should search for phone numbers (no options)  
**Confidence**: 0.60  

```javascript
const finder = new PhoneNumberSearch('The number is +7 (800)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/legacy/findPhoneNumbers.test.js:229*

### should work in edge cases

**Category**: instantiation  
**Description**: Test: should work in edge cases  
**Confidence**: 0.60  

```javascript
const search = new PhoneNumberSearch('', undefined, metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/legacy/findPhoneNumbers.test.js:243*

### should work for old metadata

**Category**: instantiation  
**Description**: Test: should work for old metadata  
**Confidence**: 0.60  

```javascript
const _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:51*

### should work for old metadata (no `country` specified)

**Category**: instantiation  
**Description**: Test: should work for old metadata (no `country` specified)  
**Confidence**: 0.60  

```javascript
const _oldMetadata = new Metadata(oldMetadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:57*

### should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-

**Category**: instantiation  
**Description**: Test: should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-  
**Confidence**: 0.60  

```javascript
const _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:63*

### should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-

**Category**: instantiation  
**Description**: Test: should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-  
**Confidence**: 0.60  

```javascript
const _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:73*

### should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-

**Category**: instantiation  
**Description**: Test: should handle the cases when multiple countries share the same country calling code and a phone number is possible in non-  
**Confidence**: 0.60  

```javascript
const _metadata = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/helpers/checkNumberLength.test.js:79*

### should throw when calling `.next()` and there\

**Category**: instantiation  
**Description**: Test: should throw when calling `.next()` and there\  
**Confidence**: 0.60  

```javascript
var matcher = new PhoneNumberMatcher('+54 23 1234 0000', {
      v2: true
    }, metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/PhoneNumberMatcher.test.js:93*

### should populate national number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate national number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:33*

### should populate international number template (digit by digit) (default country)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit) (default country)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:45*

### should populate international number template (digit by digit)

**Category**: instantiation  
**Description**: Test: should populate international number template (digit by digit)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:69*

### should populate national number template (attempt to format complete number)

**Category**: instantiation  
**Description**: Test: should populate national number template (attempt to format complete number)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:91*

### should filter out formats that require a national prefix and no national prefix has been input

**Category**: instantiation  
**Description**: Test: should filter out formats that require a national prefix and no national prefix has been input  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('AF')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:294*

### should work when a digit is not a national prefix but a part of a valid national number

**Category**: instantiation  
**Description**: Test: should work when a digit is not a national prefix but a part of a valid national number  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:308*

### should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('FR')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:329*

### should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)

**Category**: instantiation  
**Description**: Test: should match formats that require a national prefix and no national prefix has been input (national prefix is not mandatory for a format)  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:335*

### should return a partial template for current value

**Category**: instantiation  
**Description**: Test: should return a partial template for current value  
**Confidence**: 0.60  

```javascript
var asYouType = new AsYouType('US')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:365*

### should fall back to the default country

**Category**: instantiation  
**Description**: Test: should fall back to the default country  
**Confidence**: 0.60  

```javascript
var formatter = new AsYouType('RU')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/AsYouType.test.js:378*

### birthday() works as expected

**Category**: instantiation  
**Description**: Test: birthday() works as expected  
**Confidence**: 0.60  

```javascript
let curYear = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:94*

### birthday() can have an age range specified for an adult

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for an adult  
**Confidence**: 0.60  

```javascript
let min = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:118*

### birthday() can have an age range specified for an adult

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for an adult  
**Confidence**: 0.60  

```javascript
let max = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:119*

### birthday() can have an age range specified for a teen

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for a teen  
**Confidence**: 0.60  

```javascript
let min = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:128*

### birthday() can have an age range specified for a teen

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for a teen  
**Confidence**: 0.60  

```javascript
let max = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:129*

### birthday() can have an age range specified for a child

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for a child  
**Confidence**: 0.60  

```javascript
let min = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:138*

### birthday() can have an age range specified for a child

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for a child  
**Confidence**: 0.60  

```javascript
let max = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:139*

### birthday() can have an age range specified for a senior

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for a senior  
**Confidence**: 0.60  

```javascript
let min = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:148*

### birthday() can have an age range specified for a senior

**Category**: instantiation  
**Description**: Test: birthday() can have an age range specified for a senior  
**Confidence**: 0.60  

```javascript
let max = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.person.js:149*

### Getting user context data without advancedSecurityData

**Category**: instantiation  
**Description**: Test: Getting user context data without advancedSecurityData  
**Confidence**: 0.60  

```javascript
const cognitoUserPool = new CognitoUserPool(minimalData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserPool.test.js:39*

### When a user has been logged in, return the CognitoUser getting the current user

**Category**: instantiation  
**Description**: Test: When a user has been logged in, return the CognitoUser getting the current user  
**Confidence**: 0.60  

```javascript
const cognitoUserPool = new CognitoUserPool(minimalData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserPool.test.js:60*

### Signing up a user has some kind of error

**Category**: instantiation  
**Description**: Test: Signing up a user has some kind of error  
**Confidence**: 0.60  

```javascript
const err = new Error('Network Error')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserPool.test.js:83*

### should return undefined for non-defined types

**Category**: instantiation  
**Description**: Test: should return undefined for non-defined types  
**Confidence**: 0.60  

```javascript
const FR = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:11*

### should tell if a national prefix is mandatory when formatting a national number

**Category**: instantiation  
**Description**: Test: should tell if a national prefix is mandatory when formatting a national number  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:45*

### should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV4)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:92*

### should work around `nonGeographic` metadata not existing before `1.7.35`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographic` metadata not existing before `1.7.35`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV3)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:98*

### should work with metadata from version `1.1.11`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.1.11`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:104*

### should work with metadata from version `1.0.0`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.0.0`  
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:129*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:153*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:157*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:163*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
const metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/source/metadata.test.js:167*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1059*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1073*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var copy = new Buffer(obj)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1076*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(8)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1091*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(16)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1095*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(0)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1145*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(bits / 8 - 1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1159*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1179*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer.js:1196*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var regErrorMsg = new RegExp('First argument must be a string, Buffer, ' +
                               'ArrayBuffer, Array, or array-like object.')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/buffer/test/node/test-buffer-alloc.js:1449*

### custom errors

**Category**: instantiation  
**Description**: Test: custom errors  
**Confidence**: 0.60  

```javascript
const cust = new Cust('foo is not bar')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/errno/test.js:24*

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

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/errno/test.js:77*

### Client request called once and throws an error

**Category**: instantiation  
**Description**: Test: Client request called once and throws an error  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:154*

### Client request called once with challenge name and params

**Category**: instantiation  
**Description**: Test: Client request called once with challenge name and params  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:166*

### Client request sets signInUserSession and is successful

**Category**: instantiation  
**Description**: Test: Client request sets signInUserSession and is successful  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:180*

### Client request sets signInUserSession and is successful

**Category**: instantiation  
**Description**: Test: Client request sets signInUserSession and is successful  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:198*

### throws error for invalid Authentication flow type

**Category**: instantiation  
**Description**: Test: throws error for invalid Authentication flow type  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:232*

### Missing password throws an error

**Category**: instantiation  
**Description**: Test: Missing password throws an error  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails({
			Username: 'user@amzn.com',
			Password: undefined,
		})
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:276*

### Client request fails gracefully

**Category**: instantiation  
**Description**: Test: Client request fails gracefully  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:290*

### Authenticate user happy case

**Category**: instantiation  
**Description**: Test: Authenticate user happy case  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:306*

### Authenticate user happy case

**Category**: instantiation  
**Description**: Test: Authenticate user happy case  
**Confidence**: 0.60  

```javascript
const authHelper = new AuthenticationHelper(user.pool.getUserPoolName()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:323*

### Client request fails gracefully

**Category**: instantiation  
**Description**: Test: Client request fails gracefully  
**Confidence**: 0.60  

```javascript
const err = new Error('Respond to auth challenge error.')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:532*

### happy path should return the date 

**Category**: instantiation  
**Description**: Test: happy path should return the date   
**Confidence**: 0.60  

```javascript
const mockDate = new Date(1546322769000)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/DateHelper.test.js:6*

### happy path should return the date 

**Category**: instantiation  
**Description**: Test: happy path should return the date   
**Confidence**: 0.60  

```javascript
const dateHelper = new DateHelper()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/DateHelper.test.js:8*

### Basic behavior

**Category**: instantiation  
**Description**: Test: Basic behavior  
**Confidence**: 0.60  

```javascript
var buf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/to-arraybuffer/test.js:17*

### Behavior when input is a subarray 1

**Category**: instantiation  
**Description**: Test: Behavior when input is a subarray 1  
**Confidence**: 0.60  

```javascript
var origBuf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/to-arraybuffer/test.js:30*

### Behavior when input is a subarray 2

**Category**: instantiation  
**Description**: Test: Behavior when input is a subarray 2  
**Confidence**: 0.60  

```javascript
var origBuf = new Buffer(10)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/to-arraybuffer/test.js:45*

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

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/browserify-des/test.js:37*

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

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/browserify-des/test.js:70*

### should return undefined for non-defined types

**Category**: instantiation  
**Description**: Test: should return undefined for non-defined types  
**Confidence**: 0.60  

```javascript
var FR = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:10*

### should tell if a national prefix is mandatory when formatting a national number

**Category**: instantiation  
**Description**: Test: should tell if a national prefix is mandatory when formatting a national number  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:38*

### should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographical` typo in metadata generated from `1.7.35` to `1.7.37`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV4)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:100*

### should work around `nonGeographic` metadata not existing before `1.7.35`

**Category**: instantiation  
**Description**: Test: should work around `nonGeographic` metadata not existing before `1.7.35`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV3)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:105*

### should work with metadata from version `1.1.11`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.1.11`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV2)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:110*

### should work with metadata from version `1.0.0`

**Category**: instantiation  
**Description**: Test: should work with metadata from version `1.0.0`  
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:128*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:145*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:148*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var meta = new Metadata(metadataV1)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:153*

### should work around 

**Category**: instantiation  
**Description**: Test: should work around   
**Confidence**: 0.60  

```javascript
var metaNew = new Metadata(metadata)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/libphonenumber-js/es6/metadata.test.js:156*

### Testing getter method for a proper token

**Category**: instantiation  
**Description**: Test: Testing getter method for a proper token  
**Confidence**: 0.60  

```javascript
const cognitoRefToken = new CognitoRefreshToken(sampleEncodedToken)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoRefreshToken.test.js:6*

### Testing getter method for a refresh token with no value

**Category**: instantiation  
**Description**: Test: Testing getter method for a refresh token with no value  
**Confidence**: 0.60  

```javascript
const cognitoRefToken = new CognitoRefreshToken()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/amazon-cognito-identity-js/__tests__/CognitoRefreshToken.test.js:10*

### should be empty

**Category**: instantiation  
**Description**: Test: should be empty  
**Confidence**: 0.60  

```javascript
var node = new NavigationTreeNode()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:16*

### should contain value

**Category**: instantiation  
**Description**: Test: should contain value  
**Confidence**: 0.60  

```javascript
var node = new NavigationTreeNode(123)
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:25*

### should appendChild

**Category**: instantiation  
**Description**: Test: should appendChild  
**Confidence**: 0.60  

```javascript
var papa = new NavigationTreeNode('hedger')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:30*

### should appendChild

**Category**: instantiation  
**Description**: Test: should appendChild  
**Confidence**: 0.60  

```javascript
var baby = new NavigationTreeNode('hedger jr')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:31*

### should removeChild

**Category**: instantiation  
**Description**: Test: should removeChild  
**Confidence**: 0.60  

```javascript
var papa = new NavigationTreeNode('Eddard Stark')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:39*

### should removeChild

**Category**: instantiation  
**Description**: Test: should removeChild  
**Confidence**: 0.60  

```javascript
var baby = new NavigationTreeNode('Robb Stark')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:40*

### should not remove non-child

**Category**: instantiation  
**Description**: Test: should not remove non-child  
**Confidence**: 0.60  

```javascript
var papa = new NavigationTreeNode('dog')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:50*

### should not remove non-child

**Category**: instantiation  
**Description**: Test: should not remove non-child  
**Confidence**: 0.60  

```javascript
var baby = new NavigationTreeNode('cat')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:51*

### should find child

**Category**: instantiation  
**Description**: Test: should find child  
**Confidence**: 0.60  

```javascript
var papa = new NavigationTreeNode('Eddard Stark')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:56*

### should find child

**Category**: instantiation  
**Description**: Test: should find child  
**Confidence**: 0.60  

```javascript
var baby = new NavigationTreeNode('Robb Stark')
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/react-native-deprecated-custom-components/src/__tests__/NavigationTreeNode-test.js:57*

### exp() returs a valid credit card expiration (in a future date)

**Category**: instantiation  
**Description**: Test: exp() returs a valid credit card expiration (in a future date)  
**Confidence**: 0.60  

```javascript
let now = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.finance.js:161*

### exp_year() returns an expiration year

**Category**: instantiation  
**Description**: Test: exp_year() returns an expiration year  
**Confidence**: 0.60  

```javascript
let curYear = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.finance.js:189*

### exp_month() will return a future month if requested

**Category**: instantiation  
**Description**: Test: exp_month() will return a future month if requested  
**Confidence**: 0.60  

```javascript
let nowMonth = new Date()
```

*Source: /Users/himeshr/IdeaProjects/avni-client/packages/openchs-android/node_modules/chance/test/test.finance.js:197*

