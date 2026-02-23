# How To: Pngsuite

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test pngsuite

## Prerequisites

**Required Modules:**
- `io`
- `pathlib`
- `pytest`
- `matplotlib.testing.decorators`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign files = sorted(...)

```python
files = sorted((Path(__file__).parent / 'baseline_images/pngsuite').glob('basn*.png'))
```

### Step 2: Call plt.figure()

```python
plt.figure(figsize=(len(files), 2))
```

### Step 3: Call plt.gca.patch.set_facecolor()

```python
plt.gca().patch.set_facecolor('#ddffff')
```

### Step 4: Call plt.gca.set_xlim()

```python
plt.gca().set_xlim(0, len(files))
```

### Step 5: Assign data = plt.imread(...)

```python
data = plt.imread(fname)
```

### Step 6: Assign cmap = None

```python
cmap = None
```

### Step 7: Call plt.imshow()

```python
plt.imshow(data, extent=(i, i + 1, 0, 1), cmap=cmap, interpolation_stage='data')
```

### Step 8: Assign cmap = value

```python
cmap = cm.gray
```


## Complete Example

```python
# Workflow
files = sorted((Path(__file__).parent / 'baseline_images/pngsuite').glob('basn*.png'))
plt.figure(figsize=(len(files), 2))
for i, fname in enumerate(files):
    data = plt.imread(fname)
    cmap = None
    if data.ndim == 2:
        cmap = cm.gray
    plt.imshow(data, extent=(i, i + 1, 0, 1), cmap=cmap, interpolation_stage='data')
plt.gca().patch.set_facecolor('#ddffff')
plt.gca().set_xlim(0, len(files))
```

## Next Steps


---

*Source: test_png.py:11 | Complexity: Advanced | Last updated: 2026-02-20*