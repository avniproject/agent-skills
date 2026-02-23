# How To: Round

**Difficulty**: Intermediate
**Estimated Time**: 10 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test round

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `hypothesis`
- `numpy`
- `pytest`
- `pandas._libs`
- `pandas._libs.tslibs`
- `pandas.errors`
- `pandas`

**Setup Required:**
```python
# Fixtures: freq, s1, s2
```

## Step-by-Step Guide

### Step 1: Assign t1 = Timedelta(...)

```python
t1 = Timedelta('1 days 02:34:56.789123456')
```

**Verification:**
```python
assert r1 == s1
```

### Step 2: Assign t2 = Timedelta(...)

```python
t2 = Timedelta('-1 days 02:34:56.789123456')
```

**Verification:**
```python
assert r2 == s2
```

### Step 3: Assign r1 = t1.round(...)

```python
r1 = t1.round(freq)
```

**Verification:**
```python
assert r1 == s1
```

### Step 4: Assign r2 = t2.round(...)

```python
r2 = t2.round(freq)
```

**Verification:**
```python
assert r2 == s2
```


## Complete Example

```python
# Setup
# Fixtures: freq, s1, s2

# Workflow
t1 = Timedelta('1 days 02:34:56.789123456')
t2 = Timedelta('-1 days 02:34:56.789123456')
r1 = t1.round(freq)
assert r1 == s1
r2 = t2.round(freq)
assert r2 == s2
```

## Next Steps


---

*Source: test_round.py:44 | Complexity: Intermediate | Last updated: 2026-02-20*