# How To: Fonttype

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test fonttype

## Prerequisites

- [ ] Setup code must be executed first

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

**Setup Required:**
```python
# Fixtures: fonttype
```

## Step-by-Step Guide

### Step 1: Assign unknown = fonttype

```python
mpl.rcParams['ps.fonttype'] = fonttype
```

**Verification:**
```python
assert re.search(test, buf.getvalue(), re.MULTILINE)
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 3: Call ax.text()

```python
ax.text(0.25, 0.5, 'Forty-two is the answer to everything!')
```

### Step 4: Assign buf = io.BytesIO(...)

```python
buf = io.BytesIO()
```

### Step 5: Call fig.savefig()

```python
fig.savefig(buf, format='ps')
```

### Step 6: Assign test = value

```python
test = b'/FontType ' + bytes(f'{fonttype}', encoding='utf-8') + b' def'
```

**Verification:**
```python
assert re.search(test, buf.getvalue(), re.MULTILINE)
```


## Complete Example

```python
# Setup
# Fixtures: fonttype

# Workflow
mpl.rcParams['ps.fonttype'] = fonttype
fig, ax = plt.subplots()
ax.text(0.25, 0.5, 'Forty-two is the answer to everything!')
buf = io.BytesIO()
fig.savefig(buf, format='ps')
test = b'/FontType ' + bytes(f'{fonttype}', encoding='utf-8') + b' def'
assert re.search(test, buf.getvalue(), re.MULTILINE)
```

## Next Steps


---

*Source: test_backend_ps.py:266 | Complexity: Intermediate | Last updated: 2026-02-20*