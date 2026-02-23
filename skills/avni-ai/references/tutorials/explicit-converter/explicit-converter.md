# How To: Explicit Converter

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test explicit converter

## Prerequisites

**Required Modules:**
- `datetime`
- `platform`
- `unittest.mock`
- `matplotlib.pyplot`
- `matplotlib.testing.decorators`
- `matplotlib.patches`
- `matplotlib.units`
- `matplotlib.category`
- `matplotlib.dates`
- `numpy`
- `pytest`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`
- `matplotlib.testing.jpl_units`


## Step-by-Step Guide

### Step 1: Assign d1 = value

```python
d1 = {'a': 1, 'b': 2}
```

**Verification:**
```python
assert ax1.xaxis.get_converter() == str_cat_converter
```

### Step 2: Assign str_cat_converter = StrCategoryConverter(...)

```python
str_cat_converter = StrCategoryConverter()
```

**Verification:**
```python
assert ax1.xaxis.get_converter() == str_cat_converter
```

### Step 3: Assign str_cat_converter_2 = StrCategoryConverter(...)

```python
str_cat_converter_2 = StrCategoryConverter()
```

### Step 4: Assign date_converter = DateConverter(...)

```python
date_converter = DateConverter()
```

### Step 5: Assign unknown = plt.subplots(...)

```python
fig1, ax1 = plt.subplots()
```

### Step 6: Call ax1.xaxis.set_converter()

```python
ax1.xaxis.set_converter(str_cat_converter)
```

**Verification:**
```python
assert ax1.xaxis.get_converter() == str_cat_converter
```

### Step 7: Call ax1.plot()

```python
ax1.plot(d1.keys(), d1.values())
```

**Verification:**
```python
assert ax1.xaxis.get_converter() == str_cat_converter
```

### Step 8: Call ax1.xaxis.set_converter()

```python
ax1.xaxis.set_converter(str_cat_converter)
```

### Step 9: Assign unknown = plt.subplots(...)

```python
fig2, ax2 = plt.subplots()
```

### Step 10: Call ax2.plot()

```python
ax2.plot(d1.keys(), d1.values())
```

### Step 11: Call ax2.xaxis.set_converter()

```python
ax2.xaxis.set_converter(str_cat_converter)
```

### Step 12: Assign unknown = plt.subplots(...)

```python
fig3, ax3 = plt.subplots()
```

### Step 13: Call ax3.plot()

```python
ax3.plot(d1.keys(), d1.values())
```

### Step 14: Call ax1.xaxis.set_converter()

```python
ax1.xaxis.set_converter(str_cat_converter_2)
```

### Step 15: Call ax3.xaxis.set_converter()

```python
ax3.xaxis.set_converter(date_converter)
```


## Complete Example

```python
# Workflow
d1 = {'a': 1, 'b': 2}
str_cat_converter = StrCategoryConverter()
str_cat_converter_2 = StrCategoryConverter()
date_converter = DateConverter()
fig1, ax1 = plt.subplots()
ax1.xaxis.set_converter(str_cat_converter)
assert ax1.xaxis.get_converter() == str_cat_converter
ax1.plot(d1.keys(), d1.values())
assert ax1.xaxis.get_converter() == str_cat_converter
ax1.xaxis.set_converter(str_cat_converter)
with pytest.raises(RuntimeError):
    ax1.xaxis.set_converter(str_cat_converter_2)
fig2, ax2 = plt.subplots()
ax2.plot(d1.keys(), d1.values())
ax2.xaxis.set_converter(str_cat_converter)
fig3, ax3 = plt.subplots()
ax3.plot(d1.keys(), d1.values())
with pytest.warns():
    ax3.xaxis.set_converter(date_converter)
```

## Next Steps


---

*Source: test_units.py:241 | Complexity: Advanced | Last updated: 2026-02-20*