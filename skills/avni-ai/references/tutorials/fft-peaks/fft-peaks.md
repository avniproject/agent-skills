# How To: Fft Peaks

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test fft peaks

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert simplified.vertices.size == 36
```

### Step 2: Assign t = np.arange(...)

```python
t = np.arange(65536)
```

### Step 3: Assign p1 = ax.plot(...)

```python
p1 = ax.plot(abs(np.fft.fft(np.sin(2 * np.pi * 0.01 * t) * np.blackman(len(t)))))
```

### Step 4: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 5: Assign path = unknown.get_path(...)

```python
path = p1[0].get_path()
```

### Step 6: Assign transform = unknown.get_transform(...)

```python
transform = p1[0].get_transform()
```

### Step 7: Assign path = transform.transform_path(...)

```python
path = transform.transform_path(path)
```

### Step 8: Assign simplified = path.cleaned(...)

```python
simplified = path.cleaned(simplify=True)
```

**Verification:**
```python
assert simplified.vertices.size == 36
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
t = np.arange(65536)
p1 = ax.plot(abs(np.fft.fft(np.sin(2 * np.pi * 0.01 * t) * np.blackman(len(t)))))
fig.canvas.draw()
path = p1[0].get_path()
transform = p1[0].get_transform()
path = transform.transform_path(path)
simplified = path.cleaned(simplify=True)
assert simplified.vertices.size == 36
```

## Next Steps


---

*Source: test_simplification.py:409 | Complexity: Advanced | Last updated: 2026-02-20*