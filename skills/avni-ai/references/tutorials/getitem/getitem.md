# How To: Getitem

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test getitem

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

### Step 2: Assign g_mutated = get_groupby(...)

```python
g_mutated = get_groupby(roll_frame, by='A')
```

### Step 3: Assign expected = g_mutated.B.apply(...)

```python
expected = g_mutated.B.apply(lambda x: x.rolling(2).mean())
```

### Step 4: Assign result = value

```python
result = g.rolling(2).mean().B
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 6: Assign result = g.rolling.B.mean(...)

```python
result = g.rolling(2).B.mean()
```

### Step 7: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 8: Assign result = g.B.rolling.mean(...)

```python
result = g.B.rolling(2).mean()
```

### Step 9: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 10: Assign result = roll_frame.B.groupby.rolling.mean(...)

```python
result = roll_frame.B.groupby(roll_frame.A).rolling(2).mean()
```

### Step 11: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: roll_frame

# Workflow
g = roll_frame.groupby('A')
g_mutated = get_groupby(roll_frame, by='A')
expected = g_mutated.B.apply(lambda x: x.rolling(2).mean())
result = g.rolling(2).mean().B
tm.assert_series_equal(result, expected)
result = g.rolling(2).B.mean()
tm.assert_series_equal(result, expected)
result = g.B.rolling(2).mean()
tm.assert_series_equal(result, expected)
result = roll_frame.B.groupby(roll_frame.A).rolling(2).mean()
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_groupby.py:55 | Complexity: Advanced | Last updated: 2026-02-20*