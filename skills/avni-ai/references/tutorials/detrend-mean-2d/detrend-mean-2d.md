# How To: Detrend Mean 2D

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test detrend mean 2d

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign input = np.vstack(...)

```python
input = np.vstack([self.sig_off, self.sig_base + self.sig_off])
```

### Step 2: Assign target = np.vstack(...)

```python
target = np.vstack([self.sig_zeros, self.sig_base])
```

### Step 3: Call self.allclose()

```python
self.allclose(mlab.detrend_mean(input), target)
```

### Step 4: Call self.allclose()

```python
self.allclose(mlab.detrend_mean(input, axis=None), target)
```

### Step 5: Call self.allclose()

```python
self.allclose(mlab.detrend_mean(input.T, axis=None).T, target)
```

### Step 6: Call self.allclose()

```python
self.allclose(mlab.detrend(input), target)
```

### Step 7: Call self.allclose()

```python
self.allclose(mlab.detrend(input, axis=None), target)
```

### Step 8: Call self.allclose()

```python
self.allclose(mlab.detrend(input.T, key='constant', axis=None), target.T)
```

### Step 9: Assign input = np.vstack(...)

```python
input = np.vstack([self.sig_base, self.sig_base + self.sig_off, self.sig_base + self.sig_slope, self.sig_base + self.sig_off + self.sig_slope])
```

### Step 10: Assign target = np.vstack(...)

```python
target = np.vstack([self.sig_base, self.sig_base, self.sig_base + self.sig_slope_mean, self.sig_base + self.sig_slope_mean])
```

### Step 11: Call self.allclose()

```python
self.allclose(mlab.detrend_mean(input.T, axis=0), target.T)
```

### Step 12: Call self.allclose()

```python
self.allclose(mlab.detrend_mean(input, axis=1), target)
```

### Step 13: Call self.allclose()

```python
self.allclose(mlab.detrend_mean(input, axis=-1), target)
```

### Step 14: Call self.allclose()

```python
self.allclose(mlab.detrend(input, key='default', axis=1), target)
```

### Step 15: Call self.allclose()

```python
self.allclose(mlab.detrend(input.T, key='mean', axis=0), target.T)
```

### Step 16: Call self.allclose()

```python
self.allclose(mlab.detrend(input.T, key=mlab.detrend_mean, axis=0), target.T)
```


## Complete Example

```python
# Workflow
input = np.vstack([self.sig_off, self.sig_base + self.sig_off])
target = np.vstack([self.sig_zeros, self.sig_base])
self.allclose(mlab.detrend_mean(input), target)
self.allclose(mlab.detrend_mean(input, axis=None), target)
self.allclose(mlab.detrend_mean(input.T, axis=None).T, target)
self.allclose(mlab.detrend(input), target)
self.allclose(mlab.detrend(input, axis=None), target)
self.allclose(mlab.detrend(input.T, key='constant', axis=None), target.T)
input = np.vstack([self.sig_base, self.sig_base + self.sig_off, self.sig_base + self.sig_slope, self.sig_base + self.sig_off + self.sig_slope])
target = np.vstack([self.sig_base, self.sig_base, self.sig_base + self.sig_slope_mean, self.sig_base + self.sig_slope_mean])
self.allclose(mlab.detrend_mean(input.T, axis=0), target.T)
self.allclose(mlab.detrend_mean(input, axis=1), target)
self.allclose(mlab.detrend_mean(input, axis=-1), target)
self.allclose(mlab.detrend(input, key='default', axis=1), target)
self.allclose(mlab.detrend(input.T, key='mean', axis=0), target.T)
self.allclose(mlab.detrend(input.T, key=mlab.detrend_mean, axis=0), target.T)
```

## Next Steps


---

*Source: test_mlab.py:84 | Complexity: Advanced | Last updated: 2026-02-20*