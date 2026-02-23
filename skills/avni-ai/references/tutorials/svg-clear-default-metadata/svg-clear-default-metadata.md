# How To: Svg Clear Default Metadata

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test svg clear default metadata

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
assert not data
```

### Step 2: Assign metadata_contains = value

```python
metadata_contains = {'creator': mpl.__version__, 'date': '1970-08-16', 'format': 'image/svg+xml', 'type': 'StillImage'}
```

**Verification:**
```python
assert metadata_contains[key] in xmlstr
```

### Step 3: Assign SVGNS = '{http://www.w3.org/2000/svg}'

```python
SVGNS = '{http://www.w3.org/2000/svg}'
```

### Step 4: Assign RDFNS = '{http://www.w3.org/1999/02/22-rdf-syntax-ns#}'

```python
RDFNS = '{http://www.w3.org/1999/02/22-rdf-syntax-ns#}'
```

### Step 5: Assign CCNS = '{http://creativecommons.org/ns#}'

```python
CCNS = '{http://creativecommons.org/ns#}'
```

### Step 6: Assign DCNS = '{http://purl.org/dc/elements/1.1/}'

```python
DCNS = '{http://purl.org/dc/elements/1.1/}'
```

### Step 7: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 8: Assign root = xml.etree.ElementTree.fromstring(...)

```python
root = xml.etree.ElementTree.fromstring(buf)
```

### Step 9: Assign unknown = root.findall(...)

```python
work, = root.findall(f'./{SVGNS}metadata/{RDFNS}RDF/{CCNS}Work')
```

### Step 10: Call fig.savefig()

```python
fig.savefig(fd, format='svg', metadata={name.title(): None})
```

### Step 11: Assign buf = fd.getvalue.decode(...)

```python
buf = fd.getvalue().decode()
```

### Step 12: Assign data = work.findall(...)

```python
data = work.findall(f'./{DCNS}{key}')
```

### Step 13: Assign unknown = data

```python
data, = data
```

### Step 14: Assign xmlstr = xml.etree.ElementTree.tostring(...)

```python
xmlstr = xml.etree.ElementTree.tostring(data, encoding='unicode')
```

**Verification:**
```python
assert metadata_contains[key] in xmlstr
```


## Complete Example

```python
# Setup
# Fixtures: monkeypatch

# Workflow
monkeypatch.setenv('SOURCE_DATE_EPOCH', '19680801')
metadata_contains = {'creator': mpl.__version__, 'date': '1970-08-16', 'format': 'image/svg+xml', 'type': 'StillImage'}
SVGNS = '{http://www.w3.org/2000/svg}'
RDFNS = '{http://www.w3.org/1999/02/22-rdf-syntax-ns#}'
CCNS = '{http://creativecommons.org/ns#}'
DCNS = '{http://purl.org/dc/elements/1.1/}'
fig, ax = plt.subplots()
for name in metadata_contains:
    with BytesIO() as fd:
        fig.savefig(fd, format='svg', metadata={name.title(): None})
        buf = fd.getvalue().decode()
    root = xml.etree.ElementTree.fromstring(buf)
    work, = root.findall(f'./{SVGNS}metadata/{RDFNS}RDF/{CCNS}Work')
    for key in metadata_contains:
        data = work.findall(f'./{DCNS}{key}')
        if key == name:
            assert not data
            continue
        data, = data
        xmlstr = xml.etree.ElementTree.tostring(data, encoding='unicode')
        assert metadata_contains[key] in xmlstr
```

## Next Steps


---

*Source: test_backend_svg.py:421 | Complexity: Advanced | Last updated: 2026-02-20*