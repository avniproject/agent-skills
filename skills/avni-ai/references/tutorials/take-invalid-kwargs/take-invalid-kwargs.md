# How To: Take Invalid Kwargs

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test take invalid kwargs

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `numpy`
- `pytest`
- `pandas.core.dtypes.common`
- `pandas`
- `pandas._testing`

**Setup Required:**
```python
# Fixtures: frame_or_series
```

## Step-by-Step Guide

### Step 1: Assign indices = value

```python
indices = [-3, 2, 0, 1]
```

### Step 2: Assign obj = DataFrame(...)

```python
obj = DataFrame(range(5))
```

### Step 3: Assign obj = tm.get_obj(...)

```python
obj = tm.get_obj(obj, frame_or_series)
```

### Step 4: Assign msg = "take\\(\\) got an unexpected keyword argument 'foo'"

```python
msg = "take\\(\\) got an unexpected keyword argument 'foo'"
```

### Step 5: Assign msg = "the 'out' parameter is not supported"

```python
msg = "the 'out' parameter is not supported"
```

### Step 6: Assign msg = "the 'mode' parameter is not supported"

```python
msg = "the 'mode' parameter is not supported"
```

### Step 7: Call obj.take()

```python
obj.take(indices, foo=2)
```

### Step 8: Call obj.take()

```python
obj.take(indices, out=indices)
```

### Step 9: Call obj.take()

```python
obj.take(indices, mode='clip')
```


## Complete Example

```python
# Setup
# Fixtures: frame_or_series

# Workflow
indices = [-3, 2, 0, 1]
obj = DataFrame(range(5))
obj = tm.get_obj(obj, frame_or_series)
msg = "take\\(\\) got an unexpected keyword argument 'foo'"
with pytest.raises(TypeError, match=msg):
    obj.take(indices, foo=2)
msg = "the 'out' parameter is not supported"
with pytest.raises(ValueError, match=msg):
    obj.take(indices, out=indices)
msg = "the 'mode' parameter is not supported"
with pytest.raises(ValueError, match=msg):
    obj.take(indices, mode='clip')
```

## Next Steps


---

*Source: test_generic.py:461 | Complexity: Advanced | Last updated: 2026-02-20*