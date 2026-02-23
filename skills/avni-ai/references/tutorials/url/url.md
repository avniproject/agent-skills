# How To: Url

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test url

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert b'https://example.com/' + v in b
```

### Step 2: Assign s = ax.scatter(...)

```python
s = ax.scatter([1, 2, 3], [4, 5, 6])
```

### Step 3: Call s.set_urls()

```python
s.set_urls(['https://example.com/foo', 'https://example.com/bar', None])
```

### Step 4: Assign unknown = plt.plot(...)

```python
p, = plt.plot([2, 3, 4], [4, 5, 6])
```

### Step 5: Call p.set_url()

```python
p.set_url('https://example.com/baz')
```

### Step 6: Assign unknown = plt.plot(...)

```python
p, = plt.plot([3, 4, 5], [4, 5, 6], linestyle='none', marker='x')
```

### Step 7: Call p.set_url()

```python
p.set_url('https://example.com/quux')
```

### Step 8: Assign b = BytesIO(...)

```python
b = BytesIO()
```

### Step 9: Call fig.savefig()

```python
fig.savefig(b, format='svg')
```

### Step 10: Assign b = b.getvalue(...)

```python
b = b.getvalue()
```

**Verification:**
```python
assert b'https://example.com/' + v in b
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
s = ax.scatter([1, 2, 3], [4, 5, 6])
s.set_urls(['https://example.com/foo', 'https://example.com/bar', None])
p, = plt.plot([2, 3, 4], [4, 5, 6])
p.set_url('https://example.com/baz')
p, = plt.plot([3, 4, 5], [4, 5, 6], linestyle='none', marker='x')
p.set_url('https://example.com/quux')
b = BytesIO()
fig.savefig(b, format='svg')
b = b.getvalue()
for v in [b'foo', b'bar', b'baz', b'quux']:
    assert b'https://example.com/' + v in b
```

## Next Steps


---

*Source: test_backend_svg.py:336 | Complexity: Advanced | Last updated: 2026-02-20*