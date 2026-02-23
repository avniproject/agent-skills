# How To: Bad Masked Sizes

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test error handling when given differing sized masked arrays.

## Prerequisites

**Required Modules:**
- `platform`
- `sys`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: 'Test error handling when given differing sized masked arrays.'

```python
'Test error handling when given differing sized masked arrays.'
```

### Step 2: Assign x = np.arange(...)

```python
x = np.arange(3)
```

### Step 3: Assign y = np.arange(...)

```python
y = np.arange(3)
```

### Step 4: Assign u = np.ma.array(...)

```python
u = np.ma.array(15.0 * np.ones((4,)))
```

### Step 5: Assign v = np.ma.array(...)

```python
v = np.ma.array(15.0 * np.ones_like(u))
```

### Step 6: Assign unknown = value

```python
u[1] = np.ma.masked
```

### Step 7: Assign unknown = value

```python
v[1] = np.ma.masked
```

### Step 8: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 9: Call ax.barbs()

```python
ax.barbs(x, y, u, v)
```


## Complete Example

```python
# Workflow
'Test error handling when given differing sized masked arrays.'
x = np.arange(3)
y = np.arange(3)
u = np.ma.array(15.0 * np.ones((4,)))
v = np.ma.array(15.0 * np.ones_like(u))
u[1] = np.ma.masked
v[1] = np.ma.masked
fig, ax = plt.subplots()
with pytest.raises(ValueError):
    ax.barbs(x, y, u, v)
```

## Next Steps


---

*Source: test_quiver.py:225 | Complexity: Advanced | Last updated: 2026-02-20*