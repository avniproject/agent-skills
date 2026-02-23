# How To: Specgram

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test specgram

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `numpy.testing`
- `numpy`
- `pytest`
- `matplotlib`

**Setup Required:**
```python
# Fixtures: kwargs
```

## Step-by-Step Guide

### Step 1: Assign freqs = value

```python
freqs = self.freqs_specgram
```

**Verification:**
```python
assert_allclose(fsp, freqs, atol=1e-06)
```

### Step 2: Assign unknown = mlab.specgram(...)

```python
spec, fsp, t = mlab.specgram(x=self.y, NFFT=self.NFFT_specgram, Fs=self.Fs, noverlap=self.nover_specgram, pad_to=self.pad_to_specgram, sides=self.sides, **kwargs)
```

**Verification:**
```python
assert_allclose(t, self.t_specgram, atol=1e-06)
```

### Step 3: Assign specm = np.mean(...)

```python
specm = np.mean(spec, axis=1)
```

**Verification:**
```python
assert spec.shape[0] == freqs.shape[0]
```

### Step 4: Call assert_allclose()

```python
assert_allclose(fsp, freqs, atol=1e-06)
```

**Verification:**
```python
assert spec.shape[1] == self.t_specgram.shape[0]
```

### Step 5: Call assert_allclose()

```python
assert_allclose(t, self.t_specgram, atol=1e-06)
```

**Verification:**
```python
assert_allclose(np.diff(spec, axis=1).max() / np.abs(spec.max()), 0, atol=0.01)
```

### Step 6: Assign spec = np.abs(...)

```python
spec = np.abs(spec)
```

### Step 7: Call self.check_freqs()

```python
self.check_freqs(specm, freqs, fsp, self.fstims)
```

### Step 8: Call assert_allclose()

```python
assert_allclose(np.diff(spec, axis=1).max() / np.abs(spec.max()), 0, atol=0.01)
```


## Complete Example

```python
# Setup
# Fixtures: kwargs

# Workflow
freqs = self.freqs_specgram
spec, fsp, t = mlab.specgram(x=self.y, NFFT=self.NFFT_specgram, Fs=self.Fs, noverlap=self.nover_specgram, pad_to=self.pad_to_specgram, sides=self.sides, **kwargs)
if kwargs.get('mode') == 'complex':
    spec = np.abs(spec)
specm = np.mean(spec, axis=1)
assert_allclose(fsp, freqs, atol=1e-06)
assert_allclose(t, self.t_specgram, atol=1e-06)
assert spec.shape[0] == freqs.shape[0]
assert spec.shape[1] == self.t_specgram.shape[0]
if kwargs.get('mode') not in ['complex', 'angle', 'phase']:
    if np.abs(spec.max()) != 0:
        assert_allclose(np.diff(spec, axis=1).max() / np.abs(spec.max()), 0, atol=0.01)
if kwargs.get('mode') not in ['angle', 'phase']:
    self.check_freqs(specm, freqs, fsp, self.fstims)
```

## Next Steps


---

*Source: test_mlab.py:683 | Complexity: Advanced | Last updated: 2026-02-20*