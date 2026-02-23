# How To: Text Urls

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test text urls

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

### Step 1: Assign fig = plt.figure(...)

```python
fig = plt.figure()
```

**Verification:**
```python
assert expected in buf
```

### Step 2: Assign test_url = 'http://test_text_urls.matplotlib.org'

```python
test_url = 'http://test_text_urls.matplotlib.org'
```

### Step 3: Call fig.suptitle()

```python
fig.suptitle('test_text_urls', url=test_url)
```

### Step 4: Assign expected = value

```python
expected = f'<a xlink:href="{test_url}">'
```

**Verification:**
```python
assert expected in buf
```

### Step 5: Call fig.savefig()

```python
fig.savefig(fd, format='svg')
```

### Step 6: Assign buf = fd.getvalue.decode(...)

```python
buf = fd.getvalue().decode()
```


## Complete Example

```python
# Workflow
fig = plt.figure()
test_url = 'http://test_text_urls.matplotlib.org'
fig.suptitle('test_text_urls', url=test_url)
with BytesIO() as fd:
    fig.savefig(fd, format='svg')
    buf = fd.getvalue().decode()
expected = f'<a xlink:href="{test_url}">'
assert expected in buf
```

## Next Steps


---

*Source: test_backend_svg.py:56 | Complexity: Intermediate | Last updated: 2026-02-20*