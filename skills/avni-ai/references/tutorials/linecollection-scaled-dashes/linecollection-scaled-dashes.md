# How To: Linecollection Scaled Dashes

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test linecollection scaled dashes

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `mpl_toolkits.mplot3d`


## Step-by-Step Guide

### Step 1: Assign lines1 = value

```python
lines1 = [[(0, 0.5), (0.5, 1)], [(0.3, 0.6), (0.2, 0.2)]]
```

**Verification:**
```python
assert oh.get_linestyles()[0] == lh._dash_pattern
```

### Step 2: Assign lines2 = value

```python
lines2 = [[[0.7, 0.2], [0.8, 0.4]], [[0.5, 0.7], [0.6, 0.1]]]
```

### Step 3: Assign lines3 = value

```python
lines3 = [[[0.6, 0.2], [0.8, 0.4]], [[0.5, 0.7], [0.1, 0.1]]]
```

### Step 4: Assign lc1 = art3d.Line3DCollection(...)

```python
lc1 = art3d.Line3DCollection(lines1, linestyles='--', lw=3)
```

### Step 5: Assign lc2 = art3d.Line3DCollection(...)

```python
lc2 = art3d.Line3DCollection(lines2, linestyles='-.')
```

### Step 6: Assign lc3 = art3d.Line3DCollection(...)

```python
lc3 = art3d.Line3DCollection(lines3, linestyles=':', lw=0.5)
```

### Step 7: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
```

### Step 8: Call ax.add_collection()

```python
ax.add_collection(lc1)
```

### Step 9: Call ax.add_collection()

```python
ax.add_collection(lc2)
```

### Step 10: Call ax.add_collection()

```python
ax.add_collection(lc3)
```

### Step 11: Assign leg = ax.legend(...)

```python
leg = ax.legend([lc1, lc2, lc3], ['line1', 'line2', 'line 3'])
```

### Step 12: Assign unknown = value

```python
h1, h2, h3 = leg.legend_handles
```

**Verification:**
```python
assert oh.get_linestyles()[0] == lh._dash_pattern
```


## Complete Example

```python
# Workflow
lines1 = [[(0, 0.5), (0.5, 1)], [(0.3, 0.6), (0.2, 0.2)]]
lines2 = [[[0.7, 0.2], [0.8, 0.4]], [[0.5, 0.7], [0.6, 0.1]]]
lines3 = [[[0.6, 0.2], [0.8, 0.4]], [[0.5, 0.7], [0.1, 0.1]]]
lc1 = art3d.Line3DCollection(lines1, linestyles='--', lw=3)
lc2 = art3d.Line3DCollection(lines2, linestyles='-.')
lc3 = art3d.Line3DCollection(lines3, linestyles=':', lw=0.5)
fig, ax = plt.subplots(subplot_kw=dict(projection='3d'))
ax.add_collection(lc1)
ax.add_collection(lc2)
ax.add_collection(lc3)
leg = ax.legend([lc1, lc2, lc3], ['line1', 'line2', 'line 3'])
h1, h2, h3 = leg.legend_handles
for oh, lh in zip((lc1, lc2, lc3), (h1, h2, h3)):
    assert oh.get_linestyles()[0] == lh._dash_pattern
```

## Next Steps


---

*Source: test_legend3d.py:41 | Complexity: Advanced | Last updated: 2026-02-20*