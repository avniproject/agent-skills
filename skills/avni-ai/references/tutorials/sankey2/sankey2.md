# How To: Sankey2

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test sankey2

## Prerequisites

**Required Modules:**
- `pytest`
- `numpy.testing`
- `matplotlib.sankey`
- `matplotlib.testing.decorators`


## Step-by-Step Guide

### Step 1: Assign s = Sankey(...)

```python
s = Sankey(flows=[0.25, -0.25, 0.5, -0.5], labels=['Foo'], orientations=[-1], unit='Bar')
```

**Verification:**
```python
assert_array_equal(sf[0].flows, [0.25, -0.25, 0.5, -0.5])
```

### Step 2: Assign sf = s.finish(...)

```python
sf = s.finish()
```

**Verification:**
```python
assert sf[0].angles == [1, 3, 1, 3]
```

### Step 3: Call assert_array_equal()

```python
assert_array_equal(sf[0].flows, [0.25, -0.25, 0.5, -0.5])
```

**Verification:**
```python
assert all([text.get_text()[0:3] == 'Foo' for text in sf[0].texts])
```

### Step 4: Call assert_allclose()

```python
assert_allclose(sf[0].tips, [(-1.375, -0.52011255), (1.375, -0.75506044), (-0.75, -0.41522509), (0.75, -0.8599479)])
```

**Verification:**
```python
assert all([text.get_text()[-3:] == 'Bar' for text in sf[0].texts])
```

### Step 5: Assign s = Sankey(...)

```python
s = Sankey(flows=[0.25, -0.25, 0, 0.5, -0.5], labels=['Foo'], orientations=[-1], unit='Bar')
```

**Verification:**
```python
assert sf[0].text.get_text() == ''
```

### Step 6: Assign sf = s.finish(...)

```python
sf = s.finish()
```

**Verification:**
```python
assert_allclose(sf[0].tips, [(-1.375, -0.52011255), (1.375, -0.75506044), (-0.75, -0.41522509), (0.75, -0.8599479)])
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(sf[0].flows, [0.25, -0.25, 0, 0.5, -0.5])
```

**Verification:**
```python
assert_array_equal(sf[0].flows, [0.25, -0.25, 0, 0.5, -0.5])
```

### Step 8: Call assert_allclose()

```python
assert_allclose(sf[0].tips, [(-1.375, -0.52011255), (1.375, -0.75506044), (0, 0), (-0.75, -0.41522509), (0.75, -0.8599479)])
```

**Verification:**
```python
assert sf[0].angles == [1, 3, None, 1, 3]
```


## Complete Example

```python
# Workflow
s = Sankey(flows=[0.25, -0.25, 0.5, -0.5], labels=['Foo'], orientations=[-1], unit='Bar')
sf = s.finish()
assert_array_equal(sf[0].flows, [0.25, -0.25, 0.5, -0.5])
assert sf[0].angles == [1, 3, 1, 3]
assert all([text.get_text()[0:3] == 'Foo' for text in sf[0].texts])
assert all([text.get_text()[-3:] == 'Bar' for text in sf[0].texts])
assert sf[0].text.get_text() == ''
assert_allclose(sf[0].tips, [(-1.375, -0.52011255), (1.375, -0.75506044), (-0.75, -0.41522509), (0.75, -0.8599479)])
s = Sankey(flows=[0.25, -0.25, 0, 0.5, -0.5], labels=['Foo'], orientations=[-1], unit='Bar')
sf = s.finish()
assert_array_equal(sf[0].flows, [0.25, -0.25, 0, 0.5, -0.5])
assert sf[0].angles == [1, 3, None, 1, 3]
assert_allclose(sf[0].tips, [(-1.375, -0.52011255), (1.375, -0.75506044), (0, 0), (-0.75, -0.41522509), (0.75, -0.8599479)])
```

## Next Steps


---

*Source: test_sankey.py:66 | Complexity: Advanced | Last updated: 2026-02-20*