# How To: Struct Accessor Field

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test struct accessor field

## Prerequisites

**Required Modules:**
- `re`
- `pytest`
- `pandas.compat.pyarrow`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign index = Index(...)

```python
index = Index([-100, 42, 123])
```

### Step 2: Assign ser = Series(...)

```python
ser = Series([{'rice': 1.0, 'maize': -1, 'wheat': 'a'}, {'rice': 2.0, 'maize': 0, 'wheat': 'b'}, {'rice': 3.0, 'maize': 1, 'wheat': 'c'}], dtype=ArrowDtype(pa.struct([('rice', pa.float64()), ('maize', pa.int64()), ('wheat', pa.string())])), index=index)
```

### Step 3: Assign by_name = ser.struct.field(...)

```python
by_name = ser.struct.field('maize')
```

### Step 4: Assign by_name_expected = Series(...)

```python
by_name_expected = Series([-1, 0, 1], dtype=ArrowDtype(pa.int64()), index=index, name='maize')
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(by_name, by_name_expected)
```

### Step 6: Assign by_index = ser.struct.field(...)

```python
by_index = ser.struct.field(2)
```

### Step 7: Assign by_index_expected = Series(...)

```python
by_index_expected = Series(['a', 'b', 'c'], dtype=ArrowDtype(pa.string()), index=index, name='wheat')
```

### Step 8: Call tm.assert_series_equal()

```python
tm.assert_series_equal(by_index, by_index_expected)
```


## Complete Example

```python
# Workflow
index = Index([-100, 42, 123])
ser = Series([{'rice': 1.0, 'maize': -1, 'wheat': 'a'}, {'rice': 2.0, 'maize': 0, 'wheat': 'b'}, {'rice': 3.0, 'maize': 1, 'wheat': 'c'}], dtype=ArrowDtype(pa.struct([('rice', pa.float64()), ('maize', pa.int64()), ('wheat', pa.string())])), index=index)
by_name = ser.struct.field('maize')
by_name_expected = Series([-1, 0, 1], dtype=ArrowDtype(pa.int64()), index=index, name='maize')
tm.assert_series_equal(by_name, by_name_expected)
by_index = ser.struct.field(2)
by_index_expected = Series(['a', 'b', 'c'], dtype=ArrowDtype(pa.string()), index=index, name='wheat')
tm.assert_series_equal(by_index, by_index_expected)
```

## Next Steps


---

*Source: test_struct_accessor.py:63 | Complexity: Advanced | Last updated: 2026-02-20*