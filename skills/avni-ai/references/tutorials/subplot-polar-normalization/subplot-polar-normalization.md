# How To: Subplot Polar Normalization

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test subplot polar normalization

## Prerequisites

**Required Modules:**
- `difflib`
- `numpy`
- `sys`
- `pathlib`
- `pytest`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign ax1 = plt.subplot(...)

```python
ax1 = plt.subplot(111, projection='polar')
```

**Verification:**
```python
assert ax1 is ax2
```

### Step 2: Assign ax2 = plt.subplot(...)

```python
ax2 = plt.subplot(111, polar=True)
```

**Verification:**
```python
assert ax1 is ax3
```

### Step 3: Assign ax3 = plt.subplot(...)

```python
ax3 = plt.subplot(111, polar=True, projection='polar')
```

**Verification:**
```python
assert ax1 is ax2
```

### Step 4: Assign ax2 = plt.subplot(...)

```python
ax2 = plt.subplot(111, polar=True, projection='3d')
```


## Complete Example

```python
# Workflow
ax1 = plt.subplot(111, projection='polar')
ax2 = plt.subplot(111, polar=True)
ax3 = plt.subplot(111, polar=True, projection='polar')
assert ax1 is ax2
assert ax1 is ax3
with pytest.raises(ValueError, match="polar=True, yet projection='3d'"):
    ax2 = plt.subplot(111, polar=True, projection='3d')
```

## Next Steps


---

*Source: test_pyplot.py:274 | Complexity: Intermediate | Last updated: 2026-02-20*