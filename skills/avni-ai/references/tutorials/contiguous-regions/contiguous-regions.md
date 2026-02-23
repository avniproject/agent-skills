# How To: Contiguous Regions

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test contiguous regions

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

### Step 1: Assign unknown = value

```python
a, b, c = (3, 4, 5)
```

**Verification:**
```python
assert cbook.contiguous_regions(mask) == expected
```

### Step 2: Assign mask = value

```python
mask = [True] * a + [False] * b + [True] * c
```

**Verification:**
```python
assert cbook.contiguous_regions(mask) == expected
```

### Step 3: Assign expected = value

```python
expected = [(0, a), (a + b, a + b + c)]
```

**Verification:**
```python
assert cbook.contiguous_regions(mask) == expected
```

### Step 4: Assign unknown = value

```python
d, e = (6, 7)
```

**Verification:**
```python
assert cbook.contiguous_regions(mask) == expected
```

### Step 5: Assign mask = value

```python
mask = mask + [False] * e
```

**Verification:**
```python
assert cbook.contiguous_regions([False] * 5) == []
```

### Step 6: Assign mask = value

```python
mask = [False] * d + mask[:-e]
```

**Verification:**
```python
assert cbook.contiguous_regions([]) == []
```

### Step 7: Assign expected = value

```python
expected = [(d, d + a), (d + a + b, d + a + b + c)]
```

**Verification:**
```python
assert cbook.contiguous_regions(mask) == expected
```

### Step 8: Assign mask = value

```python
mask = mask + [False] * e
```

**Verification:**
```python
assert cbook.contiguous_regions(mask) == expected
```


## Complete Example

```python
# Workflow
a, b, c = (3, 4, 5)
mask = [True] * a + [False] * b + [True] * c
expected = [(0, a), (a + b, a + b + c)]
assert cbook.contiguous_regions(mask) == expected
d, e = (6, 7)
mask = mask + [False] * e
assert cbook.contiguous_regions(mask) == expected
mask = [False] * d + mask[:-e]
expected = [(d, d + a), (d + a + b, d + a + b + c)]
assert cbook.contiguous_regions(mask) == expected
mask = mask + [False] * e
assert cbook.contiguous_regions(mask) == expected
assert cbook.contiguous_regions([False] * 5) == []
assert cbook.contiguous_regions([]) == []
```

## Next Steps


---

*Source: test_cbook.py:784 | Complexity: Advanced | Last updated: 2026-02-20*