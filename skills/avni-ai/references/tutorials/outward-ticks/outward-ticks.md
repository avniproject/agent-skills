# How To: Outward Ticks

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test automatic use of tight_layout.

## Prerequisites

**Required Modules:**
- `warnings`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.offsetbox`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: 'Test automatic use of tight_layout.'

```python
'Test automatic use of tight_layout.'
```

**Verification:**
```python
assert_array_equal(np.round(ax.get_position().get_points(), 3), expected[nn])
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(221)
```

### Step 4: Call ax.xaxis.set_tick_params()

```python
ax.xaxis.set_tick_params(tickdir='out', length=16, width=3)
```

### Step 5: Call ax.yaxis.set_tick_params()

```python
ax.yaxis.set_tick_params(tickdir='out', length=16, width=3)
```

### Step 6: Call ax.xaxis.set_tick_params()

```python
ax.xaxis.set_tick_params(tickdir='out', length=32, width=3, tick1On=True, which='minor')
```

### Step 7: Call ax.yaxis.set_tick_params()

```python
ax.yaxis.set_tick_params(tickdir='out', length=32, width=3, tick1On=True, which='minor')
```

### Step 8: Call ax.xaxis.set_ticks()

```python
ax.xaxis.set_ticks([0], minor=True)
```

### Step 9: Call ax.yaxis.set_ticks()

```python
ax.yaxis.set_ticks([0], minor=True)
```

### Step 10: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(222)
```

### Step 11: Call ax.xaxis.set_tick_params()

```python
ax.xaxis.set_tick_params(tickdir='in', length=32, width=3)
```

### Step 12: Call ax.yaxis.set_tick_params()

```python
ax.yaxis.set_tick_params(tickdir='in', length=32, width=3)
```

### Step 13: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(223)
```

### Step 14: Call ax.xaxis.set_tick_params()

```python
ax.xaxis.set_tick_params(tickdir='inout', length=32, width=3)
```

### Step 15: Call ax.yaxis.set_tick_params()

```python
ax.yaxis.set_tick_params(tickdir='inout', length=32, width=3)
```

### Step 16: Assign ax = fig.add_subplot(...)

```python
ax = fig.add_subplot(224)
```

### Step 17: Call ax.xaxis.set_tick_params()

```python
ax.xaxis.set_tick_params(tickdir='out', length=32, width=3)
```

### Step 18: Call ax.yaxis.set_tick_params()

```python
ax.yaxis.set_tick_params(tickdir='out', length=32, width=3)
```

### Step 19: Call plt.tight_layout()

```python
plt.tight_layout()
```

### Step 20: Assign expected = value

```python
expected = [[[0.092, 0.605], [0.433, 0.933]], [[0.581, 0.605], [0.922, 0.933]], [[0.092, 0.138], [0.433, 0.466]], [[0.581, 0.138], [0.922, 0.466]]]
```

### Step 21: Call assert_array_equal()

```python
assert_array_equal(np.round(ax.get_position().get_points(), 3), expected[nn])
```


## Complete Example

```python
# Workflow
'Test automatic use of tight_layout.'
fig = plt.figure()
ax = fig.add_subplot(221)
ax.xaxis.set_tick_params(tickdir='out', length=16, width=3)
ax.yaxis.set_tick_params(tickdir='out', length=16, width=3)
ax.xaxis.set_tick_params(tickdir='out', length=32, width=3, tick1On=True, which='minor')
ax.yaxis.set_tick_params(tickdir='out', length=32, width=3, tick1On=True, which='minor')
ax.xaxis.set_ticks([0], minor=True)
ax.yaxis.set_ticks([0], minor=True)
ax = fig.add_subplot(222)
ax.xaxis.set_tick_params(tickdir='in', length=32, width=3)
ax.yaxis.set_tick_params(tickdir='in', length=32, width=3)
ax = fig.add_subplot(223)
ax.xaxis.set_tick_params(tickdir='inout', length=32, width=3)
ax.yaxis.set_tick_params(tickdir='inout', length=32, width=3)
ax = fig.add_subplot(224)
ax.xaxis.set_tick_params(tickdir='out', length=32, width=3)
ax.yaxis.set_tick_params(tickdir='out', length=32, width=3)
plt.tight_layout()
expected = [[[0.092, 0.605], [0.433, 0.933]], [[0.581, 0.605], [0.922, 0.933]], [[0.092, 0.138], [0.433, 0.466]], [[0.581, 0.138], [0.922, 0.466]]]
for nn, ax in enumerate(fig.axes):
    assert_array_equal(np.round(ax.get_position().get_points(), 3), expected[nn])
```

## Next Steps


---

*Source: test_tightlayout.py:156 | Complexity: Advanced | Last updated: 2026-02-20*