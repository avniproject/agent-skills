# How To: Font Fallback Chinese

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: pytest, workflow, integration

## Overview

Workflow: test font fallback chinese

## Prerequisites

- [ ] Setup code must be executed first

**Required Modules:**
- `itertools`
- `io`
- `pathlib`
- `numpy`
- `pytest`
- `matplotlib`
- `matplotlib`
- `matplotlib.testing.decorators`
- `matplotlib.font_manager`
- `matplotlib.path`
- `matplotlib.pyplot`

**Setup Required:**
```python
# Fixtures: fig_test, fig_ref, family_name, file_name
```

## Step-by-Step Guide

### Step 1: Assign fp = fm.FontProperties(...)

```python
fp = fm.FontProperties(family=[family_name])
```

### Step 2: Assign text = value

```python
text = ['There are', '几个汉字', 'in between!']
```

### Step 3: Assign unknown = 20

```python
plt.rcParams['font.size'] = 20
```

### Step 4: Assign test_fonts = value

```python
test_fonts = [['DejaVu Sans', family_name]] * 3
```

### Step 5: Assign ref_fonts = value

```python
ref_fonts = [['DejaVu Sans'], [family_name], ['DejaVu Sans']]
```

### Step 6: Call pytest.skip()

```python
pytest.skip(f'Font {family_name} ({file_name}) is missing')
```

### Step 7: Call fig_ref.text()

```python
fig_ref.text(0.05, 0.85 - 0.15 * j, txt, family=ref_font)
```

### Step 8: Call fig_test.text()

```python
fig_test.text(0.05, 0.85 - 0.15 * j, txt, family=test_font)
```


## Complete Example

```python
# Setup
# Fixtures: fig_test, fig_ref, family_name, file_name

# Workflow
fp = fm.FontProperties(family=[family_name])
if file_name not in Path(fm.findfont(fp)).name:
    pytest.skip(f'Font {family_name} ({file_name}) is missing')
text = ['There are', '几个汉字', 'in between!']
plt.rcParams['font.size'] = 20
test_fonts = [['DejaVu Sans', family_name]] * 3
ref_fonts = [['DejaVu Sans'], [family_name], ['DejaVu Sans']]
for j, (txt, test_font, ref_font) in enumerate(zip(text, test_fonts, ref_fonts)):
    fig_ref.text(0.05, 0.85 - 0.15 * j, txt, family=ref_font)
    fig_test.text(0.05, 0.85 - 0.15 * j, txt, family=test_font)
```

## Next Steps


---

*Source: test_ft2font.py:885 | Complexity: Advanced | Last updated: 2026-02-20*