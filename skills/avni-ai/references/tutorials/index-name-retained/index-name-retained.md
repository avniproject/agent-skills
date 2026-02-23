# How To: Index Name Retained

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test index name retained

## Prerequisites

**Required Modules:**
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign result = pd.DataFrame(...)

```python
result = pd.DataFrame({'x': [1, 2, 6], 'y': [2, 2, 8], 'z': [-5, 0, 5]})
```

### Step 2: Assign result = result.set_index(...)

```python
result = result.set_index('z')
```

### Step 3: Assign unknown = value

```python
result.loc[10] = [9, 10]
```

### Step 4: Assign df_expected = pd.DataFrame(...)

```python
df_expected = pd.DataFrame({'x': [1, 2, 6, 9], 'y': [2, 2, 8, 10], 'z': [-5, 0, 5, 10]})
```

### Step 5: Assign df_expected = df_expected.set_index(...)

```python
df_expected = df_expected.set_index('z')
```

### Step 6: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, df_expected)
```


## Complete Example

```python
# Workflow
result = pd.DataFrame({'x': [1, 2, 6], 'y': [2, 2, 8], 'z': [-5, 0, 5]})
result = result.set_index('z')
result.loc[10] = [9, 10]
df_expected = pd.DataFrame({'x': [1, 2, 6, 9], 'y': [2, 2, 8, 10], 'z': [-5, 0, 5, 10]})
df_expected = df_expected.set_index('z')
tm.assert_frame_equal(result, df_expected)
```

## Next Steps


---

*Source: test_names.py:17 | Complexity: Intermediate | Last updated: 2026-02-20*