# How To: Repeat

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test repeat

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: tz_naive_fixture, unit
```

## Step-by-Step Guide

### Step 1: Assign tz = tz_naive_fixture

```python
tz = tz_naive_fixture
```

**Verification:**
```python
assert res.freq is None
```

### Step 2: Assign reps = 2

```python
reps = 2
```

### Step 3: Assign msg = "the 'axis' parameter is not supported"

```python
msg = "the 'axis' parameter is not supported"
```

### Step 4: Assign rng = date_range(...)

```python
rng = date_range(start='2016-01-01', periods=2, freq='30Min', tz=tz, unit=unit)
```

### Step 5: Assign expected_rng = DatetimeIndex.as_unit(...)

```python
expected_rng = DatetimeIndex([Timestamp('2016-01-01 00:00:00', tz=tz), Timestamp('2016-01-01 00:00:00', tz=tz), Timestamp('2016-01-01 00:30:00', tz=tz), Timestamp('2016-01-01 00:30:00', tz=tz)]).as_unit(unit)
```

### Step 6: Assign res = rng.repeat(...)

```python
res = rng.repeat(reps)
```

### Step 7: Call tm.assert_index_equal()

```python
tm.assert_index_equal(res, expected_rng)
```

**Verification:**
```python
assert res.freq is None
```

### Step 8: Call tm.assert_index_equal()

```python
tm.assert_index_equal(np.repeat(rng, reps), expected_rng)
```

### Step 9: Call np.repeat()

```python
np.repeat(rng, reps, axis=1)
```


## Complete Example

```python
# Setup
# Fixtures: tz_naive_fixture, unit

# Workflow
tz = tz_naive_fixture
reps = 2
msg = "the 'axis' parameter is not supported"
rng = date_range(start='2016-01-01', periods=2, freq='30Min', tz=tz, unit=unit)
expected_rng = DatetimeIndex([Timestamp('2016-01-01 00:00:00', tz=tz), Timestamp('2016-01-01 00:00:00', tz=tz), Timestamp('2016-01-01 00:30:00', tz=tz), Timestamp('2016-01-01 00:30:00', tz=tz)]).as_unit(unit)
res = rng.repeat(reps)
tm.assert_index_equal(res, expected_rng)
assert res.freq is None
tm.assert_index_equal(np.repeat(rng, reps), expected_rng)
with pytest.raises(ValueError, match=msg):
    np.repeat(rng, reps, axis=1)
```

## Next Steps


---

*Source: test_repeat.py:61 | Complexity: Advanced | Last updated: 2026-02-20*