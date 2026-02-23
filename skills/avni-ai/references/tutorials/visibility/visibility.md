# How To: Visibility

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test visibility

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

### Step 2: Assign x = np.linspace(...)

```python
x = np.linspace(0, 4 * np.pi, 50)
```

### Step 3: Assign y = np.sin(...)

```python
y = np.sin(x)
```

### Step 4: Assign yerr = np.ones_like(...)

```python
yerr = np.ones_like(y)
```

### Step 5: Assign unknown = ax.errorbar(...)

```python
a, b, c = ax.errorbar(x, y, yerr=yerr, fmt='ko')
```

### Step 6: Assign parser = xml.parsers.expat.ParserCreate(...)

```python
parser = xml.parsers.expat.ParserCreate()
```

### Step 7: Call parser.Parse()

```python
parser.Parse(buf)
```

### Step 8: Call artist.set_visible()

```python
artist.set_visible(False)
```

### Step 9: Call fig.savefig()

```python
fig.savefig(fd, format='svg')
```

### Step 10: Assign buf = fd.getvalue(...)

```python
buf = fd.getvalue()
```


## Complete Example

```python
# Workflow
fig, ax = plt.subplots()
x = np.linspace(0, 4 * np.pi, 50)
y = np.sin(x)
yerr = np.ones_like(y)
a, b, c = ax.errorbar(x, y, yerr=yerr, fmt='ko')
for artist in b:
    artist.set_visible(False)
with BytesIO() as fd:
    fig.savefig(fd, format='svg')
    buf = fd.getvalue()
parser = xml.parsers.expat.ParserCreate()
parser.Parse(buf)
```

## Next Steps


---

*Source: test_backend_svg.py:22 | Complexity: Advanced | Last updated: 2026-02-20*