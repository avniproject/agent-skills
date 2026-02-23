# How To: Axis Artist

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axis artist

## Prerequisites

**Required Modules:**
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `mpl_toolkits.axisartist`
- `mpl_toolkits.axisartist.axis_artist`


## Step-by-Step Guide

### Step 1: Assign unknown = 6

```python
plt.rcParams['text.kerning_factor'] = 6
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Call ax.xaxis.set_visible()

```python
ax.xaxis.set_visible(False)
```

### Step 4: Call ax.yaxis.set_visible()

```python
ax.yaxis.set_visible(False)
```

### Step 5: Call axisline.set_label()

```python
axisline.set_label('TTT')
```

### Step 6: Call axisline.major_ticks.set_tick_out()

```python
axisline.major_ticks.set_tick_out(False)
```

### Step 7: Call axisline.label.set_pad()

```python
axisline.label.set_pad(5)
```

### Step 8: Call ax.set_ylabel()

```python
ax.set_ylabel('Test')
```

### Step 9: Assign helper = AxisArtistHelperRectlinear.Fixed(...)

```python
helper = AxisArtistHelperRectlinear.Fixed(ax, loc=loc)
```

### Step 10: Assign axisline = AxisArtist(...)

```python
axisline = AxisArtist(ax, helper, offset=None, axis_direction=loc)
```

### Step 11: Call ax.add_artist()

```python
ax.add_artist(axisline)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig, ax = plt.subplots()
ax.xaxis.set_visible(False)
ax.yaxis.set_visible(False)
for loc in ('left', 'right', 'bottom'):
    helper = AxisArtistHelperRectlinear.Fixed(ax, loc=loc)
    axisline = AxisArtist(ax, helper, offset=None, axis_direction=loc)
    ax.add_artist(axisline)
axisline.set_label('TTT')
axisline.major_ticks.set_tick_out(False)
axisline.label.set_pad(5)
ax.set_ylabel('Test')
```

## Next Steps


---

*Source: test_axis_artist.py:80 | Complexity: Advanced | Last updated: 2026-02-20*