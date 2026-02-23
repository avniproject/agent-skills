# How To: Getitem Multiple

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test getitem multiple

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.api.indexers`
- `pandas.core.groupby.groupby`

**Setup Required:**
```python
# Fixtures: roll_frame
```

## Step-by-Step Guide

### Step 1: Assign g = roll_frame.groupby(...)

```python
g = roll_frame.groupby('A')
```

### Step 2: Assign r = g.rolling(...)

```python
r = g.rolling(2, min_periods=0)
```

### Step 3: Assign g_mutated = get_groupby(...)

```python
g_mutated = get_groupby(roll_frame, by='A')
```

### Step 4: Assign expected = g_mutated.B.apply(...)

```python
expected = g_mutated.B.apply(lambda x: x.rolling(2, min_periods=0).count())
```

### Step 5: Assign result = r.B.count(...)

```python
result = r.B.count()
```

### Step 6: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 7: Assign result = r.B.count(...)

```python
result = r.B.count()
```

### Step 8: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: roll_frame

# Workflow
g = roll_frame.groupby('A')
r = g.rolling(2, min_periods=0)
g_mutated = get_groupby(roll_frame, by='A')
expected = g_mutated.B.apply(lambda x: x.rolling(2, min_periods=0).count())
result = r.B.count()
tm.assert_series_equal(result, expected)
result = r.B.count()
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_groupby.py:73 | Complexity: Advanced | Last updated: 2026-02-20*