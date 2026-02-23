# How To: Fontconfig Preamble

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: workflow, integration

## Overview

Workflow: Test that the preamble is included in the source.

## Prerequisites

**Required Modules:**
- `os`
- `pathlib`
- `re`
- `sys`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib.testing`
- `matplotlib.testing._markers`
- `matplotlib.texmanager`


## Step-by-Step Guide

### Step 1: 'Test that the preamble is included in the source.'

```python
'Test that the preamble is included in the source.'
```

**Verification:**
```python
assert src1 != src2
```

### Step 2: Assign unknown = True

```python
plt.rcParams['text.usetex'] = True
```

### Step 3: Assign src1 = TexManager._get_tex_source(...)

```python
src1 = TexManager()._get_tex_source('', fontsize=12)
```

### Step 4: Assign unknown = '\\usepackage{txfonts}'

```python
plt.rcParams['text.latex.preamble'] = '\\usepackage{txfonts}'
```

### Step 5: Assign src2 = TexManager._get_tex_source(...)

```python
src2 = TexManager()._get_tex_source('', fontsize=12)
```

**Verification:**
```python
assert src1 != src2
```


## Complete Example

```python
# Workflow
'Test that the preamble is included in the source.'
plt.rcParams['text.usetex'] = True
src1 = TexManager()._get_tex_source('', fontsize=12)
plt.rcParams['text.latex.preamble'] = '\\usepackage{txfonts}'
src2 = TexManager()._get_tex_source('', fontsize=12)
assert src1 != src2
```

## Next Steps


---

*Source: test_texmanager.py:14 | Complexity: Intermediate | Last updated: 2026-02-20*