# How To: Engformatter Offset Oom

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test engformatter offset oom

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `contextlib`
- `itertools`
- `locale`
- `logging`
- `re`
- `packaging.version`
- `numpy`
- `numpy.testing`
- `pytest`
- `matplotlib`
- `matplotlib.pyplot`
- `matplotlib.ticker`

**Setup Required:**
```python
# Fixtures: data_offset, noise, oom_center_desired, oom_noise_desired
```

## Step-by-Step Guide

### Step 1: Assign UNIT = 'eV'

```python
UNIT = 'eV'
```

**Verification:**
```python
assert prefix_noise_desired == prefix_noise_got
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

**Verification:**
```python
assert prefix_center_desired == prefix_center_got
```

### Step 3: Assign ydata = value

```python
ydata = data_offset + np.arange(-5, 7, dtype=float) * noise
```

**Verification:**
```python
assert UNIT not in tick
```

### Step 4: Call ax.plot()

```python
ax.plot(ydata)
```

**Verification:**
```python
assert oom_center_desired == 0
```

### Step 5: Assign formatter = mticker.EngFormatter(...)

```python
formatter = mticker.EngFormatter(useOffset=True, unit=UNIT)
```

**Verification:**
```python
assert offset_got == ''
```

### Step 6: Assign unknown = '_'

```python
formatter.ENG_PREFIXES[0] = '_'
```

**Verification:**
```python
assert tick.endswith(formatter.ENG_PREFIXES[prefix_idx] + UNIT)
```

### Step 7: Call ax.yaxis.set_major_formatter()

```python
ax.yaxis.set_major_formatter(formatter)
```

### Step 8: Call fig.canvas.draw()

```python
fig.canvas.draw()
```

### Step 9: Assign offset_got = formatter.get_offset(...)

```python
offset_got = formatter.get_offset()
```

### Step 10: Assign ticks_got = value

```python
ticks_got = [labl.get_text() for labl in ax.get_yticklabels()]
```

### Step 11: Assign prefix_noise_got = value

```python
prefix_noise_got = offset_got[2]
```

### Step 12: Assign prefix_noise_desired = value

```python
prefix_noise_desired = formatter.ENG_PREFIXES[oom_noise_desired]
```

### Step 13: Assign prefix_center_got = value

```python
prefix_center_got = offset_got[-1 - len(UNIT)]
```

### Step 14: Assign prefix_center_desired = value

```python
prefix_center_desired = formatter.ENG_PREFIXES[oom_center_desired]
```

**Verification:**
```python
assert prefix_noise_desired == prefix_noise_got
```

### Step 15: Assign prefix_idx = value

```python
prefix_idx = 0 if tick[0] == '0' else oom_noise_desired
```

**Verification:**
```python
assert tick.endswith(formatter.ENG_PREFIXES[prefix_idx] + UNIT)
```


## Complete Example

```python
# Setup
# Fixtures: data_offset, noise, oom_center_desired, oom_noise_desired

# Workflow
UNIT = 'eV'
fig, ax = plt.subplots()
ydata = data_offset + np.arange(-5, 7, dtype=float) * noise
ax.plot(ydata)
formatter = mticker.EngFormatter(useOffset=True, unit=UNIT)
formatter.ENG_PREFIXES[0] = '_'
ax.yaxis.set_major_formatter(formatter)
fig.canvas.draw()
offset_got = formatter.get_offset()
ticks_got = [labl.get_text() for labl in ax.get_yticklabels()]
if formatter.offset:
    prefix_noise_got = offset_got[2]
    prefix_noise_desired = formatter.ENG_PREFIXES[oom_noise_desired]
    prefix_center_got = offset_got[-1 - len(UNIT)]
    prefix_center_desired = formatter.ENG_PREFIXES[oom_center_desired]
    assert prefix_noise_desired == prefix_noise_got
    assert prefix_center_desired == prefix_center_got
    for tick in ticks_got:
        assert UNIT not in tick
else:
    assert oom_center_desired == 0
    assert offset_got == ''
    for tick in ticks_got:
        prefix_idx = 0 if tick[0] == '0' else oom_noise_desired
        assert tick.endswith(formatter.ENG_PREFIXES[prefix_idx] + UNIT)
```

## Next Steps


---

*Source: test_ticker.py:1618 | Complexity: Advanced | Last updated: 2026-02-20*