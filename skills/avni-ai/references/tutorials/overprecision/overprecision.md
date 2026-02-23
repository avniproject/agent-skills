# How To: Overprecision

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: test overprecision

## Prerequisites

**Required Modules:**
- `matplotlib._type1font`
- `os.path`
- `difflib`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign filename = os.path.join(...)

```python
filename = os.path.join(os.path.dirname(__file__), 'cmr10.pfb')
```

**Verification:**
```python
assert matrix == '0.001 0 0.000167 0.001 0 0'
```

### Step 2: Assign font = t1f.Type1Font(...)

```python
font = t1f.Type1Font(filename)
```

**Verification:**
```python
assert angle == '-9.4809'
```

### Step 3: Assign slanted = font.transform(...)

```python
slanted = font.transform({'slant': 0.167})
```

### Step 4: Assign lines = unknown.decode.splitlines(...)

```python
lines = slanted.parts[0].decode('ascii').splitlines()
```

### Step 5: Assign unknown = value

```python
matrix, = (line[line.index('[') + 1:line.index(']')] for line in lines if '/FontMatrix' in line)
```

### Step 6: Assign unknown = value

```python
angle, = (word for line in lines if '/ItalicAngle' in line for word in line.split() if word[0] in '-0123456789')
```

**Verification:**
```python
assert matrix == '0.001 0 0.000167 0.001 0 0'
```


## Complete Example

```python
# Workflow
filename = os.path.join(os.path.dirname(__file__), 'cmr10.pfb')
font = t1f.Type1Font(filename)
slanted = font.transform({'slant': 0.167})
lines = slanted.parts[0].decode('ascii').splitlines()
matrix, = (line[line.index('[') + 1:line.index(']')] for line in lines if '/FontMatrix' in line)
angle, = (word for line in lines if '/ItalicAngle' in line for word in line.split() if word[0] in '-0123456789')
assert matrix == '0.001 0 0.000167 0.001 0 0'
assert angle == '-9.4809'
```

## Next Steps


---

*Source: test_type1font.py:137 | Complexity: Intermediate | Last updated: 2026-02-20*