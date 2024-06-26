# NO core

### Table Fields ( NO core and GO core)
- **Norm**: element type coding, which must be strictly adhered to. If a new type of element is to be added, you must contact us for the choice of code. Here are the meanings of the letters used:<br>
A = DC single-phase inductors<br>
B = AC Single-phase inductors<br>
C = Three-phase inductors<br>
O = Single-phase transformers<br>
P = Three-phase transformers<br>
- **Power VA**: dimensioning power of the element in VA.
- **Prim. wdg partwindings**: the number of partwindings of the internal winding. In the case of inductors, this will be the total number of partwindings as there is only one winding.
- **Prim. wdg channel**: the thickness of the front channel between the partwindings of the internal winding.
- **Sec. wdg partwindings**: No. of partwindings of the external winding. 
- **Sec. wdg channel**: the thickness of the front channel between the partwindings of the external winding. This channel is also used between the primary and the secondary channel. If there were more than one secondary winding, the applications would copy the data of the first secondary winding.
- **Winding H**: net height of the windings 
(all windings are set to the same height).
- **Core section cm2**: section of the core (column) which is calculated as follows: **Core width x Core thickness x 0.97**. <br>
**0.97** gives the actual cross-section, after deducting the spaces occupied by the insulation of the individual laminations.
- **Core Width**: the width of the core sheet of the column (The core thickness is calculated automatically by the application, starting from the core section, taking into account the formula above).
- **Front ch. core/coil**: the front channel between the core and winding.
- **Side ch. core/coil**: the lateral channel between core and winding. The inclusion of frontal and lateral values is especially important for inductors. If there is no side channel, enter 0.
- **Window width**: the window width is the space between the columns.
- **Window height**: window height is the space between the two yokes.
 **Description**: free descriptions of the type of element being designed are not included in the applications, so you can write descriptions as you see fit.