# How To: Savefig Transparent

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test savefig transparent

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign gs1 = fig_test.add_gridspec(...)

```python
gs1 = fig_test.add_gridspec(3, 3, left=0.05, wspace=0.05)
```

### Step 2: Assign f1 = fig_test.add_subfigure(...)

```python
f1 = fig_test.add_subfigure(gs1[:, :])
```

### Step 3: Assign f2 = f1.add_subfigure(...)

```python
f2 = f1.add_subfigure(gs1[0, 0])
```

### Step 4: Assign ax12 = f2.add_subplot(...)

```python
ax12 = f2.add_subplot(gs1[:, :])
```

### Step 5: Assign ax1 = f1.add_subplot(...)

```python
ax1 = f1.add_subplot(gs1[:-1, :])
```

### Step 6: Assign iax1 = ax1.inset_axes(...)

```python
iax1 = ax1.inset_axes([0.1, 0.2, 0.3, 0.4])
```

### Step 7: Assign iax2 = iax1.inset_axes(...)

```python
iax2 = iax1.inset_axes([0.1, 0.2, 0.3, 0.4])
```

### Step 8: Assign ax2 = fig_test.add_subplot(...)

```python
ax2 = fig_test.add_subplot(gs1[-1, :-1])
```

### Step 9: Assign ax3 = fig_test.add_subplot(...)

```python
ax3 = fig_test.add_subplot(gs1[-1, -1])
```

### Step 10: Call ax.set()

```python
ax.set(xticks=[], yticks=[])
```

### Step 11: Call unknown.set_visible()

```python
ax.spines[:].set_visible(False)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
gs1 = fig_test.add_gridspec(3, 3, left=0.05, wspace=0.05)
f1 = fig_test.add_subfigure(gs1[:, :])
f2 = f1.add_subfigure(gs1[0, 0])
ax12 = f2.add_subplot(gs1[:, :])
ax1 = f1.add_subplot(gs1[:-1, :])
iax1 = ax1.inset_axes([0.1, 0.2, 0.3, 0.4])
iax2 = iax1.inset_axes([0.1, 0.2, 0.3, 0.4])
ax2 = fig_test.add_subplot(gs1[-1, :-1])
ax3 = fig_test.add_subplot(gs1[-1, -1])
for ax in [ax12, ax1, iax1, iax2, ax2, ax3]:
    ax.set(xticks=[], yticks=[])
    ax.spines[:].set_visible(False)
```

## Next Steps


---

*Source: test_figure.py:653 | Complexity: Advanced | Last updated: 2026-02-20*