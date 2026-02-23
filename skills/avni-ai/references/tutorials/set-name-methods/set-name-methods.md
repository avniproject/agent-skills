# How To: Set Name Methods

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test set name methods

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.compat`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: idx
```

## Step-by-Step Guide

### Step 1: Assign index_names = value

```python
index_names = ['first', 'second']
```

**Verification:**
```python
assert idx.rename == idx.set_names
```

### Step 2: Assign new_names = value

```python
new_names = [name + 'SUFFIX' for name in index_names]
```

**Verification:**
```python
assert idx.names == index_names
```

### Step 3: Assign ind = idx.set_names(...)

```python
ind = idx.set_names(new_names)
```

**Verification:**
```python
assert ind.names == new_names
```

### Step 4: Assign msg = 'Length of names must match number of levels in MultiIndex'

```python
msg = 'Length of names must match number of levels in MultiIndex'
```

**Verification:**
```python
assert res is None
```

### Step 5: Assign new_names2 = value

```python
new_names2 = [name + 'SUFFIX2' for name in new_names]
```

**Verification:**
```python
assert ind.names == new_names2
```

### Step 6: Assign res = ind.set_names(...)

```python
res = ind.set_names(new_names2, inplace=True)
```

**Verification:**
```python
assert idx.names == index_names
```

### Step 7: Assign ind = idx.set_names(...)

```python
ind = idx.set_names(new_names[0], level=0)
```

**Verification:**
```python
assert ind.names == [new_names[0], index_names[1]]
```

### Step 8: Assign res = ind.set_names(...)

```python
res = ind.set_names(new_names2[0], level=0, inplace=True)
```

**Verification:**
```python
assert res is None
```

### Step 9: Assign ind = idx.set_names(...)

```python
ind = idx.set_names(new_names, level=[0, 1])
```

**Verification:**
```python
assert ind.names == [new_names2[0], index_names[1]]
```

### Step 10: Assign res = ind.set_names(...)

```python
res = ind.set_names(new_names2, level=[0, 1], inplace=True)
```

**Verification:**
```python
assert idx.names == index_names
```

### Step 11: Call ind.set_names()

```python
ind.set_names(new_names + new_names)
```

**Verification:**
```python
assert ind.names == new_names
```


## Complete Example

```python
# Setup
# Fixtures: idx

# Workflow
index_names = ['first', 'second']
assert idx.rename == idx.set_names
new_names = [name + 'SUFFIX' for name in index_names]
ind = idx.set_names(new_names)
assert idx.names == index_names
assert ind.names == new_names
msg = 'Length of names must match number of levels in MultiIndex'
with pytest.raises(ValueError, match=msg):
    ind.set_names(new_names + new_names)
new_names2 = [name + 'SUFFIX2' for name in new_names]
res = ind.set_names(new_names2, inplace=True)
assert res is None
assert ind.names == new_names2
ind = idx.set_names(new_names[0], level=0)
assert idx.names == index_names
assert ind.names == [new_names[0], index_names[1]]
res = ind.set_names(new_names2[0], level=0, inplace=True)
assert res is None
assert ind.names == [new_names2[0], index_names[1]]
ind = idx.set_names(new_names, level=[0, 1])
assert idx.names == index_names
assert ind.names == new_names
res = ind.set_names(new_names2, level=[0, 1], inplace=True)
assert res is None
assert ind.names == new_names2
```

## Next Steps


---

*Source: test_get_set.py:102 | Complexity: Advanced | Last updated: 2026-02-20*