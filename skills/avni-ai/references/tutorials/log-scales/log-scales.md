# How To: Log Scales

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test log scales

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `copy`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.scale`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`
- `numpy`
- `numpy.testing`
- `io`
- `pytest`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign ax_test = fig_test.add_subplot(...)

```python
ax_test = fig_test.add_subplot(122, yscale='log', xscale='symlog')
```

### Step 2: Call ax_test.axvline()

```python
ax_test.axvline(24.1)
```

### Step 3: Call ax_test.axhline()

```python
ax_test.axhline(24.1)
```

### Step 4: Assign xlim = ax_test.get_xlim(...)

```python
xlim = ax_test.get_xlim()
```

### Step 5: Assign ylim = ax_test.get_ylim(...)

```python
ylim = ax_test.get_ylim()
```

### Step 6: Assign ax_ref = fig_ref.add_subplot(...)

```python
ax_ref = fig_ref.add_subplot(122, yscale='log', xscale='symlog')
```

### Step 7: Call ax_ref.set()

```python
ax_ref.set(xlim=xlim, ylim=ylim)
```

### Step 8: Call ax_ref.plot()

```python
ax_ref.plot([24.1, 24.1], ylim, 'b')
```

### Step 9: Call ax_ref.plot()

```python
ax_ref.plot(xlim, [24.1, 24.1], 'b')
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
ax_test = fig_test.add_subplot(122, yscale='log', xscale='symlog')
ax_test.axvline(24.1)
ax_test.axhline(24.1)
xlim = ax_test.get_xlim()
ylim = ax_test.get_ylim()
ax_ref = fig_ref.add_subplot(122, yscale='log', xscale='symlog')
ax_ref.set(xlim=xlim, ylim=ylim)
ax_ref.plot([24.1, 24.1], ylim, 'b')
ax_ref.plot(xlim, [24.1, 24.1], 'b')
```

## Next Steps


---

*Source: test_scale.py:19 | Complexity: Advanced | Last updated: 2026-02-20*