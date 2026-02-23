# How To: Psd Window Hanning

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test psd window hanning

## Prerequisites

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign ydata = np.arange(...)

```python
ydata = np.arange(self.NFFT_density)
```

**Verification:**
```python
assert_array_equal(fsp_g, fsp_c)
```

### Step 2: Assign ydata1 = value

```python
ydata1 = ydata + 5
```

**Verification:**
```python
assert_array_equal(fsp_b, fsp_c)
```

### Step 3: Assign ydata2 = value

```python
ydata2 = ydata + 3.3
```

**Verification:**
```python
assert_allclose(spec_g, spec_c, atol=1e-08)
```

### Step 4: Assign windowVals = mlab.window_hanning(...)

```python
windowVals = mlab.window_hanning(np.ones_like(ydata1))
```

**Verification:**
```python
assert_allclose(spec_b, spec_c, atol=1e-08)
```

### Step 5: Assign ycontrol1 = value

```python
ycontrol1 = ydata1 * windowVals
```

### Step 6: Assign ycontrol2 = mlab.window_hanning(...)

```python
ycontrol2 = mlab.window_hanning(ydata2)
```

### Step 7: Assign ydata = np.vstack(...)

```python
ydata = np.vstack([ydata1, ydata2])
```

### Step 8: Assign ycontrol = np.vstack(...)

```python
ycontrol = np.vstack([ycontrol1, ycontrol2])
```

### Step 9: Assign ydata = np.tile(...)

```python
ydata = np.tile(ydata, (20, 1))
```

### Step 10: Assign ycontrol = np.tile(...)

```python
ycontrol = np.tile(ycontrol, (20, 1))
```

### Step 11: Assign ydatab = ydata.T.flatten(...)

```python
ydatab = ydata.T.flatten()
```

### Step 12: Assign ydataf = ydata.flatten(...)

```python
ydataf = ydata.flatten()
```

### Step 13: Assign ycontrol = ycontrol.flatten(...)

```python
ycontrol = ycontrol.flatten()
```

### Step 14: Assign unknown = mlab.psd(...)

```python
spec_g, fsp_g = mlab.psd(x=ydataf, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=mlab.window_hanning)
```

### Step 15: Assign unknown = mlab.psd(...)

```python
spec_b, fsp_b = mlab.psd(x=ydatab, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=mlab.window_hanning)
```

### Step 16: Assign unknown = mlab.psd(...)

```python
spec_c, fsp_c = mlab.psd(x=ycontrol, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=mlab.window_none)
```

### Step 17: Call assert_array_equal()

```python
assert_array_equal(fsp_g, fsp_c)
```

### Step 18: Call assert_array_equal()

```python
assert_array_equal(fsp_b, fsp_c)
```

### Step 19: Call assert_allclose()

```python
assert_allclose(spec_g, spec_c, atol=1e-08)
```

### Step 20: Call assert_allclose()

```python
assert_allclose(spec_b, spec_c, atol=1e-08)
```


## Complete Example

```python
# Workflow
if self.NFFT_density is None:
    return
ydata = np.arange(self.NFFT_density)
ydata1 = ydata + 5
ydata2 = ydata + 3.3
windowVals = mlab.window_hanning(np.ones_like(ydata1))
ycontrol1 = ydata1 * windowVals
ycontrol2 = mlab.window_hanning(ydata2)
ydata = np.vstack([ydata1, ydata2])
ycontrol = np.vstack([ycontrol1, ycontrol2])
ydata = np.tile(ydata, (20, 1))
ycontrol = np.tile(ycontrol, (20, 1))
ydatab = ydata.T.flatten()
ydataf = ydata.flatten()
ycontrol = ycontrol.flatten()
spec_g, fsp_g = mlab.psd(x=ydataf, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=mlab.window_hanning)
spec_b, fsp_b = mlab.psd(x=ydatab, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=mlab.window_hanning)
spec_c, fsp_c = mlab.psd(x=ycontrol, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, window=mlab.window_none)
spec_c *= len(ycontrol1) / (windowVals ** 2).sum()
assert_array_equal(fsp_g, fsp_c)
assert_array_equal(fsp_b, fsp_c)
assert_allclose(spec_g, spec_c, atol=1e-08)
with pytest.raises(AssertionError):
    assert_allclose(spec_b, spec_c, atol=1e-08)
```

## Next Steps


---

*Source: test_mlab.py:505 | Complexity: Advanced | Last updated: 2026-02-20*