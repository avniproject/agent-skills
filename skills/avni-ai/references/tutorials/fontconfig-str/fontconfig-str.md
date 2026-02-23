# How To: Fontconfig Str

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test FontProperties string conversions for correctness.

## Prerequisites

**Required Modules:**
- `pytest`
- `matplotlib.font_manager`


## Step-by-Step Guide

### Step 1: 'Test FontProperties string conversions for correctness.'

```python
'Test FontProperties string conversions for correctness.'
```

**Verification:**
```python
assert getattr(font, k)() == getattr(right, k)(), test + k
```

### Step 2: Assign test = 'defaults '

```python
test = 'defaults '
```

**Verification:**
```python
assert getattr(font, k)() == getattr(right, k)(), test + k
```

### Step 3: Assign s = 'sans\\-serif:style=normal:variant=normal:weight=normal:stretch=normal:size=12.0'

```python
s = 'sans\\-serif:style=normal:variant=normal:weight=normal:stretch=normal:size=12.0'
```

### Step 4: Assign font = FontProperties(...)

```python
font = FontProperties(s)
```

### Step 5: Assign right = FontProperties(...)

```python
right = FontProperties()
```

### Step 6: Assign test = 'full '

```python
test = 'full '
```

### Step 7: Assign s = 'serif-24:style=oblique:variant=small-caps:weight=bold:stretch=expanded'

```python
s = 'serif-24:style=oblique:variant=small-caps:weight=bold:stretch=expanded'
```

### Step 8: Assign font = FontProperties(...)

```python
font = FontProperties(s)
```

### Step 9: Assign right = FontProperties(...)

```python
right = FontProperties(family='serif', size=24, weight='bold', style='oblique', variant='small-caps', stretch='expanded')
```

**Verification:**
```python
assert getattr(font, k)() == getattr(right, k)(), test + k
```


## Complete Example

```python
# Workflow
'Test FontProperties string conversions for correctness.'
test = 'defaults '
s = 'sans\\-serif:style=normal:variant=normal:weight=normal:stretch=normal:size=12.0'
font = FontProperties(s)
right = FontProperties()
for k in keys:
    assert getattr(font, k)() == getattr(right, k)(), test + k
test = 'full '
s = 'serif-24:style=oblique:variant=small-caps:weight=bold:stretch=expanded'
font = FontProperties(s)
right = FontProperties(family='serif', size=24, weight='bold', style='oblique', variant='small-caps', stretch='expanded')
for k in keys:
    assert getattr(font, k)() == getattr(right, k)(), test + k
```

## Next Steps


---

*Source: test_fontconfig_pattern.py:49 | Complexity: Advanced | Last updated: 2026-02-20*