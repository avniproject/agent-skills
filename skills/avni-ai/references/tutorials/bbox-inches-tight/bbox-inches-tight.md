# How To: Bbox Inches Tight

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bbox inches tight

## Prerequisites

**Required Modules:**
- `io`
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.ticker`
- `PIL`


## Step-by-Step Guide

### Step 1: Assign data = value

```python
data = [[66386, 174296, 75131, 577908, 32015], [58230, 381139, 78045, 99308, 160454], [89135, 80552, 152558, 497981, 603535], [78415, 81858, 150656, 193263, 69638], [139361, 331509, 343164, 781380, 52269]]
```

### Step 2: Assign col_labels, row_labels = value

```python
col_labels = row_labels = [''] * 5
```

### Step 3: Assign rows = len(...)

```python
rows = len(data)
```

### Step 4: Assign ind = value

```python
ind = np.arange(len(col_labels)) + 0.3
```

### Step 5: Assign cell_text = value

```python
cell_text = []
```

### Step 6: Assign width = 0.4

```python
width = 0.4
```

### Step 7: Assign yoff = np.zeros(...)

```python
yoff = np.zeros(len(col_labels))
```

### Step 8: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(1, 1)
```

### Step 9: Call plt.xticks()

```python
plt.xticks([])
```

### Step 10: Call plt.xlim()

```python
plt.xlim(0, 5)
```

### Step 11: Call plt.legend()

```python
plt.legend([''] * 5, loc=(1.2, 0.2))
```

### Step 12: Call fig.legend()

```python
fig.legend([''] * 5, bbox_to_anchor=(0, 0.2), loc='lower left')
```

### Step 13: Call cell_text.reverse()

```python
cell_text.reverse()
```

### Step 14: Call plt.table()

```python
plt.table(cellText=cell_text, rowLabels=row_labels, colLabels=col_labels, loc='bottom')
```

### Step 15: Call ax.bar()

```python
ax.bar(ind, data[row], width, bottom=yoff, align='edge', color='b')
```

### Step 16: Assign yoff = value

```python
yoff = yoff + data[row]
```

### Step 17: Call cell_text.append()

```python
cell_text.append([''])
```


## Complete Example

```python
# Workflow
data = [[66386, 174296, 75131, 577908, 32015], [58230, 381139, 78045, 99308, 160454], [89135, 80552, 152558, 497981, 603535], [78415, 81858, 150656, 193263, 69638], [139361, 331509, 343164, 781380, 52269]]
col_labels = row_labels = [''] * 5
rows = len(data)
ind = np.arange(len(col_labels)) + 0.3
cell_text = []
width = 0.4
yoff = np.zeros(len(col_labels))
fig, ax = plt.subplots(1, 1)
for row in range(rows):
    ax.bar(ind, data[row], width, bottom=yoff, align='edge', color='b')
    yoff = yoff + data[row]
    cell_text.append([''])
plt.xticks([])
plt.xlim(0, 5)
plt.legend([''] * 5, loc=(1.2, 0.2))
fig.legend([''] * 5, bbox_to_anchor=(0, 0.2), loc='lower left')
cell_text.reverse()
plt.table(cellText=cell_text, rowLabels=row_labels, colLabels=col_labels, loc='bottom')
```

## Next Steps


---

*Source: test_bbox_tight.py:15 | Complexity: Advanced | Last updated: 2026-02-20*