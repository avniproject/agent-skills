# How To: Array Patch Perimeters

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test array patch perimeters

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
rows, cols = x.shape
```

**Verification:**
```python
assert np.array_equal(polys, cbook._array_patch_perimeters(x, rstride=rstride, cstride=cstride))
```

### Step 2: Assign row_inds = value

```python
row_inds = [*range(0, rows - 1, rstride), rows - 1]
```

### Step 3: Assign col_inds = value

```python
col_inds = [*range(0, cols - 1, cstride), cols - 1]
```

### Step 4: Assign polys = value

```python
polys = []
```

### Step 5: Assign polys = np.asarray(...)

```python
polys = np.asarray(polys)
```

**Verification:**
```python
assert np.array_equal(polys, cbook._array_patch_perimeters(x, rstride=rstride, cstride=cstride))
```

### Step 6: Assign x = np.arange.reshape(...)

```python
x = np.arange(rows * cols).reshape(rows, cols)
```

### Step 7: Call check()

```python
check(x, rstride=rstride, cstride=cstride)
```

### Step 8: Assign ps = value

```python
ps = cbook._array_perimeter(x[rs:rs_next + 1, cs:cs_next + 1]).T
```

### Step 9: Call polys.append()

```python
polys.append(ps)
```


## Complete Example

```python
# Workflow
def check(x, rstride, cstride):
    rows, cols = x.shape
    row_inds = [*range(0, rows - 1, rstride), rows - 1]
    col_inds = [*range(0, cols - 1, cstride), cols - 1]
    polys = []
    for rs, rs_next in itertools.pairwise(row_inds):
        for cs, cs_next in itertools.pairwise(col_inds):
            ps = cbook._array_perimeter(x[rs:rs_next + 1, cs:cs_next + 1]).T
            polys.append(ps)
    polys = np.asarray(polys)
    assert np.array_equal(polys, cbook._array_patch_perimeters(x, rstride=rstride, cstride=cstride))

def divisors(n):
    return [i for i in range(1, n + 1) if n % i == 0]
for rows, cols in [(5, 5), (7, 14), (13, 9)]:
    x = np.arange(rows * cols).reshape(rows, cols)
    for rstride, cstride in itertools.product(divisors(rows - 1), divisors(cols - 1)):
        check(x, rstride=rstride, cstride=cstride)
```

## Next Steps


---

*Source: test_cbook.py:814 | Complexity: Advanced | Last updated: 2026-02-20*