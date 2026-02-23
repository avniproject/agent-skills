# How To: Zorder

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test zorder

## Prerequisites

**Required Modules:**
- `datetime`
- `unittest.mock`
- `numpy`
- `matplotlib.pyplot`
- `matplotlib.path`
- `matplotlib.table`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `matplotlib.units`


## Step-by-Step Guide

### Step 1: Assign data = value

```python
data = [[66386, 174296], [58230, 381139]]
```

### Step 2: Assign colLabels = value

```python
colLabels = ('Freeze', 'Wind')
```

### Step 3: Assign rowLabels = value

```python
rowLabels = ['%d year' % x for x in (100, 50)]
```

### Step 4: Assign cellText = value

```python
cellText = []
```

### Step 5: Assign yoff = np.zeros(...)

```python
yoff = np.zeros(len(colLabels))
```

### Step 6: Assign t = np.linspace(...)

```python
t = np.linspace(0, 2 * np.pi, 100)
```

### Step 7: Call plt.plot()

```python
plt.plot(t, np.cos(t), lw=4, zorder=2)
```

### Step 8: Call plt.table()

```python
plt.table(cellText=cellText, rowLabels=rowLabels, colLabels=colLabels, loc='center', zorder=-2)
```

### Step 9: Call plt.table()

```python
plt.table(cellText=cellText, rowLabels=rowLabels, colLabels=colLabels, loc='upper center', zorder=4)
```

### Step 10: Call plt.yticks()

```python
plt.yticks([])
```

### Step 11: Call cellText.append()

```python
cellText.append(['%1.1f' % (x / 1000.0) for x in yoff])
```


## Complete Example

```python
# Workflow
data = [[66386, 174296], [58230, 381139]]
colLabels = ('Freeze', 'Wind')
rowLabels = ['%d year' % x for x in (100, 50)]
cellText = []
yoff = np.zeros(len(colLabels))
for row in reversed(data):
    yoff += row
    cellText.append(['%1.1f' % (x / 1000.0) for x in yoff])
t = np.linspace(0, 2 * np.pi, 100)
plt.plot(t, np.cos(t), lw=4, zorder=2)
plt.table(cellText=cellText, rowLabels=rowLabels, colLabels=colLabels, loc='center', zorder=-2)
plt.table(cellText=cellText, rowLabels=rowLabels, colLabels=colLabels, loc='upper center', zorder=4)
plt.yticks([])
```

## Next Steps


---

*Source: test_table.py:21 | Complexity: Advanced | Last updated: 2026-02-20*