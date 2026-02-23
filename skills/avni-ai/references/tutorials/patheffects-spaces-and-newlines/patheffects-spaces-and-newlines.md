# How To: Patheffects Spaces And Newlines

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test patheffects spaces and newlines

## Prerequisites

**Required Modules:**
- `platform`
- `numpy`
- `matplotlib.testing.decorators`
- `matplotlib.pyplot`
- `matplotlib.patheffects`
- `matplotlib.path`
- `matplotlib.patches`
- `matplotlib.backend_bases`
- `matplotlib.patheffects`


## Step-by-Step Guide

### Step 1: Assign ax = plt.subplot(...)

```python
ax = plt.subplot()
```

### Step 2: Assign s1 = '         '

```python
s1 = '         '
```

### Step 3: Assign s2 = '\nNewline also causes problems'

```python
s2 = '\nNewline also causes problems'
```

### Step 4: Assign text1 = ax.text(...)

```python
text1 = ax.text(0.5, 0.75, s1, ha='center', va='center', size=20, bbox={'color': 'salmon'})
```

### Step 5: Assign text2 = ax.text(...)

```python
text2 = ax.text(0.5, 0.25, s2, ha='center', va='center', size=20, bbox={'color': 'thistle'})
```

### Step 6: Call text1.set_path_effects()

```python
text1.set_path_effects([path_effects.Normal()])
```

### Step 7: Call text2.set_path_effects()

```python
text2.set_path_effects([path_effects.Normal()])
```


## Complete Example

```python
# Workflow
ax = plt.subplot()
s1 = '         '
s2 = '\nNewline also causes problems'
text1 = ax.text(0.5, 0.75, s1, ha='center', va='center', size=20, bbox={'color': 'salmon'})
text2 = ax.text(0.5, 0.25, s2, ha='center', va='center', size=20, bbox={'color': 'thistle'})
text1.set_path_effects([path_effects.Normal()])
text2.set_path_effects([path_effects.Normal()])
```

## Next Steps


---

*Source: test_patheffects.py:191 | Complexity: Intermediate | Last updated: 2026-02-20*