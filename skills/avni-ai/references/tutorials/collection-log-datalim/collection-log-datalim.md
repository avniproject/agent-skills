# How To: Collection Log Datalim

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test collection log datalim

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `io`
- `itertools`
- `platform`
- `re`
- `types`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.path`
- `matplotlib.transforms`
- `matplotlib.collections`
- `matplotlib.collections`
- `matplotlib.testing.decorators`
- `mpl_toolkits.mplot3d`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign x_vals = value

```python
x_vals = [4.38462e-06, 5.54929e-06, 7.02332e-06, 8.88889e-06, 1.125e-05, 1.42383e-05, 1.80203e-05, 2.2807e-05, 2.88651e-05, 3.65324e-05, 4.62363e-05, 5.85178e-05, 7.40616e-05, 9.37342e-05, 0.000118632]
```

### Step 2: Assign y_vals = value

```python
y_vals = [0.0, 0.1, 0.182, 0.332, 0.604, 1.1, 2.0, 3.64, 6.64, 12.1, 22.0, 39.6, 71.3]
```

### Step 3: Assign unknown = np.meshgrid(...)

```python
x, y = np.meshgrid(x_vals, y_vals)
```

### Step 4: Assign x = x.flatten(...)

```python
x = x.flatten()
```

### Step 5: Assign y = y.flatten(...)

```python
y = y.flatten()
```

### Step 6: Assign ax_test = fig_test.subplots(...)

```python
ax_test = fig_test.subplots()
```

### Step 7: Call ax_test.set_xscale()

```python
ax_test.set_xscale('log')
```

### Step 8: Call ax_test.set_yscale()

```python
ax_test.set_yscale('log')
```

### Step 9: Assign ax_test.margins = 0

```python
ax_test.margins = 0
```

### Step 10: Call ax_test.scatter()

```python
ax_test.scatter(x, y)
```

### Step 11: Assign ax_ref = fig_ref.subplots(...)

```python
ax_ref = fig_ref.subplots()
```

### Step 12: Call ax_ref.set_xscale()

```python
ax_ref.set_xscale('log')
```

### Step 13: Call ax_ref.set_yscale()

```python
ax_ref.set_yscale('log')
```

### Step 14: Call ax_ref.plot()

```python
ax_ref.plot(x, y, marker='o', ls='')
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
x_vals = [4.38462e-06, 5.54929e-06, 7.02332e-06, 8.88889e-06, 1.125e-05, 1.42383e-05, 1.80203e-05, 2.2807e-05, 2.88651e-05, 3.65324e-05, 4.62363e-05, 5.85178e-05, 7.40616e-05, 9.37342e-05, 0.000118632]
y_vals = [0.0, 0.1, 0.182, 0.332, 0.604, 1.1, 2.0, 3.64, 6.64, 12.1, 22.0, 39.6, 71.3]
x, y = np.meshgrid(x_vals, y_vals)
x = x.flatten()
y = y.flatten()
ax_test = fig_test.subplots()
ax_test.set_xscale('log')
ax_test.set_yscale('log')
ax_test.margins = 0
ax_test.scatter(x, y)
ax_ref = fig_ref.subplots()
ax_ref.set_xscale('log')
ax_ref.set_yscale('log')
ax_ref.plot(x, y, marker='o', ls='')
```

## Next Steps


---

*Source: test_collections.py:338 | Complexity: Advanced | Last updated: 2026-02-20*