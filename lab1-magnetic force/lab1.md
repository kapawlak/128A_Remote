# Lab 1: Magnetic Force
---
### All Materials Needed:
-  iOLab
- Neodymium magnets
- 3-D batteries with battery cage
- Wire Leads
- One AAA battery
- One screw
- 12-feet-long wire
- Two 0.5Ω high wattage resistors
- Tape

---
## 1. Overview
In this lab, we will be dealing with an external magnetic field from Neodymium magnets. Use the right-hand rule to determine the direction of the magnetic force due to the presence of a magnetic field. Match the predictions of the magnetic force direction to observations.

## 2. Calibration of iOLab magnetometer

### Materials needed:
-  iOLab
![](imgs/iolab.jpg)


  
Before making any measurements, it’s crucial to calibrate the magnetometer! First, we need to find a magnetic free space where all experiments will be performed. This means that we need to find a place where magnetic noises are minimized, such as a room with minimal electronic devices, a wooden or non-metal table, and be sure to keep any magnet away from the area. Any metal will affect the magnetic field measurement.

::: Question
Why does metal interfere with the calculation of magnetic field?
:::

####

We will now describe the process you will  use to calibrate the iOLab device via the software.

:::Figure:Figure
   ![](imgs/calibration.gif)
:::

1. Open the software, click on the “setting” icon (![](imgs/settingicon.png) ), and highlight the "Calibration" menu. Select "Accel-magn-gyro" from the list and follow the instructions shown on the screen. 
2. Perform the calibration for the iOLab device’s x, y, z axis separately. Note that the longest side is the x axis, the second longest side is the y axis, and the shortest side is the z axis. 
3. After calibrating the three axes, press the “save” button.
####
After completing the above steps, you must now verify your calibration. We will do this in two ways to ensure high-quality data for the analysis porition of your lab:
#### Steps for Verification 1
Here we will check that the axes have been correctly identified by rotating the probe and viewing the response
1. Select “magnetometer” from the list on the left, and you will see $B_x$, $B_y$, and $B_z$ are checked. Uncheck $B_z$ and be prepared to rotate the iOLab along its centered z axis (ie, spin it on the table with the front facing up). 
2. Hit the “record” button to start recording, and rotate the iOLab for about three complete cycles (~360 degress for 3 times). You should see two trajectories with some repeated pattern on the plot. When you have three complete rotations, stop recording.
   :::Figure:Figure
   ![](imgs/magverifyx.png)
   :::
3. Go to the “parametric plot mode” icon ( ![](imgs/parametricplotmodebutton.png) ) located in the middle of the top panel. On the lower panel, select the whole range of the data with your cursor. The default is plotting magnetometer (y) vs. magnetometer (x). Note that y vs. x means that y is plotted on y axis. 
4. Click on the “tool bar” icon ( ![](imgs/toolbaricon.png) ) in the lower left region, change the first setting to “$B_y$” and the second setting to “$B_x$”. Now you should see an elliptical trajectory on the plot. Make sure that (1) the ellipse is centered around (0, 0). Note that the plot should be circular, but not appear to be a circle due to that x and y axes have different scales. Also, check (2) Δx and Δy are equal on the ellipse. If these two criteria are met, let’s move on to the next step. Otherwise, redo the calibration and repeat this step until the results are good.
:::Figure:Figure
   ![](imgs/xverfiyplot.png)
:::
#### Steps for Verification 2
For the second verification of calibration, we will repeat the same procedure with a different axis of rotation. 
1. Click the “reset” button and go back to “chart mode”. 
2. This time, unselect $B_x$ and put iOLab on its x axis (ie, the face of iOLab should be perpendicular to the table and the bottom should be pointing to the side).
3. Repeat the steps 2-3 of Verification 1. 
4. In “tool bar”, change the first setting to “$B_y$” and the second setting to “$B_z$”. You should see a similar ellipse. Check if the two criteria are satisfied. 

::: Question
Assume the iOLab is functional. If the ellipse is off-center, what might be a possible reason?
:::

####

####

####


## 3. Measure direction and strength of a magnetic field using magnetometer

### Materials needed:
-  iOLab
- Neodymium magnet

The neodymium magnets provide an external magnetic field in this lab. To measure the direction of magnetic field from the Neodymium magnet we need to use the Magnetometer Probe located on the upper left corner of iOLab (next to the “M” label) and the Sensor in the software. 

::: Exercise
Open the software, go to “chart mode”. We can uncheck the Bx and By boxes on the plot, and keep only the z component in this experiment. Start recording. You should see a horizontal line on the plot. Hold the magnet with one side facing up, and move it up and down above the magnetometer.

::: Question
Why does $B_z$ changing when you move the magnet vertically? 
:::
####

Now flip the orientation of the magnet and repeat the motion.

####

::: Question
Does the plot behave differently? If yes, describe the observed difference and a possible explanation.
:::

