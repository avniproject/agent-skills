# How To: Compare Unaligned Objects

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test compare unaligned objects

## Prerequisites

**Required Modules:**
- `numpy`
- `pytest`
- `pandas`
- `pandas._testing`


## Step-by-Step Guide

### Step 1: Assign msg = 'Can only compare identically-labeled Series objects'

```python
msg = 'Can only compare identically-labeled Series objects'
```

### Step 2: Assign msg = 'Can only compare identically-labeled Series objects'

```python
msg = 'Can only compare identically-labeled Series objects'
```

### Step 3: Assign ser1 = pd.Series(...)

```python
ser1 = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
```

### Step 4: Assign ser2 = pd.Series(...)

```python
ser2 = pd.Series([1, 2, 3], index=['a', 'b', 'd'])
```

### Step 5: Call ser1.compare()

```python
ser1.compare(ser2)
```

### Step 6: Assign ser1 = pd.Series(...)

```python
ser1 = pd.Series([1, 2, 3])
```

### Step 7: Assign ser2 = pd.Series(...)

```python
ser2 = pd.Series([1, 2, 3, 4])
```

### Step 8: Call ser1.compare()

```python
ser1.compare(ser2)
```


## Complete Example

```python
# Workflow
msg = 'Can only compare identically-labeled Series objects'
with pytest.raises(ValueError, match=msg):
    ser1 = pd.Series([1, 2, 3], index=['a', 'b', 'c'])
    ser2 = pd.Series([1, 2, 3], index=['a', 'b', 'd'])
    ser1.compare(ser2)
msg = 'Can only compare identically-labeled Series objects'
with pytest.raises(ValueError, match=msg):
    ser1 = pd.Series([1, 2, 3])
    ser2 = pd.Series([1, 2, 3, 4])
    ser1.compare(ser2)
```

## Next Steps


---

*Source: test_compare.py:103 | Complexity: Advanced | Last updated: 2026-02-20*