# How To: Round Numpy

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test round numpy

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign df = DataFrame(...)

```python
df = DataFrame([[1.53, 1.36], [0.06, 7.01]])
```

### Step 2: Assign out = np.round(...)

```python
out = np.round(df, decimals=0)
```

### Step 3: Assign expected = DataFrame(...)

```python
expected = DataFrame([[2.0, 1.0], [0.0, 7.0]])
```

### Step 4: Call tm.assert_frame_equal()

```python
tm.assert_frame_equal(out, expected)
```

### Step 5: Assign msg = "the 'out' parameter is not supported"

```python
msg = "the 'out' parameter is not supported"
```

### Step 6: Call np.round()

```python
np.round(df, decimals=0, out=df)
```


## Complete Example

```python
# Workflow
df = DataFrame([[1.53, 1.36], [0.06, 7.01]])
out = np.round(df, decimals=0)
expected = DataFrame([[2.0, 1.0], [0.0, 7.0]])
tm.assert_frame_equal(out, expected)
msg = "the 'out' parameter is not supported"
with pytest.raises(ValueError, match=msg):
    np.round(df, decimals=0, out=df)
```

## Next Steps


---

*Source: test_round.py:127 | Complexity: Intermediate | Last updated: 2026-02-20*