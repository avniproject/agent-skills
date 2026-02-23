# How To: Doc Examples

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test doc examples

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame([['a', 1], ['a', 2], ['a', 3], ['b', 4], ['b', 5]], columns=['A', 'B'])
```

### Step 2: Assign grouped = df.groupby(...)

```python
grouped = df.groupby('A', as_index=False)
```

### Step 3: Assign result = value

```python
result = grouped._positional_selector[1:2]
```

### Step 4: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 2], ['b', 5]], columns=['A', 'B'], index=[1, 4])
```

### Step 5: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 6: Assign result = value

```python
result = grouped._positional_selector[1, -1]
```

### Step 7: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame([['a', 2], ['a', 3], ['b', 5]], columns=['A', 'B'], index=[1, 2, 4])
```

### Step 8: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Workflow
df = pd.DataFrame([['a', 1], ['a', 2], ['a', 3], ['b', 4], ['b', 5]], columns=['A', 'B'])
grouped = df.groupby('A', as_index=False)
result = grouped._positional_selector[1:2]
expected = pd.DataFrame([['a', 2], ['b', 5]], columns=['A', 'B'], index=[1, 4])
tm.assert_frame_equal(result, expected)
result = grouped._positional_selector[1, -1]
expected = pd.DataFrame([['a', 2], ['a', 3], ['b', 5]], columns=['A', 'B'], index=[1, 2, 4])
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_indexing.py:100 | Complexity: Advanced | Last updated: 2026-02-20*