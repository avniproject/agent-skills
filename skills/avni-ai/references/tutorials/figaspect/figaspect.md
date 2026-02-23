# How To: Figaspect

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test figaspect

## Prerequisites

**Required Modules:**
- `copy`
- `datetime`
- `io`
- `pickle`
- `platform`
- `threading`
- `types`
- `warnings`
- `numpy`
- `pytest`
- `PIL`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.axes`
- `matplotlib.backend_bases`
- `matplotlib.figure`
- `matplotlib.layout_engine`
- `matplotlib.ticker`
- `matplotlib.pyplot`
- `matplotlib.dates`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.figaspect(...)

```python
w, h = plt.figaspect(np.float64(2) / np.float64(1))
```

**Verification:**
```python
assert h / w == 2
```

### Step 2: Assign unknown = plt.figaspect(...)

```python
w, h = plt.figaspect(2)
```

**Verification:**
```python
assert h / w == 2
```

### Step 3: Assign unknown = plt.figaspect(...)

```python
w, h = plt.figaspect(np.zeros((1, 2)))
```

**Verification:**
```python
assert h / w == 0.5
```

### Step 4: Assign unknown = plt.figaspect(...)

```python
w, h = plt.figaspect(np.zeros((2, 2)))
```

**Verification:**
```python
assert h / w == 1
```


## Complete Example

```python
# Workflow
w, h = plt.figaspect(np.float64(2) / np.float64(1))
assert h / w == 2
w, h = plt.figaspect(2)
assert h / w == 2
w, h = plt.figaspect(np.zeros((1, 2)))
assert h / w == 0.5
w, h = plt.figaspect(np.zeros((2, 2)))
assert h / w == 1
```

## Next Steps


---

*Source: test_figure.py:448 | Complexity: Intermediate | Last updated: 2026-02-20*