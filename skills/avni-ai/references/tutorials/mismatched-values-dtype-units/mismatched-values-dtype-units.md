# How To: Mismatched Values Dtype Units

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test mismatched values dtype units

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`


## Step-by-Step Guide

### Step 1: Assign arr = np.array(...)

```python
arr = np.array([1, 2, 3], dtype='M8[s]')
```

### Step 2: Assign dtype = np.dtype(...)

```python
dtype = np.dtype('M8[ns]')
```

### Step 3: Assign msg = 'Values resolution does not match dtype.'

```python
msg = 'Values resolution does not match dtype.'
```

### Step 4: Assign depr_msg = 'DatetimeArray.__init__ is deprecated'

```python
depr_msg = 'DatetimeArray.__init__ is deprecated'
```

### Step 5: Assign dtype2 = DatetimeTZDtype(...)

```python
dtype2 = DatetimeTZDtype(tz='UTC', unit='ns')
```

### Step 6: Call DatetimeArray()

```python
DatetimeArray(arr, dtype=dtype)
```

### Step 7: Call DatetimeArray()

```python
DatetimeArray(arr, dtype=dtype2)
```


## Complete Example

```python
# Workflow
arr = np.array([1, 2, 3], dtype='M8[s]')
dtype = np.dtype('M8[ns]')
msg = 'Values resolution does not match dtype.'
depr_msg = 'DatetimeArray.__init__ is deprecated'
with tm.assert_produces_warning(FutureWarning, match=depr_msg):
    with pytest.raises(ValueError, match=msg):
        DatetimeArray(arr, dtype=dtype)
dtype2 = DatetimeTZDtype(tz='UTC', unit='ns')
with tm.assert_produces_warning(FutureWarning, match=depr_msg):
    with pytest.raises(ValueError, match=msg):
        DatetimeArray(arr, dtype=dtype2)
```

## Next Steps


---

*Source: test_constructors.py:139 | Complexity: Intermediate | Last updated: 2026-02-20*