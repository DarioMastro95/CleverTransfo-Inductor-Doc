# Construction parameters

## Introduction

Under construction parameters, you will find all the tables that define the various design parameters. They can be used to design each type of element in an optimised way.<br>
**The PROFESSIONAL version of Clever Suite includes tables with standard values that may be quite different from the proportions you use in your company. Optimisation varies according to financial, geographical, and time-based conditions within which each company operates.**
Therefore, it is paramount to compare the data supplied with your internal optimisation and carefully evaluate the values to be entered into the applications in order to obtain the best design at the lowest cost for all the various element types and relevant power.<br>
For each type of element and each power, it is a matter of defining which geometric parameters lead to the greatest advantage in financial terms.<br>
Clever applications will automatically adapt your established geometric parameters and allow you to design elements as optimised as possible straightaway.<br>

For large elements, there are two tables: one for elements built with the non-oriented grain (**NO**) magnetic sheet and one for oriented grain (**GO**) magnetic sheet. This is because in these two cases, the proportioning is generally quite different.
**Other tables, to define different parameters for special constructions, can be inserted on request.** <br>
All dimensions in the tables are expressed in mm. unless explicitly stated.

### Table Fields ( NO core and GO core)
- **Description**: free descriptions of the type of element being designed are not included in the applications, so you can write descriptions as you see fit.
- **Power VA**: dimensioning power of the element in VA.
- **Prim. wdg partwindings**: the number of partwindings of the primary winding. In the case of inductors, this will be the total number of partwindings as there is only one winding.
- **Prim. wdg channel**: the thickness of the front channel between the partwindings of the first winding.
- **Sec. wdg partwindings**: No. of partwindings of the secondary winding. 
- **Sec. wdg channel**: the thickness of the front channel between the partwindings of the secondary winding. This channel is also used between the primary and the secondary channel. If there were more than one secondary winding, the applications would copy the data of the first secondary winding.
- **Winding H**: net height of the windings 
(all windings are set to the same height).
- **Core section cm2**: section of the core (column) which is calculated as follows: **sheet width x Core thickness x 0.97**. <br>
**0.97** gives the actual cross-section, after deducting the spaces occupied by the insulation of the individual laminations.
- **Core Width**: the width of the core sheet of the column (The core thickness is calculated automatically by the application, starting from the core section, taking into account the formula above).
- **Front ch. core/coil**: the front channel between the core and winding.
- **Side ch. core/coil**: the lateral channel between core and winding. The inclusion of frontal and lateral values is especially important for inductors. If there is no side channel, enter 0.
- **Window width**: the window width is the space between the columns.
- **Window height**: window height is the space between the two yokes.