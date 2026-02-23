# How To: Fmtloc

**Difficulty**: Advanced
**Estimated Time**: 15 minutes
**Tags**: workflow, integration

## Overview

Workflow: test fmtloc

## Prerequisites

**Required Modules:**
- `copy`
- `matplotlib.pyplot`
- `matplotlib.scale`
- `matplotlib.scale`
- `matplotlib.ticker`
- `matplotlib.testing.decorators`
- `numpy`
- `numpy.testing`
- `io`
- `pytest`


## Step-by-Step Guide

### Step 1: Assign ax0 = DummyAxis(...)

```python
ax0 = DummyAxis()
```

**Verification:**
```python
assert isinstance(ax0.fields['major_locator'], AsinhLocator)
```

### Step 2: Assign s0 = AsinhScale(...)

```python
s0 = AsinhScale(axis=ax0, base=0)
```

**Verification:**
```python
assert isinstance(ax0.fields['major_formatter'], str)
```

### Step 3: Call s0.set_default_locators_and_formatters()

```python
s0.set_default_locators_and_formatters(ax0)
```

**Verification:**
```python
assert isinstance(ax5.fields['major_locator'], AsinhLocator)
```

### Step 4: Assign ax5 = DummyAxis(...)

```python
ax5 = DummyAxis()
```

**Verification:**
```python
assert isinstance(ax5.fields['major_formatter'], LogFormatterSciNotation)
```

### Step 5: Assign s7 = AsinhScale(...)

```python
s7 = AsinhScale(axis=ax5, base=5)
```

### Step 6: Call s7.set_default_locators_and_formatters()

```python
s7.set_default_locators_and_formatters(ax5)
```

**Verification:**
```python
assert isinstance(ax5.fields['major_locator'], AsinhLocator)
```

### Step 7: Assign self.fields = value

```python
self.fields = {}
```

### Step 8: Call self.fields.update()

```python
self.fields.update(**kwargs)
```

### Step 9: Assign unknown = f

```python
self.fields['major_formatter'] = f
```


## Complete Example

```python
# Workflow
class DummyAxis:

    def __init__(self):
        self.fields = {}

    def set(self, **kwargs):
        self.fields.update(**kwargs)

    def set_major_formatter(self, f):
        self.fields['major_formatter'] = f
ax0 = DummyAxis()
s0 = AsinhScale(axis=ax0, base=0)
s0.set_default_locators_and_formatters(ax0)
assert isinstance(ax0.fields['major_locator'], AsinhLocator)
assert isinstance(ax0.fields['major_formatter'], str)
ax5 = DummyAxis()
s7 = AsinhScale(axis=ax5, base=5)
s7.set_default_locators_and_formatters(ax5)
assert isinstance(ax5.fields['major_locator'], AsinhLocator)
assert isinstance(ax5.fields['major_formatter'], LogFormatterSciNotation)
```

## Next Steps


---

*Source: test_scale.py:265 | Complexity: Advanced | Last updated: 2026-02-20*