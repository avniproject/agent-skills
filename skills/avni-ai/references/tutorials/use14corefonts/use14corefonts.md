# How To: Use14Corefonts

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test use14corefonts

## Prerequisites

**Required Modules:**
- `datetime`
- `decimal`
- `io`
- `os`
- `pathlib`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.cbook`
- `matplotlib.ft2font`
- `matplotlib.font_manager`
- `matplotlib.backends._backend_pdf_ps`
- `matplotlib.backends.backend_pdf`
- `matplotlib.patches`
- `matplotlib.testing.decorators`
- `matplotlib.testing._markers`


## Step-by-Step Guide

### Step 1: Assign unknown = True

```python
rcParams['pdf.use14corefonts'] = True
```

### Step 2: Assign unknown = 'sans-serif'

```python
rcParams['font.family'] = 'sans-serif'
```

### Step 3: Assign unknown = 8

```python
rcParams['font.size'] = 8
```

### Step 4: Assign unknown = value

```python
rcParams['font.sans-serif'] = ['Helvetica']
```

### Step 5: Assign unknown = 0

```python
rcParams['pdf.compression'] = 0
```

### Step 6: Assign text = 'A three-line text positioned just above a blue line\nand containing some French characters and the euro symbol:\n"Merci pépé pour les 10 €"'

```python
text = 'A three-line text positioned just above a blue line\nand containing some French characters and the euro symbol:\n"Merci pépé pour les 10 €"'
```

### Step 7: Assign unknown = plt.subplots(...)

```python
fig, ax = plt.subplots()
```

### Step 8: Call ax.set_title()

```python
ax.set_title('Test PDF backend with option use14corefonts=True')
```

### Step 9: Call ax.text()

```python
ax.text(0.5, 0.5, text, horizontalalignment='center', verticalalignment='bottom', fontsize=14)
```

### Step 10: Call ax.axhline()

```python
ax.axhline(0.5, linewidth=0.5)
```


## Complete Example

```python
# Workflow
rcParams['pdf.use14corefonts'] = True
rcParams['font.family'] = 'sans-serif'
rcParams['font.size'] = 8
rcParams['font.sans-serif'] = ['Helvetica']
rcParams['pdf.compression'] = 0
text = 'A three-line text positioned just above a blue line\nand containing some French characters and the euro symbol:\n"Merci pépé pour les 10 €"'
fig, ax = plt.subplots()
ax.set_title('Test PDF backend with option use14corefonts=True')
ax.text(0.5, 0.5, text, horizontalalignment='center', verticalalignment='bottom', fontsize=14)
ax.axhline(0.5, linewidth=0.5)
```

## Next Steps


---

*Source: test_backend_pdf.py:25 | Complexity: Advanced | Last updated: 2026-02-20*