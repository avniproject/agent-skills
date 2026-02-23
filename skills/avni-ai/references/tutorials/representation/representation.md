# How To: Representation

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test representation

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pytest`
- `pandas`
- `pandas`

**Setup Required:**
```python
# Fixtures: method
```

## Step-by-Step Guide

### Step 1: Assign idx1 = TimedeltaIndex(...)

```python
idx1 = TimedeltaIndex([], freq='D')
```

**Verification:**
```python
assert result == expected
```

### Step 2: Assign idx2 = TimedeltaIndex(...)

```python
idx2 = TimedeltaIndex(['1 days'], freq='D')
```

### Step 3: Assign idx3 = TimedeltaIndex(...)

```python
idx3 = TimedeltaIndex(['1 days', '2 days'], freq='D')
```

### Step 4: Assign idx4 = TimedeltaIndex(...)

```python
idx4 = TimedeltaIndex(['1 days', '2 days', '3 days'], freq='D')
```

### Step 5: Assign idx5 = TimedeltaIndex(...)

```python
idx5 = TimedeltaIndex(['1 days 00:00:01', '2 days', '3 days'])
```

### Step 6: Assign exp1 = "TimedeltaIndex([], dtype='timedelta64[ns]', freq='D')"

```python
exp1 = "TimedeltaIndex([], dtype='timedelta64[ns]', freq='D')"
```

### Step 7: Assign exp2 = "TimedeltaIndex(['1 days'], dtype='timedelta64[ns]', freq='D')"

```python
exp2 = "TimedeltaIndex(['1 days'], dtype='timedelta64[ns]', freq='D')"
```

### Step 8: Assign exp3 = "TimedeltaIndex(['1 days', '2 days'], dtype='timedelta64[ns]', freq='D')"

```python
exp3 = "TimedeltaIndex(['1 days', '2 days'], dtype='timedelta64[ns]', freq='D')"
```

### Step 9: Assign exp4 = "TimedeltaIndex(['1 days', '2 days', '3 days'], dtype='timedelta64[ns]', freq='D')"

```python
exp4 = "TimedeltaIndex(['1 days', '2 days', '3 days'], dtype='timedelta64[ns]', freq='D')"
```

### Step 10: Assign exp5 = "TimedeltaIndex(['1 days 00:00:01', '2 days 00:00:00', '3 days 00:00:00'], dtype='timedelta64[ns]', freq=None)"

```python
exp5 = "TimedeltaIndex(['1 days 00:00:01', '2 days 00:00:00', '3 days 00:00:00'], dtype='timedelta64[ns]', freq=None)"
```

### Step 11: Assign result = getattr(...)

```python
result = getattr(idx, method)()
```

**Verification:**
```python
assert result == expected
```


## Complete Example

```python
# Setup
# Fixtures: method

# Workflow
idx1 = TimedeltaIndex([], freq='D')
idx2 = TimedeltaIndex(['1 days'], freq='D')
idx3 = TimedeltaIndex(['1 days', '2 days'], freq='D')
idx4 = TimedeltaIndex(['1 days', '2 days', '3 days'], freq='D')
idx5 = TimedeltaIndex(['1 days 00:00:01', '2 days', '3 days'])
exp1 = "TimedeltaIndex([], dtype='timedelta64[ns]', freq='D')"
exp2 = "TimedeltaIndex(['1 days'], dtype='timedelta64[ns]', freq='D')"
exp3 = "TimedeltaIndex(['1 days', '2 days'], dtype='timedelta64[ns]', freq='D')"
exp4 = "TimedeltaIndex(['1 days', '2 days', '3 days'], dtype='timedelta64[ns]', freq='D')"
exp5 = "TimedeltaIndex(['1 days 00:00:01', '2 days 00:00:00', '3 days 00:00:00'], dtype='timedelta64[ns]', freq=None)"
with pd.option_context('display.width', 300):
    for idx, expected in zip([idx1, idx2, idx3, idx4, idx5], [exp1, exp2, exp3, exp4, exp5]):
        result = getattr(idx, method)()
        assert result == expected
```

## Next Steps


---

*Source: test_formats.py:24 | Complexity: Advanced | Last updated: 2026-02-20*