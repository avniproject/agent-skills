# How To: Subplot

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test Subplot

## Prerequisites

**Required Modules:**
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `mpl_toolkits.axisartist.axislines`
- `mpl_toolkits.axisartist`


## Step-by-Step Guide

### Step 1: Assign unknown = 6

```python
plt.rcParams['text.kerning_factor'] = 6
```

### Step 2: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 3: Assign ax = Subplot(...)

```python
ax = Subplot(fig, 1, 1, 1)
```

### Step 4: Call fig.add_subplot()

```python
fig.add_subplot(ax)
```

### Step 5: Assign xx = np.arange(...)

```python
xx = np.arange(0, 2 * np.pi, 0.01)
```

### Step 6: Call ax.plot()

```python
ax.plot(xx, np.sin(xx))
```

### Step 7: Call ax.set_ylabel()

```python
ax.set_ylabel('Test')
```

### Step 8: Call unknown.major_ticks.set_tick_out()

```python
ax.axis['top'].major_ticks.set_tick_out(True)
```

### Step 9: Call unknown.major_ticks.set_tick_out()

```python
ax.axis['bottom'].major_ticks.set_tick_out(True)
```

### Step 10: Call unknown.set_label()

```python
ax.axis['bottom'].set_label('Tk0')
```


## Complete Example

```python
# Workflow
plt.rcParams['text.kerning_factor'] = 6
fig = plt.figure()
ax = Subplot(fig, 1, 1, 1)
fig.add_subplot(ax)
xx = np.arange(0, 2 * np.pi, 0.01)
ax.plot(xx, np.sin(xx))
ax.set_ylabel('Test')
ax.axis['top'].major_ticks.set_tick_out(True)
ax.axis['bottom'].major_ticks.set_tick_out(True)
ax.axis['bottom'].set_label('Tk0')
```

## Next Steps


---

*Source: test_axislines.py:32 | Complexity: Advanced | Last updated: 2026-02-20*