# How To: Noise

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test noise

## Prerequisites

**Required Modules:**
- `base64`
- `io`
- `platform`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`
- `matplotlib.path`


## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(0)
```

**Verification:**
```python
assert simplified.vertices.size == 25512
```

### Step 2: Assign x = value

```python
x = np.random.uniform(size=50000) * 50
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Assign p1 = ax.plot(...)

```python
p1 = ax.plot(x, solid_joinstyle='round', linewidth=2.0)
```

### Step 5: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 6: Assign path = unknown.get_path(...)

```python
path = p1[0].get_path()
```

### Step 7: Assign transform = unknown.get_transform(...)

```python
transform = p1[0].get_transform()
```

### Step 8: Assign path = transform.transform_path(...)

```python
path = transform.transform_path(path)
```

### Step 9: Assign simplified = path.cleaned(...)

```python
simplified = path.cleaned(simplify=True)
```

**Verification:**
```python
assert simplified.vertices.size == 25512
```


## Complete Example

```python
# Workflow
np.random.seed(0)
x = np.random.uniform(size=50000) * 50
fig, ax = plt.subplots()
p1 = ax.plot(x, solid_joinstyle='round', linewidth=2.0)
fig.canvas.draw()
path = p1[0].get_path()
transform = p1[0].get_transform()
path = transform.transform_path(path)
simplified = path.cleaned(simplify=True)
assert simplified.vertices.size == 25512
```

## Next Steps


---

*Source: test_simplification.py:76 | Complexity: Advanced | Last updated: 2026-02-20*