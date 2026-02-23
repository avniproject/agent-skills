# How To: Cohere

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test cohere

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign N = 1024

```python
N = 1024
```

**Verification:**
```python
assert_allclose(np.mean(cohsq), 0.837, atol=0.001)
```

### Step 2: Call np.random.seed()

```python
np.random.seed(19680801)
```

**Verification:**
```python
assert np.isreal(np.mean(cohsq))
```

### Step 3: Assign x = np.random.randn(...)

```python
x = np.random.randn(N)
```

### Step 4: Assign y = np.roll(...)

```python
y = np.roll(x, 20)
```

### Step 5: Assign y = np.convolve(...)

```python
y = np.convolve(y, np.ones(20) / 20.0, mode='same')
```

### Step 6: Assign unknown = mlab.cohere(...)

```python
cohsq, f = mlab.cohere(x, y, NFFT=256, Fs=2, noverlap=128)
```

### Step 7: Call assert_allclose()

```python
assert_allclose(np.mean(cohsq), 0.837, atol=0.001)
```

**Verification:**
```python
assert np.isreal(np.mean(cohsq))
```


## Complete Example

```python
# Workflow
N = 1024
np.random.seed(19680801)
x = np.random.randn(N)
y = np.roll(x, 20)
y = np.convolve(y, np.ones(20) / 20.0, mode='same')
cohsq, f = mlab.cohere(x, y, NFFT=256, Fs=2, noverlap=128)
assert_allclose(np.mean(cohsq), 0.837, atol=0.001)
assert np.isreal(np.mean(cohsq))
```

## Next Steps


---

*Source: test_mlab.py:801 | Complexity: Intermediate | Last updated: 2026-02-20*