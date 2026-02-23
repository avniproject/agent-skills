# How To: Minor Ticks

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test minor ticks

## Prerequisites

**Required Modules:**
- `difflib`
- `numpy`
- `sys`
- `pathlib`
- `pytest`
- `matplotlib`
- `matplotlib.testing`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Call plt.figure()

```python
plt.figure()
```

**Verification:**
```python
assert np.all(tick_labels == np.array([], dtype=np.float64))
```

### Step 2: Call plt.plot()

```python
plt.plot(np.arange(1, 10))
```

**Verification:**
```python
assert tick_labels == []
```

### Step 3: Assign unknown = plt.xticks(...)

```python
tick_pos, tick_labels = plt.xticks(minor=True)
```

**Verification:**
```python
assert np.all(tick_pos == np.array([3.5, 6.5]))
```

### Step 4: Call plt.yticks()

```python
plt.yticks(ticks=[3.5, 6.5], labels=['a', 'b'], minor=True)
```

**Verification:**
```python
assert [l.get_text() for l in tick_labels] == ['a', 'b']
```

### Step 5: Assign ax = plt.gca(...)

```python
ax = plt.gca()
```

### Step 6: Assign tick_pos = ax.get_yticks(...)

```python
tick_pos = ax.get_yticks(minor=True)
```

### Step 7: Assign tick_labels = ax.get_yticklabels(...)

```python
tick_labels = ax.get_yticklabels(minor=True)
```

**Verification:**
```python
assert np.all(tick_pos == np.array([3.5, 6.5]))
```


## Complete Example

```python
# Workflow
plt.figure()
plt.plot(np.arange(1, 10))
tick_pos, tick_labels = plt.xticks(minor=True)
assert np.all(tick_labels == np.array([], dtype=np.float64))
assert tick_labels == []
plt.yticks(ticks=[3.5, 6.5], labels=['a', 'b'], minor=True)
ax = plt.gca()
tick_pos = ax.get_yticks(minor=True)
tick_labels = ax.get_yticklabels(minor=True)
assert np.all(tick_pos == np.array([3.5, 6.5]))
assert [l.get_text() for l in tick_labels] == ['a', 'b']
```

## Next Steps


---

*Source: test_pyplot.py:420 | Complexity: Intermediate | Last updated: 2026-02-20*