# How To: Any

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test any

## Prerequisites

**Required Modules:**
- `builtins`
- `datetime`
- `string`
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas.core.dtypes.common`
- `pandas.core.dtypes.missing`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.tests.groupby`
- `pandas.util`
- `scipy.stats`


## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame([[1, 2, 'foo'], [1, np.nan, 'bar'], [3, np.nan, 'baz']], columns=['A', 'B', 'C'])
```

### Step 2: Assign expected = DataFrame(...)

```python
expected = DataFrame([[True, True], [False, True]], columns=['B', 'C'], index=[1, 3])
```

### Step 3: Assign expected.index.name = 'A'

```python
expected.index.name = 'A'
```

### Step 4: Assign result = df.groupby.any(...)

```python
result = df.groupby('A').any()
```

### Step 5: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Workflow
df = DataFrame([[1, 2, 'foo'], [1, np.nan, 'bar'], [3, np.nan, 'baz']], columns=['A', 'B', 'C'])
expected = DataFrame([[True, True], [False, True]], columns=['B', 'C'], index=[1, 3])
expected.index.name = 'A'
result = df.groupby('A').any()
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_reductions.py:63 | Complexity: Intermediate | Last updated: 2026-02-20*