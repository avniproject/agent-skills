# How To: Online Vs Non Online Mean

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test online vs non online mean

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.compat`
- `pandas`
- `pandas._testing`
- `pandas.util.version`

**Setup Required:**
```python
# Fixtures: obj, nogil, parallel, nopython, adjust, ignore_na
```

## Step-by-Step Guide

### Step 1: Assign expected = obj.ewm.mean(...)

```python
expected = obj.ewm(0.5, adjust=adjust, ignore_na=ignore_na).mean()
```

### Step 2: Assign engine_kwargs = value

```python
engine_kwargs = {'nogil': nogil, 'parallel': parallel, 'nopython': nopython}
```

### Step 3: Assign online_ewm = obj.head.ewm.online(...)

```python
online_ewm = obj.head(2).ewm(0.5, adjust=adjust, ignore_na=ignore_na).online(engine_kwargs=engine_kwargs)
```

### Step 4: Assign result = online_ewm.mean(...)

```python
result = online_ewm.mean()
```

### Step 5: Call tm.assert_equal()

```python
tm.assert_equal(result, expected.head(2))
```

### Step 6: Assign result = online_ewm.mean(...)

```python
result = online_ewm.mean(update=obj.tail(3))
```

### Step 7: Call tm.assert_equal()

```python
tm.assert_equal(result, expected.tail(3))
```

### Step 8: Call online_ewm.reset()

```python
online_ewm.reset()
```


## Complete Example

```python
# Setup
# Fixtures: obj, nogil, parallel, nopython, adjust, ignore_na

# Workflow
expected = obj.ewm(0.5, adjust=adjust, ignore_na=ignore_na).mean()
engine_kwargs = {'nogil': nogil, 'parallel': parallel, 'nopython': nopython}
online_ewm = obj.head(2).ewm(0.5, adjust=adjust, ignore_na=ignore_na).online(engine_kwargs=engine_kwargs)
for _ in range(2):
    result = online_ewm.mean()
    tm.assert_equal(result, expected.head(2))
    result = online_ewm.mean(update=obj.tail(3))
    tm.assert_equal(result, expected.tail(3))
    online_ewm.reset()
```

## Next Steps


---

*Source: test_online.py:40 | Complexity: Advanced | Last updated: 2026-02-20*