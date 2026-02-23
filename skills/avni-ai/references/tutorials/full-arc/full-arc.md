# How To: Full Arc

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test full arc

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `platform`
- `re`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.backend_bases`

**Setup Required:**
```python
# Fixtures: offset
```

## Step-by-Step Guide

### Step 1: Assign low = offset

```python
low = offset
```

### Step 2: Assign high = value

```python
high = 360 + offset
```

### Step 3: Assign path = Path.arc(...)

```python
path = Path.arc(low, high)
```

### Step 4: Assign mins = np.min(...)

```python
mins = np.min(path.vertices, axis=0)
```

### Step 5: Assign maxs = np.max(...)

```python
maxs = np.max(path.vertices, axis=0)
```

### Step 6: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(mins, -1)
```

### Step 7: Call np.testing.assert_allclose()

```python
np.testing.assert_allclose(maxs, 1)
```


## Complete Example

```python
# Setup
# Fixtures: offset

# Workflow
low = offset
high = 360 + offset
path = Path.arc(low, high)
mins = np.min(path.vertices, axis=0)
maxs = np.max(path.vertices, axis=0)
np.testing.assert_allclose(mins, -1)
np.testing.assert_allclose(maxs, 1)
```

## Next Steps


---

*Source: test_path.py:503 | Complexity: Intermediate | Last updated: 2026-02-20*