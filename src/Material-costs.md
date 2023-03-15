# Material costs

## Introduction:
This table is used by the applications to determine the description and the unit cost of the materials that will compose the bill of materials. A list of **generic** materials is available by default, You have also the possibility of importing all the information relating to all your **specific items** available in your **management system.**<br>
In fact, when they cannot find the specific material, the applications use the list of generic materials to determine the unit cost and the description of the component they are designing.
Please note that the generic materials in the table are given an article number starting with the letter Z and are blue. The list of generic materials includes all groups of materials that are used by the applications. Obviously, from a dimensional point of view, they contain unit costs associated with size ranges with rather coarse limits; otherwise, the list would be too long and difficult to keep up to date. On the other hand, it is important to allow applications to calculate the material cost of an item accurately, including when you are designing special items that need materials unavailable in the company's stock. Hence:
1.	the first task is to enter the unit cost for each line, in accordance with the unit of measurement indicated. 
2.	The second task will be  to import the liste of the material available in your warehouse and listed in your management system

### Conductor-related details for generic materials:
In general, the cost of conductors can be divided into basic cost and transformation cost. You will find in the table these two items:
- **Basic conductor AL**
- **Basic conductor CU**
For each type of conductor there is another item: the transformation cost:<br>
***Example: 
Conductor wire AL <= 2.5 
or
Conductor foil CU***<br>
If you enter a basic cost, applications will take this as the basic conductor cost and add it to the transformation cost when calculating the material cost. If you want your conductor cost to consist of a basic cost and a transformation cost, enter the base and transformation costs as described. On the other hand, if you wish to manage a single cost, enter 0 in the basic cost and enter the entire cost in the **transformation field.
NB: If entered, the basic cost is added also to the cost of conductors with specific items.**

### Table fields (material costs):

- **Description**: this is the description assigned to that material (read-only field)
- **Unit of measure**: this is the reference unit of measure for the unit cost value. (Read-only field)
- **Unit cost**: here enter the unit cost in accordance with the unit of measurement
- **Article**: assigned article (read-only field)

Any additions of generic materials are a consequence of application customisation and cannot be added by the user.
### Entry of specific materials:

In addition to entering generic costs, as mentioned above,  you can import the entire list of materials that are available in your management system. Here is how to proceed:

#### Export the material data on the management system side:

Extract from the management application a table with the following characteristics: 
- Column 1 = ARTICLE
- Column 2 = DESCRIPTION
- Column 3 = UNIT OF MEASURE
- Column 4 = Cost

and save it as a file with the extension .csv (readable with Excel).
Check, by opening the file with an editor (Notepad for example) that the separator character between the columns is ";". If not, define this rule at the export level.
You can ask your IT department, in charge of the management system, to create this file and save it in a folder accessible to you.<br>
**Note:**
It is possible to extract the entire list of materials (not only those used in the design) as the applications will only use the items listed in the technical material tables.
In the initial set-up stage, you must decide which price column to use to export (average price or last price or etc.). This is a decision that has a major impact on the result of the cost calculation.

#### Importing material data into Clever applications:
Once you have obtained the .csv file:
- Press the 'Import' button at the top right of this table.
- Choose the file from the dialogue box that appears as a file exported from the management system.
- Again from the opened dialogue box, click on Open (bottom right)
- This will automatically import the file.

#### Managing the periodic update of the cost of generic materials:

For the periodic update of the cost of generic materials, it is possible to proceed in two ways:
1.	The technical department takes charge of updating the cost directly in this table, as was done the first time. In this case, only the specific items are imported from the management system.
2.	Generic materials are also loaded into the management system, which must be managed as virtual articles (without physical location and with quantity = 0). In this case, the management department will be responsible for updating the costs of generic materials. The materials import file will also include the generics and you only have to regularly import the file from the management system.

Whatever the choice, it is desirable to create a management-side procedure, which automatically exports to a defined folder readable by the technical department regularly (i.e. every week or even every day). In this way, there are the right prerequisites to be able to import up-to-date costs at any time.

#### Table reading facilities:
- As in any other table, you can use the **filter** in the top left-hand corner to search for a material family or a specific material or change the sorting of the columns.
- If the material cost is = 0, it is marked in **red.**
- If you see an article coloured **red** in the specific tables you have previously filled in, it means that there is no corresponding article in “Material costs” table.

