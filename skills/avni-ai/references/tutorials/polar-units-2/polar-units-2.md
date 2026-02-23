# How To: Polar Units 2

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test polar units 2

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Call units.register()

```python
units.register()
```

**Verification:**
```python
assert isinstance(plt.gca().xaxis.get_major_formatter(), units.UnitDblFormatter)
```

### Step 2: Assign xs = value

```python
xs = [30.0, 45.0, 60.0, 90.0]
```

### Step 3: Assign xs_deg = value

```python
xs_deg = [x * units.deg for x in xs]
```

### Step 4: Assign ys = value

```python
ys = [1.0, 2.0, 3.0, 4.0]
```

### Step 5: Assign ys_km = value

```python
ys_km = [y * units.km for y in ys]
```

### Step 6: Call plt.figure()

```python
plt.figure(fig_test.number)
```

### Step 7: Call plt.polar()

```python
plt.polar(xs_deg, ys_km, thetaunits='rad', runits='km')
```

**Verification:**
```python
assert isinstance(plt.gca().xaxis.get_major_formatter(), units.UnitDblFormatter)
```

### Step 8: Assign ax = fig_ref.add_subplot(...)

```python
ax = fig_ref.add_subplot(projection='polar')
```

### Step 9: Call ax.plot()

```python
ax.plot(np.deg2rad(xs), ys)
```

### Step 10: Call ax.xaxis.set_major_formatter()

```python
ax.xaxis.set_major_formatter(mpl.ticker.FuncFormatter('{:.12}'.format))
```

### Step 11: Call ax.set()

```python
ax.set(xlabel='rad', ylabel='km')
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
import matplotlib.testing.jpl_units as units
units.register()
xs = [30.0, 45.0, 60.0, 90.0]
xs_deg = [x * units.deg for x in xs]
ys = [1.0, 2.0, 3.0, 4.0]
ys_km = [y * units.km for y in ys]
plt.figure(fig_test.number)
plt.polar(xs_deg, ys_km, thetaunits='rad', runits='km')
assert isinstance(plt.gca().xaxis.get_major_formatter(), units.UnitDblFormatter)
ax = fig_ref.add_subplot(projection='polar')
ax.plot(np.deg2rad(xs), ys)
ax.xaxis.set_major_formatter(mpl.ticker.FuncFormatter('{:.12}'.format))
ax.set(xlabel='rad', ylabel='km')
```

## Next Steps


---

*Source: test_polar.py:127 | Complexity: Advanced | Last updated: 2026-02-20*