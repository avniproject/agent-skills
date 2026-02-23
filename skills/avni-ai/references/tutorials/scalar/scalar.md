# How To: Scalar

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test scalar

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas._libs.tslibs`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign N = 30

```python
N = 30
```

**Verification:**
```python
assert val1 == ts.iloc[4]
```

### Step 2: Assign rng = date_range(...)

```python
rng = date_range('1/1/1990', periods=N, freq='53s')
```

**Verification:**
```python
assert val2 == ts.iloc[14]
```

### Step 3: Assign ts = Series(...)

```python
ts = Series(np.arange(N), index=rng, dtype='float')
```

**Verification:**
```python
assert val1 == ts.iloc[4]
```

### Step 4: Assign unknown = value

```python
ts.iloc[5:10] = np.nan
```

**Verification:**
```python
assert result == ts.iloc[3]
```

### Step 5: Assign unknown = value

```python
ts.iloc[15:20] = np.nan
```

**Verification:**
```python
assert np.isnan(ts.asof(d))
```

### Step 6: Assign val1 = ts.asof(...)

```python
val1 = ts.asof(ts.index[7])
```

### Step 7: Assign val2 = ts.asof(...)

```python
val2 = ts.asof(ts.index[19])
```

**Verification:**
```python
assert val1 == ts.iloc[4]
```

### Step 8: Assign val1 = ts.asof(...)

```python
val1 = ts.asof(str(ts.index[7]))
```

**Verification:**
```python
assert val1 == ts.iloc[4]
```

### Step 9: Assign result = ts.asof(...)

```python
result = ts.asof(ts.index[3])
```

**Verification:**
```python
assert result == ts.iloc[3]
```

### Step 10: Assign d = value

```python
d = ts.index[0] - offsets.BDay()
```

**Verification:**
```python
assert np.isnan(ts.asof(d))
```


## Complete Example

```python
# Workflow
N = 30
rng = date_range('1/1/1990', periods=N, freq='53s')
ts = Series(np.arange(N), index=rng, dtype='float')
ts.iloc[5:10] = np.nan
ts.iloc[15:20] = np.nan
val1 = ts.asof(ts.index[7])
val2 = ts.asof(ts.index[19])
assert val1 == ts.iloc[4]
assert val2 == ts.iloc[14]
val1 = ts.asof(str(ts.index[7]))
assert val1 == ts.iloc[4]
result = ts.asof(ts.index[3])
assert result == ts.iloc[3]
d = ts.index[0] - offsets.BDay()
assert np.isnan(ts.asof(d))
```

## Next Steps


---

*Source: test_asof.py:63 | Complexity: Advanced | Last updated: 2026-02-20*