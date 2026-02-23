# How To: Delete Slice

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test delete slice

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: unit
```

## Step-by-Step Guide

### Step 1: Assign idx = date_range(...)

```python
idx = date_range(start='2000-01-01', periods=10, freq='D', name='idx', unit=unit)
```

**Verification:**
```python
assert result.name == expected.name
```

### Step 2: Assign expected_0_2 = date_range(...)

```python
expected_0_2 = date_range(start='2000-01-04', periods=7, freq='D', name='idx', unit=unit)
```

**Verification:**
```python
assert result.freq == expected.freq
```

### Step 3: Assign expected_7_9 = date_range(...)

```python
expected_7_9 = date_range(start='2000-01-01', periods=7, freq='D', name='idx', unit=unit)
```

**Verification:**
```python
assert result.name == expected.name
```

### Step 4: Assign expected_3_5 = DatetimeIndex.as_unit(...)

```python
expected_3_5 = DatetimeIndex(['2000-01-01', '2000-01-02', '2000-01-03', '2000-01-07', '2000-01-08', '2000-01-09', '2000-01-10'], freq=None, name='idx').as_unit(unit)
```

**Verification:**
```python
assert result.freq == expected.freq
```

### Step 5: Assign cases = value

```python
cases = {(0, 1, 2): expected_0_2, (7, 8, 9): expected_7_9, (3, 4, 5): expected_3_5}
```

### Step 6: Assign result = idx.delete(...)

```python
result = idx.delete(n)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

**Verification:**
```python
assert result.name == expected.name
```

### Step 8: Assign result = idx.delete(...)

```python
result = idx.delete(slice(n[0], n[-1] + 1))
```

### Step 9: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

**Verification:**
```python
assert result.name == expected.name
```


## Complete Example

```python
# Setup
# Fixtures: unit

# Workflow
idx = date_range(start='2000-01-01', periods=10, freq='D', name='idx', unit=unit)
expected_0_2 = date_range(start='2000-01-04', periods=7, freq='D', name='idx', unit=unit)
expected_7_9 = date_range(start='2000-01-01', periods=7, freq='D', name='idx', unit=unit)
expected_3_5 = DatetimeIndex(['2000-01-01', '2000-01-02', '2000-01-03', '2000-01-07', '2000-01-08', '2000-01-09', '2000-01-10'], freq=None, name='idx').as_unit(unit)
cases = {(0, 1, 2): expected_0_2, (7, 8, 9): expected_7_9, (3, 4, 5): expected_3_5}
for n, expected in cases.items():
    result = idx.delete(n)
    tm.assert_index_equal(result, expected)
    assert result.name == expected.name
    assert result.freq == expected.freq
    result = idx.delete(slice(n[0], n[-1] + 1))
    tm.assert_index_equal(result, expected)
    assert result.name == expected.name
    assert result.freq == expected.freq
```

## Next Steps


---

*Source: test_delete.py:73 | Complexity: Advanced | Last updated: 2026-02-20*