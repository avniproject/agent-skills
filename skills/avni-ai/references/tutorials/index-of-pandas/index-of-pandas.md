# How To: Index Of Pandas

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test index of pandas

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: pd
```

## Step-by-Step Guide

### Step 1: Assign X = np.arange.reshape(...)

```python
X = np.arange(30).reshape(10, 3)
```

### Step 2: Assign x = pd.DataFrame(...)

```python
x = pd.DataFrame(X, columns=['a', 'b', 'c'])
```

### Step 3: Assign unknown = cbook.index_of(...)

```python
Idx, Xnew = cbook.index_of(x)
```

### Step 4: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(X, Xnew)
```

### Step 5: Assign IdxRef = np.arange(...)

```python
IdxRef = np.arange(10)
```

### Step 6: Call np.testing.assert_array_equal()

```python
np.testing.assert_array_equal(Idx, IdxRef)
```


## Complete Example

```python
# Setup
# Fixtures: pd

# Workflow
X = np.arange(30).reshape(10, 3)
x = pd.DataFrame(X, columns=['a', 'b', 'c'])
Idx, Xnew = cbook.index_of(x)
np.testing.assert_array_equal(X, Xnew)
IdxRef = np.arange(10)
np.testing.assert_array_equal(Idx, IdxRef)
```

## Next Steps


---

*Source: test_cbook.py:764 | Complexity: Intermediate | Last updated: 2026-02-20*