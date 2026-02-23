# How To: Quantile

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test quantile

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas`
- `pandas._testing`
- `pandas.core.indexes.datetimes`

**Setup Required:**
```python
# Fixtures: datetime_series
```

## Step-by-Step Guide

### Step 1: Assign q = datetime_series.quantile(...)

```python
q = datetime_series.quantile(0.1)
```

**Verification:**
```python
assert q == np.percentile(datetime_series.dropna(), 10)
```

### Step 2: Assign q = datetime_series.quantile(...)

```python
q = datetime_series.quantile(0.9)
```

**Verification:**
```python
assert q == np.percentile(datetime_series.dropna(), 90)
```

### Step 3: Assign q = Series.quantile(...)

```python
q = Series(datetime_series, dtype=object).quantile(0.9)
```

**Verification:**
```python
assert q == np.percentile(datetime_series.dropna(), 90)
```

### Step 4: Assign dts = datetime_series.index.to_series(...)

```python
dts = datetime_series.index.to_series()
```

**Verification:**
```python
assert q == Timestamp('2000-01-10 19:12:00')
```

### Step 5: Assign q = dts.quantile(...)

```python
q = dts.quantile(0.2)
```

**Verification:**
```python
assert q == pd.to_timedelta('24:00:00')
```

### Step 6: Assign tds = dts.diff(...)

```python
tds = dts.diff()
```

**Verification:**
```python
assert result == pd.Timedelta(0)
```

### Step 7: Assign q = tds.quantile(...)

```python
q = tds.quantile(0.25)
```

**Verification:**
```python
assert q == pd.to_timedelta('24:00:00')
```

### Step 8: Assign result = Series.sum(...)

```python
result = Series([np.timedelta64('NaT')]).sum()
```

**Verification:**
```python
assert result == pd.Timedelta(0)
```

### Step 9: Assign msg = 'percentiles should all be in the interval \\[0, 1\\]'

```python
msg = 'percentiles should all be in the interval \\[0, 1\\]'
```

### Step 10: Assign s = Series(...)

```python
s = Series(np.random.default_rng(2).standard_normal(100))
```

### Step 11: Assign percentile_array = value

```python
percentile_array = [-0.5, 0.25, 1.5]
```

### Step 12: Call s.quantile()

```python
s.quantile(percentile_array)
```

### Step 13: Call datetime_series.quantile()

```python
datetime_series.quantile(invalid)
```


## Complete Example

```python
# Setup
# Fixtures: datetime_series

# Workflow
q = datetime_series.quantile(0.1)
assert q == np.percentile(datetime_series.dropna(), 10)
q = datetime_series.quantile(0.9)
assert q == np.percentile(datetime_series.dropna(), 90)
q = Series(datetime_series, dtype=object).quantile(0.9)
assert q == np.percentile(datetime_series.dropna(), 90)
dts = datetime_series.index.to_series()
q = dts.quantile(0.2)
assert q == Timestamp('2000-01-10 19:12:00')
tds = dts.diff()
q = tds.quantile(0.25)
assert q == pd.to_timedelta('24:00:00')
result = Series([np.timedelta64('NaT')]).sum()
assert result == pd.Timedelta(0)
msg = 'percentiles should all be in the interval \\[0, 1\\]'
for invalid in [-1, 2, [0.5, -1], [0.5, 2]]:
    with pytest.raises(ValueError, match=msg):
        datetime_series.quantile(invalid)
s = Series(np.random.default_rng(2).standard_normal(100))
percentile_array = [-0.5, 0.25, 1.5]
with pytest.raises(ValueError, match=msg):
    s.quantile(percentile_array)
```

## Next Steps


---

*Source: test_quantile.py:16 | Complexity: Advanced | Last updated: 2026-02-20*