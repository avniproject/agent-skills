# How To: Is 

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test is 

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign mi = MultiIndex.from_tuples(...)

```python
mi = MultiIndex.from_tuples(zip(range(10), range(10)))
```

**Verification:**
```python
assert mi.is_(mi)
```

### Step 2: Assign mi2 = mi.view(...)

```python
mi2 = mi.view()
```

**Verification:**
```python
assert mi.is_(mi.view())
```

### Step 3: Assign mi2.names = value

```python
mi2.names = ['A', 'B']
```

**Verification:**
```python
assert mi.is_(mi.view().view().view().view())
```

### Step 4: Assign mi3 = mi2.set_levels(...)

```python
mi3 = mi2.set_levels([list(range(10)), list(range(10))])
```

**Verification:**
```python
assert mi2.is_(mi)
```

### Step 5: Assign mi4 = mi3.view(...)

```python
mi4 = mi3.view()
```

**Verification:**
```python
assert mi.is_(mi2)
```

### Step 6: Assign mi4 = mi4.set_levels(...)

```python
mi4 = mi4.set_levels([list(range(10)), list(range(10))])
```

**Verification:**
```python
assert not mi.is_(mi.set_names(['C', 'D']))
```

### Step 7: Assign mi5 = mi.view(...)

```python
mi5 = mi.view()
```

**Verification:**
```python
assert not mi3.is_(mi2)
```

### Step 8: Assign mi5 = mi5.set_levels(...)

```python
mi5 = mi5.set_levels(mi5.levels)
```

**Verification:**
```python
assert mi2.is_(mi)
```


## Complete Example

```python
# Workflow
mi = MultiIndex.from_tuples(zip(range(10), range(10)))
assert mi.is_(mi)
assert mi.is_(mi.view())
assert mi.is_(mi.view().view().view().view())
mi2 = mi.view()
mi2.names = ['A', 'B']
assert mi2.is_(mi)
assert mi.is_(mi2)
assert not mi.is_(mi.set_names(['C', 'D']))
mi3 = mi2.set_levels([list(range(10)), list(range(10))])
assert not mi3.is_(mi2)
assert mi2.is_(mi)
mi4 = mi3.view()
mi4 = mi4.set_levels([list(range(10)), list(range(10))])
assert not mi4.is_(mi3)
mi5 = mi.view()
mi5 = mi5.set_levels(mi5.levels)
assert not mi5.is_(mi)
```

## Next Steps


---

*Source: test_equivalence.py:225 | Complexity: Advanced | Last updated: 2026-02-20*