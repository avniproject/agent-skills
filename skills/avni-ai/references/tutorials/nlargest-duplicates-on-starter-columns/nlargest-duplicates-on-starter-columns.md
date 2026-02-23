# How To: Nlargest Duplicates On Starter Columns

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test nlargest duplicates on starter columns

## Prerequisites

**Required Modules:**
- `string`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`
- `pandas.util.version`


## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'a': [2, 2, 2, 1, 1, 1], 'b': [1, 2, 3, 3, 2, 1]})
```

### Step 2: Assign result = df.nlargest(...)

```python
result = df.nlargest(4, columns=['a', 'b'])
```

### Step 3: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'a': [2, 2, 2, 1], 'b': [3, 2, 1, 3]}, index=[2, 1, 0, 3])
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 5: Assign result = df.nsmallest(...)

```python
result = df.nsmallest(4, columns=['a', 'b'])
```

### Step 6: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'a': [1, 1, 1, 2], 'b': [1, 2, 3, 1]}, index=[5, 4, 3, 0])
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Workflow
df = pd.DataFrame({'a': [2, 2, 2, 1, 1, 1], 'b': [1, 2, 3, 3, 2, 1]})
result = df.nlargest(4, columns=['a', 'b'])
expected = pd.DataFrame({'a': [2, 2, 2, 1], 'b': [3, 2, 1, 3]}, index=[2, 1, 0, 3])
tm.assert_frame_equal(result, expected)
result = df.nsmallest(4, columns=['a', 'b'])
expected = pd.DataFrame({'a': [1, 1, 1, 2], 'b': [1, 2, 3, 1]}, index=[5, 4, 3, 0])
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_nlargest.py:125 | Complexity: Intermediate | Last updated: 2026-02-20*