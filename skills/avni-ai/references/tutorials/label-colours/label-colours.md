# How To: Label Colours

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test label colours

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

### Step 1: Assign dim = 3

```python
dim = 3
```

### Step 2: Assign c = np.linspace(...)

```python
c = np.linspace(0, 1, dim)
```

### Step 3: Assign colours = plt.cm.RdYlGn(...)

```python
colours = plt.cm.RdYlGn(c)
```

### Step 4: Assign cellText = value

```python
cellText = [['1'] * dim] * dim
```

### Step 5: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

### Step 6: Assign ax1 = fig.add_subplot(...)

```python
ax1 = fig.add_subplot(4, 1, 1)
```

### Step 7: Call ax1.axis()

```python
ax1.axis('off')
```

### Step 8: Call ax1.table()

```python
ax1.table(cellText=cellText, rowColours=colours, loc='best')
```

### Step 9: Assign ax2 = fig.add_subplot(...)

```python
ax2 = fig.add_subplot(4, 1, 2)
```

### Step 10: Call ax2.axis()

```python
ax2.axis('off')
```

### Step 11: Call ax2.table()

```python
ax2.table(cellText=cellText, rowColours=colours, rowLabels=['Header'] * dim, loc='best')
```

### Step 12: Assign ax3 = fig.add_subplot(...)

```python
ax3 = fig.add_subplot(4, 1, 3)
```

### Step 13: Call ax3.axis()

```python
ax3.axis('off')
```

### Step 14: Call ax3.table()

```python
ax3.table(cellText=cellText, colColours=colours, loc='best')
```

### Step 15: Assign ax4 = fig.add_subplot(...)

```python
ax4 = fig.add_subplot(4, 1, 4)
```

### Step 16: Call ax4.axis()

```python
ax4.axis('off')
```

### Step 17: Call ax4.table()

```python
ax4.table(cellText=cellText, colColours=colours, colLabels=['Header'] * dim, loc='best')
```


## Complete Example

```python
# Workflow
dim = 3
c = np.linspace(0, 1, dim)
colours = plt.cm.RdYlGn(c)
cellText = [['1'] * dim] * dim
fig = plt.figure()
ax1 = fig.add_subplot(4, 1, 1)
ax1.axis('off')
ax1.table(cellText=cellText, rowColours=colours, loc='best')
ax2 = fig.add_subplot(4, 1, 2)
ax2.axis('off')
ax2.table(cellText=cellText, rowColours=colours, rowLabels=['Header'] * dim, loc='best')
ax3 = fig.add_subplot(4, 1, 3)
ax3.axis('off')
ax3.table(cellText=cellText, colColours=colours, loc='best')
ax4 = fig.add_subplot(4, 1, 4)
ax4.axis('off')
ax4.table(cellText=cellText, colColours=colours, colLabels=['Header'] * dim, loc='best')
```

## Next Steps


---

*Source: test_table.py:54 | Complexity: Advanced | Last updated: 2026-02-20*