# How To: Identical

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test identical

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: idx
```

## Step-by-Step Guide

### Step 1: Assign mi = idx.copy(...)

```python
mi = idx.copy()
```

**Verification:**
```python
assert mi.identical(mi2)
```

### Step 2: Assign mi2 = idx.copy(...)

```python
mi2 = idx.copy()
```

**Verification:**
```python
assert mi.equals(mi2)
```

### Step 3: Assign mi = mi.set_names(...)

```python
mi = mi.set_names(['new1', 'new2'])
```

**Verification:**
```python
assert not mi.identical(mi2)
```

### Step 4: Assign mi2 = mi2.set_names(...)

```python
mi2 = mi2.set_names(['new1', 'new2'])
```

**Verification:**
```python
assert mi.identical(mi2)
```

### Step 5: Assign mi4 = Index(...)

```python
mi4 = Index(mi.tolist(), tupleize_cols=False)
```

**Verification:**
```python
assert not mi.identical(mi4)
```


## Complete Example

```python
# Setup
# Fixtures: idx

# Workflow
mi = idx.copy()
mi2 = idx.copy()
assert mi.identical(mi2)
mi = mi.set_names(['new1', 'new2'])
assert mi.equals(mi2)
assert not mi.identical(mi2)
mi2 = mi2.set_names(['new1', 'new2'])
assert mi.identical(mi2)
mi4 = Index(mi.tolist(), tupleize_cols=False)
assert not mi.identical(mi4)
assert mi.equals(mi4)
```

## Next Steps


---

*Source: test_equivalence.py:184 | Complexity: Intermediate | Last updated: 2026-02-20*