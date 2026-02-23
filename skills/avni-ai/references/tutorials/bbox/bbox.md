# How To: Bbox

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test bbox

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

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert bb
```

### Step 2: Assign bb = re.search(...)

```python
bb = re.search(b'^%%BoundingBox: (.+) (.+) (.+) (.+)$', buf, re.MULTILINE)
```

**Verification:**
```python
assert hibb
```

### Step 3: Assign hibb = re.search(...)

```python
hibb = re.search(b'^%%HiResBoundingBox: (.+) (.+) (.+) (.+)$', buf, re.MULTILINE)
```

**Verification:**
```python
assert b'.' not in bb.group(i)
```

### Step 4: Call fig.savefig()

```python
fig.savefig(buf, format='eps')
```

**Verification:**
```python
assert int(bb.group(i)) == pytest.approx(float(hibb.group(i)), 1)
```

### Step 5: Assign buf = buf.getvalue(...)

```python
buf = buf.getvalue()
```

**Verification:**
```python
assert b'.' not in bb.group(i)
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
with io.BytesIO() as buf:
    fig.savefig(buf, format='eps')
    buf = buf.getvalue()
bb = re.search(b'^%%BoundingBox: (.+) (.+) (.+) (.+)$', buf, re.MULTILINE)
assert bb
hibb = re.search(b'^%%HiResBoundingBox: (.+) (.+) (.+) (.+)$', buf, re.MULTILINE)
assert hibb
for i in range(1, 5):
    assert b'.' not in bb.group(i)
    assert int(bb.group(i)) == pytest.approx(float(hibb.group(i)), 1)
```

## Next Steps


---

*Source: test_backend_ps.py:162 | Complexity: Intermediate | Last updated: 2026-02-20*