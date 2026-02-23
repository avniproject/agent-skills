# API Reference: form_validation_test_generator.py

**Language**: Python

**Source**: `tests/judge_framework/examples/form_validation_test_generator.py`

---

## Functions

### generate_critical_violation_tests() → List[Dict[str, Any]]

Generate critical violation test cases

**Returns**: `List[Dict[str, Any]]`



### generate_high_priority_tests() → List[Dict[str, Any]]

Generate high priority violation test cases

**Returns**: `List[Dict[str, Any]]`



### generate_cancellation_form_tests() → List[Dict[str, Any]]

Generate test cases for Cancellation form types

**Returns**: `List[Dict[str, Any]]`



### generate_program_exit_form_tests() → List[Dict[str, Any]]

Generate test cases for ProgramExit form types

**Returns**: `List[Dict[str, Any]]`



### generate_valid_configuration_tests() → List[Dict[str, Any]]

Generate valid configuration test cases

**Returns**: `List[Dict[str, Any]]`



### generate_comprehensive_test_matrix() → List[Dict[str, Any]]

Generate comprehensive test matrix with all test cases

**Returns**: `List[Dict[str, Any]]`



### generate_new_form_type_tests() → List[Dict[str, Any]]

Generate test cases specifically for new form types discovered

**Returns**: `List[Dict[str, Any]]`



### save_test_matrix(test_cases: List[Dict[str, Any]], filename: str) → bool

Save test matrix to file and update comprehensive matrix if needed

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| test_cases | List[Dict[str, Any]] | - | - |
| filename | str | - | - |

**Returns**: `bool`



### update_comprehensive_matrix(new_test_cases: List[Dict[str, Any]]) → bool

Update the comprehensive test matrix with new test cases

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| new_test_cases | List[Dict[str, Any]] | - | - |

**Returns**: `bool`



### main()

Main entry point for consolidated test generator

**Returns**: (none)


