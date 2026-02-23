# How To: Astype Category

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test astype category

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `re`
- `numpy`
- `pytest`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: index
```

## Step-by-Step Guide

### Step 1: Assign result = index.astype(...)

```python
result = index.astype('category')
```

### Step 2: Assign expected = CategoricalIndex(...)

```python
expected = CategoricalIndex(index.values)
```

### Step 3: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 4: Assign result = index.astype(...)

```python
result = index.astype(CategoricalDtype())
```

### Step 5: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```

### Step 6: Assign categories = value

```python
categories = index.dropna().unique().values[:-1]
```

### Step 7: Assign dtype = CategoricalDtype(...)

```python
dtype = CategoricalDtype(categories=categories, ordered=True)
```

### Step 8: Assign result = index.astype(...)

```python
result = index.astype(dtype)
```

### Step 9: Assign expected = CategoricalIndex(...)

```python
expected = CategoricalIndex(index.values, categories=categories, ordered=True)
```

### Step 10: Call tm.assert_index_equal()

```python
tm.assert_index_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: index

# Workflow
result = index.astype('category')
expected = CategoricalIndex(index.values)
tm.assert_index_equal(result, expected)
result = index.astype(CategoricalDtype())
tm.assert_index_equal(result, expected)
categories = index.dropna().unique().values[:-1]
dtype = CategoricalDtype(categories=categories, ordered=True)
result = index.astype(dtype)
expected = CategoricalIndex(index.values, categories=categories, ordered=True)
tm.assert_index_equal(result, expected)
```

## Next Steps


---

*Source: test_astype.py:39 | Complexity: Advanced | Last updated: 2026-02-20*