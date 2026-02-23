# How To: Psd Window Flattop

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test psd window flattop

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign a = value

```python
a = [0.21557895, 0.41663158, 0.277263158, 0.083578947, 0.006947368]
```

**Verification:**
```python
assert_allclose(spec * win.sum() ** 2, spec_a * self.Fs * (win ** 2).sum(), atol=1e-08)
```

### Step 2: Assign fac = np.linspace(...)

```python
fac = np.linspace(-np.pi, np.pi, self.NFFT_density_real)
```

### Step 3: Assign win = np.zeros(...)

```python
win = np.zeros(self.NFFT_density_real)
```

### Step 4: Assign unknown = mlab.psd(...)

```python
spec, fsp = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=win, scale_by_freq=False)
```

### Step 5: Assign unknown = mlab.psd(...)

```python
spec_a, fsp_a = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=win)
```

### Step 6: Call assert_allclose()

```python
assert_allclose(spec * win.sum() ** 2, spec_a * self.Fs * (win ** 2).sum(), atol=1e-08)
```


## Complete Example

```python
# Workflow
a = [0.21557895, 0.41663158, 0.277263158, 0.083578947, 0.006947368]
fac = np.linspace(-np.pi, np.pi, self.NFFT_density_real)
win = np.zeros(self.NFFT_density_real)
for k in range(len(a)):
    win += a[k] * np.cos(k * fac)
spec, fsp = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=win, scale_by_freq=False)
spec_a, fsp_a = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=win)
assert_allclose(spec * win.sum() ** 2, spec_a * self.Fs * (win ** 2).sum(), atol=1e-08)
```

## Next Steps


---

*Source: test_mlab.py:594 | Complexity: Intermediate | Last updated: 2026-02-20*