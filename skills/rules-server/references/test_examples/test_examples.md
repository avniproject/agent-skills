# Test Example Extraction Report

**Total Examples**: 74  
**High Value Examples** (confidence > 0.7): 0  
**Average Complexity**: 0.11  

## Examples by Category

- **instantiation**: 74

## Examples by Language

- **JavaScript**: 74

## Extracted Examples

### happy path should return the date 

**Category**: instantiation  
**Description**: Test: happy path should return the date   
**Confidence**: 0.60  

```javascript
const mockDate = new Date(1546322769000)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/DateHelper.test.js:6*

### happy path should return the date 

**Category**: instantiation  
**Description**: Test: happy path should return the date   
**Confidence**: 0.60  

```javascript
const dateHelper = new DateHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/DateHelper.test.js:8*

### Promisify request throws an error

**Category**: instantiation  
**Description**: Test: Promisify request throws an error  
**Confidence**: 0.60  

```javascript
const client = new Client(region, endpoint, {})
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:35*

### Network Error case for request

**Category**: instantiation  
**Description**: Test: Network Error case for request  
**Confidence**: 0.60  

```javascript
const networkError = new TypeError('Network Error')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:55*

### uses default endpoint when none is provided

**Category**: instantiation  
**Description**: Test: uses default endpoint when none is provided  
**Confidence**: 0.60  

```javascript
const clientWithEndpoint = new Client(region, null, {})
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:78*

### uses a provided endpoint for requests

**Category**: instantiation  
**Description**: Test: uses a provided endpoint for requests  
**Confidence**: 0.60  

```javascript
const clientWithEndpoint = new Client(region, MOCK_ENDPOINT, {})
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/Client.test.js:96*

### Client request called once and throws an error

**Category**: instantiation  
**Description**: Test: Client request called once and throws an error  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:154*

### Client request called once with challenge name and params

**Category**: instantiation  
**Description**: Test: Client request called once with challenge name and params  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:166*

### Client request sets signInUserSession and is successful

**Category**: instantiation  
**Description**: Test: Client request sets signInUserSession and is successful  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:180*

### Client request sets signInUserSession and is successful

**Category**: instantiation  
**Description**: Test: Client request sets signInUserSession and is successful  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:195*

### throws error for invalid Authentication flow type

**Category**: instantiation  
**Description**: Test: throws error for invalid Authentication flow type  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:229*

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

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:273*

### Client request fails gracefully

**Category**: instantiation  
**Description**: Test: Client request fails gracefully  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:287*

### Authenticate user happy case

**Category**: instantiation  
**Description**: Test: Authenticate user happy case  
**Confidence**: 0.60  

