# How To: Mathtext Fallback

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test mathtext fallback

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `__future__`
- `io`
- `pathlib`
- `platform`
- `re`
- `xml.etree`
- `typing`
- `numpy`
- `packaging.version`
- `pyparsing`
- `pytest`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib`

**Setup Required:**
```python
# Fixtures: fallback, fontlist
```

## Step-by-Step Guide

### Step 1: Call mpl.font_manager.fontManager.addfont()

```python
mpl.font_manager.fontManager.addfont(str(Path(__file__).resolve().parent / 'mpltest.ttf'))
```

**Verification:**
```python
assert char_fonts == fontlist, f'Expected {fontlist}, got {char_fonts}'
```

### Step 2: Assign unknown = 'none'

```python
mpl.rcParams['svg.fonttype'] = 'none'
```

### Step 3: Assign unknown = 'custom'

```python
mpl.rcParams['mathtext.fontset'] = 'custom'
```

### Step 4: Assign unknown = 'mpltest'

```python
mpl.rcParams['mathtext.rm'] = 'mpltest'
```

### Step 5: Assign unknown = 'mpltest:italic'

```python
mpl.rcParams['mathtext.it'] = 'mpltest:italic'
```

### Step 6: Assign unknown = 'mpltest:bold'

```python
mpl.rcParams['mathtext.bf'] = 'mpltest:bold'
```

### Step 7: Assign unknown = 'mpltest:italic:bold'

```python
mpl.rcParams['mathtext.bfit'] = 'mpltest:italic:bold'
```

### Step 8: Assign unknown = fallback

```python
mpl.rcParams['mathtext.fallback'] = fallback
```

### Step 9: Assign test_str = 'a$A\\AA\\breve\\gimel$'

```python
test_str = 'a$A\\AA\\breve\\gimel$'
```

### Step 10: Assign buff = io.BytesIO(...)

```python
buff = io.BytesIO()
```

### Step 11: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 12: Call fig.text()

```python
fig.text(0.5, 0.5, test_str, fontsize=40, ha='center')
```

### Step 13: Call fig.savefig()

```python
fig.savefig(buff, format='svg')
```

### Step 14: Assign tspans = ET.fromstring.findall(...)

```python
tspans = ET.fromstring(buff.getvalue()).findall('.//{http://www.w3.org/2000/svg}tspan[@style]')
```

### Step 15: Assign char_fonts = value

```python
char_fonts = [re.search("font-family: '([\\w ]+)'", tspan.attrib['style']).group(1) for tspan in tspans]
```

**Verification:**
```python
assert char_fonts == fontlist, f'Expected {fontlist}, got {char_fonts}'
```

### Step 16: Call mpl.font_manager.fontManager.ttflist.pop()

```python
mpl.font_manager.fontManager.ttflist.pop()
```


## Complete Example

```python
# Setup
# Fixtures: fallback, fontlist

# Workflow
mpl.font_manager.fontManager.addfont(str(Path(__file__).resolve().parent / 'mpltest.ttf'))
mpl.rcParams['svg.fonttype'] = 'none'
mpl.rcParams['mathtext.fontset'] = 'custom'
mpl.rcParams['mathtext.rm'] = 'mpltest'
mpl.rcParams['mathtext.it'] = 'mpltest:italic'
mpl.rcParams['mathtext.bf'] = 'mpltest:bold'
mpl.rcParams['mathtext.bfit'] = 'mpltest:italic:bold'
mpl.rcParams['mathtext.fallback'] = fallback
test_str = 'a$A\\AA\\breve\\gimel$'
buff = io.BytesIO()
fig, ax = plt.subplots()
fig.text(0.5, 0.5, test_str, fontsize=40, ha='center')
fig.savefig(buff, format='svg')
tspans = ET.fromstring(buff.getvalue()).findall('.//{http://www.w3.org/2000/svg}tspan[@style]')
char_fonts = [re.search("font-family: '([\\w ]+)'", tspan.attrib['style']).group(1) for tspan in tspans]
assert char_fonts == fontlist, f'Expected {fontlist}, got {char_fonts}'
mpl.font_manager.fontManager.ttflist.pop()
```

## Next Steps


---

*Source: test_mathtext.py:436 | Complexity: Advanced | Last updated: 2026-02-20*