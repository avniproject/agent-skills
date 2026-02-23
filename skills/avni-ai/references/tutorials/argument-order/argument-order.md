# How To: Argument Order

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test argument order

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
assert prop1.get_math_fontfamily() == 'dejavusans'
```

### Step 2: Assign test_str = 'abc$abc\\alpha$'

```python
test_str = 'abc$abc\\alpha$'
```

**Verification:**
```python
assert prop2.get_math_fontfamily() == 'dejavusans'
```

### Step 3: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert prop3.get_math_fontfamily() == 'dejavusans'
```

### Step 4: Assign text1 = fig.text(...)

```python
text1 = fig.text(0.1, 0.1, test_str, math_fontfamily='dejavusans', font='Arial')
```

**Verification:**
```python
assert prop4.get_math_fontfamily() == 'dejavusans'
```

### Step 5: Assign prop1 = text1.get_fontproperties(...)

```python
prop1 = text1.get_fontproperties()
```

**Verification:**
```python
assert prop1.get_math_fontfamily() == 'dejavusans'
```

### Step 6: Assign text2 = fig.text(...)

```python
text2 = fig.text(0.2, 0.2, test_str, math_fontfamily='dejavusans', fontproperties='Arial')
```

### Step 7: Assign prop2 = text2.get_fontproperties(...)

```python
prop2 = text2.get_fontproperties()
```

**Verification:**
```python
assert prop2.get_math_fontfamily() == 'dejavusans'
```

### Step 8: Assign text3 = fig.text(...)

```python
text3 = fig.text(0.3, 0.3, test_str, font='Arial', math_fontfamily='dejavusans')
```

### Step 9: Assign prop3 = text3.get_fontproperties(...)

```python
prop3 = text3.get_fontproperties()
```

**Verification:**
```python
assert prop3.get_math_fontfamily() == 'dejavusans'
```

### Step 10: Assign text4 = fig.text(...)

```python
text4 = fig.text(0.4, 0.4, test_str, fontproperties='Arial', math_fontfamily='dejavusans')
```

### Step 11: Assign prop4 = text4.get_fontproperties(...)

```python
prop4 = text4.get_fontproperties()
```

**Verification:**
```python
assert prop4.get_math_fontfamily() == 'dejavusans'
```

### Step 12: Call fig.draw_without_rendering()

```python
fig.draw_without_rendering()
```


## Complete Example

```python
# Workflow
mpl.rcParams['mathtext.fontset'] = 'cm'
test_str = 'abc$abc\\alpha$'
fig, ax = plt.subplots()
text1 = fig.text(0.1, 0.1, test_str, math_fontfamily='dejavusans', font='Arial')
prop1 = text1.get_fontproperties()
assert prop1.get_math_fontfamily() == 'dejavusans'
text2 = fig.text(0.2, 0.2, test_str, math_fontfamily='dejavusans', fontproperties='Arial')
prop2 = text2.get_fontproperties()
assert prop2.get_math_fontfamily() == 'dejavusans'
text3 = fig.text(0.3, 0.3, test_str, font='Arial', math_fontfamily='dejavusans')
prop3 = text3.get_fontproperties()
assert prop3.get_math_fontfamily() == 'dejavusans'
text4 = fig.text(0.4, 0.4, test_str, fontproperties='Arial', math_fontfamily='dejavusans')
prop4 = text4.get_fontproperties()
assert prop4.get_math_fontfamily() == 'dejavusans'
fig.draw_without_rendering()
```

## Next Steps


---

*Source: test_mathtext.py:493 | Complexity: Advanced | Last updated: 2026-02-20*