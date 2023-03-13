# Bulging of the windings

## Introduction
The bulging of the winding is the multiplicative factor applied to the theoretical winding thickness to reach the actual winding thickness required.
This parameter depends on the type of winding machines available in the company and how they work. Generally, in order to determine the bulging coefficient under various conditions, a series of sample windings must be defined. This includes measuring their real thickness and calculating the ratio between the real thickness and that which was theoretically calculated. 
Establishing the real winding thickness is particularly important as it leads to determining accuracy in the calculation of:

- Short-circuit voltage
- -	Load voltage
- -	Losses in the conductors and consequently overtemperature in the various winding sections
  
Within the table, you can define the bulging coefficient depending on the type, material and thickness of the conductor.<br>
**Using the "+" or "-" buttons in the navigator at the top right, you can insert rows to achieve greater granularity or delete rows if required fewer details.**

### Table Fields (Bulging of the windings)
- **Coil shape**: the code that identifies the shape of the coil can be either rectangular **R** or cylindrical **C**.
The current applications are not yet designed for cylindrical coils so the content of this field must always be R. Coil diversification will be included in future versions of the applications.

- **Material**: select the material of the winding - **AL** or **CU.**
- **Code**: select the type of winding by entering one of the following codes: **F** = wire **P** = flat wire **B** = foil 
- **MAX. thickness**: the maximum radial thickness of the conductor
If the chosen coefficient of use is applicable for any thickness enter **0.** If there is a thickness limitation, enter the **thickness limit.** In this latter case, enter an additional line for type and/or conductor material without set limitation, i.e. with Thickness MAX. = 0 and enter the correct coefficient.

- **Coefficient**: multiplication factor to be applied to the theoretical thickness to obtain the actual thickness.