# How To: As Unit

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test as unit

## Prerequisites

**Required Modules:**
- `pytest`
- `pandas._libs.tslibs.dtypes`
- `pandas.errors`
- `pandas`


## Step-by-Step Guide

### Step 1: Assign td = Timedelta(...)

```python
td = Timedelta(days=1)
```

**Verification:**
```python
assert td.as_unit('ns') is td
```

### Step 2: Assign res = td.as_unit(...)

```python
res = td.as_unit('us')
```

**Verification:**
```python
assert res._value == td._value // 1000
```

### Step 3: Assign rt = res.as_unit(...)

```python
rt = res.as_unit('ns')
```

**Verification:**
```python
assert res._creso == NpyDatetimeUnit.NPY_FR_us.value
```

### Step 4: Assign res = td.as_unit(...)

```python
res = td.as_unit('ms')
```

**Verification:**
```python
assert rt._value == td._value
```

### Step 5: Assign rt = res.as_unit(...)

```python
rt = res.as_unit('ns')
```

**Verification:**
```python
assert rt._creso == td._creso
```

### Step 6: Assign res = td.as_unit(...)

```python
res = td.as_unit('s')
```

**Verification:**
```python
assert res._value == td._value // 1000000
```

### Step 7: Assign rt = res.as_unit(...)

```python
rt = res.as_unit('ns')
```

**Verification:**
```python
assert res._creso == NpyDatetimeUnit.NPY_FR_ms.value
```


## Complete Example

```python
# Workflow
td = Timedelta(days=1)
assert td.as_unit('ns') is td
res = td.as_unit('us')
assert res._value == td._value // 1000
assert res._creso == NpyDatetimeUnit.NPY_FR_us.value
rt = res.as_unit('ns')
assert rt._value == td._value
assert rt._creso == td._creso
res = td.as_unit('ms')
assert res._value == td._value // 1000000
assert res._creso == NpyDatetimeUnit.NPY_FR_ms.value
rt = res.as_unit('ns')
assert rt._value == td._value
assert rt._creso == td._creso
res = td.as_unit('s')
assert res._value == td._value // 1000000000
assert res._creso == NpyDatetimeUnit.NPY_FR_s.value
rt = res.as_unit('ns')
assert rt._value == td._value
assert rt._creso == td._creso
```

## Next Steps


---

*Source: test_as_unit.py:10 | Complexity: Intermediate | Last updated: 2026-02-20*