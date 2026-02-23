# How To: Markevery

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test markevery

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `itertools`
- `platform`
- `timeit`
- `types`
- `cycler`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib`
- `matplotlib.lines`
- `matplotlib.markers`
- `matplotlib.path`
- `matplotlib.pyplot`
- `matplotlib.transforms`
- `matplotlib.testing.decorators`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref, parent
```

## Step-by-Step Guide

### Step 1: Call np.random.seed()

```python
np.random.seed(42)
```

### Step 2: Assign x = np.linspace(...)

```python
x = np.linspace(0, 1, 14)
```

### Step 3: Assign y = np.random.rand(...)

```python
y = np.random.rand(len(x))
```

### Step 4: Assign cases_test = value

```python
cases_test = [None, 4, (2, 5), [1, 5, 11], [0, -1], slice(5, 10, 2), np.arange(len(x))[y > 0.5], 0.3, (0.3, 0.4)]
```

### Step 5: Assign cases_ref = value

```python
cases_ref = ['11111111111111', '10001000100010', '00100001000010', '01000100000100', '10000000000001', '00000101010000', '01110001110110', '11011011011110', '01010011011101']
```

### Step 6: Assign cases_test = value

```python
cases_test = cases_test[:-2]
```

### Step 7: Assign cases_ref = value

```python
cases_ref = cases_ref[:-2]
```

### Step 8: Call add_test()

```python
add_test(x, y, markevery=case)
```

### Step 9: Assign me = np.array.astype.astype(...)

```python
me = np.array(list(case)).astype(int).astype(bool)
```

### Step 10: Call add_ref()

```python
add_ref(x, y, markevery=me)
```

### Step 11: Call fig_test.add_artist()

```python
fig_test.add_artist(mlines.Line2D(x, y, marker='o', markevery=markevery))
```

### Step 12: Call fig_ref.add_artist()

```python
fig_ref.add_artist(mlines.Line2D(x, y, marker='o', markevery=markevery))
```

### Step 13: Assign axs_test = iter(...)

```python
axs_test = iter(fig_test.subplots(3, 3).flat)
```

### Step 14: Assign axs_ref = iter(...)

```python
axs_ref = iter(fig_ref.subplots(3, 3).flat)
```

### Step 15: Call next.plot()

```python
next(axs_test).plot(x, y, '-gD', markevery=markevery)
```

### Step 16: Call next.plot()

```python
next(axs_ref).plot(x, y, '-gD', markevery=markevery)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref, parent

# Workflow
np.random.seed(42)
x = np.linspace(0, 1, 14)
y = np.random.rand(len(x))
cases_test = [None, 4, (2, 5), [1, 5, 11], [0, -1], slice(5, 10, 2), np.arange(len(x))[y > 0.5], 0.3, (0.3, 0.4)]
cases_ref = ['11111111111111', '10001000100010', '00100001000010', '01000100000100', '10000000000001', '00000101010000', '01110001110110', '11011011011110', '01010011011101']
if parent == 'figure':
    cases_test = cases_test[:-2]
    cases_ref = cases_ref[:-2]

    def add_test(x, y, *, markevery):
        fig_test.add_artist(mlines.Line2D(x, y, marker='o', markevery=markevery))

    def add_ref(x, y, *, markevery):
        fig_ref.add_artist(mlines.Line2D(x, y, marker='o', markevery=markevery))
elif parent == 'axes':
    axs_test = iter(fig_test.subplots(3, 3).flat)
    axs_ref = iter(fig_ref.subplots(3, 3).flat)

    def add_test(x, y, *, markevery):
        next(axs_test).plot(x, y, '-gD', markevery=markevery)

    def add_ref(x, y, *, markevery):
        next(axs_ref).plot(x, y, '-gD', markevery=markevery)
for case in cases_test:
    add_test(x, y, markevery=case)
for case in cases_ref:
    me = np.array(list(case)).astype(int).astype(bool)
    add_ref(x, y, markevery=me)
```

## Next Steps


---

*Source: test_lines.py:263 | Complexity: Advanced | Last updated: 2026-02-20*