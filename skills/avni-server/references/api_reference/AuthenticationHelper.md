# API Reference: AuthenticationHelper.java

**Language**: Java

**Source**: `avni-server-api/src/main/java/org/avni/server/auth/AuthenticationHelper.java`

---

## Classes

### AuthenticationHelper

**Inherits from**: (none)

#### Methods

##### BigInteger(unknown: HEX_N, unknown: 16) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | HEX_N | - | - |
| unknown | 16 | - | - |

**Returns**: `new`


##### initialValue() → MessageDigest

**Returns**: `MessageDigest`


##### SecurityException(in: "Exception, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| in | "Exception | - | - |
| unknown | e | - | - |

**Returns**: `new`


##### BigInteger(unknown: 1, unknown: digest) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | digest | - | - |

**Returns**: `new`


##### SecurityException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### AuthenticationHelper(userPoolID: String, clientId: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userPoolID | String | - | - |
| clientId | String | - | - |

**Returns**: `public`


##### AuthenticationHelper(userPoolID: String, clientId: String, secretKey: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userPoolID | String | - | - |
| clientId | String | - | - |
| secretKey | String | - | - |

**Returns**: `public`


##### BigInteger(unknown: EPHEMERAL_KEY_LENGTH, unknown: SECURE_RANDOM) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EPHEMERAL_KEY_LENGTH | - | - |
| unknown | SECURE_RANDOM | - | - |

**Returns**: `new`


##### getA() → BigInteger

**Returns**: `BigInteger`


##### BigInteger(unknown: 1, unknown: messageDigest.digest(B.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | messageDigest.digest(B.toByteArray( | - | - |

**Returns**: `new`


##### SecurityException(of: "Hash) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | "Hash | - | - |

**Returns**: `new`


##### BigInteger(unknown: 1, unknown: messageDigest.digest(userIdHash) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | messageDigest.digest(userIdHash | - | - |

**Returns**: `new`


##### SecurityException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`


##### performSRPAuthentication(username: String, password: String) → AuthenticationResultType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `AuthenticationResultType`


##### AnonymousAWSCredentials() → new

**Returns**: `new`


##### AWSStaticCredentialsProvider(unknown: awsCreds) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | awsCreds | - | - |

**Returns**: `new`


##### refresh(refreshToken: String, authToken: String) → AuthenticationResultType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| refreshToken | String | - | - |
| authToken | String | - | - |

**Returns**: `AuthenticationResultType`


##### AdminInitiateAuthRequest() → new

**Returns**: `new`


##### initiateUserSrpAuthRequest(username: String) → InitiateAuthRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `InitiateAuthRequest`


##### InitiateAuthRequest() → new

**Returns**: `new`


##### userSrpAuthRequest(challenge: InitiateAuthResult, password: String, secretHash: String) → RespondToAuthChallengeRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| challenge | InitiateAuthResult | - | - |
| password | String | - | - |
| secretHash | String | - | - |

**Returns**: `RespondToAuthChallengeRequest`


##### BigInteger(unknown: challenge.getChallengeParameters() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | challenge.getChallengeParameters( | - | - |

**Returns**: `new`


##### SecurityException(error: "SRP, cannot: B) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | "SRP | - | - |
| cannot | B | - | - |

**Returns**: `new`


##### BigInteger(unknown: challenge.getChallengeParameters() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | challenge.getChallengeParameters( | - | - |

**Returns**: `new`


##### Date() → new

**Returns**: `new`


##### SecretKeySpec(unknown: key, unknown: "HmacSHA256") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | key | - | - |
| unknown | "HmacSHA256" | - | - |

**Returns**: `new`


##### SimpleDateFormat(MMM: "EEE, unknown: Locale.US) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| MMM | "EEE | - | - |
| unknown | Locale.US | - | - |

**Returns**: `new`


##### SimpleTimeZone(unknown: SimpleTimeZone.UTC_TIME, unknown: "UTC") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | SimpleTimeZone.UTC_TIME | - | - |
| unknown | "UTC" | - | - |

**Returns**: `new`


##### SimpleDateFormat(MMM: "EEE, unknown: Locale.US) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| MMM | "EEE | - | - |
| unknown | Locale.US | - | - |

**Returns**: `new`


##### SimpleTimeZone(unknown: SimpleTimeZone.UTC_TIME, unknown: "UTC") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | SimpleTimeZone.UTC_TIME | - | - |
| unknown | "UTC" | - | - |

