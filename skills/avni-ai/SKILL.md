---
name: avni-ai
description: Local codebase analysis for avni-ai
---

# avni-ai Codebase

## Description

Local codebase analysis and documentation generated from code analysis.

**Path:** `/Users/himeshr/IdeaProjects/avni-ai`
**Files Analyzed:** 106
**Languages:** Python
**Analysis Depth:** full

## When to Use This Skill

Use this skill when you need to:
- Understand the codebase architecture and design patterns
- Find implementation examples and usage patterns
- Review API documentation extracted from code
- Check configuration patterns and best practices
- Explore test examples and real-world usage
- Navigate the codebase structure efficiently

## ⚡ Quick Reference

### Codebase Statistics

**Languages:**
- **Python**: 106 files (100.0%)

**Analysis Performed:**
- ✅ API Reference (C2.5)
- ✅ Dependency Graph (C2.6)
- ✅ Design Patterns (C3.1)
- ✅ Test Examples (C3.2)
- ✅ Configuration Patterns (C3.4)
- ✅ Architectural Analysis (C3.7)
- ✅ Project Documentation (C3.9)

## 📝 Code Examples

*High-quality examples extracted from test files (C3.2)*

**Workflow: test buffer** (complexity: 1.00)

```python
arr = [0, 1, -1]
df = df_from_dict({'a': arr})
dfX = df.__dataframe__()
colX = dfX.get_column(0)
bufX = colX.get_buffers()
dataBuf, dataDtype = bufX['data']
assert dataBuf.bufsize > 0
assert dataBuf.ptr != 0
device, _ = dataBuf.__dlpack_device__()
assert dataDtype[0] == 0
if device == 1:
    bitwidth = dataDtype[1]
    ctype = {8: ctypes.c_int8, 16: ctypes.c_int16, 32: ctypes.c_int32, 64: ctypes.c_int64}[bitwidth]
    for idx, truth in enumerate(arr):
        val = ctype.from_address(dataBuf.ptr + idx * (bitwidth // 8)).value
        assert val == truth, f'Buffer at index {idx} mismatch'
```

**Instantiate df_from_dict: test mixed dtypes** (complexity: 1.00)

```python
df = df_from_dict({'a': [1, 2, 3], 'b': [3, 4, 5], 'c': [1.5, 2.5, 3.5], 'd': [9, 10, 11], 'e': [True, False, True], 'f': ['a', '', 'c']})
```

**Workflow: test flex binary frame** (complexity: 1.00)

```python
series = frame[1]
res = getattr(series.rolling(window=10), method)(frame)
res2 = getattr(frame.rolling(window=10), method)(series)
exp = frame.apply(lambda x: getattr(series.rolling(window=10), method)(x))
tm.assert_frame_equal(res, exp)
tm.assert_frame_equal(res2, exp)
frame2 = frame.copy()
frame2 = DataFrame(np.random.default_rng(2).standard_normal(frame2.shape), index=frame2.index, columns=frame2.columns)
res3 = getattr(frame.rolling(window=10), method)(frame2)
exp = DataFrame({k: getattr(frame[k].rolling(window=10), method)(frame2[k]) for k in frame})
tm.assert_frame_equal(res3, exp)
```

**Workflow: Test 2D input, which has uneven dimension sizes ** (complexity: 1.00)

