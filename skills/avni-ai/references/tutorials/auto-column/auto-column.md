# How To: Auto Column

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test auto column

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1)
```

### Step 2: Call ax1.axis()

```python
ax1.axis('off')
```

### Step 3: Assign tb1 = ax1.table(...)

```python
tb1 = ax1.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
```

### Step 4: Call tb1.auto_set_font_size()

```python
tb1.auto_set_font_size(False)
```

### Step 5: Call tb1.set_fontsize()

```python
tb1.set_fontsize(12)
```

### Step 6: Call tb1.auto_set_column_width()

```python
tb1.auto_set_column_width([-1, 0, 1])
```

### Step 7: Call ax2.axis()

```python
ax2.axis('off')
```

### Step 8: Assign tb2 = ax2.table(...)

```python
tb2 = ax2.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
```

### Step 9: Call tb2.auto_set_font_size()

```python
tb2.auto_set_font_size(False)
```

### Step 10: Call tb2.set_fontsize()

```python
tb2.set_fontsize(12)
```

### Step 11: Call tb2.auto_set_column_width()

```python
tb2.auto_set_column_width((-1, 0, 1))
```

### Step 12: Call ax3.axis()

```python
ax3.axis('off')
```

### Step 13: Assign tb3 = ax3.table(...)

```python
tb3 = ax3.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
```

### Step 14: Call tb3.auto_set_font_size()

```python
tb3.auto_set_font_size(False)
```

### Step 15: Call tb3.set_fontsize()

```python
tb3.set_fontsize(12)
```

### Step 16: Call tb3.auto_set_column_width()

```python
tb3.auto_set_column_width(-1)
```

### Step 17: Call tb3.auto_set_column_width()

```python
tb3.auto_set_column_width(0)
```

### Step 18: Call tb3.auto_set_column_width()

```python
tb3.auto_set_column_width(1)
```

### Step 19: Call ax4.axis()

```python
ax4.axis('off')
```

### Step 20: Assign tb4 = ax4.table(...)

```python
tb4 = ax4.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
```

### Step 21: Call tb4.auto_set_font_size()

```python
tb4.auto_set_font_size(False)
```

### Step 22: Call tb4.set_fontsize()

```python
tb4.set_fontsize(12)
```


## Complete Example

```python
# Workflow
fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1)
ax1.axis('off')
tb1 = ax1.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
tb1.auto_set_font_size(False)
tb1.set_fontsize(12)
tb1.auto_set_column_width([-1, 0, 1])
ax2.axis('off')
tb2 = ax2.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
tb2.auto_set_font_size(False)
tb2.set_fontsize(12)
tb2.auto_set_column_width((-1, 0, 1))
ax3.axis('off')
tb3 = ax3.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
tb3.auto_set_font_size(False)
tb3.set_fontsize(12)
tb3.auto_set_column_width(-1)
tb3.auto_set_column_width(0)
tb3.auto_set_column_width(1)
ax4.axis('off')
tb4 = ax4.table(cellText=[['Fit Text', 2], ['very long long text, Longer text than default', 1]], rowLabels=['A', 'B'], colLabels=['Col1', 'Col2'], loc='center')
tb4.auto_set_font_size(False)
tb4.set_fontsize(12)
```

## Next Steps


---

*Source: test_table.py:127 | Complexity: Advanced | Last updated: 2026-02-20*