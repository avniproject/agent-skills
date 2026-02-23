# How To: Ticks

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ticks

## Prerequisites

**Required Modules:**
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axisartist`
- `mpl_toolkits.axisartist.axis_artist`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 2: Call ax.xaxis.set_visible()

```python
ax.xaxis.set_visible(False)
```

### Step 3: Call ax.yaxis.set_visible()

```python
ax.yaxis.set_visible(False)
```

### Step 4: Assign locs_angles = value

```python
locs_angles = [((i / 10, 0.0), i * 30) for i in range(-1, 12)]
```

### Step 5: Assign ticks_in = Ticks(...)

```python
ticks_in = Ticks(ticksize=10, axis=ax.xaxis)
```

### Step 6: Call ticks_in.set_locs_angles()

```python
ticks_in.set_locs_angles(locs_angles)
```

### Step 7: Call ax.add_artist()

```python
ax.add_artist(ticks_in)
```

### Step 8: Assign ticks_out = Ticks(...)

```python
ticks_out = Ticks(ticksize=10, tick_out=True, color='C3', axis=ax.xaxis)
```

### Step 9: Call ticks_out.set_locs_angles()

```python
ticks_out.set_locs_angles(locs_angles)
```

### Step 10: Call ax.add_artist()

```python
ax.add_artist(ticks_out)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
ax.xaxis.set_visible(False)
ax.yaxis.set_visible(False)
locs_angles = [((i / 10, 0.0), i * 30) for i in range(-1, 12)]
ticks_in = Ticks(ticksize=10, axis=ax.xaxis)
ticks_in.set_locs_angles(locs_angles)
ax.add_artist(ticks_in)
ticks_out = Ticks(ticksize=10, tick_out=True, color='C3', axis=ax.xaxis)
ticks_out.set_locs_angles(locs_angles)
ax.add_artist(ticks_out)
```

## Next Steps


---

*Source: test_axis_artist.py:10 | Complexity: Advanced | Last updated: 2026-02-20*