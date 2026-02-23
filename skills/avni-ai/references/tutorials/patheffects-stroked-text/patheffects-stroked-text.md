# How To: Patheffects Stroked Text

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test patheffects stroked text

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

### Step 1: Assign text_chunks = value

```python
text_chunks = ['A B C D E F G H I J K L', 'M N O P Q R S T U V W', 'X Y Z a b c d e f g h i j', 'k l m n o p q r s t u v', 'w x y z 0123456789', "!@#$%^&*()-=_+[]\\;'", ',./{}|:"<>?']
```

### Step 2: Assign font_size = 50

```python
font_size = 50
```

### Step 3: Assign ax = plt.axes(...)

```python
ax = plt.axes((0, 0, 1, 1))
```

### Step 4: Call ax.set_xlim()

```python
ax.set_xlim(0, 1)
```

### Step 5: Call ax.set_ylim()

```python
ax.set_ylim(0, 1)
```

### Step 6: Call ax.axis()

```python
ax.axis('off')
```

### Step 7: Assign text = ax.text(...)

```python
text = ax.text(x=0.01, y=0.9 - i * 0.13, s=chunk, fontdict={'ha': 'left', 'va': 'center', 'size': font_size, 'color': 'white'})
```

### Step 8: Call text.set_path_effects()

```python
text.set_path_effects([path_effects.Stroke(linewidth=font_size / 10, foreground='black'), path_effects.Normal()])
```


## Complete Example

```python
# Workflow
text_chunks = ['A B C D E F G H I J K L', 'M N O P Q R S T U V W', 'X Y Z a b c d e f g h i j', 'k l m n o p q r s t u v', 'w x y z 0123456789', "!@#$%^&*()-=_+[]\\;'", ',./{}|:"<>?']
font_size = 50
ax = plt.axes((0, 0, 1, 1))
for i, chunk in enumerate(text_chunks):
    text = ax.text(x=0.01, y=0.9 - i * 0.13, s=chunk, fontdict={'ha': 'left', 'va': 'center', 'size': font_size, 'color': 'white'})
    text.set_path_effects([path_effects.Stroke(linewidth=font_size / 10, foreground='black'), path_effects.Normal()])
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.axis('off')
```

## Next Steps


---

*Source: test_patheffects.py:78 | Complexity: Advanced | Last updated: 2026-02-20*