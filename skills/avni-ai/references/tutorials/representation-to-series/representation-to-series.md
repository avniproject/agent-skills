# How To: Representation To Series

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test representation to series

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

### Step 6: Assign exp1 = 'Series([], dtype: timedelta64[ns])'

```python
exp1 = 'Series([], dtype: timedelta64[ns])'
```

### Step 7: Assign exp2 = '0   1 days\ndtype: timedelta64[ns]'

```python
exp2 = '0   1 days\ndtype: timedelta64[ns]'
```

### Step 8: Assign exp3 = '0   1 days\n1   2 days\ndtype: timedelta64[ns]'

```python
exp3 = '0   1 days\n1   2 days\ndtype: timedelta64[ns]'
```

### Step 9: Assign exp4 = '0   1 days\n1   2 days\n2   3 days\ndtype: timedelta64[ns]'

```python
exp4 = '0   1 days\n1   2 days\n2   3 days\ndtype: timedelta64[ns]'
```

### Step 10: Assign exp5 = '0   1 days 00:00:01\n1   2 days 00:00:00\n2   3 days 00:00:00\ndtype: timedelta64[ns]'

```python
exp5 = '0   1 days 00:00:01\n1   2 days 00:00:00\n2   3 days 00:00:00\ndtype: timedelta64[ns]'
```

### Step 11: Assign result = repr(...)

```python
result = repr(Series(idx))
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
exp1 = 'Series([], dtype: timedelta64[ns])'
exp2 = '0   1 days\ndtype: timedelta64[ns]'
exp3 = '0   1 days\n1   2 days\ndtype: timedelta64[ns]'
exp4 = '0   1 days\n1   2 days\n2   3 days\ndtype: timedelta64[ns]'
exp5 = '0   1 days 00:00:01\n1   2 days 00:00:00\n2   3 days 00:00:00\ndtype: timedelta64[ns]'
with pd.option_context('display.width', 300):
    for idx, expected in zip([idx1, idx2, idx3, idx4, idx5], [exp1, exp2, exp3, exp4, exp5]):
        result = repr(Series(idx))
        assert result == expected
```

## Next Steps


---

*Source: test_formats.py:55 | Complexity: Advanced | Last updated: 2026-02-20*