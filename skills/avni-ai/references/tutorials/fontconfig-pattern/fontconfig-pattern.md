# How To: Fontconfig Pattern

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test converting a FontProperties to string then back.

## Prerequisites

**Required Modules:**
- `pytest`
- `matplotlib.font_manager`


## Step-by-Step Guide

### Step 1: 'Test converting a FontProperties to string then back.'

```python
'Test converting a FontProperties to string then back.'
```

**Verification:**
```python
assert getattr(f1, k)() == getattr(f2, k)(), test + k
```

### Step 2: Assign test = 'defaults '

```python
test = 'defaults '
```

**Verification:**
```python
assert getattr(f1, k)() == getattr(f2, k)(), test + k
```

### Step 3: Assign f1 = FontProperties(...)

```python
f1 = FontProperties()
```

**Verification:**
```python
assert getattr(f1, k)() == getattr(f2, k)(), test + k
```

### Step 4: Assign s = str(...)

```python
s = str(f1)
```

### Step 5: Assign f2 = FontProperties(...)

```python
f2 = FontProperties(s)
```

### Step 6: Assign test = 'basic '

```python
test = 'basic '
```

### Step 7: Assign f1 = FontProperties(...)

```python
f1 = FontProperties(family='serif', size=20, style='italic')
```

### Step 8: Assign s = str(...)

```python
s = str(f1)
```

### Step 9: Assign f2 = FontProperties(...)

```python
f2 = FontProperties(s)
```

### Step 10: Assign test = 'full '

```python
test = 'full '
```

### Step 11: Assign f1 = FontProperties(...)

```python
f1 = FontProperties(family='sans-serif', size=24, weight='bold', style='oblique', variant='small-caps', stretch='expanded')
```

### Step 12: Assign s = str(...)

```python
s = str(f1)
```

### Step 13: Assign f2 = FontProperties(...)

```python
f2 = FontProperties(s)
```

**Verification:**
```python
assert getattr(f1, k)() == getattr(f2, k)(), test + k
```


## Complete Example

```python
# Workflow
'Test converting a FontProperties to string then back.'
test = 'defaults '
f1 = FontProperties()
s = str(f1)
f2 = FontProperties(s)
for k in keys:
    assert getattr(f1, k)() == getattr(f2, k)(), test + k
test = 'basic '
f1 = FontProperties(family='serif', size=20, style='italic')
s = str(f1)
f2 = FontProperties(s)
for k in keys:
    assert getattr(f1, k)() == getattr(f2, k)(), test + k
test = 'full '
f1 = FontProperties(family='sans-serif', size=24, weight='bold', style='oblique', variant='small-caps', stretch='expanded')
s = str(f1)
f2 = FontProperties(s)
for k in keys:
    assert getattr(f1, k)() == getattr(f2, k)(), test + k
```

## Next Steps


---

*Source: test_fontconfig_pattern.py:16 | Complexity: Advanced | Last updated: 2026-02-20*