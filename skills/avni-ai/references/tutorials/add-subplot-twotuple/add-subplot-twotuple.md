# How To: Add Subplot Twotuple

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test add subplot twotuple

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert ax1.get_subplotspec().rowspan == range(1, 3)
```

### Step 2: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(3, 2, (3, 5))
```

**Verification:**
```python
assert ax1.get_subplotspec().colspan == range(0, 1)
```

### Step 3: Assign ax2 = fig.add_subplot(...)

```python
ax2 = fig.add_subplot(3, 2, (4, 6))
```

**Verification:**
```python
assert ax2.get_subplotspec().rowspan == range(1, 3)
```

### Step 4: Assign ax3 = fig.add_subplot(...)

```python
ax3 = fig.add_subplot(3, 2, (3, 6))
```

**Verification:**
```python
assert ax2.get_subplotspec().colspan == range(1, 2)
```

### Step 5: Assign ax4 = fig.add_subplot(...)

```python
ax4 = fig.add_subplot(3, 2, (4, 5))
```

**Verification:**
```python
assert ax3.get_subplotspec().rowspan == range(1, 3)
```

### Step 6: Call fig.add_subplot()

```python
fig.add_subplot(3, 2, (6, 3))
```

**Verification:**
```python
assert ax3.get_subplotspec().colspan == range(0, 2)
```


## Complete Example

```python
# Workflow
fig = plt.figure()
ax1 = fig.add_subplot(3, 2, (3, 5))
assert ax1.get_subplotspec().rowspan == range(1, 3)
assert ax1.get_subplotspec().colspan == range(0, 1)
ax2 = fig.add_subplot(3, 2, (4, 6))
assert ax2.get_subplotspec().rowspan == range(1, 3)
assert ax2.get_subplotspec().colspan == range(1, 2)
ax3 = fig.add_subplot(3, 2, (3, 6))
assert ax3.get_subplotspec().rowspan == range(1, 3)
assert ax3.get_subplotspec().colspan == range(0, 2)
ax4 = fig.add_subplot(3, 2, (4, 5))
assert ax4.get_subplotspec().rowspan == range(1, 3)
assert ax4.get_subplotspec().colspan == range(0, 2)
with pytest.raises(IndexError):
    fig.add_subplot(3, 2, (6, 3))
```

## Next Steps


---

*Source: test_figure.py:964 | Complexity: Intermediate | Last updated: 2026-02-20*