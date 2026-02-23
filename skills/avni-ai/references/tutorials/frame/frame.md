# How To: Frame

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test frame

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `__future__`
- `typing`
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: data, all_arithmetic_operators
```

## Step-by-Step Guide

### Step 1: Assign unknown = data

```python
data, scalar = data
```

### Step 2: Assign op = tm.get_op_from_name(...)

```python
op = tm.get_op_from_name(all_arithmetic_operators)
```

### Step 3: Call check_skip()

```python
check_skip(data, all_arithmetic_operators)
```

### Step 4: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'A': data})
```

### Step 5: Assign result = op(...)

```python
result = op(df, scalar)
```

### Step 6: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'A': op(data, scalar)})
```

### Step 7: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```

### Step 8: Assign msg = "operator '.*' not implemented for bool dtypes"

```python
msg = "operator '.*' not implemented for bool dtypes"
```

### Step 9: Call op()

```python
op(df, scalar)
```

### Step 10: Call op()

```python
op(data, scalar)
```


## Complete Example

```python
# Setup
# Fixtures: data, all_arithmetic_operators

# Workflow
data, scalar = data
op = tm.get_op_from_name(all_arithmetic_operators)
check_skip(data, all_arithmetic_operators)
df = pd.DataFrame({'A': data})
if is_bool_not_implemented(data, all_arithmetic_operators):
    msg = "operator '.*' not implemented for bool dtypes"
    with pytest.raises(NotImplementedError, match=msg):
        op(df, scalar)
    with pytest.raises(NotImplementedError, match=msg):
        op(data, scalar)
    return
result = op(df, scalar)
expected = pd.DataFrame({'A': op(data, scalar)})
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_arithmetic.py:124 | Complexity: Advanced | Last updated: 2026-02-20*