# How To: Ticklabels

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test ticklabels

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

### Step 5: Call ax.plot()

```python
ax.plot([0.2, 0.4], [0.5, 0.5], 'o')
```

### Step 6: Assign ticks = Ticks(...)

```python
ticks = Ticks(ticksize=10, axis=ax.xaxis)
```

### Step 7: Call ax.add_artist()

```python
ax.add_artist(ticks)
```

### Step 8: Assign locs_angles_labels = value

```python
locs_angles_labels = [((0.2, 0.5), -90, '0.2'), ((0.4, 0.5), -120, '0.4')]
```

### Step 9: Assign tick_locs_angles = value

```python
tick_locs_angles = [(xy, a + 180) for xy, a, l in locs_angles_labels]
```

### Step 10: Call ticks.set_locs_angles()

```python
ticks.set_locs_angles(tick_locs_angles)
```

### Step 11: Assign ticklabels = TickLabels(...)

```python
ticklabels = TickLabels(axis_direction='left')
```

### Step 12: Assign ticklabels._locs_angles_labels = locs_angles_labels

```python
ticklabels._locs_angles_labels = locs_angles_labels
```

### Step 13: Call ticklabels.set_pad()

```python
ticklabels.set_pad(10)
```

### Step 14: Call ax.add_artist()

```python
ax.add_artist(ticklabels)
```

### Step 15: Call ax.plot()

```python
ax.plot([0.5], [0.5], 's')
```

### Step 16: Assign axislabel = AxisLabel(...)

```python
axislabel = AxisLabel(0.5, 0.5, 'Test')
```

### Step 17: Assign axislabel._offset_radius = 20

```python
axislabel._offset_radius = 20
```

### Step 18: Assign axislabel._ref_angle = 0

```python
axislabel._ref_angle = 0
```

### Step 19: Call axislabel.set_axis_direction()

```python
axislabel.set_axis_direction('bottom')
```

### Step 20: Call ax.add_artist()

```python
ax.add_artist(axislabel)
```

### Step 21: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```

### Step 22: Call ax.set_ylim()

```python
ax.set_ylim(0, 1)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig, ax = plt.subplots()
ax.xaxis.set_visible(False)
ax.yaxis.set_visible(False)
ax.plot([0.2, 0.4], [0.5, 0.5], 'o')
ticks = Ticks(ticksize=10, axis=ax.xaxis)
ax.add_artist(ticks)
locs_angles_labels = [((0.2, 0.5), -90, '0.2'), ((0.4, 0.5), -120, '0.4')]
tick_locs_angles = [(xy, a + 180) for xy, a, l in locs_angles_labels]
ticks.set_locs_angles(tick_locs_angles)
ticklabels = TickLabels(axis_direction='left')
ticklabels._locs_angles_labels = locs_angles_labels
ticklabels.set_pad(10)
ax.add_artist(ticklabels)
ax.plot([0.5], [0.5], 's')
axislabel = AxisLabel(0.5, 0.5, 'Test')
axislabel._offset_radius = 20
axislabel._ref_angle = 0
axislabel.set_axis_direction('bottom')
ax.add_artist(axislabel)
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
```

## Next Steps


---

*Source: test_axis_artist.py:45 | Complexity: Advanced | Last updated: 2026-02-20*