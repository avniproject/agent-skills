# How To: Psd Oversampling

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test the case len(x) < NFFT for psd().

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: 'Test the case len(x) < NFFT for psd().'

```python
'Test the case len(x) < NFFT for psd().'
```

**Verification:**
```python
assert_almost_equal(np.sum(P), np.sum(Su_1side))
```

### Step 2: Assign u = np.array(...)

```python
u = np.array([0, 1, 2, 3, 1, 2, 1])
```

### Step 3: Assign dt = 1.0

```python
dt = 1.0
```

### Step 4: Assign Su = value

```python
Su = np.abs(np.fft.fft(u) * dt) ** 2 / (dt * u.size)
```

### Step 5: Assign unknown = mlab.psd(...)

```python
P, f = mlab.psd(u, NFFT=u.size * 2, Fs=1 / dt, window=mlab.window_none, detrend=mlab.detrend_none, noverlap=0, pad_to=None, scale_by_freq=None, sides='onesided')
```

### Step 6: Assign Su_1side = np.append(...)

```python
Su_1side = np.append([Su[0]], Su[1:4] + Su[4:][::-1])
```

### Step 7: Call assert_almost_equal()

```python
assert_almost_equal(np.sum(P), np.sum(Su_1side))
```


## Complete Example

```python
# Workflow
'Test the case len(x) < NFFT for psd().'
u = np.array([0, 1, 2, 3, 1, 2, 1])
dt = 1.0
Su = np.abs(np.fft.fft(u) * dt) ** 2 / (dt * u.size)
P, f = mlab.psd(u, NFFT=u.size * 2, Fs=1 / dt, window=mlab.window_none, detrend=mlab.detrend_none, noverlap=0, pad_to=None, scale_by_freq=None, sides='onesided')
Su_1side = np.append([Su[0]], Su[1:4] + Su[4:][::-1])
assert_almost_equal(np.sum(P), np.sum(Su_1side))
```

## Next Steps


---

*Source: test_mlab.py:1012 | Complexity: Intermediate | Last updated: 2026-02-20*