# How To: Dti Snap

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test dti snap

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: name, tz, unit
```

## Step-by-Step Guide

### Step 1: Assign dti = DatetimeIndex(...)

```python
dti = DatetimeIndex(['1/1/2002', '1/2/2002', '1/3/2002', '1/4/2002', '1/5/2002', '1/6/2002', '1/7/2002'], name=name, tz=tz, freq='D')
```

**Verification:**
```python
assert result.tz == expected.tz
```

### Step 2: Assign dti = dti.as_unit(...)

```python
dti = dti.as_unit(unit)
```

**Verification:**
```python
assert result.freq is None
```

### Step 3: Assign result = dti.snap(...)

```python
result = dti.snap(freq='W-MON')
```

**Verification:**
```python
assert expected.freq is None
```

### Step 4: Assign expected = date_range(...)

```python
expected = date_range('12/31/2001', '1/7/2002', name=name, tz=tz, freq='w-mon')
```

**Verification:**
```python
assert result.tz == expected.tz
```

### Step 5: Assign expected = expected.repeat(...)

```python
expected = expected.repeat([3, 4])
```

**Verification:**
```python
assert result.freq is None
```

### Step 6: Assign expected = expected.as_unit(...)

```python
expected = expected.as_unit(unit)
```

**Verification:**
```python
assert expected.freq is None
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

**Verification:**
```python
assert result.tz == expected.tz
```

### Step 8: Assign result = dti.snap(...)

```python
result = dti.snap(freq='B')
```

### Step 9: Assign expected = date_range(...)

```python
expected = date_range('1/1/2002', '1/7/2002', name=name, tz=tz, freq='b')
```

### Step 10: Assign expected = expected.repeat(...)

```python
expected = expected.repeat([1, 1, 1, 2, 2])
```

### Step 11: Assign expected = expected.as_unit(...)

```python
expected = expected.as_unit(unit)
```

### Step 12: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

**Verification:**
```python
assert result.tz == expected.tz
```


## Complete Example

```python
# Setup
# Fixtures: name, tz, unit

# Workflow
dti = DatetimeIndex(['1/1/2002', '1/2/2002', '1/3/2002', '1/4/2002', '1/5/2002', '1/6/2002', '1/7/2002'], name=name, tz=tz, freq='D')
dti = dti.as_unit(unit)
result = dti.snap(freq='W-MON')
expected = date_range('12/31/2001', '1/7/2002', name=name, tz=tz, freq='w-mon')
expected = expected.repeat([3, 4])
expected = expected.as_unit(unit)
tm.assert_index_equal(result, expected)
assert result.tz == expected.tz
assert result.freq is None
assert expected.freq is None
result = dti.snap(freq='B')
expected = date_range('1/1/2002', '1/7/2002', name=name, tz=tz, freq='b')
expected = expected.repeat([1, 1, 1, 2, 2])
expected = expected.as_unit(unit)
tm.assert_index_equal(result, expected)
assert result.tz == expected.tz
assert result.freq is None
assert expected.freq is None
```

## Next Steps


---

*Source: test_snap.py:13 | Complexity: Advanced | Last updated: 2026-02-20*