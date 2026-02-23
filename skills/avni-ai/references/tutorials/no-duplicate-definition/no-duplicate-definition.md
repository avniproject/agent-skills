# How To: No Duplicate Definition

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test no duplicate definition

## Prerequisites

**Required Modules:**
- `collections`
- `pathlib`
- `io`
- `re`
- `tempfile`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib.figure`
- `matplotlib.patches`
- `matplotlib.testing._markers`
- `matplotlib.testing.decorators`
- `matplotlib`
- `matplotlib.collections`
- `matplotlib.colors`
- `matplotlib.pyplot`


## Step-by-Step Guide

### Step 1: Assign fig = Figure(...)

```python
fig = Figure()
```

**Verification:**
```python
assert max(Counter(wds).values()) == 1
```

### Step 2: Assign axs = fig.subplots(...)

```python
axs = fig.subplots(4, 4, subplot_kw=dict(projection='polar'))
```

### Step 3: Call fig.suptitle()

```python
fig.suptitle('hello, world')
```

### Step 4: Assign buf = io.StringIO(...)

```python
buf = io.StringIO()
```

### Step 5: Call fig.savefig()

```python
fig.savefig(buf, format='eps')
```

### Step 6: Call buf.seek()

```python
buf.seek(0)
```

### Step 7: Assign wds = value

```python
wds = [ln.partition(' ')[0] for ln in buf.readlines() if ln.startswith('/')]
```

**Verification:**
```python
assert max(Counter(wds).values()) == 1
```

### Step 8: Call ax.set()

```python
ax.set(xticks=[], yticks=[])
```

### Step 9: Call ax.plot()

```python
ax.plot([1, 2])
```


## Complete Example

```python
# Workflow
fig = Figure()
axs = fig.subplots(4, 4, subplot_kw=dict(projection='polar'))
for ax in axs.flat:
    ax.set(xticks=[], yticks=[])
    ax.plot([1, 2])
fig.suptitle('hello, world')
buf = io.StringIO()
fig.savefig(buf, format='eps')
buf.seek(0)
wds = [ln.partition(' ')[0] for ln in buf.readlines() if ln.startswith('/')]
assert max(Counter(wds).values()) == 1
```

## Next Steps


---

*Source: test_backend_ps.py:301 | Complexity: Advanced | Last updated: 2026-02-20*