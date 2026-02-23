# How To: Label Loc Vertical

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test label loc vertical

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `collections`
- `datetime`
- `decimal`
- `functools`
- `gc`
- `inspect`
- `io`
- `itertools`
- `platform`
- `sys`
- `types`
- `dateutil.tz`
- `numpy`
- `numpy`
- `cycler`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.dates`
- `matplotlib.figure`
- `matplotlib.axes`
- `matplotlib.lines`
- `matplotlib.collections`
- `matplotlib.font_manager`
- `matplotlib.markers`
- `matplotlib.patches`
- `matplotlib.path`
- `matplotlib.projections.geo`
- `matplotlib.projections.polar`
- `matplotlib.pyplot`
- `matplotlib.text`
- `matplotlib.ticker`
- `matplotlib.transforms`
- `mpl_toolkits.axisartist`
- `numpy.testing`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `pandas.plotting`
- `matplotlib.lines`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign ax = fig_test.subplots(...)

```python
ax = fig_test.subplots()
```

### Step 2: Assign sc = ax.scatter(...)

```python
sc = ax.scatter([1, 2], [1, 2], c=[1, 2], label='scatter')
```

### Step 3: Call ax.legend()

```python
ax.legend()
```

### Step 4: Call ax.set_ylabel()

```python
ax.set_ylabel('Y Label', loc='top')
```

### Step 5: Call ax.set_xlabel()

```python
ax.set_xlabel('X Label', loc='right')
```

### Step 6: Assign cbar = fig_test.colorbar(...)

```python
cbar = fig_test.colorbar(sc)
```

### Step 7: Call cbar.set_label()

```python
cbar.set_label('Z Label', loc='top')
```

### Step 8: Assign ax = fig_ref.subplots(...)

```python
ax = fig_ref.subplots()
```

### Step 9: Assign sc = ax.scatter(...)

```python
sc = ax.scatter([1, 2], [1, 2], c=[1, 2], label='scatter')
```

### Step 10: Call ax.legend()

```python
ax.legend()
```

### Step 11: Call ax.set_ylabel()

```python
ax.set_ylabel('Y Label', y=1, ha='right')
```

### Step 12: Call ax.set_xlabel()

```python
ax.set_xlabel('X Label', x=1, ha='right')
```

### Step 13: Assign cbar = fig_ref.colorbar(...)

```python
cbar = fig_ref.colorbar(sc)
```

### Step 14: Call cbar.set_label()

```python
cbar.set_label('Z Label', y=1, ha='right')
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
ax = fig_test.subplots()
sc = ax.scatter([1, 2], [1, 2], c=[1, 2], label='scatter')
ax.legend()
ax.set_ylabel('Y Label', loc='top')
ax.set_xlabel('X Label', loc='right')
cbar = fig_test.colorbar(sc)
cbar.set_label('Z Label', loc='top')
ax = fig_ref.subplots()
sc = ax.scatter([1, 2], [1, 2], c=[1, 2], label='scatter')
ax.legend()
ax.set_ylabel('Y Label', y=1, ha='right')
ax.set_xlabel('X Label', x=1, ha='right')
cbar = fig_ref.colorbar(sc)
cbar.set_label('Z Label', y=1, ha='right')
```

## Next Steps


---

*Source: test_axes.py:79 | Complexity: Advanced | Last updated: 2026-02-20*