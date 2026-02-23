# How To: Copy

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test copy

## Prerequisites

**Required Modules:**
- `sys`
- `pytest`
- `numpy`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign x = np.arange(...)

```python
x = np.arange(5)
```

**Verification:**
```python
assert np.may_share_memory(x, y)
```

### Step 2: Assign y = np.from_dlpack(...)

```python
y = np.from_dlpack(x)
```

**Verification:**
```python
assert np.may_share_memory(x, y)
```

### Step 3: Assign y = np.from_dlpack(...)

```python
y = np.from_dlpack(x, copy=False)
```

**Verification:**
```python
assert not np.may_share_memory(x, y)
```

### Step 4: Assign y = np.from_dlpack(...)

```python
y = np.from_dlpack(x, copy=True)
```

**Verification:**
```python
assert not np.may_share_memory(x, y)
```


## Complete Example

```python
# Workflow
x = np.arange(5)
y = np.from_dlpack(x)
assert np.may_share_memory(x, y)
y = np.from_dlpack(x, copy=False)
assert np.may_share_memory(x, y)
y = np.from_dlpack(x, copy=True)
assert not np.may_share_memory(x, y)
```

## Next Steps


---

*Source: test_dlpack.py:170 | Complexity: Intermediate | Last updated: 2026-02-20*