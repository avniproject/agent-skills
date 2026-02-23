# How To: Asof

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test asof

## Prerequisites

**Required Modules:**
- `datetime`
- `pandas`


## Step-by-Step Guide

### Step 1: Assign index = date_range(...)

```python
index = date_range('2020-01-01', periods=10)
```

**Verification:**
```python
assert index.asof(dt) == dt
```

### Step 2: Assign dt = value

```python
dt = index[0]
```

**Verification:**
```python
assert isna(index.asof(dt - timedelta(1)))
```

### Step 3: Assign dt = value

```python
dt = index[-1]
```

**Verification:**
```python
assert index.asof(dt + timedelta(1)) == dt
```

### Step 4: Assign dt = unknown.to_pydatetime(...)

```python
dt = index[0].to_pydatetime()
```

**Verification:**
```python
assert isinstance(index.asof(dt), Timestamp)
```


## Complete Example

```python
# Workflow
index = date_range('2020-01-01', periods=10)
dt = index[0]
assert index.asof(dt) == dt
assert isna(index.asof(dt - timedelta(1)))
dt = index[-1]
assert index.asof(dt + timedelta(1)) == dt
dt = index[0].to_pydatetime()
assert isinstance(index.asof(dt), Timestamp)
```

## Next Steps


---

*Source: test_asof.py:19 | Complexity: Intermediate | Last updated: 2026-02-20*