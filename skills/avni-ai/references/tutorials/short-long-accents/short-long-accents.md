# How To: Short Long Accents

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test short long accents

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
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign acc_map = value

```python
acc_map = _mathtext.Parser._accent_map
```

### Step 2: Assign short_accs = value

```python
short_accs = [s for s in acc_map if len(s) == 1]
```

### Step 3: Assign corresponding_long_accs = value

```python
corresponding_long_accs = []
```

### Step 4: Call fig_test.text()

```python
fig_test.text(0, 0.5, '$' + ''.join((f'\\{s}a' for s in short_accs)) + '$')
```

### Step 5: Call fig_ref.text()

```python
fig_ref.text(0, 0.5, '$' + ''.join((f'\\{l} a' for l in corresponding_long_accs)) + '$')
```

### Step 6: Assign unknown = value

```python
l, = (l for l in acc_map if len(l) > 1 and acc_map[l] == acc_map[s])
```

### Step 7: Call corresponding_long_accs.append()

```python
corresponding_long_accs.append(l)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
acc_map = _mathtext.Parser._accent_map
short_accs = [s for s in acc_map if len(s) == 1]
corresponding_long_accs = []
for s in short_accs:
    l, = (l for l in acc_map if len(l) > 1 and acc_map[l] == acc_map[s])
    corresponding_long_accs.append(l)
fig_test.text(0, 0.5, '$' + ''.join((f'\\{s}a' for s in short_accs)) + '$')
fig_ref.text(0, 0.5, '$' + ''.join((f'\\{l} a' for l in corresponding_long_accs)) + '$')
```

## Next Steps


---

*Source: test_mathtext.py:268 | Complexity: Intermediate | Last updated: 2026-02-20*