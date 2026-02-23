# How To: Quantile Multi

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test quantile multi

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
# Fixtures: datetime_series, unit
```

## Step-by-Step Guide

### Step 1: Assign datetime_series.index = datetime_series.index.as_unit(...)

```python
datetime_series.index = datetime_series.index.as_unit(unit)
```

### Step 2: Assign qs = value

```python
qs = [0.1, 0.9]
```

### Step 3: Assign result = datetime_series.quantile(...)

```python
result = datetime_series.quantile(qs)
```

### Step 4: Assign expected = Series(...)

```python
expected = Series([np.percentile(datetime_series.dropna(), 10), np.percentile(datetime_series.dropna(), 90)], index=qs, name=datetime_series.name)
```

### Step 5: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 6: Assign dts = datetime_series.index.to_series(...)

```python
dts = datetime_series.index.to_series()
```

### Step 7: Assign dts.name = 'xxx'

```python
dts.name = 'xxx'
```

### Step 8: Assign result = dts.quantile(...)

```python
result = dts.quantile((0.2, 0.2))
```

### Step 9: Assign expected = Series(...)

```python
expected = Series([Timestamp('2000-01-10 19:12:00'), Timestamp('2000-01-10 19:12:00')], index=[0.2, 0.2], name='xxx', dtype=f'M8[{unit}]')
```

### Step 10: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```

### Step 11: Assign result = datetime_series.quantile(...)

```python
result = datetime_series.quantile([])
```

### Step 12: Assign expected = Series(...)

```python
expected = Series([], name=datetime_series.name, index=Index([], dtype=float), dtype='float64')
```

### Step 13: Call tm.assert_series_equal()

```python
tm.assert_series_equal(result, expected)
```


## Complete Example

```python
# Setup
# Fixtures: datetime_series, unit

# Workflow
datetime_series.index = datetime_series.index.as_unit(unit)
qs = [0.1, 0.9]
result = datetime_series.quantile(qs)
expected = Series([np.percentile(datetime_series.dropna(), 10), np.percentile(datetime_series.dropna(), 90)], index=qs, name=datetime_series.name)
tm.assert_series_equal(result, expected)
dts = datetime_series.index.to_series()
dts.name = 'xxx'
result = dts.quantile((0.2, 0.2))
expected = Series([Timestamp('2000-01-10 19:12:00'), Timestamp('2000-01-10 19:12:00')], index=[0.2, 0.2], name='xxx', dtype=f'M8[{unit}]')
tm.assert_series_equal(result, expected)
result = datetime_series.quantile([])
expected = Series([], name=datetime_series.name, index=Index([], dtype=float), dtype='float64')
tm.assert_series_equal(result, expected)
```

## Next Steps


---

*Source: test_quantile.py:51 | Complexity: Advanced | Last updated: 2026-02-20*