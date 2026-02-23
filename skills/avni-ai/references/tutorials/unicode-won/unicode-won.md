# How To: Unicode Won

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test unicode won

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

### Step 1: Assign fig = Figure(...)

```python
fig = Figure()
```

**Verification:**
```python
assert len(tree.findall(f'.//{{{ns}}}path[@d][@id="{won_id}"]')) == 1
```

### Step 2: Call fig.text()

```python
fig.text(0.5, 0.5, '\\textwon', usetex=True)
```

**Verification:**
```python
assert f'#{won_id}' in tree.find(f'.//{{{ns}}}use').attrib.values()
```

### Step 3: Assign tree = xml.etree.ElementTree.fromstring(...)

```python
tree = xml.etree.ElementTree.fromstring(buf)
```

### Step 4: Assign ns = 'http://www.w3.org/2000/svg'

```python
ns = 'http://www.w3.org/2000/svg'
```

### Step 5: Assign won_id = 'SFSS3583-8e'

```python
won_id = 'SFSS3583-8e'
```

**Verification:**
```python
assert len(tree.findall(f'.//{{{ns}}}path[@d][@id="{won_id}"]')) == 1
```

### Step 6: Call fig.savefig()

```python
fig.savefig(fd, format='svg')
```

### Step 7: Assign buf = fd.getvalue(...)

```python
buf = fd.getvalue()
```


## Complete Example

```python
# Workflow
fig = Figure()
fig.text(0.5, 0.5, '\\textwon', usetex=True)
with BytesIO() as fd:
    fig.savefig(fd, format='svg')
    buf = fd.getvalue()
tree = xml.etree.ElementTree.fromstring(buf)
ns = 'http://www.w3.org/2000/svg'
won_id = 'SFSS3583-8e'
assert len(tree.findall(f'.//{{{ns}}}path[@d][@id="{won_id}"]')) == 1
assert f'#{won_id}' in tree.find(f'.//{{{ns}}}use').attrib.values()
```

## Next Steps


---

*Source: test_backend_svg.py:208 | Complexity: Intermediate | Last updated: 2026-02-20*