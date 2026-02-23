# How To: Axes Kwargs

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test axes kwargs

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
assert ax is not None
```

### Step 2: Assign ax = plt.axes(...)

```python
ax = plt.axes()
```

**Verification:**
```python
assert ax1 is not ax
```

### Step 3: Assign ax1 = plt.axes(...)

```python
ax1 = plt.axes()
```

**Verification:**
```python
assert ax is not None
```

### Step 4: Call plt.close()

```python
plt.close()
```

**Verification:**
```python
assert ax1 is not ax
```

### Step 5: Call plt.figure()

```python
plt.figure()
```

**Verification:**
```python
assert ax is not None
```

### Step 6: Assign ax = plt.axes(...)

```python
ax = plt.axes(projection='polar')
```

**Verification:**
```python
assert ax1.name == 'rectilinear'
```

### Step 7: Assign ax1 = plt.axes(...)

```python
ax1 = plt.axes(projection='polar')
```

**Verification:**
```python
assert ax1 is not ax
```

### Step 8: Call plt.close()

```python
plt.close()
```

### Step 9: Call plt.figure()

```python
plt.figure()
```

### Step 10: Assign ax = plt.axes(...)

```python
ax = plt.axes(projection='polar')
```

### Step 11: Assign ax1 = plt.axes(...)

```python
ax1 = plt.axes()
```

**Verification:**
```python
assert ax is not None
```

### Step 12: Call plt.close()

```python
plt.close()
```


## Complete Example

```python
# Workflow
plt.figure()
ax = plt.axes()
ax1 = plt.axes()
assert ax is not None
assert ax1 is not ax
plt.close()
plt.figure()
ax = plt.axes(projection='polar')
ax1 = plt.axes(projection='polar')
assert ax is not None
assert ax1 is not ax
plt.close()
plt.figure()
ax = plt.axes(projection='polar')
ax1 = plt.axes()
assert ax is not None
assert ax1.name == 'rectilinear'
assert ax1 is not ax
plt.close()
```

## Next Steps


---

*Source: test_pyplot.py:180 | Complexity: Advanced | Last updated: 2026-02-20*