```python
' Test 2D input, which has uneven dimension sizes '
freqs = [[0, 1], [2, 3], [4, 5]]
shift_dim0 = [[4, 5], [0, 1], [2, 3]]
assert_array_almost_equal(fft.fftshift(freqs, axes=0), shift_dim0)
assert_array_almost_equal(fft.ifftshift(shift_dim0, axes=0), freqs)
assert_array_almost_equal(fft.fftshift(freqs, axes=(0,)), shift_dim0)
assert_array_almost_equal(fft.ifftshift(shift_dim0, axes=[0]), freqs)
shift_dim1 = [[1, 0], [3, 2], [5, 4]]
assert_array_almost_equal(fft.fftshift(freqs, axes=1), shift_dim1)
assert_array_almost_equal(fft.ifftshift(shift_dim1, axes=1), freqs)
shift_dim_both = [[5, 4], [1, 0], [3, 2]]
assert_array_almost_equal(fft.fftshift(freqs, axes=(0, 1)), shift_dim_both)
assert_array_almost_equal(fft.ifftshift(shift_dim_both, axes=(0, 1)), freqs)
assert_array_almost_equal(fft.fftshift(freqs, axes=[0, 1]), shift_dim_both)
assert_array_almost_equal(fft.ifftshift(shift_dim_both, axes=[0, 1]), freqs)
assert_array_almost_equal(fft.fftshift(freqs, axes=None), shift_dim_both)
assert_array_almost_equal(fft.ifftshift(shift_dim_both, axes=None), freqs)
assert_array_almost_equal(fft.fftshift(freqs), shift_dim_both)
assert_array_almost_equal(fft.ifftshift(shift_dim_both), freqs)
```

**Instantiate MultiIndex: test format sparse display** (complexity: 1.00)

```python
index = MultiIndex(levels=[[0, 1], [0, 1], [0, 1], [0]], codes=[[0, 0, 0, 1, 1, 1], [0, 0, 1, 0, 0, 1], [0, 1, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0]])
```

**Workflow: test arrow contains point** (complexity: 1.00)

```python
fig, ax = plt.subplots()
ax.set_xlim((0, 2))
ax.set_ylim((0, 2))
arrow = patches.FancyArrowPatch((0.5, 0.25), (1.5, 0.75), arrowstyle='->', mutation_scale=40)
ax.add_patch(arrow)
arrow1 = patches.FancyArrowPatch((0.5, 1), (1.5, 1.25), arrowstyle=']-[', mutation_scale=40)
ax.add_patch(arrow1)
arrow2 = patches.FancyArrowPatch((0.5, 1.5), (1.5, 1.75), arrowstyle='fancy', fill=False, mutation_scale=40)
ax.add_patch(arrow2)
patches_list = [arrow, arrow1, arrow2]
X, Y = np.meshgrid(np.arange(0, 2, 0.1), np.arange(0, 2, 0.1))
for k, (x, y) in enumerate(zip(X.ravel(), Y.ravel())):
    xdisp, ydisp = ax.transData.transform([x, y])
    event = MouseEvent('button_press_event', fig.canvas, xdisp, ydisp)
    for m, patch in enumerate(patches_list):
        inside, res = patch.contains(event)
        if inside:
            ax.scatter(x, y, s=5, c='r')
```

**Workflow: test path to polygons** (complexity: 1.00)

```python
data = [[10, 10], [20, 20]]
p = Path(data)
assert_array_equal(p.to_polygons(width=40, height=40), [])
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
assert_array_equal(p.to_polygons(), [])
assert_array_equal(p.to_polygons(closed_only=False), [data])
data = [[10, 10], [20, 20], [30, 30]]
closed_data = [[10, 10], [20, 20], [30, 30], [10, 10]]
p = Path(data)
assert_array_equal(p.to_polygons(width=40, height=40), [closed_data])
assert_array_equal(p.to_polygons(width=40, height=40, closed_only=False), [data])
assert_array_equal(p.to_polygons(), [closed_data])
assert_array_equal(p.to_polygons(closed_only=False), [data])
```

**Workflow: test path deepcopy** (complexity: 1.00)

```python
verts = [[0, 0], [1, 1]]
codes = [Path.MOVETO, Path.LINETO]
path1 = Path(verts, readonly=True)
path2 = Path(verts, codes, readonly=True)
path1_copy = path1.deepcopy()
path2_copy = path2.deepcopy()
assert path1 is not path1_copy
assert path1.vertices is not path1_copy.vertices
assert_array_equal(path1.vertices, path1_copy.vertices)
assert path1.readonly
assert not path1_copy.readonly
assert path2 is not path2_copy
assert path2.vertices is not path2_copy.vertices
assert_array_equal(path2.vertices, path2_copy.vertices)
assert path2.codes is not path2_copy.codes
assert_array_equal(path2.codes, path2_copy.codes)
assert path2.readonly
assert not path2_copy.readonly
```

