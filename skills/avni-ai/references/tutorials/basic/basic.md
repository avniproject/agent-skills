# How To: Basic

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test basic

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign N = 50

```python
N = 50
```

**Verification:**
```python
assert notna(result).all()
```

### Step 2: Assign rng = date_range(...)

```python
rng = date_range('1/1/1990', periods=N, freq='53s')
```

**Verification:**
```python
assert notna(result).all()
```

### Step 3: Assign ts = Series(...)

```python
ts = Series(np.random.default_rng(2).standard_normal(N), index=rng)
```

**Verification:**
```python
assert (rs == ts[lb]).all()
```

### Step 4: Assign unknown = value

```python
ts.iloc[15:30] = np.nan
```

**Verification:**
```python
assert ts[ub] == val
```

### Step 5: Assign dates = date_range(...)

```python
dates = date_range('1/1/1990', periods=N * 3, freq='25s')
```

### Step 6: Assign result = ts.asof(...)

```python
result = ts.asof(dates)
```

**Verification:**
```python
assert notna(result).all()
```

### Step 7: Assign lb = value

```python
lb = ts.index[14]
```

### Step 8: Assign ub = value

```python
ub = ts.index[30]
```

### Step 9: Assign result = ts.asof(...)

```python
result = ts.asof(list(dates))
```

**Verification:**
```python
assert notna(result).all()
```

### Step 10: Assign lb = value

```python
lb = ts.index[14]
```

### Step 11: Assign ub = value

```python
ub = ts.index[30]
```

### Step 12: Assign mask = value

```python
mask = (result.index >= lb) & (result.index < ub)
```

### Step 13: Assign rs = value

```python
rs = result[mask]
```

**Verification:**
```python
assert (rs == ts[lb]).all()
```

### Step 14: Assign val = value

```python
val = result[result.index[result.index >= ub][0]]
```

**Verification:**
```python
assert ts[ub] == val
```


## Complete Example

```python
# Workflow
N = 50
rng = date_range('1/1/1990', periods=N, freq='53s')
ts = Series(np.random.default_rng(2).standard_normal(N), index=rng)
ts.iloc[15:30] = np.nan
dates = date_range('1/1/1990', periods=N * 3, freq='25s')
result = ts.asof(dates)
assert notna(result).all()
lb = ts.index[14]
ub = ts.index[30]
result = ts.asof(list(dates))
assert notna(result).all()
lb = ts.index[14]
ub = ts.index[30]
mask = (result.index >= lb) & (result.index < ub)
rs = result[mask]
assert (rs == ts[lb]).all()
val = result[result.index[result.index >= ub][0]]
assert ts[ub] == val
```

## Next Steps


---

*Source: test_asof.py:38 | Complexity: Advanced | Last updated: 2026-02-20*