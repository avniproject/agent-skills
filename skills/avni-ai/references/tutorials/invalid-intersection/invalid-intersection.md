# How To: Invalid Intersection

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: mock, workflow, integration

## Overview

Workflow: test invalid intersection

## Prerequisites

**Required Modules:**
- `pytest`
- `platform`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.patches`


## Step-by-Step Guide

### Step 1: Assign conn_style_1 = mpatches.ConnectionStyle.Angle3(...)

```python
conn_style_1 = mpatches.ConnectionStyle.Angle3(angleA=20, angleB=200)
```

### Step 2: Assign p1 = mpatches.FancyArrowPatch(...)

```python
p1 = mpatches.FancyArrowPatch((0.2, 0.2), (0.5, 0.5), connectionstyle=conn_style_1)
```

### Step 3: Assign conn_style_2 = mpatches.ConnectionStyle.Angle3(...)

```python
conn_style_2 = mpatches.ConnectionStyle.Angle3(angleA=20, angleB=199.9)
```

### Step 4: Assign p2 = mpatches.FancyArrowPatch(...)

```python
p2 = mpatches.FancyArrowPatch((0.2, 0.2), (0.5, 0.5), connectionstyle=conn_style_2)
```

### Step 5: Call plt.gca.add_patch()

```python
plt.gca().add_patch(p2)
```

### Step 6: Call plt.gca.add_patch()

```python
plt.gca().add_patch(p1)
```


## Complete Example

```python
# Workflow
conn_style_1 = mpatches.ConnectionStyle.Angle3(angleA=20, angleB=200)
p1 = mpatches.FancyArrowPatch((0.2, 0.2), (0.5, 0.5), connectionstyle=conn_style_1)
with pytest.raises(ValueError):
    plt.gca().add_patch(p1)
conn_style_2 = mpatches.ConnectionStyle.Angle3(angleA=20, angleB=199.9)
p2 = mpatches.FancyArrowPatch((0.2, 0.2), (0.5, 0.5), connectionstyle=conn_style_2)
plt.gca().add_patch(p2)
```

## Next Steps


---

*Source: test_arrow_patches.py:169 | Complexity: Intermediate | Last updated: 2026-02-20*