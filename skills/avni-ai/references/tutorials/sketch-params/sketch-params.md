# How To: Sketch Params

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test sketch params

## Prerequisites

**Required Modules:**
- `datetime`
- `io`
- `os`
- `shutil`
- `numpy`
- `packaging.version`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.testing`
- `matplotlib.testing.exceptions`
- `matplotlib.testing.compare`
- `matplotlib.backends.backend_pgf`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots(figsize=(3, 3))
```

**Verification:**
```python
assert baseline in buf
```

### Step 2: Call ax.set_xticks()

```python
ax.set_xticks([])
```

### Step 3: Call ax.set_yticks()

```python
ax.set_yticks([])
```

### Step 4: Call ax.set_frame_on()

```python
ax.set_frame_on(False)
```

### Step 5: Assign unknown = ax.plot(...)

```python
handle, = ax.plot([0, 1])
```

### Step 6: Call handle.set_sketch_params()

```python
handle.set_sketch_params(scale=5, length=30, randomness=42)
```

### Step 7: Assign baseline = '\\pgfpathmoveto{\\pgfqpoint{0.375000in}{0.300000in}}%\n\\pgfpathlineto{\\pgfqpoint{2.700000in}{2.700000in}}%\n\\usepgfmodule{decorations}%\n\\usepgflibrary{decorations.pathmorphing}%\n\\pgfkeys{/pgf/decoration/.cd, segment length = 0.150000in, amplitude = 0.100000in}%\n\\pgfmathsetseed{42}%\n\\pgfdecoratecurrentpath{random steps}%\n\\pgfusepath{stroke}%'

```python
baseline = '\\pgfpathmoveto{\\pgfqpoint{0.375000in}{0.300000in}}%\n\\pgfpathlineto{\\pgfqpoint{2.700000in}{2.700000in}}%\n\\usepgfmodule{decorations}%\n\\usepgflibrary{decorations.pathmorphing}%\n\\pgfkeys{/pgf/decoration/.cd, segment length = 0.150000in, amplitude = 0.100000in}%\n\\pgfmathsetseed{42}%\n\\pgfdecoratecurrentpath{random steps}%\n\\pgfusepath{stroke}%'
```

**Verification:**
```python
assert baseline in buf
```

### Step 8: Call fig.savefig()

```python
fig.savefig(fd, format='pgf')
```

### Step 9: Assign buf = fd.getvalue.decode(...)

```python
buf = fd.getvalue().decode()
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots(figsize=(3, 3))
ax.set_xticks([])
ax.set_yticks([])
ax.set_frame_on(False)
handle, = ax.plot([0, 1])
handle.set_sketch_params(scale=5, length=30, randomness=42)
with BytesIO() as fd:
    fig.savefig(fd, format='pgf')
    buf = fd.getvalue().decode()
baseline = '\\pgfpathmoveto{\\pgfqpoint{0.375000in}{0.300000in}}%\n\\pgfpathlineto{\\pgfqpoint{2.700000in}{2.700000in}}%\n\\usepgfmodule{decorations}%\n\\usepgflibrary{decorations.pathmorphing}%\n\\pgfkeys{/pgf/decoration/.cd, segment length = 0.150000in, amplitude = 0.100000in}%\n\\pgfmathsetseed{42}%\n\\pgfdecoratecurrentpath{random steps}%\n\\pgfusepath{stroke}%'
assert baseline in buf
```

## Next Steps


---

*Source: test_backend_pgf.py:355 | Complexity: Advanced | Last updated: 2026-02-20*