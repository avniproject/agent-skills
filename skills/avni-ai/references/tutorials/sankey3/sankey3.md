# How To: Sankey3

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test sankey3

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `pytest`
- `numpy.testing`
- `matplotlib.sankey`
- `matplotlib.testing.decorators`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref
```

## Step-by-Step Guide

### Step 1: Assign ax_test = fig_test.gca(...)

```python
ax_test = fig_test.gca()
```

### Step 2: Assign s_test = Sankey(...)

```python
s_test = Sankey(ax=ax_test, flows=[0.25, -0.25, -0.25, 0.25, 0.5, -0.5], orientations=[1, -1, 1, -1, 0, 0])
```

### Step 3: Call s_test.finish()

```python
s_test.finish()
```

### Step 4: Assign ax_ref = fig_ref.gca(...)

```python
ax_ref = fig_ref.gca()
```

### Step 5: Assign s_ref = Sankey(...)

```python
s_ref = Sankey(ax=ax_ref)
```

### Step 6: Call s_ref.add()

```python
s_ref.add(flows=[0.25, -0.25, -0.25, 0.25, 0.5, -0.5], orientations=[1, -1, 1, -1, 0, 0])
```

### Step 7: Call s_ref.finish()

```python
s_ref.finish()
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref

# Workflow
ax_test = fig_test.gca()
s_test = Sankey(ax=ax_test, flows=[0.25, -0.25, -0.25, 0.25, 0.5, -0.5], orientations=[1, -1, 1, -1, 0, 0])
s_test.finish()
ax_ref = fig_ref.gca()
s_ref = Sankey(ax=ax_ref)
s_ref.add(flows=[0.25, -0.25, -0.25, 0.25, 0.5, -0.5], orientations=[1, -1, 1, -1, 0, 0])
s_ref.finish()
```

## Next Steps


---

*Source: test_sankey.py:95 | Complexity: Intermediate | Last updated: 2026-02-20*