# How To: Psd Windowarray Scale By Freq

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test psd windowarray scale by freq

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign win = mlab.window_hanning(...)

```python
win = mlab.window_hanning(np.ones(self.NFFT_density_real))
```

**Verification:**
```python
assert_array_equal(fsp, fsp_s)
```

### Step 2: Assign unknown = mlab.psd(...)

```python
spec, fsp = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=self.nover_density, pad_to=self.pad_to_density, sides=self.sides, window=mlab.window_hanning)
```

**Verification:**
```python
assert_array_equal(fsp, fsp_n)
```

### Step 3: Assign unknown = mlab.psd(...)

```python
spec_s, fsp_s = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=self.nover_density, pad_to=self.pad_to_density, sides=self.sides, window=mlab.window_hanning, scale_by_freq=True)
```

**Verification:**
```python
assert_array_equal(spec, spec_s)
```

### Step 4: Assign unknown = mlab.psd(...)

```python
spec_n, fsp_n = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=self.nover_density, pad_to=self.pad_to_density, sides=self.sides, window=mlab.window_hanning, scale_by_freq=False)
```

**Verification:**
```python
assert_allclose(spec_s * (win ** 2).sum(), spec_n / self.Fs * win.sum() ** 2, atol=1e-08)
```

### Step 5: Call assert_array_equal()

```python
assert_array_equal(fsp, fsp_s)
```

### Step 6: Call assert_array_equal()

```python
assert_array_equal(fsp, fsp_n)
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(spec, spec_s)
```

### Step 8: Call assert_allclose()

```python
assert_allclose(spec_s * (win ** 2).sum(), spec_n / self.Fs * win.sum() ** 2, atol=1e-08)
```


## Complete Example

```python
# Workflow
win = mlab.window_hanning(np.ones(self.NFFT_density_real))
spec, fsp = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=self.nover_density, pad_to=self.pad_to_density, sides=self.sides, window=mlab.window_hanning)
spec_s, fsp_s = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=self.nover_density, pad_to=self.pad_to_density, sides=self.sides, window=mlab.window_hanning, scale_by_freq=True)
spec_n, fsp_n = mlab.psd(x=self.y, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=self.nover_density, pad_to=self.pad_to_density, sides=self.sides, window=mlab.window_hanning, scale_by_freq=False)
assert_array_equal(fsp, fsp_s)
assert_array_equal(fsp, fsp_n)
assert_array_equal(spec, spec_s)
assert_allclose(spec_s * (win ** 2).sum(), spec_n / self.Fs * win.sum() ** 2, atol=1e-08)
```

## Next Steps


---

*Source: test_mlab.py:633 | Complexity: Advanced | Last updated: 2026-02-20*