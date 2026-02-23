# How To: Cull Markers

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test cull markers

## Prerequisites

**Required Modules:**
- `io`
- `itertools`
- `numpy`
- `pytest`
- `matplotlib.colors`
- `matplotlib.pyplot`
- `matplotlib.patches`
- `matplotlib.lines`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.artist`
- `matplotlib.backend_bases`
- `matplotlib`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign x = np.random.random(...)

```python
x = np.random.random(20000)
```

**Verification:**
```python
assert len(pdf.getvalue()) < 8000
```

### Step 2: Assign y = np.random.random(...)

```python
y = np.random.random(20000)
```

**Verification:**
```python
assert len(svg.getvalue()) < 20000
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Call ax.plot()

```python
ax.plot(x, y, 'k.')
```

### Step 5: Call ax.set_xlim()

```python
ax.set_xlim(2, 3)
```

### Step 6: Assign pdf = io.BytesIO(...)

```python
pdf = io.BytesIO()
```

### Step 7: Call fig.savefig()

```python
fig.savefig(pdf, format='pdf')
```

**Verification:**
```python
assert len(pdf.getvalue()) < 8000
```

### Step 8: Assign svg = io.BytesIO(...)

```python
svg = io.BytesIO()
```

### Step 9: Call fig.savefig()

```python
fig.savefig(svg, format='svg')
```

**Verification:**
```python
assert len(svg.getvalue()) < 20000
```


## Complete Example

```python
# Workflow
x = np.random.random(20000)
y = np.random.random(20000)
fig, ax = plt.subplots()
ax.plot(x, y, 'k.')
ax.set_xlim(2, 3)
pdf = io.BytesIO()
fig.savefig(pdf, format='pdf')
assert len(pdf.getvalue()) < 8000
svg = io.BytesIO()
fig.savefig(svg, format='svg')
assert len(svg.getvalue()) < 20000
```

## Next Steps


---

*Source: test_artist.py:146 | Complexity: Advanced | Last updated: 2026-02-20*