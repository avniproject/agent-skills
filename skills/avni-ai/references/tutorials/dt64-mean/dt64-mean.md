# How To: Dt64 Mean

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test dt64 mean

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `inspect`
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: tz_naive_fixture, box
```

## Step-by-Step Guide

### Step 1: Assign tz = tz_naive_fixture

```python
tz = tz_naive_fixture
```

**Verification:**
```python
assert obj.mean() == pd.Timestamp('2001-01-06', tz=tz)
```

### Step 2: Assign dti = date_range(...)

```python
dti = date_range('2001-01-01', periods=11, tz=tz)
```

**Verification:**
```python
assert obj.mean(skipna=False) == pd.Timestamp('2001-01-06', tz=tz)
```

### Step 3: Assign dti = dti.take(...)

```python
dti = dti.take([4, 1, 3, 10, 9, 7, 8, 5, 0, 2, 6])
```

**Verification:**
```python
assert obj.mean() == pd.Timestamp('2001-01-06 07:12:00', tz=tz)
```

### Step 4: Assign dtarr = value

```python
dtarr = dti._data
```

**Verification:**
```python
assert obj.mean(skipna=False) is pd.NaT
```

### Step 5: Assign obj = box(...)

```python
obj = box(dtarr)
```

**Verification:**
```python
assert obj.mean() == pd.Timestamp('2001-01-06', tz=tz)
```

### Step 6: Assign unknown = value

```python
dtarr[-2] = pd.NaT
```

### Step 7: Assign obj = box(...)

```python
obj = box(dtarr)
```

**Verification:**
```python
assert obj.mean() == pd.Timestamp('2001-01-06 07:12:00', tz=tz)
```


## Complete Example

```python
# Setup
# Fixtures: tz_naive_fixture, box

# Workflow
tz = tz_naive_fixture
dti = date_range('2001-01-01', periods=11, tz=tz)
dti = dti.take([4, 1, 3, 10, 9, 7, 8, 5, 0, 2, 6])
dtarr = dti._data
obj = box(dtarr)
assert obj.mean() == pd.Timestamp('2001-01-06', tz=tz)
assert obj.mean(skipna=False) == pd.Timestamp('2001-01-06', tz=tz)
dtarr[-2] = pd.NaT
obj = box(dtarr)
assert obj.mean() == pd.Timestamp('2001-01-06 07:12:00', tz=tz)
assert obj.mean(skipna=False) is pd.NaT
```

## Next Steps


---

*Source: test_stat_reductions.py:20 | Complexity: Intermediate | Last updated: 2026-02-20*