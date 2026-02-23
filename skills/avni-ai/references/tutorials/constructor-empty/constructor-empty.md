# How To: Constructor Empty

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test constructor empty

## Prerequisites

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `pandas._config`
- `pandas.compat`
- `pandas.core.dtypes.common`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign c = Categorical(...)

```python
c = Categorical([])
```

### Step 2: Assign expected = Index(...)

```python
expected = Index([])
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(c.categories, expected)
```

### Step 4: Assign c = Categorical(...)

```python
c = Categorical([], categories=[1, 2, 3])
```

### Step 5: Assign expected = Index(...)

```python
expected = Index([1, 2, 3], dtype=np.int64)
```

### Step 6: Call tm.assert_index_equal()

```python
tm.assert_index_equal(c.categories, expected)
```


## Complete Example

```python
# Workflow
c = Categorical([])
expected = Index([])
tm.assert_index_equal(c.categories, expected)
c = Categorical([], categories=[1, 2, 3])
expected = Index([1, 2, 3], dtype=np.int64)
tm.assert_index_equal(c.categories, expected)
```

## Next Steps


---

*Source: test_constructors.py:80 | Complexity: Intermediate | Last updated: 2026-02-20*