# How To: Get

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test get

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign s = Series(...)

```python
s = Series(np.array([43, 48, 60, 48, 50, 51, 50, 45, 57, 48, 56, 45, 51, 39, 55, 43, 54, 52, 51, 54]))
```

**Verification:**
```python
assert result == expected
```

### Step 2: Assign result = s.get(...)

```python
result = s.get(25, 0)
```

**Verification:**
```python
assert result == expected
```

### Step 3: Assign expected = 0

```python
expected = 0
```

**Verification:**
```python
assert result == 'Missing'
```

### Step 4: Assign s = Series(...)

```python
s = Series(np.array([43, 48, 60, 48, 50, 51, 50, 45, 57, 48, 56, 45, 51, 39, 55, 43, 54, 52, 51, 54]), index=Index([25.0, 36.0, 49.0, 64.0, 81.0, 100.0, 121.0, 144.0, 169.0, 196.0, 1225.0, 1296.0, 1369.0, 1444.0, 1521.0, 1600.0, 1681.0, 1764.0, 1849.0, 1936.0], dtype=np.float64))
```

**Verification:**
```python
assert result == 3
```

### Step 5: Assign result = s.get(...)

```python
result = s.get(25, 0)
```

**Verification:**
```python
assert result == 'Missing'
```

### Step 6: Assign expected = 43

```python
expected = 43
```

**Verification:**
```python
assert result == expected
```

### Step 7: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'i': [0] * 3, 'b': [False] * 3})
```

### Step 8: Assign vc = df.i.value_counts(...)

```python
vc = df.i.value_counts()
```

### Step 9: Assign result = vc.get(...)

```python
result = vc.get(99, default='Missing')
```

**Verification:**
```python
assert result == 'Missing'
```

### Step 10: Assign vc = df.b.value_counts(...)

```python
vc = df.b.value_counts()
```

### Step 11: Assign result = vc.get(...)

```python
result = vc.get(False, default='Missing')
```

**Verification:**
```python
assert result == 3
```

### Step 12: Assign result = vc.get(...)

```python
result = vc.get(True, default='Missing')
```

**Verification:**
```python
assert result == 'Missing'
```


## Complete Example

```python
# Workflow
s = Series(np.array([43, 48, 60, 48, 50, 51, 50, 45, 57, 48, 56, 45, 51, 39, 55, 43, 54, 52, 51, 54]))
result = s.get(25, 0)
expected = 0
assert result == expected
s = Series(np.array([43, 48, 60, 48, 50, 51, 50, 45, 57, 48, 56, 45, 51, 39, 55, 43, 54, 52, 51, 54]), index=Index([25.0, 36.0, 49.0, 64.0, 81.0, 100.0, 121.0, 144.0, 169.0, 196.0, 1225.0, 1296.0, 1369.0, 1444.0, 1521.0, 1600.0, 1681.0, 1764.0, 1849.0, 1936.0], dtype=np.float64))
result = s.get(25, 0)
expected = 43
assert result == expected
df = pd.DataFrame({'i': [0] * 3, 'b': [False] * 3})
vc = df.i.value_counts()
result = vc.get(99, default='Missing')
assert result == 'Missing'
vc = df.b.value_counts()
result = vc.get(False, default='Missing')
assert result == 3
result = vc.get(True, default='Missing')
assert result == 'Missing'
```

## Next Steps


---

*Source: test_get.py:14 | Complexity: Advanced | Last updated: 2026-02-20*