# How To: Preserve Dtypes

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test preserve dtypes

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.compat`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: op
```

## Step-by-Step Guide

### Step 1: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame({'A': ['a', 'b', 'b'], 'B': [1, None, 3], 'C': pd.array([0.1, None, 3.0], dtype='Float64')})
```

**Verification:**
```python
assert isinstance(result, np.float64)
```

### Step 2: Assign result = getattr(...)

```python
result = getattr(df.C, op)()
```

**Verification:**
```python
assert isinstance(result, np.float64)
```

### Step 3: Assign result = getattr(...)

```python
result = getattr(df.groupby('A'), op)()
```

### Step 4: Assign expected = pd.DataFrame(...)

```python
expected = pd.DataFrame({'B': np.array([1.0, 3.0]), 'C': pd.array([0.1, 3], dtype='Float64')}, index=pd.Index(['a', 'b'], name='A'))
```

### Step 5: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: op

# Workflow
df = pd.DataFrame({'A': ['a', 'b', 'b'], 'B': [1, None, 3], 'C': pd.array([0.1, None, 3.0], dtype='Float64')})
result = getattr(df.C, op)()
assert isinstance(result, np.float64)
result = getattr(df.groupby('A'), op)()
expected = pd.DataFrame({'B': np.array([1.0, 3.0]), 'C': pd.array([0.1, 3], dtype='Float64')}, index=pd.Index(['a', 'b'], name='A'))
tm.assert_frame_equal(result, expected)
```

## Next Steps


---

*Source: test_function.py:151 | Complexity: Intermediate | Last updated: 2026-02-20*