# How To: Rasterized Ordering

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test rasterized ordering

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `io`
- `pathlib`
- `xml.etree.ElementTree`
- `xml.parsers.expat`
- `pytest`
- `numpy`
- `matplotlib`
- `matplotlib.figure`
- `matplotlib.patches`
- `matplotlib.text`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib`
- `matplotlib.offsetbox`
- `matplotlib.offsetbox`
- `matplotlib.axis`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign t = value

```python
t = np.arange(0, 100) * 2.3
```

### Step 2: Assign x = np.cos(...)

```python
x = np.cos(t)
```

### Step 3: Assign y = np.sin(...)

```python
y = np.sin(t)
```

### Step 4: Assign ax_ref = fig_ref.subplots(...)

```python
ax_ref = fig_ref.subplots()
```

### Step 5: Call ax_ref.set_xlim()

```python
ax_ref.set_xlim(0, 3)
```

### Step 6: Call ax_ref.set_ylim()

```python
ax_ref.set_ylim(-1.1, 1.1)
```

### Step 7: Call ax_ref.plot()

```python
ax_ref.plot(x, y, '-', c='r', lw=10, rasterized=True)
```

### Step 8: Call ax_ref.plot()

```python
ax_ref.plot(x + 1, y, '-', c='b', lw=10, rasterized=False)
```

### Step 9: Call ax_ref.plot()

```python
ax_ref.plot(x + 2, y, '-', c='g', lw=10, rasterized=True)
```

### Step 10: Call ax_ref.plot()

```python
ax_ref.plot(x + 3, y, '-', c='m', lw=10, rasterized=True)
```

### Step 11: Assign ax_test = fig_test.subplots(...)

```python
ax_test = fig_test.subplots()
```

### Step 12: Call ax_test.set_xlim()

```python
ax_test.set_xlim(0, 3)
```

### Step 13: Call ax_test.set_ylim()

```python
ax_test.set_ylim(-1.1, 1.1)
```

### Step 14: Call ax_test.plot()

```python
ax_test.plot(x, y, '-', c='r', lw=10, rasterized=True, zorder=1.1)
```

### Step 15: Call ax_test.plot()

```python
ax_test.plot(x + 2, y, '-', c='g', lw=10, rasterized=True, zorder=1.3)
```

### Step 16: Call ax_test.plot()

```python
ax_test.plot(x + 3, y, '-', c='m', lw=10, rasterized=True, zorder=1.4)
```

### Step 17: Call ax_test.plot()

```python
ax_test.plot(x + 1, y, '-', c='b', lw=10, rasterized=False, zorder=1.2)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
t = np.arange(0, 100) * 2.3
x = np.cos(t)
y = np.sin(t)
ax_ref = fig_ref.subplots()
ax_ref.set_xlim(0, 3)
ax_ref.set_ylim(-1.1, 1.1)
ax_ref.plot(x, y, '-', c='r', lw=10, rasterized=True)
ax_ref.plot(x + 1, y, '-', c='b', lw=10, rasterized=False)
ax_ref.plot(x + 2, y, '-', c='g', lw=10, rasterized=True)
ax_ref.plot(x + 3, y, '-', c='m', lw=10, rasterized=True)
ax_test = fig_test.subplots()
ax_test.set_xlim(0, 3)
ax_test.set_ylim(-1.1, 1.1)
ax_test.plot(x, y, '-', c='r', lw=10, rasterized=True, zorder=1.1)
ax_test.plot(x + 2, y, '-', c='g', lw=10, rasterized=True, zorder=1.3)
ax_test.plot(x + 3, y, '-', c='m', lw=10, rasterized=True, zorder=1.4)
ax_test.plot(x + 1, y, '-', c='b', lw=10, rasterized=False, zorder=1.2)
```

## Next Steps


---

*Source: test_backend_svg.py:105 | Complexity: Advanced | Last updated: 2026-02-20*