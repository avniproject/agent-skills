# How To: Data For Grouping

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: Expected to be like [B, B, NA, NA, A, A, B, C]

Where A < B < C and NA is missing

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `pytest`
- `pandas.core.dtypes.dtypes`
- `pandas`
- `pandas._testing`
- `pandas.core.arrays`
- `pandas.tests.extension`

**Setup Required:**
```python
# Fixtures: dtype
```

## Step-by-Step Guide

### Step 1: '\n    Expected to be like [B, B, NA, NA, A, A, B, C]\n\n    Where A < B < C and NA is missing\n    '

```python
'\n    Expected to be like [B, B, NA, NA, A, A, B, C]\n\n    Where A < B < C and NA is missing\n    '
```

### Step 2: Assign a = pd.Timestamp(...)

```python
a = pd.Timestamp('2000-01-01')
```

### Step 3: Assign b = pd.Timestamp(...)

```python
b = pd.Timestamp('2000-01-02')
```

### Step 4: Assign c = pd.Timestamp(...)

```python
c = pd.Timestamp('2000-01-03')
```

### Step 5: Assign na = 'NaT'

```python
na = 'NaT'
```


## Complete Example

```python
# Setup
# Fixtures: dtype

# Workflow
'\n    Expected to be like [B, B, NA, NA, A, A, B, C]\n\n    Where A < B < C and NA is missing\n    '
a = pd.Timestamp('2000-01-01')
b = pd.Timestamp('2000-01-02')
c = pd.Timestamp('2000-01-03')
na = 'NaT'
return DatetimeArray._from_sequence(np.array([b, b, na, na, a, a, b, c], dtype='datetime64[ns]'), dtype=dtype)
```

## Next Steps


---

*Source: test_datetime.py:67 | Complexity: Intermediate | Last updated: 2026-02-20*