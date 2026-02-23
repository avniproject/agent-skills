# How To: Default Math Fontfamily

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test default math fontfamily

## Prerequisites

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


## Step-by-Step Guide

### Step 1: Assign unknown = 'cm'

```python
mpl.rcParams['mathtext.fontset'] = 'cm'
```

**Verification:**
```python
assert prop1.get_math_fontfamily() == 'cm'
```

### Step 2: Assign test_str = 'abc$abc\\alpha$'

```python
test_str = 'abc$abc\\alpha$'
```

**Verification:**
```python
assert prop2.get_math_fontfamily() == 'cm'
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 4: Assign text1 = fig.text(...)

```python
text1 = fig.text(0.1, 0.1, test_str, font='Arial')
```

### Step 5: Assign prop1 = text1.get_fontproperties(...)

```python
prop1 = text1.get_fontproperties()
```

**Verification:**
```python
assert prop1.get_math_fontfamily() == 'cm'
```

### Step 6: Assign text2 = fig.text(...)

```python
text2 = fig.text(0.2, 0.2, test_str, fontproperties='Arial')
```

### Step 7: Assign prop2 = text2.get_fontproperties(...)

```python
prop2 = text2.get_fontproperties()
```

**Verification:**
```python
assert prop2.get_math_fontfamily() == 'cm'
```

### Step 8: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```


## Complete Example

```python
# Workflow
mpl.rcParams['mathtext.fontset'] = 'cm'
test_str = 'abc$abc\\alpha$'
fig, ax = plt.subplots()
text1 = fig.text(0.1, 0.1, test_str, font='Arial')
prop1 = text1.get_fontproperties()
assert prop1.get_math_fontfamily() == 'cm'
text2 = fig.text(0.2, 0.2, test_str, fontproperties='Arial')
prop2 = text2.get_fontproperties()
assert prop2.get_math_fontfamily() == 'cm'
fig.draw_without_rendering()
```

## Next Steps


---

*Source: test_mathtext.py:478 | Complexity: Advanced | Last updated: 2026-02-20*