# How To: Slice

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test slice

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `operator`
- `sys`
- `pytest`
- `numpy`
- `numpy._core._exceptions`
- `numpy.testing`
- `numpy.testing._private.utils`

**Setup Required:**
```python
# Fixtures: args, buf, dt
```

## Step-by-Step Guide

### Step 1: Assign buf = np.array(...)

```python
buf = np.array(buf, dtype=dt)
```

**Verification:**
```python
assert_array_equal(act, res)
```

### Step 2: Assign act = np.strings.slice(...)

```python
act = np.strings.slice(buf, *args)
```

### Step 3: Assign bcast_args = tuple(...)

```python
bcast_args = tuple((np.broadcast_to(arg, buf.shape) for arg in args))
```

### Step 4: Assign res = np.array(...)

```python
res = np.array([s[slice(*arg)] for s, arg in zip(buf, zip(*bcast_args))], dtype=dt)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(act, res)
```

### Step 6: Call pytest.skip()

```python
pytest.skip('Bytes dtype does not support non-ascii input')
```

### Step 7: Assign args = tuple(...)

```python
args = tuple((s * 2 if isinstance(s, list) else s for s in args))
```


## Complete Example

```python
# Setup
# Fixtures: args, buf, dt

# Workflow
if dt == 'S' and '你好世界' in buf:
    pytest.skip('Bytes dtype does not support non-ascii input')
if len(buf) == 4:
    args = tuple((s * 2 if isinstance(s, list) else s for s in args))
buf = np.array(buf, dtype=dt)
act = np.strings.slice(buf, *args)
bcast_args = tuple((np.broadcast_to(arg, buf.shape) for arg in args))
res = np.array([s[slice(*arg)] for s, arg in zip(buf, zip(*bcast_args))], dtype=dt)
assert_array_equal(act, res)
```

## Next Steps


---

*Source: test_strings.py:1024 | Complexity: Intermediate | Last updated: 2026-02-20*