# How To: Map With Dict Or Series

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test map with dict or series

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
# Fixtures: na_action
```

## Step-by-Step Guide

### Step 1: Assign orig_values = value

```python
orig_values = ['a', 'B', 1, 'a']
```

### Step 2: Assign new_values = value

```python
new_values = ['one', 2, 3.0, 'one']
```

### Step 3: Assign cat = Categorical(...)

```python
cat = Categorical(orig_values)
```

### Step 4: Assign mapper = Series(...)

```python
mapper = Series(new_values[:-1], index=orig_values[:-1])
```

### Step 5: Assign result = cat.map(...)

```python
result = cat.map(mapper, na_action=na_action)
```

### Step 6: Assign expected = Categorical(...)

```python
expected = Categorical(new_values, categories=[3.0, 2, 'one'])
```

### Step 7: Call tm.assert_categorical_equal()

```python
tm.assert_categorical_equal(result, expected)
```

### Step 8: Assign mapper = dict(...)

```python
mapper = dict(zip(orig_values[:-1], new_values[:-1]))
```

### Step 9: Assign result = cat.map(...)

```python
result = cat.map(mapper, na_action=na_action)
```

### Step 10: Call tm.assert_categorical_equal()

```python
tm.assert_categorical_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: na_action

# Workflow
orig_values = ['a', 'B', 1, 'a']
new_values = ['one', 2, 3.0, 'one']
cat = Categorical(orig_values)
mapper = Series(new_values[:-1], index=orig_values[:-1])
result = cat.map(mapper, na_action=na_action)
expected = Categorical(new_values, categories=[3.0, 2, 'one'])
tm.assert_categorical_equal(result, expected)
mapper = dict(zip(orig_values[:-1], new_values[:-1]))
result = cat.map(mapper, na_action=na_action)
tm.assert_categorical_equal(result, expected)
```

## Next Steps


---

*Source: test_map.py:126 | Complexity: Advanced | Last updated: 2026-02-20*