# How To: Get Loc

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get loc

## Prerequisites

**Required Modules:**
- `re`
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas`


## Step-by-Step Guide

### Step 1: Assign arr = np.array(...)

```python
arr = np.array(self.values, dtype=self.dtype)
```

**Verification:**
```python
assert engine.get_loc('b') == 1
```

### Step 2: Assign engine = self.engine_type(...)

```python
engine = self.engine_type(arr)
```

**Verification:**
```python
assert engine.get_loc('b') == slice(1000, 2000)
```

### Step 3: Assign num = 1000

```python
num = 1000
```

**Verification:**
```python
assert (result == expected).all()
```

### Step 4: Assign arr = np.array(...)

```python
arr = np.array(['a'] * num + ['b'] * num + ['c'] * num, dtype=self.dtype)
```

### Step 5: Assign engine = self.engine_type(...)

```python
engine = self.engine_type(arr)
```

**Verification:**
```python
assert engine.get_loc('b') == slice(1000, 2000)
```

### Step 6: Assign arr = np.array(...)

```python
arr = np.array(self.values * num, dtype=self.dtype)
```

### Step 7: Assign engine = self.engine_type(...)

```python
engine = self.engine_type(arr)
```

### Step 8: Assign expected = np.array(...)

```python
expected = np.array([False, True, False] * num, dtype=bool)
```

### Step 9: Assign result = engine.get_loc(...)

```python
result = engine.get_loc('b')
```

**Verification:**
```python
assert (result == expected).all()
```


## Complete Example

```python
# Workflow
arr = np.array(self.values, dtype=self.dtype)
engine = self.engine_type(arr)
assert engine.get_loc('b') == 1
num = 1000
arr = np.array(['a'] * num + ['b'] * num + ['c'] * num, dtype=self.dtype)
engine = self.engine_type(arr)
assert engine.get_loc('b') == slice(1000, 2000)
arr = np.array(self.values * num, dtype=self.dtype)
engine = self.engine_type(arr)
expected = np.array([False, True, False] * num, dtype=bool)
result = engine.get_loc('b')
assert (result == expected).all()
```

## Next Steps


---

*Source: test_engines.py:175 | Complexity: Advanced | Last updated: 2026-02-20*