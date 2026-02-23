# How To: Table Bbox

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test table bbox

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign data = value

```python
data = [[2, 3], [4, 5]]
```

### Step 2: Assign col_labels = value

```python
col_labels = ('Foo', 'Bar')
```

### Step 3: Assign row_labels = value

```python
row_labels = ('Ada', 'Bob')
```

### Step 4: Assign cell_text = value

```python
cell_text = [[f'{x}' for x in row] for row in data]
```

### Step 5: Assign ax_list = fig_test.subplots(...)

```python
ax_list = fig_test.subplots()
```

### Step 6: Call ax_list.table()

```python
ax_list.table(cellText=cell_text, rowLabels=row_labels, colLabels=col_labels, loc='center', bbox=[0.1, 0.2, 0.8, 0.6])
```

### Step 7: Assign ax_bbox = fig_ref.subplots(...)

```python
ax_bbox = fig_ref.subplots()
```

### Step 8: Call ax_bbox.table()

```python
ax_bbox.table(cellText=cell_text, rowLabels=row_labels, colLabels=col_labels, loc='center', bbox=Bbox.from_extents(0.1, 0.2, 0.9, 0.8))
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
data = [[2, 3], [4, 5]]
col_labels = ('Foo', 'Bar')
row_labels = ('Ada', 'Bob')
cell_text = [[f'{x}' for x in row] for row in data]
ax_list = fig_test.subplots()
ax_list.table(cellText=cell_text, rowLabels=row_labels, colLabels=col_labels, loc='center', bbox=[0.1, 0.2, 0.8, 0.6])
ax_bbox = fig_ref.subplots()
ax_bbox.table(cellText=cell_text, rowLabels=row_labels, colLabels=col_labels, loc='center', bbox=Bbox.from_extents(0.1, 0.2, 0.9, 0.8))
```

## Next Steps


---

*Source: test_table.py:200 | Complexity: Advanced | Last updated: 2026-02-20*