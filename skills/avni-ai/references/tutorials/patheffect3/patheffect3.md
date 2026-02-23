# How To: Patheffect3

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test patheffect3

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

### Step 1: Assign unknown = plt.plot(...)

```python
p1, = plt.plot([1, 3, 5, 4, 3], 'o-b', lw=4)
```

### Step 2: Call p1.set_path_effects()

```python
p1.set_path_effects([path_effects.SimpleLineShadow(), path_effects.Normal()])
```

### Step 3: Call plt.title()

```python
plt.title('testing$^{123}$', path_effects=[path_effects.withStroke(linewidth=1, foreground='r')])
```

### Step 4: Assign leg = plt.legend(...)

```python
leg = plt.legend([p1], ['Line 1$^2$'], fancybox=True, loc='upper left')
```

### Step 5: Call leg.legendPatch.set_path_effects()

```python
leg.legendPatch.set_path_effects([path_effects.withSimplePatchShadow()])
```

### Step 6: Assign text = plt.text(...)

```python
text = plt.text(2, 3, 'Drop test', color='white', bbox={'boxstyle': 'circle,pad=0.1', 'color': 'red'})
```

### Step 7: Assign pe = value

```python
pe = [path_effects.Stroke(linewidth=3.75, foreground='k'), path_effects.withSimplePatchShadow((6, -3), shadow_rgbFace='blue')]
```

### Step 8: Call text.set_path_effects()

```python
text.set_path_effects(pe)
```

### Step 9: Call text.get_bbox_patch.set_path_effects()

```python
text.get_bbox_patch().set_path_effects(pe)
```

### Step 10: Assign pe = value

```python
pe = [path_effects.PathPatchEffect(offset=(4, -4), hatch='xxxx', facecolor='gray'), path_effects.PathPatchEffect(edgecolor='white', facecolor='black', lw=1.1)]
```

### Step 11: Assign t = plt.gcf.text(...)

```python
t = plt.gcf().text(0.02, 0.1, 'Hatch shadow', fontsize=75, weight=1000, va='center')
```

### Step 12: Call t.set_path_effects()

```python
t.set_path_effects(pe)
```


## Complete Example

```python
# Workflow
p1, = plt.plot([1, 3, 5, 4, 3], 'o-b', lw=4)
p1.set_path_effects([path_effects.SimpleLineShadow(), path_effects.Normal()])
plt.title('testing$^{123}$', path_effects=[path_effects.withStroke(linewidth=1, foreground='r')])
leg = plt.legend([p1], ['Line 1$^2$'], fancybox=True, loc='upper left')
leg.legendPatch.set_path_effects([path_effects.withSimplePatchShadow()])
text = plt.text(2, 3, 'Drop test', color='white', bbox={'boxstyle': 'circle,pad=0.1', 'color': 'red'})
pe = [path_effects.Stroke(linewidth=3.75, foreground='k'), path_effects.withSimplePatchShadow((6, -3), shadow_rgbFace='blue')]
text.set_path_effects(pe)
text.get_bbox_patch().set_path_effects(pe)
pe = [path_effects.PathPatchEffect(offset=(4, -4), hatch='xxxx', facecolor='gray'), path_effects.PathPatchEffect(edgecolor='white', facecolor='black', lw=1.1)]
t = plt.gcf().text(0.02, 0.1, 'Hatch shadow', fontsize=75, weight=1000, va='center')
t.set_path_effects(pe)
```

## Next Steps


---

*Source: test_patheffects.py:50 | Complexity: Advanced | Last updated: 2026-02-20*