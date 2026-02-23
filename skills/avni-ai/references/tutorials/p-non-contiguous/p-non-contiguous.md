# How To: P Non Contiguous

**Difficulty**: Intermediate
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test p non contiguous

## Prerequisites

**Required Modules:**
- `hashlib`
- `pickle`
- `sys`
- `warnings`
- `pytest`
- `numpy`
- `numpy`
- `numpy.random`
- `numpy.testing`
- `threading`


## Step-by-Step Guide

### Step 1: Assign p = np.arange(...)

```python
p = np.arange(15.0)
```

**Verification:**
```python
assert_array_equal(non_contig, contig)
```

### Step 2: Assign pvals = value

```python
pvals = p[1::3]
```

### Step 3: Call random.seed()

```python
random.seed(1432985819)
```

### Step 4: Assign non_contig = random.multinomial(...)

```python
non_contig = random.multinomial(100, pvals=pvals)
```

### Step 5: Call random.seed()

```python
random.seed(1432985819)
```

### Step 6: Assign contig = random.multinomial(...)

```python
contig = random.multinomial(100, pvals=np.ascontiguousarray(pvals))
```

### Step 7: Call assert_array_equal()

```python
assert_array_equal(non_contig, contig)
```


## Complete Example

```python
# Workflow
p = np.arange(15.0)
p /= np.sum(p[1::3])
pvals = p[1::3]
random.seed(1432985819)
non_contig = random.multinomial(100, pvals=pvals)
random.seed(1432985819)
contig = random.multinomial(100, pvals=np.ascontiguousarray(pvals))
assert_array_equal(non_contig, contig)
```

## Next Steps


---

*Source: test_randomstate.py:174 | Complexity: Intermediate | Last updated: 2026-02-20*