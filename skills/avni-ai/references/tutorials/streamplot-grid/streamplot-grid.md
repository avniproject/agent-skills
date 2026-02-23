# How To: Streamplot Grid

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test streamplot grid

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`


## Step-by-Step Guide

### Step 1: Assign u = np.ones(...)

```python
u = np.ones((2, 2))
```

### Step 2: Assign v = np.zeros(...)

```python
v = np.zeros((2, 2))
```

### Step 3: Assign x = np.array(...)

```python
x = np.array([[10, 20], [10, 30]])
```

### Step 4: Assign y = np.array(...)

```python
y = np.array([[10, 10], [20, 20]])
```

### Step 5: Assign x = np.array(...)

```python
x = np.array([[10, 20], [10, 20]])
```

### Step 6: Assign y = np.array(...)

```python
y = np.array([[10, 10], [20, 30]])
```

### Step 7: Assign x = np.array(...)

```python
x = np.array([[10, 20], [10, 20]])
```

### Step 8: Assign y = np.array(...)

```python
y = np.array([[10, 10], [20, 20]])
```

### Step 9: Call plt.streamplot()

```python
plt.streamplot(x, y, u, v)
```

### Step 10: Assign x = np.array(...)

```python
x = np.array([0, 10])
```

### Step 11: Assign y = np.array(...)

```python
y = np.array([[[0, 10]]])
```

### Step 12: Assign u = np.ones(...)

```python
u = np.ones((3, 3))
```

### Step 13: Assign v = np.zeros(...)

```python
v = np.zeros((3, 3))
```

### Step 14: Assign x = np.array(...)

```python
x = np.array([0, 10, 20])
```

### Step 15: Assign y = np.array(...)

```python
y = np.array([0, 10, 30])
```

### Step 16: Assign x = np.array(...)

```python
x = np.array([0, 20, 40])
```

### Step 17: Assign y = np.array(...)

```python
y = np.array([0, 20, 10])
```

### Step 18: Call plt.streamplot()

```python
plt.streamplot(x, y, u, v)
```

### Step 19: Call plt.streamplot()

```python
plt.streamplot(x, y, u, v)
```

### Step 20: Call plt.streamplot()

```python
plt.streamplot(x, y, u, v)
```

### Step 21: Call plt.streamplot()

```python
plt.streamplot(x, y, u, v)
```

### Step 22: Call plt.streamplot()

```python
plt.streamplot(x, y, u, v)
```


## Complete Example

```python
# Workflow
u = np.ones((2, 2))
v = np.zeros((2, 2))
x = np.array([[10, 20], [10, 30]])
y = np.array([[10, 10], [20, 20]])
with pytest.raises(ValueError, match="The rows of 'x' must be equal"):
    plt.streamplot(x, y, u, v)
x = np.array([[10, 20], [10, 20]])
y = np.array([[10, 10], [20, 30]])
with pytest.raises(ValueError, match="The columns of 'y' must be equal"):
    plt.streamplot(x, y, u, v)
x = np.array([[10, 20], [10, 20]])
y = np.array([[10, 10], [20, 20]])
plt.streamplot(x, y, u, v)
x = np.array([0, 10])
y = np.array([[[0, 10]]])
with pytest.raises(ValueError, match="'y' can have at maximum 2 dimensions"):
    plt.streamplot(x, y, u, v)
u = np.ones((3, 3))
v = np.zeros((3, 3))
x = np.array([0, 10, 20])
y = np.array([0, 10, 30])
with pytest.raises(ValueError, match="'y' values must be equally spaced"):
    plt.streamplot(x, y, u, v)
x = np.array([0, 20, 40])
y = np.array([0, 20, 10])
with pytest.raises(ValueError, match="'y' must be strictly increasing"):
    plt.streamplot(x, y, u, v)
```

## Next Steps


---

*Source: test_streamplot.py:116 | Complexity: Advanced | Last updated: 2026-02-20*