**Returns**: `new`


##### String(unknown: Base64.encode(hmac) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Base64.encode(hmac | - | - |

**Returns**: `new`


##### RespondToAuthChallengeRequest() → new

**Returns**: `new`


##### calculateSecretHash(userPoolClientId: String, userPoolClientSecret: String, userName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userPoolClientId | String | - | - |
| userPoolClientSecret | String | - | - |
| userName | String | - | - |

**Returns**: `String`


##### SecretKeySpec(unknown: userPoolClientSecret.getBytes(StandardCharsets.UTF_8) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userPoolClientSecret.getBytes(StandardCharsets.UTF_8 | - | - |

**Returns**: `new`


##### RuntimeException(while: "Error) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | "Error | - | - |

**Returns**: `new`


##### Hkdf(algorithm: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | String | - | - |

**Returns**: `private`


##### IllegalArgumentException(algorithm: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | "Invalid | - | - |

**Returns**: `new`


##### getInstance(algorithm: String) → Hkdf

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | String | - | - |

**Returns**: `Hkdf`


##### Hkdf(unknown: algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | algorithm | - | - |

**Returns**: `new`


##### init(ikm: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ikm | byte[] | - | - |

**Returns**: `void`


##### init(ikm: byte[], salt: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ikm | byte[] | - | - |
| salt | byte[] | - | - |

**Returns**: `void`


##### SecretKeySpec(unknown: realSalt, unknown: this.algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realSalt | - | - |
| unknown | this.algorithm | - | - |

**Returns**: `new`


##### SecretKeySpec(unknown: rawKeyMaterial, unknown: this.algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rawKeyMaterial | - | - |
| unknown | this.algorithm | - | - |

**Returns**: `new`


##### RuntimeException(exception": "Unexpected, unknown: var10) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exception" | "Unexpected | - | - |
| unknown | var10 | - | - |

**Returns**: `new`


##### unsafeInitWithoutKeyExtraction(rawKey: SecretKey) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawKey | SecretKey | - | - |

**Returns**: `void`


##### InvalidKeyException(for: "Algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| for | "Algorithm | - | - |

**Returns**: `new`


##### RuntimeException(unknown: var5) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var5 | - | - |

**Returns**: `new`


##### deriveKey(info: byte[], length: int, output: byte[], offset: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| info | byte[] | - | - |
| length | int | - | - |
| output | byte[] | - | - |
| offset | int | - | - |

**Returns**: `void`


##### IllegalArgumentException(must: "Length) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| must | "Length | - | - |

**Returns**: `new`


##### ShortBufferException() → new

**Returns**: `new`


##### IllegalArgumentException(keys: "Requested) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keys | "Requested | - | - |

**Returns**: `new`


##### createMac() → Mac

**Returns**: `Mac`


##### RuntimeException(unknown: var2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var2 | - | - |

**Returns**: `new`


##### RuntimeException(unknown: var3) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var3 | - | - |

**Returns**: `new`


##### assertInitialized() → void

**Returns**: `void`


##### IllegalStateException(has: "Hkdf) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "Hkdf | - | - |

**Returns**: `new`




### Hkdf

**Inherits from**: (none)

#### Methods

##### Hkdf(algorithm: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | String | - | - |

**Returns**: `private`


##### IllegalArgumentException(algorithm: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | "Invalid | - | - |

**Returns**: `new`


##### getInstance(algorithm: String) → Hkdf

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | String | - | - |

**Returns**: `Hkdf`


##### Hkdf(unknown: algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | algorithm | - | - |

**Returns**: `new`


##### init(ikm: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ikm | byte[] | - | - |

**Returns**: `void`


##### init(ikm: byte[], salt: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ikm | byte[] | - | - |
| salt | byte[] | - | - |

**Returns**: `void`


##### SecretKeySpec(unknown: realSalt, unknown: this.algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realSalt | - | - |
| unknown | this.algorithm | - | - |

**Returns**: `new`


##### SecretKeySpec(unknown: rawKeyMaterial, unknown: this.algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rawKeyMaterial | - | - |
| unknown | this.algorithm | - | - |

**Returns**: `new`


##### RuntimeException(exception": "Unexpected, unknown: var10) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exception" | "Unexpected | - | - |
| unknown | var10 | - | - |

**Returns**: `new`


