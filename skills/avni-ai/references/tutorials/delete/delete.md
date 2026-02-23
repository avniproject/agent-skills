# How To: Delete

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test delete

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
idx = date_range(start='2000-01-01', periods=5, freq='ME', name='idx', unit=unit)
```

**Verification:**
```python
assert result.name == expected.name
```

### Step 2: Assign expected_0 = date_range(...)

```python
expected_0 = date_range(start='2000-02-01', periods=4, freq='ME', name='idx', unit=unit)
```

**Verification:**
```python
assert result.freq == expected.freq
```

### Step 3: Assign expected_4 = date_range(...)

```python
expected_4 = date_range(start='2000-01-01', periods=4, freq='ME', name='idx', unit=unit)
```

### Step 4: Assign expected_1 = DatetimeIndex.as_unit(...)

```python
expected_1 = DatetimeIndex(['2000-01-31', '2000-03-31', '2000-04-30', '2000-05-31'], freq=None, name='idx').as_unit(unit)
```

### Step 5: Assign cases = value

```python
cases = {0: expected_0, -5: expected_0, -1: expected_4, 4: expected_4, 1: expected_1}
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

### Step 8: Call idx.delete()

```python
idx.delete(5)
```


## Complete Example

```python
# Setup
# Fixtures: unit

# Workflow
idx = date_range(start='2000-01-01', periods=5, freq='ME', name='idx', unit=unit)
expected_0 = date_range(start='2000-02-01', periods=4, freq='ME', name='idx', unit=unit)
expected_4 = date_range(start='2000-01-01', periods=4, freq='ME', name='idx', unit=unit)
expected_1 = DatetimeIndex(['2000-01-31', '2000-03-31', '2000-04-30', '2000-05-31'], freq=None, name='idx').as_unit(unit)
cases = {0: expected_0, -5: expected_0, -1: expected_4, 4: expected_4, 1: expected_1}
for n, expected in cases.items():
    result = idx.delete(n)
    tm.assert_index_equal(result, expected)
    assert result.name == expected.name
    assert result.freq == expected.freq
with pytest.raises((IndexError, ValueError), match='out of bounds'):
    idx.delete(5)
```

## Next Steps


---

*Source: test_delete.py:12 | Complexity: Advanced | Last updated: 2026-02-20*