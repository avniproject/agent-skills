# How To: Psd Detrend

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test psd detrend

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`

**Setup Required:**
```python
# Fixtures: make_data, detrend
```

## Step-by-Step Guide

### Step 1: Assign ydata = make_data(...)

```python
ydata = make_data(self.NFFT_density)
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

### Step 4: Assign ydata = np.vstack(...)

```python
ydata = np.vstack([ydata1, ydata2])
```

**Verification:**
```python
assert_allclose(spec_b, spec_c, atol=1e-08)
```

### Step 5: Assign ydata = np.tile(...)

```python
ydata = np.tile(ydata, (20, 1))
```

### Step 6: Assign ydatab = ydata.T.flatten(...)

```python
ydatab = ydata.T.flatten()
```

### Step 7: Assign ydata = ydata.flatten(...)

```python
ydata = ydata.flatten()
```

### Step 8: Assign ycontrol = np.zeros_like(...)

```python
ycontrol = np.zeros_like(ydata)
```

### Step 9: Assign unknown = mlab.psd(...)

```python
spec_g, fsp_g = mlab.psd(x=ydata, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, detrend=detrend)
```

### Step 10: Assign unknown = mlab.psd(...)

```python
spec_b, fsp_b = mlab.psd(x=ydatab, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, detrend=detrend)
```

### Step 11: Assign unknown = mlab.psd(...)

```python
spec_c, fsp_c = mlab.psd(x=ycontrol, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides)
```

### Step 12: Call assert_array_equal()

```python
assert_array_equal(fsp_g, fsp_c)
```

### Step 13: Call assert_array_equal()

```python
assert_array_equal(fsp_b, fsp_c)
```

### Step 14: Call assert_allclose()

```python
assert_allclose(spec_g, spec_c, atol=1e-08)
```

### Step 15: Call assert_allclose()

```python
assert_allclose(spec_b, spec_c, atol=1e-08)
```


## Complete Example

```python
# Setup
# Fixtures: make_data, detrend

# Workflow
if self.NFFT_density is None:
    return
ydata = make_data(self.NFFT_density)
ydata1 = ydata + 5
ydata2 = ydata + 3.3
ydata = np.vstack([ydata1, ydata2])
ydata = np.tile(ydata, (20, 1))
ydatab = ydata.T.flatten()
ydata = ydata.flatten()
ycontrol = np.zeros_like(ydata)
spec_g, fsp_g = mlab.psd(x=ydata, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, detrend=detrend)
spec_b, fsp_b = mlab.psd(x=ydatab, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides, detrend=detrend)
spec_c, fsp_c = mlab.psd(x=ycontrol, NFFT=self.NFFT_density, Fs=self.Fs, noverlap=0, sides=self.sides)
assert_array_equal(fsp_g, fsp_c)
assert_array_equal(fsp_b, fsp_c)
assert_allclose(spec_g, spec_c, atol=1e-08)
with pytest.raises(AssertionError):
    assert_allclose(spec_b, spec_c, atol=1e-08)
```

## Next Steps


---

*Source: test_mlab.py:470 | Complexity: Advanced | Last updated: 2026-02-20*