##### unsafeInitWithoutKeyExtraction(rawKey: SecretKey) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawKey | SecretKey | - | - |

**Returns**: `void`


##### InvalidKeyException(for: "Algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| for | "Algorithm | - | - |

**Returns**: `new`


##### RuntimeException(unknown: var5) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var5 | - | - |

**Returns**: `new`


##### deriveKey(info: byte[], length: int, output: byte[], offset: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| info | byte[] | - | - |
| length | int | - | - |
| output | byte[] | - | - |
| offset | int | - | - |

**Returns**: `void`


##### IllegalArgumentException(must: "Length) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| must | "Length | - | - |

**Returns**: `new`


##### ShortBufferException() → new

**Returns**: `new`


##### IllegalArgumentException(keys: "Requested) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keys | "Requested | - | - |

**Returns**: `new`


##### createMac() → Mac

**Returns**: `Mac`


##### RuntimeException(unknown: var2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var2 | - | - |

**Returns**: `new`


##### RuntimeException(unknown: var3) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var3 | - | - |

**Returns**: `new`


##### assertInitialized() → void

**Returns**: `void`


##### IllegalStateException(has: "Hkdf) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "Hkdf | - | - |

**Returns**: `new`




## Functions

### BigInteger(unknown: HEX_N, unknown: 16) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | HEX_N | - | - |
| unknown | 16 | - | - |

**Returns**: `new`



### initialValue() → MessageDigest

**Returns**: `MessageDigest`



### SecurityException(in: "Exception, unknown: e) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| in | "Exception | - | - |
| unknown | e | - | - |

**Returns**: `new`



### BigInteger(unknown: 1, unknown: digest) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | digest | - | - |

**Returns**: `new`



### SecurityException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### AuthenticationHelper(userPoolID: String, clientId: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userPoolID | String | - | - |
| clientId | String | - | - |

**Returns**: `public`



### AuthenticationHelper(userPoolID: String, clientId: String, secretKey: String) → public

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userPoolID | String | - | - |
| clientId | String | - | - |
| secretKey | String | - | - |

**Returns**: `public`



### BigInteger(unknown: EPHEMERAL_KEY_LENGTH, unknown: SECURE_RANDOM) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | EPHEMERAL_KEY_LENGTH | - | - |
| unknown | SECURE_RANDOM | - | - |

**Returns**: `new`



### getA() → BigInteger

**Returns**: `BigInteger`



### BigInteger(unknown: 1, unknown: messageDigest.digest(B.toByteArray() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | messageDigest.digest(B.toByteArray( | - | - |

**Returns**: `new`



### SecurityException(of: "Hash) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| of | "Hash | - | - |

**Returns**: `new`



