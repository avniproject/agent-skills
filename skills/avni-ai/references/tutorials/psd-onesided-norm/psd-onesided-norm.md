# How To: Psd Onesided Norm

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test psd onesided norm

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign u = np.array(...)

```python
u = np.array([0, 1, 2, 3, 1, 2, 1])
```

**Verification:**
```python
assert_allclose(P, Su_1side, atol=1e-06)
```

### Step 2: Assign dt = 1.0

```python
dt = 1.0
```

### Step 3: Assign Su = value

```python
Su = np.abs(np.fft.fft(u) * dt) ** 2 / (dt * u.size)
```

### Step 4: Assign unknown = mlab.psd(...)

```python
P, f = mlab.psd(u, NFFT=u.size, Fs=1 / dt, window=mlab.window_none, detrend=mlab.detrend_none, noverlap=0, pad_to=None, scale_by_freq=None, sides='onesided')
```

### Step 5: Assign Su_1side = np.append(...)

```python
Su_1side = np.append([Su[0]], Su[1:4] + Su[4:][::-1])
```

### Step 6: Call assert_allclose()

```python
assert_allclose(P, Su_1side, atol=1e-06)
```


## Complete Example

```python
# Workflow
u = np.array([0, 1, 2, 3, 1, 2, 1])
dt = 1.0
Su = np.abs(np.fft.fft(u) * dt) ** 2 / (dt * u.size)
P, f = mlab.psd(u, NFFT=u.size, Fs=1 / dt, window=mlab.window_none, detrend=mlab.detrend_none, noverlap=0, pad_to=None, scale_by_freq=None, sides='onesided')
Su_1side = np.append([Su[0]], Su[1:4] + Su[4:][::-1])
assert_allclose(P, Su_1side, atol=1e-06)
```

## Next Steps


---

*Source: test_mlab.py:1000 | Complexity: Intermediate | Last updated: 2026-02-20*