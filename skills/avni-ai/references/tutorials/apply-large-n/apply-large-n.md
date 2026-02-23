# How To: Apply Large N

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test apply large n

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `__future__`
- `datetime`
- `numpy`
- `pytest`
- `pandas._libs.tslibs.offsets`
- `pandas`
- `pandas.tests.tseries.offsets.common`
- `pandas.tseries`

**Setup Required:**
```python
# Fixtures: _offset
```

## Step-by-Step Guide

### Step 1: Assign dt = datetime(...)

```python
dt = datetime(2012, 10, 23)
```

**Verification:**
```python
assert result == datetime(2012, 11, 6)
```

### Step 2: Assign result = value

```python
result = dt + _offset(10)
```

**Verification:**
```python
assert result == dt
```

### Step 3: Assign result = value

```python
result = dt + _offset(100) - _offset(100)
```

**Verification:**
```python
assert rs == xp
```

### Step 4: Assign off = value

```python
off = _offset() * 6
```

**Verification:**
```python
assert rs == xp
```

### Step 5: Assign rs = value

```python
rs = datetime(2012, 1, 1) - off
```

**Verification:**
```python
assert rs == xp
```

### Step 6: Assign xp = datetime(...)

```python
xp = datetime(2011, 12, 23)
```

**Verification:**
```python
assert rs == xp
```

### Step 7: Assign st = datetime(...)

```python
st = datetime(2011, 12, 18)
```

### Step 8: Assign rs = value

```python
rs = st + off
```

### Step 9: Assign xp = datetime(...)

```python
xp = datetime(2011, 12, 26)
```

**Verification:**
```python
assert rs == xp
```

### Step 10: Assign off = value

```python
off = _offset() * 10
```

### Step 11: Assign rs = value

```python
rs = datetime(2014, 1, 5) + off
```

### Step 12: Assign xp = datetime(...)

```python
xp = datetime(2014, 1, 17)
```

**Verification:**
```python
assert rs == xp
```


## Complete Example

```python
# Setup
# Fixtures: _offset

# Workflow
dt = datetime(2012, 10, 23)
result = dt + _offset(10)
assert result == datetime(2012, 11, 6)
result = dt + _offset(100) - _offset(100)
assert result == dt
off = _offset() * 6
rs = datetime(2012, 1, 1) - off
xp = datetime(2011, 12, 23)
assert rs == xp
st = datetime(2011, 12, 18)
rs = st + off
xp = datetime(2011, 12, 26)
assert rs == xp
off = _offset() * 10
rs = datetime(2014, 1, 5) + off
xp = datetime(2014, 1, 17)
assert rs == xp
```

## Next Steps


---

*Source: test_business_day.py:203 | Complexity: Advanced | Last updated: 2026-02-20*