### BigInteger(unknown: 1, unknown: messageDigest.digest(userIdHash) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | 1 | - | - |
| unknown | messageDigest.digest(userIdHash | - | - |

**Returns**: `new`



### SecurityException(unknown: e.getMessage() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | e.getMessage( | - | - |

**Returns**: `new`



### performSRPAuthentication(username: String, password: String) → AuthenticationResultType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |
| password | String | - | - |

**Returns**: `AuthenticationResultType`



### AnonymousAWSCredentials() → new

**Returns**: `new`



### AWSStaticCredentialsProvider(unknown: awsCreds) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | awsCreds | - | - |

**Returns**: `new`



### refresh(refreshToken: String, authToken: String) → AuthenticationResultType

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| refreshToken | String | - | - |
| authToken | String | - | - |

**Returns**: `AuthenticationResultType`



### AdminInitiateAuthRequest() → new

**Returns**: `new`



### initiateUserSrpAuthRequest(username: String) → InitiateAuthRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| username | String | - | - |

**Returns**: `InitiateAuthRequest`



### InitiateAuthRequest() → new

**Returns**: `new`



### userSrpAuthRequest(challenge: InitiateAuthResult, password: String, secretHash: String) → RespondToAuthChallengeRequest

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| challenge | InitiateAuthResult | - | - |
| password | String | - | - |
| secretHash | String | - | - |

**Returns**: `RespondToAuthChallengeRequest`



### BigInteger(unknown: challenge.getChallengeParameters() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | challenge.getChallengeParameters( | - | - |

**Returns**: `new`



### SecurityException(error: "SRP, cannot: B) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| error | "SRP | - | - |
| cannot | B | - | - |

**Returns**: `new`



### BigInteger(unknown: challenge.getChallengeParameters() → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | challenge.getChallengeParameters( | - | - |

**Returns**: `new`



### Date() → new

**Returns**: `new`



### SecretKeySpec(unknown: key, unknown: "HmacSHA256") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | key | - | - |
| unknown | "HmacSHA256" | - | - |

**Returns**: `new`



### SimpleDateFormat(MMM: "EEE, unknown: Locale.US) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| MMM | "EEE | - | - |
| unknown | Locale.US | - | - |

**Returns**: `new`



### SimpleTimeZone(unknown: SimpleTimeZone.UTC_TIME, unknown: "UTC") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | SimpleTimeZone.UTC_TIME | - | - |
| unknown | "UTC" | - | - |

**Returns**: `new`



### SimpleDateFormat(MMM: "EEE, unknown: Locale.US) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| MMM | "EEE | - | - |
| unknown | Locale.US | - | - |

**Returns**: `new`



### SimpleTimeZone(unknown: SimpleTimeZone.UTC_TIME, unknown: "UTC") → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | SimpleTimeZone.UTC_TIME | - | - |
| unknown | "UTC" | - | - |

**Returns**: `new`



### String(unknown: Base64.encode(hmac) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | Base64.encode(hmac | - | - |

**Returns**: `new`



### RespondToAuthChallengeRequest() → new

**Returns**: `new`



### calculateSecretHash(userPoolClientId: String, userPoolClientSecret: String, userName: String) → String

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| userPoolClientId | String | - | - |
| userPoolClientSecret | String | - | - |
| userName | String | - | - |

**Returns**: `String`



### SecretKeySpec(unknown: userPoolClientSecret.getBytes(StandardCharsets.UTF_8) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | userPoolClientSecret.getBytes(StandardCharsets.UTF_8 | - | - |

**Returns**: `new`



### RuntimeException(while: "Error) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| while | "Error | - | - |

**Returns**: `new`



### Hkdf(algorithm: String) → private

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | String | - | - |

**Returns**: `private`



### IllegalArgumentException(algorithm: "Invalid) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | "Invalid | - | - |

**Returns**: `new`



### getInstance(algorithm: String) → Hkdf

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| algorithm | String | - | - |

**Returns**: `Hkdf`



### Hkdf(unknown: algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | algorithm | - | - |

**Returns**: `new`



### init(ikm: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ikm | byte[] | - | - |

**Returns**: `void`



### init(ikm: byte[], salt: byte[]) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ikm | byte[] | - | - |
| salt | byte[] | - | - |

**Returns**: `void`



### SecretKeySpec(unknown: realSalt, unknown: this.algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | realSalt | - | - |
| unknown | this.algorithm | - | - |

**Returns**: `new`



### SecretKeySpec(unknown: rawKeyMaterial, unknown: this.algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | rawKeyMaterial | - | - |
| unknown | this.algorithm | - | - |

**Returns**: `new`



### RuntimeException(exception": "Unexpected, unknown: var10) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| exception" | "Unexpected | - | - |
| unknown | var10 | - | - |

**Returns**: `new`



### unsafeInitWithoutKeyExtraction(rawKey: SecretKey) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| rawKey | SecretKey | - | - |

**Returns**: `void`



### InvalidKeyException(for: "Algorithm) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| for | "Algorithm | - | - |

**Returns**: `new`



### RuntimeException(unknown: var5) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var5 | - | - |

**Returns**: `new`



### deriveKey(info: byte[], length: int, output: byte[], offset: int) → void

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| info | byte[] | - | - |
| length | int | - | - |
| output | byte[] | - | - |
| offset | int | - | - |

**Returns**: `void`



### IllegalArgumentException(must: "Length) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| must | "Length | - | - |

**Returns**: `new`



### ShortBufferException() → new

**Returns**: `new`



### IllegalArgumentException(keys: "Requested) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| keys | "Requested | - | - |

**Returns**: `new`



### createMac() → Mac

**Returns**: `Mac`



### RuntimeException(unknown: var2) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var2 | - | - |

**Returns**: `new`



### RuntimeException(unknown: var3) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| unknown | var3 | - | - |

**Returns**: `new`



### assertInitialized() → void

**Returns**: `void`



### IllegalStateException(has: "Hkdf) → new

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| has | "Hkdf | - | - |

**Returns**: `new`


