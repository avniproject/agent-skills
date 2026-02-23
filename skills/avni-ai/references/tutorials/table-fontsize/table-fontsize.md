# How To: Table Fontsize

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test table fontsize

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

### Step 1: Assign tableData = value

```python
tableData = [['a', 1], ['b', 2]]
```

**Verification:**
```python
assert cell_fontsize == test_fontsize, f'Actual:{test_fontsize},got:{cell_fontsize}'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert cell_fontsize == test_fontsize, f'Actual:{test_fontsize},got:{cell_fontsize}'
```

### Step 3: Assign test_fontsize = 20

```python
test_fontsize = 20
```

### Step 4: Assign t = ax.table(...)

```python
t = ax.table(cellText=tableData, loc='top', fontsize=test_fontsize)
```

### Step 5: Assign cell_fontsize = unknown.get_fontsize(...)

```python
cell_fontsize = t[0, 0].get_fontsize()
```

**Verification:**
```python
assert cell_fontsize == test_fontsize, f'Actual:{test_fontsize},got:{cell_fontsize}'
```

### Step 6: Assign cell_fontsize = unknown.get_fontsize(...)

```python
cell_fontsize = t[1, 1].get_fontsize()
```

**Verification:**
```python
assert cell_fontsize == test_fontsize, f'Actual:{test_fontsize},got:{cell_fontsize}'
```


## Complete Example

```python
# Workflow
tableData = [['a', 1], ['b', 2]]
fig, ax = plt.subplots()
test_fontsize = 20
t = ax.table(cellText=tableData, loc='top', fontsize=test_fontsize)
cell_fontsize = t[0, 0].get_fontsize()
assert cell_fontsize == test_fontsize, f'Actual:{test_fontsize},got:{cell_fontsize}'
cell_fontsize = t[1, 1].get_fontsize()
assert cell_fontsize == test_fontsize, f'Actual:{test_fontsize},got:{cell_fontsize}'
```

## Next Steps


---

*Source: test_table.py:274 | Complexity: Intermediate | Last updated: 2026-02-20*