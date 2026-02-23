# How To: Clip With Na Args

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Should process np.nan argument as None

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: float_frame
```

## Step-by-Step Guide

### Step 1: 'Should process np.nan argument as None'

```python
'Should process np.nan argument as None'
```

### Step 2: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(float_frame.clip(np.nan), float_frame)
```

### Step 3: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(float_frame.clip(upper=np.nan, lower=np.nan), float_frame)
```

### Step 4: Assign df = DataFrame(...)

```python
df = DataFrame({'col_0': [1, 2, 3], 'col_1': [4, 5, 6], 'col_2': [7, 8, 9]})
```

### Step 5: Assign msg = "Downcasting behavior in Series and DataFrame methods 'where'"

```python
msg = "Downcasting behavior in Series and DataFrame methods 'where'"
```

### Step 6: Assign expected = DataFrame(...)

```python
expected = DataFrame({'col_0': [4, 5, 3], 'col_1': [4, 5, 6], 'col_2': [7, 8, 9]})
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 8: Assign result = df.clip(...)

```python
result = df.clip(lower=[4, 5, np.nan], axis=1)
```

### Step 9: Assign expected = DataFrame(...)

```python
expected = DataFrame({'col_0': [4, 4, 4], 'col_1': [5, 5, 6], 'col_2': [7, 8, 9]})
```

### Step 10: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 11: Assign data = value

```python
data = {'col_0': [9, -3, 0, -1, 5], 'col_1': [-2, -7, 6, 8, -5]}
```

### Step 12: Assign df = DataFrame(...)

```python
df = DataFrame(data)
```

### Step 13: Assign t = Series(...)

```python
t = Series([2, -4, np.nan, 6, 3])
```

### Step 14: Assign expected = DataFrame(...)

```python
expected = DataFrame({'col_0': [9, -3, 0, 6, 5], 'col_1': [2, -4, 6, 8, 3]})
```

### Step 15: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 16: Assign result = df.clip(...)

```python
result = df.clip(lower=[4, 5, np.nan], axis=0)
```

### Step 17: Assign result = df.clip(...)

```python
result = df.clip(lower=t, axis=0)
```


## Complete Example

```python
# Setup
# Fixtures: float_frame

# Workflow
'Should process np.nan argument as None'
tm.assert_frame_equal(float_frame.clip(np.nan), float_frame)
tm.assert_frame_equal(float_frame.clip(upper=np.nan, lower=np.nan), float_frame)
df = DataFrame({'col_0': [1, 2, 3], 'col_1': [4, 5, 6], 'col_2': [7, 8, 9]})
msg = "Downcasting behavior in Series and DataFrame methods 'where'"
with tm.assert_produces_warning(FutureWarning, match=msg):
    result = df.clip(lower=[4, 5, np.nan], axis=0)
expected = DataFrame({'col_0': [4, 5, 3], 'col_1': [4, 5, 6], 'col_2': [7, 8, 9]})
tm.assert_frame_equal(result, expected)
result = df.clip(lower=[4, 5, np.nan], axis=1)
expected = DataFrame({'col_0': [4, 4, 4], 'col_1': [5, 5, 6], 'col_2': [7, 8, 9]})
tm.assert_frame_equal(result, expected)
data = {'col_0': [9, -3, 0, -1, 5], 'col_1': [-2, -7, 6, 8, -5]}
df = DataFrame(data)
t = Series([2, -4, np.nan, 6, 3])
with tm.assert_produces_warning(FutureWarning, match=msg):
    result = df.clip(lower=t, axis=0)
expected = DataFrame({'col_0': [9, -3, 0, 6, 5], 'col_1': [2, -4, 6, 8, 3]})
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_clip.py:149 | Complexity: Advanced | Last updated: 2026-02-20*