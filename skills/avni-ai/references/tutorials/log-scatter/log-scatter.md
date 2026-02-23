# How To: Log Scatter

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Issue #1799

## Prerequisites

**Required Modules:**
- `copy`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.scale`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`
- `numpy`
- `numpy.testing`
- `io`
- `pytest`


## Step-by-Step Guide

### Step 1: 'Issue #1799'

```python
'Issue #1799'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(1)
```

### Step 3: Assign x = np.arange(...)

```python
x = np.arange(10)
```

### Step 4: Assign y = value

```python
y = np.arange(10) - 1
```

### Step 5: Call ax.scatter()

```python
ax.scatter(x, y)
```

### Step 6: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 7: Call fig.savefig()

```python
fig.savefig(buf, format='pdf')
```

### Step 8: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 9: Call fig.savefig()

```python
fig.savefig(buf, format='eps')
```

### Step 10: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 11: Call fig.savefig()

```python
fig.savefig(buf, format='svg')
```


## Complete Example

```python
# Workflow
'Issue #1799'
fig, ax = plt.subplots(1)
x = np.arange(10)
y = np.arange(10) - 1
ax.scatter(x, y)
buf = io.BytesIO()
fig.savefig(buf, format='pdf')
buf = io.BytesIO()
fig.savefig(buf, format='eps')
buf = io.BytesIO()
fig.savefig(buf, format='svg')
```

## Next Steps


---

*Source: test_scale.py:75 | Complexity: Advanced | Last updated: 2026-02-20*