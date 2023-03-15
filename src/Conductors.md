# Conductors

## Introduction
This table lists all conductor types (wire, flat conductor, tape) in the two materials AL and CU.

### Table fields (Conductors)
- **Axial dim**: for wire, enter the bare diameter, for flat wire or foil enter the axial dimension.
- **Radial dim**: for wire, enter the insulated diameter, for flat wire or foil enter the radial dimension.
- **Section mm2**: enter the net section, ideally from the supplier's table. If this is not possible, for flat wire, the net section is calculated as follows: 
  1. Case radial thickness <= 2.24  <br>Section = (axial dimension x radial dimension) - 0.363
  2. Case radial thickness case > 2.24 <br>
    Section = (Axial dimension x Radial dimension) - 0.55

    However, for wire and foil, the precise area is calculated.

- **Kg/meter**: we recommend taking this parameter from the supplier's tables. Otherwise, it should be calculated from the section and specific weight (CU = 8.90 kg/dm3 AL = 2.70 kg/dm3).
- **R/meter Ohm**: we recommend obtaining this parameter from the supplier's tables. Otherwise, it should be calculated from the section and specific resistance (CU = 0,00175  &#8486;/m  AL = 0 ,0028  &#8486;/m).
- **Code**: this code defines both type and material of the conductor.<br>Enter:

| Code | Material            |
|--------|----------------------|
| B3     | AL foil             |
| B4     | CU foil             |
| P3     | AL flat wire  |
| P4     | CU flat wire  |
| F3     | AL wire	 |
| F4     | CU wire  |

  
- **Article**: To select the material, use the article code of your management system. This value will allow the applications to retrieve the description and unit cost into the table ***Material Unit Cost*** by importing the list of materials available in your warehouse.