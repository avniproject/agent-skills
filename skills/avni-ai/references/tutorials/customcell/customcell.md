# How To: Customcell

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test customcell

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

### Step 1: Assign types = value

```python
types = ('horizontal', 'vertical', 'open', 'closed', 'T', 'R', 'B', 'L')
```

**Verification:**
```python
assert c == code
```

### Step 2: Assign codes = value

```python
codes = ((Path.MOVETO, Path.LINETO, Path.MOVETO, Path.LINETO, Path.MOVETO), (Path.MOVETO, Path.MOVETO, Path.LINETO, Path.MOVETO, Path.LINETO), (Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.MOVETO), (Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO, Path.CLOSEPOLY), (Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.LINETO, Path.MOVETO), (Path.MOVETO, Path.MOVETO, Path.LINETO, Path.MOVETO, Path.MOVETO), (Path.MOVETO, Path.LINETO, Path.MOVETO, Path.MOVETO, Path.MOVETO), (Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.LINETO))
```

### Step 3: Assign cell = CustomCell(...)

```python
cell = CustomCell((0, 0), visible_edges=t, width=1, height=1)
```

### Step 4: Assign code = tuple(...)

```python
code = tuple((s for _, s in cell.get_path().iter_segments()))
```

**Verification:**
```python
assert c == code
```


## Complete Example

```python
# Workflow
types = ('horizontal', 'vertical', 'open', 'closed', 'T', 'R', 'B', 'L')
codes = ((Path.MOVETO, Path.LINETO, Path.MOVETO, Path.LINETO, Path.MOVETO), (Path.MOVETO, Path.MOVETO, Path.LINETO, Path.MOVETO, Path.LINETO), (Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.MOVETO), (Path.MOVETO, Path.LINETO, Path.LINETO, Path.LINETO, Path.CLOSEPOLY), (Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.LINETO, Path.MOVETO), (Path.MOVETO, Path.MOVETO, Path.LINETO, Path.MOVETO, Path.MOVETO), (Path.MOVETO, Path.LINETO, Path.MOVETO, Path.MOVETO, Path.MOVETO), (Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.MOVETO, Path.LINETO))
for t, c in zip(types, codes):
    cell = CustomCell((0, 0), visible_edges=t, width=1, height=1)
    code = tuple((s for _, s in cell.get_path().iter_segments()))
    assert c == code
```

## Next Steps


---

*Source: test_table.py:107 | Complexity: Intermediate | Last updated: 2026-02-20*