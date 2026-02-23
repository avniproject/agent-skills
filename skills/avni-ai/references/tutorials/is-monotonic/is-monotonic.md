# How To: Is Monotonic

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test is monotonic

## Prerequisites

**Required Modules:**
- `re`
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas`


## Step-by-Step Guide

### Step 1: Assign num = 1000

```python
num = 1000
```

**Verification:**
```python
assert engine.is_monotonic_increasing is True
```

### Step 2: Assign arr = np.array(...)

```python
arr = np.array(['a'] * num + ['a'] * num + ['c'] * num, dtype=self.dtype)
```

**Verification:**
```python
assert engine.is_monotonic_decreasing is False
```

### Step 3: Assign engine = self.engine_type(...)

```python
engine = self.engine_type(arr)
```

**Verification:**
```python
assert engine.is_monotonic_increasing is False
```

### Step 4: Assign engine = self.engine_type(...)

```python
engine = self.engine_type(arr[::-1])
```

**Verification:**
```python
assert engine.is_monotonic_decreasing is True
```

### Step 5: Assign arr = np.array(...)

```python
arr = np.array(['a'] * num + ['b'] * num + ['a'] * num, dtype=self.dtype)
```

**Verification:**
```python
assert engine.is_monotonic_increasing is False
```

### Step 6: Assign engine = self.engine_type(...)

```python
engine = self.engine_type(arr[::-1])
```

**Verification:**
```python
assert engine.is_monotonic_decreasing is False
```


## Complete Example

```python
# Workflow
num = 1000
arr = np.array(['a'] * num + ['a'] * num + ['c'] * num, dtype=self.dtype)
engine = self.engine_type(arr)
assert engine.is_monotonic_increasing is True
assert engine.is_monotonic_decreasing is False
engine = self.engine_type(arr[::-1])
assert engine.is_monotonic_increasing is False
assert engine.is_monotonic_decreasing is True
arr = np.array(['a'] * num + ['b'] * num + ['a'] * num, dtype=self.dtype)
engine = self.engine_type(arr[::-1])
assert engine.is_monotonic_increasing is False
assert engine.is_monotonic_decreasing is False
```

## Next Steps


---

*Source: test_engines.py:144 | Complexity: Intermediate | Last updated: 2026-02-20*