# How To: As Unit Overflows

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test as unit overflows

## Prerequisites

**Required Modules:**
- `pytest`
- `pandas._libs.tslibs.dtypes`
- `pandas.errors`
- `pandas`


## Step-by-Step Guide

### Step 1: Assign us = 9223372800000000

```python
us = 9223372800000000
```

**Verification:**
```python
assert res._value == us // 1000
```

### Step 2: Assign td = Timedelta._from_value_and_reso(...)

```python
td = Timedelta._from_value_and_reso(us, NpyDatetimeUnit.NPY_FR_us.value)
```

**Verification:**
```python
assert res._creso == NpyDatetimeUnit.NPY_FR_ms.value
```

### Step 3: Assign msg = "Cannot cast 106752 days 00:00:00 to unit='ns' without overflow"

```python
msg = "Cannot cast 106752 days 00:00:00 to unit='ns' without overflow"
```

### Step 4: Assign res = td.as_unit(...)

```python
res = td.as_unit('ms')
```

**Verification:**
```python
assert res._value == us // 1000
```

### Step 5: Call td.as_unit()

```python
td.as_unit('ns')
```


## Complete Example

```python
# Workflow
us = 9223372800000000
td = Timedelta._from_value_and_reso(us, NpyDatetimeUnit.NPY_FR_us.value)
msg = "Cannot cast 106752 days 00:00:00 to unit='ns' without overflow"
with pytest.raises(OutOfBoundsTimedelta, match=msg):
    td.as_unit('ns')
res = td.as_unit('ms')
assert res._value == us // 1000
assert res._creso == NpyDatetimeUnit.NPY_FR_ms.value
```

## Next Steps


---

*Source: test_as_unit.py:39 | Complexity: Intermediate | Last updated: 2026-02-20*