# How To: Period Mean

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test period mean

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `inspect`
- `numpy`
- `pytest`
- `pandas`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: box, freq
```

## Step-by-Step Guide

### Step 1: Assign dti = date_range(...)

```python
dti = date_range('2001-01-01', periods=11)
```

### Step 2: Assign dti = dti.take(...)

```python
dti = dti.take([4, 1, 3, 10, 9, 7, 8, 5, 0, 2, 6])
```

### Step 3: Assign warn = value

```python
warn = FutureWarning if freq == 'B' else None
```

### Step 4: Assign msg = 'PeriodDtype\\[B\\] is deprecated'

```python
msg = 'PeriodDtype\\[B\\] is deprecated'
```

### Step 5: Assign obj = box(...)

```python
obj = box(parr)
```

### Step 6: Assign unknown = value

```python
parr[-2] = pd.NaT
```

### Step 7: Assign parr = dti._data.to_period(...)

```python
parr = dti._data.to_period(freq)
```

### Step 8: Call obj.mean()

```python
obj.mean()
```

### Step 9: Call obj.mean()

```python
obj.mean(skipna=True)
```

### Step 10: Call obj.mean()

```python
obj.mean()
```

### Step 11: Call obj.mean()

```python
obj.mean(skipna=True)
```


## Complete Example

```python
# Setup
# Fixtures: box, freq

# Workflow
dti = date_range('2001-01-01', periods=11)
dti = dti.take([4, 1, 3, 10, 9, 7, 8, 5, 0, 2, 6])
warn = FutureWarning if freq == 'B' else None
msg = 'PeriodDtype\\[B\\] is deprecated'
with tm.assert_produces_warning(warn, match=msg):
    parr = dti._data.to_period(freq)
obj = box(parr)
with pytest.raises(TypeError, match='ambiguous'):
    obj.mean()
with pytest.raises(TypeError, match='ambiguous'):
    obj.mean(skipna=True)
parr[-2] = pd.NaT
with pytest.raises(TypeError, match='ambiguous'):
    obj.mean()
with pytest.raises(TypeError, match='ambiguous'):
    obj.mean(skipna=True)
```

## Next Steps


---

*Source: test_stat_reductions.py:41 | Complexity: Advanced | Last updated: 2026-02-20*