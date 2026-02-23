# How To: Path Type Input

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test path type input

## Prerequisites

**Required Modules:**
- `itertools`
- `pytest`
- `numpy`
- `numpy.testing`


## Step-by-Step Guide

### Step 1: Assign path_test = self.build_operands(...)

```python
path_test = self.build_operands('dcc,fce,ea,dbf->ab')
```

**Verification:**
```python
assert_almost_equal(noopt, opt)
```

### Step 2: Assign unknown = np.einsum_path(...)

```python
path, path_str = np.einsum_path(*path_test, optimize=False)
```

### Step 3: Call self.assert_path_equal()

```python
self.assert_path_equal(path, ['einsum_path', (0, 1, 2, 3)])
```

### Step 4: Assign unknown = np.einsum_path(...)

```python
path, path_str = np.einsum_path(*path_test, optimize=True)
```

### Step 5: Call self.assert_path_equal()

```python
self.assert_path_equal(path, ['einsum_path', (1, 2), (0, 1), (0, 1)])
```

### Step 6: Assign exp_path = value

```python
exp_path = ['einsum_path', (0, 2), (0, 2), (0, 1)]
```

### Step 7: Assign unknown = np.einsum_path(...)

```python
path, path_str = np.einsum_path(*path_test, optimize=exp_path)
```

### Step 8: Call self.assert_path_equal()

```python
self.assert_path_equal(path, exp_path)
```

### Step 9: Assign noopt = np.einsum(...)

```python
noopt = np.einsum(*path_test, optimize=False)
```

### Step 10: Assign opt = np.einsum(...)

```python
opt = np.einsum(*path_test, optimize=exp_path)
```

### Step 11: Call assert_almost_equal()

```python
assert_almost_equal(noopt, opt)
```


## Complete Example

```python
# Workflow
path_test = self.build_operands('dcc,fce,ea,dbf->ab')
path, path_str = np.einsum_path(*path_test, optimize=False)
self.assert_path_equal(path, ['einsum_path', (0, 1, 2, 3)])
path, path_str = np.einsum_path(*path_test, optimize=True)
self.assert_path_equal(path, ['einsum_path', (1, 2), (0, 1), (0, 1)])
exp_path = ['einsum_path', (0, 2), (0, 2), (0, 1)]
path, path_str = np.einsum_path(*path_test, optimize=exp_path)
self.assert_path_equal(path, exp_path)
noopt = np.einsum(*path_test, optimize=False)
opt = np.einsum(*path_test, optimize=exp_path)
assert_almost_equal(noopt, opt)
```

## Next Steps


---

*Source: test_einsum.py:1229 | Complexity: Advanced | Last updated: 2026-02-20*