```javascript
const authDetails = new AuthenticationDetails(authDetailData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:303*

### Authenticate user happy case

**Category**: instantiation  
**Description**: Test: Authenticate user happy case  
**Confidence**: 0.60  

```javascript
const authHelper = new AuthenticationHelper(
		user.pool.getUserPoolId()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:320*

### Client request fails gracefully

**Category**: instantiation  
**Description**: Test: Client request fails gracefully  
**Confidence**: 0.60  

```javascript
const err = new Error('Respond to auth challenge error.')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUser.test.js:531*

### Calculate the client

**Category**: instantiation  
**Description**: Test: Calculate the client  
**Confidence**: 0.60  

```javascript
const hexA = new BigInteger('abcd1234', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:726*

### Calculate the client

**Category**: instantiation  
**Description**: Test: Calculate the client  
**Confidence**: 0.60  

```javascript
const hexB = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:727*

### Calculate the client

**Category**: instantiation  
**Description**: Test: Calculate the client  
**Confidence**: 0.60  

```javascript
const expected = new BigInteger(hashed, 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:732*

### happy path hkdf algorithm returns a length 16 hex string

**Category**: instantiation  
**Description**: Test: happy path hkdf algorithm returns a length 16 hex string  
**Confidence**: 0.60  

```javascript
const realServerValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:764*

### happy path hkdf algorithm returns a length 16 hex string

**Category**: instantiation  
**Description**: Test: happy path hkdf algorithm returns a length 16 hex string  
**Confidence**: 0.60  

```javascript
const salt = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:765*

### Getting a U Value of zero

**Category**: instantiation  
**Description**: Test: Getting a U Value of zero  
**Confidence**: 0.60  

```javascript
const realServerValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:825*

### Getting a U Value of zero

**Category**: instantiation  
**Description**: Test: Getting a U Value of zero  
**Confidence**: 0.60  

```javascript
const xValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:840*

### Getting a U Value of zero

**Category**: instantiation  
**Description**: Test: Getting a U Value of zero  
**Confidence**: 0.60  

```javascript
const serverValue = new BigInteger('deadbeef', 16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/AuthenticationHelper.test.js:841*

### Constructor works given a token as a string

**Category**: instantiation  
**Description**: Test: Constructor works given a token as a string  
**Confidence**: 0.60  

```javascript
const cognitoAccess = new CognitoAccessToken({
			AccessToken: sampleEncodedToken,
		})
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoAccessToken.test.js:6*

### Constructor works with no token

**Category**: instantiation  
**Description**: Test: Constructor works with no token  
**Confidence**: 0.60  

```javascript
const cognitoAccess = new CognitoAccessToken()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoAccessToken.test.js:13*

### Undefined Name

**Category**: instantiation  
**Description**: Test: Undefined Name  
**Confidence**: 0.60  

```javascript
const undefinedCognitoName = new CognitoUserAttribute({ Value: testValue })
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserAttribute.test.js:43*

### Undefined Value

**Category**: instantiation  
**Description**: Test: Undefined Value  
**Confidence**: 0.60  

```javascript
const undefinedCognitoValue = new CognitoUserAttribute({ Name: testName })
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserAttribute.test.js:48*

### Undefined cognito attributes

**Category**: instantiation  
**Description**: Test: Undefined cognito attributes  
**Confidence**: 0.60  

```javascript
const undefinedCognitoAttr = new CognitoUserAttribute()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserAttribute.test.js:53*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var regErrorMsg = new RegExp('First argument must be a string, Buffer, ' +
                               'ArrayBuffer, Array, or array-like object.')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer-alloc.js:1449*

### Getting user context data without advancedSecurityData

**Category**: instantiation  
**Description**: Test: Getting user context data without advancedSecurityData  
**Confidence**: 0.60  

```javascript
const cognitoUserPool = new CognitoUserPool(minimalData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserPool.test.js:29*

### When a user has been logged in, return the CognitoUser getting the current user

**Category**: instantiation  
**Description**: Test: When a user has been logged in, return the CognitoUser getting the current user  
**Confidence**: 0.60  

```javascript
const cognitoUserPool = new CognitoUserPool(minimalData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserPool.test.js:50*

### Signing up a user has some kind of error

**Category**: instantiation  
**Description**: Test: Signing up a user has some kind of error  
**Confidence**: 0.60  

```javascript
const err = new Error('Network Error')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoUserPool.test.js:73*

### getUserAgent version match

**Category**: instantiation  
**Description**: Test: getUserAgent version match  
**Confidence**: 0.60  

```javascript
const userAgent = new UserAgent()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/UserAgentDefault.test.js:6*

### Testing getter method for a proper token

**Category**: instantiation  
**Description**: Test: Testing getter method for a proper token  
**Confidence**: 0.60  

```javascript
const cognitoRefToken = new CognitoRefreshToken(sampleEncodedToken)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoRefreshToken.test.js:6*

### Testing getter method for a refresh token with no value

**Category**: instantiation  
**Description**: Test: Testing getter method for a refresh token with no value  
**Confidence**: 0.60  

```javascript
const cognitoRefToken = new CognitoRefreshToken()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoRefreshToken.test.js:10*

### Constructing a CognitoID Token

**Category**: instantiation  
**Description**: Test: Constructing a CognitoID Token  
**Confidence**: 0.60  

```javascript
const cognitoToken = new CognitoIdToken('testToken')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoIdToken.test.js:5*

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

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:40*

### Has an expiration value

**Category**: instantiation  
**Description**: Test: Has an expiration value  
**Confidence**: 0.60  

```javascript
const cookieStore = new CookieStorage(cookieStoreData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:50*

### Clearing cookies should remove all items within the storage

**Category**: instantiation  
**Description**: Test: Clearing cookies should remove all items within the storage  
**Confidence**: 0.60  

```javascript
const cookieStore = new CookieStorage(cookieStoreData)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CookieStorage.test.js:64*

### Happy case for syncing

**Category**: instantiation  
**Description**: Test: Happy case for syncing  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:75*

### Get all keys throws errors

**Category**: instantiation  
**Description**: Test: Get all keys throws errors  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:93*

### Multiget throws errors

**Category**: instantiation  
**Description**: Test: Multiget throws errors  
**Confidence**: 0.60  

```javascript
const err = new Error('Storage Error')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:106*

### Multiget throws errors

**Category**: instantiation  
**Description**: Test: Multiget throws errors  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelperRN.test.js:114*

### has all properties

**Category**: instantiation  
**Description**: Test: has all properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:21*

### has dashed properties

**Category**: instantiation  
**Description**: Test: has dashed properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:29*

### has all functions

**Category**: instantiation  
**Description**: Test: has all functions  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:37*

### has special properties

**Category**: instantiation  
**Description**: Test: has special properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:50*

### from style string

**Category**: instantiation  
**Description**: Test: from style string  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:60*

### from properties

**Category**: instantiation  
**Description**: Test: from properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:74*

### shorthand properties

**Category**: instantiation  
**Description**: Test: shorthand properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:92*

### width and height properties and null and empty strings

**Category**: instantiation  
**Description**: Test: width and height properties and null and empty strings  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:110*

### implicit properties

**Category**: instantiation  
**Description**: Test: implicit properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:130*

### top, left, right, bottom properties

**Category**: instantiation  
**Description**: Test: top, left, right, bottom properties  
**Confidence**: 0.60  

```javascript
var style = new CSSStyleDeclaration()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/cssstyle/lib/CSSStyleDeclaration.test.js:142*

### Constructor with local storage and operations defined

**Category**: instantiation  
**Description**: Test: Constructor with local storage and operations defined  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:27*

### Checking the constructor catches the exception

**Category**: instantiation  
**Description**: Test: Checking the constructor catches the exception  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:34*

### Setting items in the MemoryStorage implementation

**Category**: instantiation  
**Description**: Test: Setting items in the MemoryStorage implementation  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:39*

### Getting items in the MemoryStorage implementation happy path

**Category**: instantiation  
**Description**: Test: Getting items in the MemoryStorage implementation happy path  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:46*

### Getting items in the MemoryStorage implementation does not have key in MemoryStorage

**Category**: instantiation  
**Description**: Test: Getting items in the MemoryStorage implementation does not have key in MemoryStorage  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:51*

### Removing an item in the MemoryStorage implementation

**Category**: instantiation  
**Description**: Test: Removing an item in the MemoryStorage implementation  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:56*

### Clearing storage

**Category**: instantiation  
**Description**: Test: Clearing storage  
**Confidence**: 0.60  

```javascript
const storageHelper = new StorageHelper()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/StorageHelper.test.js:61*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buffer = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1059*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer('test')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1073*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var copy = new Buffer(obj)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1076*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(8)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1091*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(16)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1095*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(0)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1145*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF])
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1152*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer(bits / 8 - 1)
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1159*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0xFF, 0xFF, 0xFF, 0xFF])
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1179*

###  

**Category**: instantiation  
**Description**: Test:    
**Confidence**: 0.60  

```javascript
var buf = new Buffer([0x01, 0x02, 0x03, 0x04, 0x05, 0x06])
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/buffer/test/node/test-buffer.js:1196*

### Decoding error

**Category**: instantiation  
**Description**: Test: Decoding error  
**Confidence**: 0.60  

```javascript
const badJWT = new CognitoJwtToken('incorrect Encoding')
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoJwtToken.test.js:32*

### Bad parameters

**Category**: instantiation  
**Description**: Test: Bad parameters  
**Confidence**: 0.60  

```javascript
const noPayloadToken = new CognitoJwtToken()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/amazon-cognito-identity-js/__tests__/CognitoJwtToken.test.js:37*

### returns null for an object whose prototype was mangled

**Category**: instantiation  
**Description**: Test: returns null for an object whose prototype was mangled  
**Confidence**: 0.60  

```javascript
var obj = new MangledObject()
```

*Source: /Users/himeshr/IdeaProjects/rules-server/node_modules/@sinonjs/commons/lib/class-name.test.js:33*

