# How To: Labelbase

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test labelbase

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

### Step 3: Call ax.plot()

```python
ax.plot([0.5], [0.5], 'o')
```

### Step 4: Assign label = LabelBase(...)

```python
label = LabelBase(0.5, 0.5, 'Test')
```

### Step 5: Assign label._ref_angle = value

```python
label._ref_angle = -90
```

### Step 6: Assign label._offset_radius = 50

```python
label._offset_radius = 50
```

### Step 7: Call label.set_rotation()

```python
label.set_rotation(-90)
```

### Step 8: Call label.set()

```python
label.set(ha='center', va='top')
```

### Step 9: Call ax.add_artist()

```python
ax.add_artist(label)
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig, ax = plt.subplots()
ax.plot([0.5], [0.5], 'o')
label = LabelBase(0.5, 0.5, 'Test')
label._ref_angle = -90
label._offset_radius = 50
label.set_rotation(-90)
label.set(ha='center', va='top')
ax.add_artist(label)
```

## Next Steps


---

*Source: test_axis_artist.py:28 | Complexity: Advanced | Last updated: 2026-02-20*