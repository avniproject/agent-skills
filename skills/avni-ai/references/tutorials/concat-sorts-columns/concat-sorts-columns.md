# How To: Concat Sorts Columns

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test concat sorts columns

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: sort
```

## Step-by-Step Guide

### Step 1: Assign df1 = DataFrame(...)

```python
df1 = DataFrame({'a': [1, 2], 'b': [1, 2]}, columns=['b', 'a'])
```

### Step 2: Assign df2 = DataFrame(...)

```python
df2 = DataFrame({'a': [3, 4], 'c': [5, 6]})
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame({'a': [1, 2, 3, 4], 'b': [1, 2, None, None], 'c': [None, None, 5, 6]}, columns=['a', 'b', 'c'])
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 5: Assign expected = value

```python
expected = expected[['b', 'a', 'c']]
```

### Step 6: Assign result = pd.concat(...)

```python
result = pd.concat([df1, df2], ignore_index=True, sort=sort)
```


## Complete Example

```python
# Setup
# Fixtures: sort

# Workflow
df1 = DataFrame({'a': [1, 2], 'b': [1, 2]}, columns=['b', 'a'])
df2 = DataFrame({'a': [3, 4], 'c': [5, 6]})
expected = DataFrame({'a': [1, 2, 3, 4], 'b': [1, 2, None, None], 'c': [None, None, 5, 6]}, columns=['a', 'b', 'c'])
if sort is False:
    expected = expected[['b', 'a', 'c']]
with tm.assert_produces_warning(None):
    result = pd.concat([df1, df2], ignore_index=True, sort=sort)
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_sort.py:10 | Complexity: Intermediate | Last updated: 2026-02-20*