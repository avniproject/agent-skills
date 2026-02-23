# How To: Pickling

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test that `AxisError` can be pickled.

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pickle`
- `pytest`
- `numpy`
- `numpy.exceptions`

**Setup Required:**
```python
# Fixtures: args
```

## Step-by-Step Guide

### Step 1: 'Test that `AxisError` can be pickled.'

```python
'Test that `AxisError` can be pickled.'
```

**Verification:**
```python
assert type(exc) is type(exc2)
```

### Step 2: Assign exc = AxisError(...)

```python
exc = AxisError(*args)
```

**Verification:**
```python
assert attr1 == attr2, name
```

### Step 3: Assign exc2 = pickle.loads(...)

```python
exc2 = pickle.loads(pickle.dumps(exc))
```

**Verification:**
```python
assert type(exc) is type(exc2)
```

### Step 4: Assign attr1 = getattr(...)

```python
attr1 = getattr(exc, name)
```

### Step 5: Assign attr2 = getattr(...)

```python
attr2 = getattr(exc2, name)
```

**Verification:**
```python
assert attr1 == attr2, name
```


## Complete Example

```python
# Setup
# Fixtures: args

# Workflow
'Test that `AxisError` can be pickled.'
exc = AxisError(*args)
exc2 = pickle.loads(pickle.dumps(exc))
assert type(exc) is type(exc2)
for name in ('axis', 'ndim', 'args'):
    attr1 = getattr(exc, name)
    attr2 = getattr(exc2, name)
    assert attr1 == attr2, name
```

## Next Steps


---

*Source: test__exceptions.py:81 | Complexity: Intermediate | Last updated: 2026-02-20*