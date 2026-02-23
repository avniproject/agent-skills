# API Reference: form_validation_analysis.py

**Language**: Python

**Source**: `tests/judge_framework/examples/form_validation_analysis.py`

---

## Functions

### find_organizations(reference_dir: Path, exclude_new: bool = False) → List[Path]

Find organizations in reference directory

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| reference_dir | Path | - | - |
| exclude_new | bool | False | - |

**Returns**: `List[Path]`



### find_form_files(directory: Path) → List[Path]

Find all form files in the directory

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| directory | Path | - | - |

**Returns**: `List[Path]`



### parse_form_file_lightweight(file_path: Path) → Dict[str, Any]

Lightweight form parsing - extract only concept types and basic info

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| file_path | Path | - | - |

**Returns**: `Dict[str, Any]`



### get_sample_forms(organization_dir: Path, sample_size: int = 8) → List[Path]

Get a representative sample of forms from an organization

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| organization_dir | Path | - | - |
| sample_size | int | 8 | - |

**Returns**: `List[Path]`



### analyze_form_elements(elements: List[Dict[str, Any]]) → Dict[str, Any]

Analyze form elements to identify patterns

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elements | List[Dict[str, Any]] | - | - |

**Returns**: `Dict[str, Any]`



### analyze_field_name_patterns(field_names: List[str]) → Dict[str, Any]

Analyze field names to identify validation patterns

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| field_names | List[str] | - | - |

**Returns**: `Dict[str, Any]`



### analyze_sampled_forms(sampled_forms: List[Dict[str, Any]]) → Dict[str, Any]

Analyze sampled forms to identify new patterns

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| sampled_forms | List[Dict[str, Any]] | - | - |

**Returns**: `Dict[str, Any]`



### run_full_analysis()

Run comprehensive analysis of all forms

**Returns**: (none)



### run_quick_analysis()

Run quick sampling analysis

**Returns**: (none)



### run_new_only_analysis()

Run analysis focusing only on new organizations

**Returns**: (none)



### main()

Main entry point for consolidated form validation analysis

**Returns**: (none)


