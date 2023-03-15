# Carpentry details

## Introduction
This is a measure/value table that allows you to enter, for a specified carpentry, each component, measure and the value of that measure for each magnetic steel width.
Within the standard, the applications cover the range of magnetic steel width from 40 to 200, with an increase of 5 mm. It is possible to enter all the core widths available, as low as minus 40 and/or as high as above 200. 
The option of sorting the table by any column, including multiple selections - by holding down the CTRL key while selecting the various columns - makes it easy to compile and check. If a core width is added, values must be entered for all the dimensions that identify each component of the carpentry involved. To modify existing values, it is necessary to identify the area of the table using the filter at the top left and the order by clicking on the column header. Sorting the table by carpentry + component + core width would make it extra clear.

### Table fields (Carpentry measurements)

- **Carpentry detail**: type of carpentry, chosen from the types listed in the drop-down menu of the data input screen under the "carpentry" label.
- **Element**: code of the component that is part of that carpentry. The codes are assigned during the implementation of that carpentry and must not be changed.
- **Measure**: in this row, establish the measure to which the value is assigned. 
***Example: L***
- **Value**: a value only needs to be entered if it is fixed, i.e. it depends exclusively on the width of the sheet. Enter 0 if a field (for example the width of a profile) depends on parameters that vary according to the design. It will be the design rule that, during the calculation, will attribute the correct value to this parameter.
- **Core width**: width of the magnetic steel for which the assigned value is valid.
- **Phases nr**: the number of phases for which the assigned value is valid.
- **L1**: the field for future use: enter 0.
- **L2**: the field for future use: enter 0.
- **Calculated?**: enter **False** if you entered a value in the Value field.<br>
Enter **True** if you entered 0 in the Value field.