**Workflow: test path deepcopy cycle** (complexity: 1.00)

```python
class PathWithCycle(Path):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.x = self
p = PathWithCycle([[0, 0], [1, 1]], readonly=True)
p_copy = p.deepcopy()
assert p_copy is not p
assert p.readonly
assert not p_copy.readonly
assert p_copy.x is p_copy

class PathWithCycle2(Path):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.x = [self] * 2
p2 = PathWithCycle2([[0, 0], [1, 1]], readonly=True)
p2_copy = p2.deepcopy()
assert p2_copy is not p2
assert p2.readonly
assert not p2_copy.readonly
assert p2_copy.x[0] is p2_copy
assert p2_copy.x[1] is p2_copy
```

**Workflow: test path shallowcopy** (complexity: 1.00)

```python
verts = [[0, 0], [1, 1]]
codes = [Path.MOVETO, Path.LINETO]
path1 = Path(verts)
path2 = Path(verts, codes)
path1_copy = path1.copy()
path2_copy = path2.copy()
assert path1 is not path1_copy
assert path1.vertices is path1_copy.vertices
assert path2 is not path2_copy
assert path2.vertices is path2_copy.vertices
assert path2.codes is path2_copy.codes
```

*See `references/test_examples/` for all extracted examples*

## 🏗️ Architecture Overview

*From C3.7 architectural analysis*

**Detected Architectural Patterns:**

- **Service Layer Pattern** (confidence: 0.75)

*Total: 1 architectural patterns detected*

*See `references/architecture/` for complete architectural analysis*

## ⚙️ Configuration Patterns

*From C3.4 configuration analysis*

**Configuration Files Analyzed:** 100
**Total Settings:** 25133
**Patterns Detected:** 0

**Configuration Types:**
- unknown: 100 files

*See `references/config_patterns/` for detailed configuration analysis*

## 📖 Project Documentation

*Extracted from markdown files in the project (C3.9)*

**Total Documentation Files:** 17
**Categories:** 3

### Overview

- **Avni Form Element Validator - Comprehensive Prompt**: **Avni Form Element Validator - Comprehensive Prompt**
- **Avni AI**: **Avni AI**
- **Avni Forms Knowledge Base**: **Avni Forms Knowledge Base**

### Architecture

- **📋 Project Plan: Avni Assistant (Phase-wise)**: **📋 Project Plan: Avni Assistant (Phase-wise)**

### Other

- **Avni AutoSetup With AI in 2026 Execution Plan**: **Avni AutoSetup With AI in 2026 Execution Plan**
- **Appendices**: **Appendices**
- **Technical Milestones & Success Criteria**: **Technical Milestones & Success Criteria**
- **Avni AutoSetup Training Curriculum**: **Avni AutoSetup Training Curriculum**
- **About the AI Assistant**: The Avni AI Assistant is currently capable of the following 1. Answering questions about the Avni sy...
- *...and 8 more*

*See `references/documentation/` for all project documentation*

## 📚 Available References

This skill includes detailed reference documentation:

- **API Reference**: `references/api_reference/` - Complete API documentation
- **Dependencies**: `references/dependencies/` - Dependency graph and analysis
- **Patterns**: `references/patterns/` - Detected design patterns
- **Examples**: `references/test_examples/` - Usage examples from tests
- **Configuration**: `references/config_patterns/` - Configuration patterns
- **Architecture**: `references/architecture/` - Architectural patterns
- **Documentation**: `references/documentation/` - Project documentation

---

**Generated by Skill Seeker** | Codebase Analyzer with C3.x Analysis
