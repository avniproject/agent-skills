# How To: Sanitize Sequence

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test sanitize sequence

## Prerequisites

**Required Modules:**
- `__future__`
- `itertools`
- `pathlib`
- `pickle`
- `sys`
- `typing`
- `unittest.mock`
- `datetime`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.cbook`
- `types`


## Step-by-Step Guide

### Step 1: Assign d = value

```python
d = {'a': 1, 'b': 2, 'c': 3}
```

**Verification:**
```python
assert k == sorted(cbook.sanitize_sequence(d.keys()))
```

### Step 2: Assign k = value

```python
k = ['a', 'b', 'c']
```

**Verification:**
```python
assert v == sorted(cbook.sanitize_sequence(d.values()))
```

### Step 3: Assign v = value

```python
v = [1, 2, 3]
```

**Verification:**
```python
assert i == sorted(cbook.sanitize_sequence(d.items()))
```

### Step 4: Assign i = value

```python
i = [('a', 1), ('b', 2), ('c', 3)]
```

**Verification:**
```python
assert i == cbook.sanitize_sequence(i)
```


## Complete Example

```python
# Workflow
d = {'a': 1, 'b': 2, 'c': 3}
k = ['a', 'b', 'c']
v = [1, 2, 3]
i = [('a', 1), ('b', 2), ('c', 3)]
assert k == sorted(cbook.sanitize_sequence(d.keys()))
assert v == sorted(cbook.sanitize_sequence(d.values()))
assert i == sorted(cbook.sanitize_sequence(d.items()))
assert i == cbook.sanitize_sequence(i)
assert k == cbook.sanitize_sequence(k)
```

## Next Steps


---

*Source: test_cbook.py:454 | Complexity: Intermediate | Last updated: 2026-02-20*