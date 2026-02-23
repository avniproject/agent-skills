# How To: Url Tick

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test url tick

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `datetime`
- `io`
- `pathlib`
- `xml.etree.ElementTree`
- `xml.parsers.expat`
- `pytest`
- `numpy`
- `matplotlib`
- `matplotlib.figure`
- `matplotlib.patches`
- `matplotlib.text`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`
- `matplotlib`
- `matplotlib.offsetbox`
- `matplotlib.offsetbox`
- `matplotlib.axis`

**Setup Required:**
```python
# Fixtures: monkeypatch
```

## Step-by-Step Guide

### Step 1: Call monkeypatch.setenv()

```python
monkeypatch.setenv('SOURCE_DATE_EPOCH', '19680801')
```

**Verification:**
```python
assert f'https://example.com/{i}'.encode('ascii') in b1
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig1, ax = plt.subplots()
```

**Verification:**
```python
assert b1 == b2
```

### Step 3: Call ax.scatter()

```python
ax.scatter([1, 2, 3], [4, 5, 6])
```

### Step 4: Assign unknown = plt.subplots(...)

```python
fig2, ax = plt.subplots()
```

### Step 5: Call ax.scatter()

```python
ax.scatter([1, 2, 3], [4, 5, 6])
```

### Step 6: Assign b1 = BytesIO(...)

```python
b1 = BytesIO()
```

### Step 7: Call fig1.savefig()

```python
fig1.savefig(b1, format='svg')
```

### Step 8: Assign b1 = b1.getvalue(...)

```python
b1 = b1.getvalue()
```

### Step 9: Assign b2 = BytesIO(...)

```python
b2 = BytesIO()
```

### Step 10: Call fig2.savefig()

```python
fig2.savefig(b2, format='svg')
```

### Step 11: Assign b2 = b2.getvalue(...)

```python
b2 = b2.getvalue()
```

**Verification:**
```python
assert b1 == b2
```

### Step 12: Call tick.set_url()

```python
tick.set_url(f'https://example.com/{i}')
```

### Step 13: Call tick.label1.set_url()

```python
tick.label1.set_url(f'https://example.com/{i}')
```

### Step 14: Call tick.label2.set_url()

```python
tick.label2.set_url(f'https://example.com/{i}')
```

**Verification:**
```python
assert f'https://example.com/{i}'.encode('ascii') in b1
```


## Complete Example

```python
# Setup
# Fixtures: monkeypatch

# Workflow
monkeypatch.setenv('SOURCE_DATE_EPOCH', '19680801')
fig1, ax = plt.subplots()
ax.scatter([1, 2, 3], [4, 5, 6])
for i, tick in enumerate(ax.yaxis.get_major_ticks()):
    tick.set_url(f'https://example.com/{i}')
fig2, ax = plt.subplots()
ax.scatter([1, 2, 3], [4, 5, 6])
for i, tick in enumerate(ax.yaxis.get_major_ticks()):
    tick.label1.set_url(f'https://example.com/{i}')
    tick.label2.set_url(f'https://example.com/{i}')
b1 = BytesIO()
fig1.savefig(b1, format='svg')
b1 = b1.getvalue()
b2 = BytesIO()
fig2.savefig(b2, format='svg')
b2 = b2.getvalue()
for i in range(len(ax.yaxis.get_major_ticks())):
    assert f'https://example.com/{i}'.encode('ascii') in b1
assert b1 == b2
```

## Next Steps


---

*Source: test_backend_svg.py:360 | Complexity: Advanced | Last updated: 2026-02-20*