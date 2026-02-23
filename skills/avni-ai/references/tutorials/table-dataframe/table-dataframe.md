# How To: Table Dataframe

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test table dataframe

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
# Fixtures: pd
```

## Step-by-Step Guide

### Step 1: Assign data = value

```python
data = {'Letter': ['A', 'B', 'C'], 'Number': [100, 200, 300]}
```

**Verification:**
```python
assert table[r if r == 0 else r + 1, c].get_text().get_text() == str(col)
```

### Step 2: Assign df = pd.DataFrame(...)

```python
df = pd.DataFrame(data)
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Assign table = ax.table(...)

```python
table = ax.table(df, loc='center')
```

**Verification:**
```python
assert table[r if r == 0 else r + 1, c].get_text().get_text() == str(col)
```


## Complete Example

```python
# Setup
# Fixtures: pd

# Workflow
data = {'Letter': ['A', 'B', 'C'], 'Number': [100, 200, 300]}
df = pd.DataFrame(data)
fig, ax = plt.subplots()
table = ax.table(df, loc='center')
for r, (index, row) in enumerate(df.iterrows()):
    for c, col in enumerate(df.columns if r == 0 else row.values):
        assert table[r if r == 0 else r + 1, c].get_text().get_text() == str(col)
```

## Next Steps


---

*Source: test_table.py:257 | Complexity: Intermediate | Last updated: 2026-02-20*