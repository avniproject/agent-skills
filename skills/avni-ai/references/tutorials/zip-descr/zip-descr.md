# How To: Zip Descr

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test zip descr

## Prerequisites

**Required Modules:**
- `numpy`
- `numpy.ma`
- `numpy.lib.recfunctions`
- `numpy.ma.mrecords`
- `numpy.ma.testutils`
- `numpy.testing`
- `datetime`


## Step-by-Step Guide

### Step 1: Assign unknown = value

```python
w, x, y, z = self.data
```

**Verification:**
```python
assert_equal(test, np.dtype([('', int), ('', int)]))
```

### Step 2: Assign test = zip_descr(...)

```python
test = zip_descr((x, x), flatten=True)
```

**Verification:**
```python
assert_equal(test, np.dtype([('', int), ('', int)]))
```

### Step 3: Call assert_equal()

```python
assert_equal(test, np.dtype([('', int), ('', int)]))
```

**Verification:**
```python
assert_equal(test, np.dtype([('', int), ('A', '|S3'), ('B', float)]))
```

### Step 4: Assign test = zip_descr(...)

```python
test = zip_descr((x, x), flatten=False)
```

**Verification:**
```python
assert_equal(test, np.dtype([('', int), ('', [('A', '|S3'), ('B', float)])]))
```

### Step 5: Call assert_equal()

```python
assert_equal(test, np.dtype([('', int), ('', int)]))
```

**Verification:**
```python
assert_equal(test, np.dtype([('', int), ('a', int), ('ba', float), ('bb', int)]))
```

### Step 6: Assign test = zip_descr(...)

```python
test = zip_descr((x, z), flatten=True)
```

**Verification:**
```python
assert_equal(test, np.dtype([('', int), ('', [('a', int), ('b', [('ba', float), ('bb', int)])])]))
```

### Step 7: Call assert_equal()

```python
assert_equal(test, np.dtype([('', int), ('A', '|S3'), ('B', float)]))
```

### Step 8: Assign test = zip_descr(...)

```python
test = zip_descr((x, z), flatten=False)
```

### Step 9: Call assert_equal()

```python
assert_equal(test, np.dtype([('', int), ('', [('A', '|S3'), ('B', float)])]))
```

### Step 10: Assign test = zip_descr(...)

```python
test = zip_descr((x, w), flatten=True)
```

### Step 11: Call assert_equal()

```python
assert_equal(test, np.dtype([('', int), ('a', int), ('ba', float), ('bb', int)]))
```

### Step 12: Assign test = zip_descr(...)

```python
test = zip_descr((x, w), flatten=False)
```

### Step 13: Call assert_equal()

```python
assert_equal(test, np.dtype([('', int), ('', [('a', int), ('b', [('ba', float), ('bb', int)])])]))
```


## Complete Example

```python
# Workflow
w, x, y, z = self.data
test = zip_descr((x, x), flatten=True)
assert_equal(test, np.dtype([('', int), ('', int)]))
test = zip_descr((x, x), flatten=False)
assert_equal(test, np.dtype([('', int), ('', int)]))
test = zip_descr((x, z), flatten=True)
assert_equal(test, np.dtype([('', int), ('A', '|S3'), ('B', float)]))
test = zip_descr((x, z), flatten=False)
assert_equal(test, np.dtype([('', int), ('', [('A', '|S3'), ('B', float)])]))
test = zip_descr((x, w), flatten=True)
assert_equal(test, np.dtype([('', int), ('a', int), ('ba', float), ('bb', int)]))
test = zip_descr((x, w), flatten=False)
assert_equal(test, np.dtype([('', int), ('', [('a', int), ('b', [('ba', float), ('bb', int)])])]))
```

## Next Steps


---

*Source: test_recfunctions.py:44 | Complexity: Advanced | Last updated: 2026-02-20*