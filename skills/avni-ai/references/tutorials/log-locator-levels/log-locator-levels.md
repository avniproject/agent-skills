# How To: Log Locator Levels

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: unittest, workflow, integration

## Overview

Workflow: test log locator levels

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `re`
- `unittest`
- `contourpy`
- `numpy`
- `numpy.testing`
- `matplotlib`
- `matplotlib`
- `matplotlib.colors`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `pytest`
- `matplotlib.contour`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert_array_almost_equal(c.levels, np.power(10.0, np.arange(-6, 3)))
```

### Step 2: Assign N = 100

```python
N = 100
```

**Verification:**
```python
assert_array_almost_equal(cb.ax.get_yticks(), c.levels)
```

### Step 3: Assign x = np.linspace(...)

```python
x = np.linspace(-3.0, 3.0, N)
```

### Step 4: Assign y = np.linspace(...)

```python
y = np.linspace(-2.0, 2.0, N)
```

### Step 5: Assign unknown = np.meshgrid(...)

```python
X, Y = np.meshgrid(x, y)
```

### Step 6: Assign Z1 = np.exp(...)

```python
Z1 = np.exp(-X ** 2 - Y ** 2)
```

### Step 7: Assign Z2 = np.exp(...)

```python
Z2 = np.exp(-(X * 10) ** 2 - (Y * 10) ** 2)
```

### Step 8: Assign data = value

```python
data = Z1 + 50 * Z2
```

### Step 9: Assign c = ax.contourf(...)

```python
c = ax.contourf(data, locator=ticker.LogLocator())
```

### Step 10: Call assert_array_almost_equal()

```python
assert_array_almost_equal(c.levels, np.power(10.0, np.arange(-6, 3)))
```

### Step 11: Assign cb = fig.colorbar(...)

```python
cb = fig.colorbar(c, ax=ax)
```

### Step 12: Call assert_array_almost_equal()

```python
assert_array_almost_equal(cb.ax.get_yticks(), c.levels)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
N = 100
x = np.linspace(-3.0, 3.0, N)
y = np.linspace(-2.0, 2.0, N)
X, Y = np.meshgrid(x, y)
Z1 = np.exp(-X ** 2 - Y ** 2)
Z2 = np.exp(-(X * 10) ** 2 - (Y * 10) ** 2)
data = Z1 + 50 * Z2
c = ax.contourf(data, locator=ticker.LogLocator())
assert_array_almost_equal(c.levels, np.power(10.0, np.arange(-6, 3)))
cb = fig.colorbar(c, ax=ax)
assert_array_almost_equal(cb.ax.get_yticks(), c.levels)
```

## Next Steps


---

*Source: test_contour.py:197 | Complexity: Advanced | Last updated: 2026-02-20*