####

By observing how $B_z$ changes with the vertical motion of the magnet, you should be able to tell the direction of the magnetic field. Mark one side with “x” to indicate the magnetic field is going into that side, and the other size with “·” to indicate the field is going out of this side. You will use these magnets for other labs in the quarter.

::: Question
Explain how you determine the two sides. 
:::

::: Question
How does the strength of the magnetic field depend on distance from the source?
:::
:::
## 3. The Rotating Motor
### Materials needed:
- Neodymium magnets
- Wire Leads (stripped)
- One AAA battery
- One screw

In this set-up, we will be creating a DC motor using the materials listed above. By running current through the magnets, this will cause the magnet and screw system to rotate. Paying attention to the direction the current is flowing and the direction of the magnetic field of the magnets, we can use the right-hand rule to figure out the direction of the magnetic force. This will explain why the magnets and screw system are rotating in the direction that they do.

::: Exercise
You have figured out the direction of the magnetic field in part 2. Now let’s create a simple motor. First of all, pull off both ends of the wire to have the copper exposed for conduction. Hold the battery in the air and touch one of the leads to either side of the battery. Touch the flat side of the screw to one flat side of the magnets, and use the other side of the battery to “grab” the pointy side of the screw. Once everything is connected, apply the other wire lead to the side of the magnets (ie, perpendicular to the magnets’ surface), and you will see that the screw and the magnets begin to rotate.
######
When everything is properly connected, the current will be running through the magnet itself. Due to the moving charge and magnetic field, there will be a magnetic force acting on the edge of the magnet. This will thus create a torque which will cause the magnet and screw system to rotate. Note that flipping the magnet changes the field, and flipping the battery changes the current.
######
With the motor (a screw is placed between a battery on the top and a magnet on the bottom), you will build 4 different configurations varying the two control variables:
- battery with the positive or negative terminal at the top
- direction of magnetic field is upward or downward
######
In each case, you should note the direction of the current and the magnetic field to find the direction of the magnetic force. You can then explain if this magnetic force would cause the rotation in the direction of which you are observing. Note that the direction of the current can be either pointing toward the center or edge, and the direction of the magnetic field can be either pointing up or down.

::: Figure:Figure
![motor](imgs/1.png)
:::

The right-hand rule, 

::: Figure:Equation
$$
\overrightarrow{F} = \overrightarrow{F} I \times \overrightarrow{B}
$$
:::

tells you the direction of the force that acts upon the current. Because this current is on one side of the magnet, the force acting upon it creates a torque that spins the magnet. You will use the right-hand rule to predict the direction that the magnet will spin based upon the orientation of both the battery and the magnets.

::: Question
Make a table to record (1) orientation of the battery, (2) orientation of the magnets, (3) direction of the current, (4) direction of the magnetic field, (5) direction of the magnetic force, and (6) direction of rotation. Feel free to make “view from above” illustrations to show each of the 4 possibilities.
:::
:::
## 4. Force on current-carrying wire near a magnet
### Materials needed:
- Three Neodymium magnets
- 3-D batteries with battery cage
- Wire Leads
- 12-feet-long wire
- Two 0.5Ω high wattage resistors
- Tape

In this part, we will see the force on a current-carrying wire from a magnetic field. When a current-carrying wire is brought into this external magnetic field, the wire will feel a force due to this magnetic field. We will connect a wire to batteries, tape it straight near one end of the magnet. Note what happens to the wire once current is flowing inside. Using the right-hand rule, we can figure out the direction of the magnetic force and test this against our observations. 

::: Exercise
To set up the circuit, use the wire leads to connect either end of the battery source to one of the resistors. We will use the long wire to connect two resistors later.
######
Put three Neodymium magnets on your wooden table. They should stick together with the rounded side on the table. Give it a light spin, and you will see it tends to point to one side. If you put it facing the opposite side and roll it, it will flip itself automatically.

::: Question
Why does the magnets trio prefer one orientation?
:::

After the magnet is aligned by itself, tape the back two magnets to the table and keep the front one free from tape. Straighten up the middle part of the 12-feet-long wire and keep this part in front of the magnet. Tape two sides of the wire to the table and leave a ~30cm segment near the middle of the magnet. Make sure the wire is not too tight so that it can move up or down in the presence of a magnetic field.

::: Question
In this setup, why would the magnetic force point along the vertical direction?
:::

Now we want to complete the circuit. Plug one end of the wire into the line on the breadboard where one resistor is in. Do the other end for the other resistor. While the current starts to run in the wire, note the motion of the wire.

::: Question
Write down the direction of the magnetic field from the magnets, the current, and the magnetic force. Verify that they are consistent with the right hand rule.
:::

Switch leads of the long wire. Note that now the current flows in the opposite direction of the previous case.

::: Question
How does the motion of the wire change after switching leads?
:::
:::
