# How To: Annotate

**Difficulty**: Advanced
**Estimated Time**: 20 minutes
**Tags**: workflow, integration

## Overview

Workflow: test annotate

## Prerequisites

**Required Modules:**
- `datetime`
- `numpy`
- `pytest`
- `matplotlib.pyplot`
- `matplotlib`


## Step-by-Step Guide

### Step 1: Assign unknown = 'concise'

```python
mpl.rcParams['date.converter'] = 'concise'
```

### Step 2: Assign unknown = plt.subplots(...)

```python
fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, layout='constrained')
```

### Step 3: Assign start_date = datetime.datetime(...)

```python
start_date = datetime.datetime(2023, 10, 1)
```

### Step 4: Assign dates = value

```python
dates = [start_date + datetime.timedelta(days=i) for i in range(31)]
```

### Step 5: Assign data = list(...)

```python
data = list(range(1, 32))
```

### Step 6: Assign test_text = 'Test Text'

```python
test_text = 'Test Text'
```

### Step 7: Call ax1.plot()

```python
ax1.plot(dates, data)
```

### Step 8: Call ax1.annotate()

```python
ax1.annotate(text=test_text, xy=(dates[15], data[15]))
```

### Step 9: Call ax2.plot()

```python
ax2.plot(data, dates)
```

### Step 10: Call ax2.annotate()

```python
ax2.annotate(text=test_text, xy=(data[5], dates[26]))
```

### Step 11: Call ax3.plot()

```python
ax3.plot(dates, dates)
```

### Step 12: Call ax3.annotate()

```python
ax3.annotate(text=test_text, xy=(dates[15], dates[3]))
```

### Step 13: Call ax4.plot()

```python
ax4.plot(dates, dates)
```

### Step 14: Call ax4.annotate()

```python
ax4.annotate(text=test_text, xy=(dates[5], dates[30]), xytext=(dates[1], dates[7]), arrowprops=dict(facecolor='red'))
```


## Complete Example

```python
# Workflow
mpl.rcParams['date.converter'] = 'concise'
fig, (ax1, ax2, ax3, ax4) = plt.subplots(4, 1, layout='constrained')
start_date = datetime.datetime(2023, 10, 1)
dates = [start_date + datetime.timedelta(days=i) for i in range(31)]
data = list(range(1, 32))
test_text = 'Test Text'
ax1.plot(dates, data)
ax1.annotate(text=test_text, xy=(dates[15], data[15]))
ax2.plot(data, dates)
ax2.annotate(text=test_text, xy=(data[5], dates[26]))
ax3.plot(dates, dates)
ax3.annotate(text=test_text, xy=(dates[15], dates[3]))
ax4.plot(dates, dates)
ax4.annotate(text=test_text, xy=(dates[5], dates[30]), xytext=(dates[1], dates[7]), arrowprops=dict(facecolor='red'))
```

## Next Steps


---

*Source: test_datetime.py:12 | Complexity: Advanced | Last updated: 2026-02-20*