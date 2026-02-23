# How To: Pil Kwargs Webp

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test pil kwargs webp

## Prerequisites

**Required Modules:**
- `io`
- `numpy`
- `numpy.testing`
- `PIL`
- `pytest`
- `matplotlib`
- `matplotlib.backends.backend_agg`
- `matplotlib.figure`
- `matplotlib.image`
- `matplotlib.path`
- `matplotlib.testing.decorators`
- `matplotlib.transforms`
- `PIL.PngImagePlugin`


## Step-by-Step Guide

### Step 1: Call plt.plot()

```python
plt.plot([0, 1, 2], [0, 1, 0])
```

**Verification:**
```python
assert len(pil_kwargs_low) == 1
```

### Step 2: Assign buf_small = io.BytesIO(...)

```python
buf_small = io.BytesIO()
```

**Verification:**
```python
assert len(pil_kwargs_high) == 1
```

### Step 3: Assign pil_kwargs_low = value

```python
pil_kwargs_low = {'quality': 1}
```

**Verification:**
```python
assert buf_large.getbuffer().nbytes > buf_small.getbuffer().nbytes
```

### Step 4: Call plt.savefig()

```python
plt.savefig(buf_small, format='webp', pil_kwargs=pil_kwargs_low)
```

**Verification:**
```python
assert len(pil_kwargs_low) == 1
```

### Step 5: Assign buf_large = io.BytesIO(...)

```python
buf_large = io.BytesIO()
```

### Step 6: Assign pil_kwargs_high = value

```python
pil_kwargs_high = {'quality': 100}
```

### Step 7: Call plt.savefig()

```python
plt.savefig(buf_large, format='webp', pil_kwargs=pil_kwargs_high)
```

**Verification:**
```python
assert len(pil_kwargs_high) == 1
```


## Complete Example

```python
# Workflow
plt.plot([0, 1, 2], [0, 1, 0])
buf_small = io.BytesIO()
pil_kwargs_low = {'quality': 1}
plt.savefig(buf_small, format='webp', pil_kwargs=pil_kwargs_low)
assert len(pil_kwargs_low) == 1
buf_large = io.BytesIO()
pil_kwargs_high = {'quality': 100}
plt.savefig(buf_large, format='webp', pil_kwargs=pil_kwargs_high)
assert len(pil_kwargs_high) == 1
assert buf_large.getbuffer().nbytes > buf_small.getbuffer().nbytes
```

## Next Steps


---

*Source: test_agg.py:253 | Complexity: Intermediate | Last updated: 2026-02-20*