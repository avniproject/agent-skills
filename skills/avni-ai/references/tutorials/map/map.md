# How To: Map

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test map

## Prerequisites

**Required Modules:**
- `collections`
- `decimal`
- `math`
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign data = value

```python
data = {'A': [0.0, 1.0, 2.0, 3.0, 4.0], 'B': [0.0, 1.0, 0.0, 1.0, 0.0], 'C': ['foo1', 'foo2', 'foo3', 'foo4', 'foo5'], 'D': bdate_range('1/1/2009', periods=5)}
```

**Verification:**
```python
assert v == source[target[k]]
```

### Step 2: Assign source = Series(...)

```python
source = Series(data['B'], index=data['C'])
```

**Verification:**
```python
assert v == source[target[k]]
```

### Step 3: Assign target = Series(...)

```python
target = Series(data['C'][:4], index=data['D'][:4])
```

### Step 4: Assign merged = target.map(...)

```python
merged = target.map(source)
```

### Step 5: Assign merged = target.map(...)

```python
merged = target.map(source.to_dict())
```

**Verification:**
```python
assert v == source[target[k]]
```


## Complete Example

```python
# Workflow
data = {'A': [0.0, 1.0, 2.0, 3.0, 4.0], 'B': [0.0, 1.0, 0.0, 1.0, 0.0], 'C': ['foo1', 'foo2', 'foo3', 'foo4', 'foo5'], 'D': bdate_range('1/1/2009', periods=5)}
source = Series(data['B'], index=data['C'])
target = Series(data['C'][:4], index=data['D'][:4])
merged = target.map(source)
for k, v in merged.items():
    assert v == source[target[k]]
merged = target.map(source.to_dict())
for k, v in merged.items():
    assert v == source[target[k]]
```

## Next Steps


---

*Source: test_map.py:155 | Complexity: Intermediate | Last updated: 2026-02-20*