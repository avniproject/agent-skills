# How To: Getitem Partial

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test getitem partial

## Prerequisites

**Required Modules:**
- `datetime`
- `re`
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas.errors`
- `pandas`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign rng = period_range(...)

```python
rng = period_range('2007-01', periods=50, freq='M')
```

**Verification:**
```python
assert (result.index.year == 2008).all()
```

### Step 2: Assign ts = Series(...)

```python
ts = Series(np.random.default_rng(2).standard_normal(len(rng)), rng)
```

**Verification:**
```python
assert len(result) == 24
```

### Step 3: Assign result = value

```python
result = ts['2008']
```

**Verification:**
```python
assert len(result) == 24
```

### Step 4: Assign result = value

```python
result = ts['2008':'2009']
```

**Verification:**
```python
assert len(result) == 24
```

### Step 5: Assign result = value

```python
result = ts['2008-1':'2009-12']
```

**Verification:**
```python
assert len(result) == 36
```

### Step 6: Assign result = value

```python
result = ts['2008Q1':'2009Q4']
```

**Verification:**
```python
assert len(result) == 50 - 24
```

### Step 7: Assign result = value

```python
result = ts[:'2009']
```

**Verification:**
```python
assert len(result) == 36
```

### Step 8: Assign result = value

```python
result = ts['2009':]
```

**Verification:**
```python
assert len(result) == 50 - 24
```

### Step 9: Assign exp = result

```python
exp = result
```

### Step 10: Assign result = value

```python
result = ts[24:]
```

### Step 11: Call tm.assert_series_equal()

```python
tm.assert_series_equal(exp, result)
```

### Step 12: Assign ts = pd.concat(...)

```python
ts = pd.concat([ts[10:], ts[10:]])
```

### Step 13: Assign msg = "left slice bound for non-unique label: '2008'"

```python
msg = "left slice bound for non-unique label: '2008'"
```

### Step 14: ts['2006']

```python
ts['2006']
```

### Step 15: ts[slice('2008', '2009')]

```python
ts[slice('2008', '2009')]
```


## Complete Example

```python
# Workflow
rng = period_range('2007-01', periods=50, freq='M')
ts = Series(np.random.default_rng(2).standard_normal(len(rng)), rng)
with pytest.raises(KeyError, match="^'2006'$"):
    ts['2006']
result = ts['2008']
assert (result.index.year == 2008).all()
result = ts['2008':'2009']
assert len(result) == 24
result = ts['2008-1':'2009-12']
assert len(result) == 24
result = ts['2008Q1':'2009Q4']
assert len(result) == 24
result = ts[:'2009']
assert len(result) == 36
result = ts['2009':]
assert len(result) == 50 - 24
exp = result
result = ts[24:]
tm.assert_series_equal(exp, result)
ts = pd.concat([ts[10:], ts[10:]])
msg = "left slice bound for non-unique label: '2008'"
with pytest.raises(KeyError, match=msg):
    ts[slice('2008', '2009')]
```

## Next Steps


---

*Source: test_indexing.py:111 | Complexity: Advanced | Last updated: 2026-02-20*