# How To: Summary

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test summary

## Prerequisites

**Required Modules:**
- `pytest`
- `pandas`
- `pandas`


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

### Step 6: Assign exp1 = 'TimedeltaIndex: 0 entries\nFreq: D'

```python
exp1 = 'TimedeltaIndex: 0 entries\nFreq: D'
```

### Step 7: Assign exp2 = 'TimedeltaIndex: 1 entries, 1 days to 1 days\nFreq: D'

```python
exp2 = 'TimedeltaIndex: 1 entries, 1 days to 1 days\nFreq: D'
```

### Step 8: Assign exp3 = 'TimedeltaIndex: 2 entries, 1 days to 2 days\nFreq: D'

```python
exp3 = 'TimedeltaIndex: 2 entries, 1 days to 2 days\nFreq: D'
```

### Step 9: Assign exp4 = 'TimedeltaIndex: 3 entries, 1 days to 3 days\nFreq: D'

```python
exp4 = 'TimedeltaIndex: 3 entries, 1 days to 3 days\nFreq: D'
```

### Step 10: Assign exp5 = 'TimedeltaIndex: 3 entries, 1 days 00:00:01 to 3 days 00:00:00'

```python
exp5 = 'TimedeltaIndex: 3 entries, 1 days 00:00:01 to 3 days 00:00:00'
```

### Step 11: Assign result = idx._summary(...)

```python
result = idx._summary()
```

**Verification:**
```python
assert result == expected
```


## Complete Example

```python
# Workflow
idx1 = TimedeltaIndex([], freq='D')
idx2 = TimedeltaIndex(['1 days'], freq='D')
idx3 = TimedeltaIndex(['1 days', '2 days'], freq='D')
idx4 = TimedeltaIndex(['1 days', '2 days', '3 days'], freq='D')
idx5 = TimedeltaIndex(['1 days 00:00:01', '2 days', '3 days'])
exp1 = 'TimedeltaIndex: 0 entries\nFreq: D'
exp2 = 'TimedeltaIndex: 1 entries, 1 days to 1 days\nFreq: D'
exp3 = 'TimedeltaIndex: 2 entries, 1 days to 2 days\nFreq: D'
exp4 = 'TimedeltaIndex: 3 entries, 1 days to 3 days\nFreq: D'
exp5 = 'TimedeltaIndex: 3 entries, 1 days 00:00:01 to 3 days 00:00:00'
for idx, expected in zip([idx1, idx2, idx3, idx4, idx5], [exp1, exp2, exp3, exp4, exp5]):
    result = idx._summary()
    assert result == expected
```

## Next Steps


---

*Source: test_formats.py:84 | Complexity: Advanced | Last updated: 2026-02-20*