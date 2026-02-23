# How To: Qr Mode Full Future Warning

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: Check mode='full' FutureWarning.

In numpy 1.8 the mode options 'full' and 'economic' in linalg.qr were
deprecated. The release date will probably be sometime in the summer
of 2013.

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: "Check mode='full' FutureWarning.\n\n    In numpy 1.8 the mode options 'full' and 'economic' in linalg.qr were\n    deprecated. The release date will probably be sometime in the summer\n    of 2013.\n\n    "

```python
"Check mode='full' FutureWarning.\n\n    In numpy 1.8 the mode options 'full' and 'economic' in linalg.qr were\n    deprecated. The release date will probably be sometime in the summer\n    of 2013.\n\n    "
```

**Verification:**
```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='full')
```

### Step 2: Assign a = np.eye(...)

```python
a = np.eye(2)
```

**Verification:**
```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='f')
```

### Step 3: Call assert_warns()

```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='full')
```

**Verification:**
```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='economic')
```

### Step 4: Call assert_warns()

```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='f')
```

**Verification:**
```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='e')
```

### Step 5: Call assert_warns()

```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='economic')
```

### Step 6: Call assert_warns()

```python
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='e')
```


## Complete Example

```python
# Workflow
"Check mode='full' FutureWarning.\n\n    In numpy 1.8 the mode options 'full' and 'economic' in linalg.qr were\n    deprecated. The release date will probably be sometime in the summer\n    of 2013.\n\n    "
a = np.eye(2)
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='full')
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='f')
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='economic')
assert_warns(DeprecationWarning, np.linalg.qr, a, mode='e')
```

## Next Steps


---

*Source: test_deprecations.py:8 | Complexity: Intermediate | Last updated: 2026-02-20*