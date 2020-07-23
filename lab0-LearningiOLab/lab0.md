# Lab 1: Learning to use iOLab
---
### All Materials Needed:
-  iOLab
- Neodymium magnet
- Ruler
- Steel Screw
- Tape

---

# Part I: The iOLab Device
In this intro lab, we will learn how to use the iOLab device to take useful data. Your iOLab is essentially a microcomputer with a number of sensors suited for measuring quantities such as force, velocity, acceleration, magnetic fields, etc. Your iOLab processes information from these sensors and relays it to the dongle attached to your computer. When the software is running, these data can be recorded and displayed in a graph.

:::Figure:Figure
![](imgs/iolab.jpg)

The device
:::

####


You are encouraged to play with this device, and take creative license to your investigations throughout the course. The instructions provided in each lab can be seen as a "minimum" requirement -- the features of the iOLab go far beyond these suggestions and, when used creatively, can let you explore the concepts of electromagnetism quite deeply. Some things you may want to play with are the force meter, wheels (for distance, velocity and acceleration), sound and light sensors, as well as the digital and analog circuit inputs (if you are experienced -- please see the documentation to prevent damage to your device). 

# Part II: Experiments
## 1. Overview
In this lab, we will get familiar with the iOlab by investigating the external magnetic field of a Neodymium magnet. Our first step will be to calibrate the device: you will have to do this for each lab, so be sure to take notes as you go. 

After calibration, we will explore how the iOLab allows us to take *qualitative* and *quantitative* measurements. Our first project will be exploring the field of permanant magnets, and getting comfortable with using the magnetometer to aquire data. You will use the magnetometer throughout this course.

## 2. Calibration of iOLab magnetometer

### Materials needed:
-  iOLab



  
In each experiment in this course, it's crucial to calibrate the iOLab magnetometer before making any measurements! 

::: Question
Define calibration in the context of a physics experiment. List a few reasons why calibration of all measuring devices is critical to *any* physics experiment.
:::

During calibration, the magnetometer will use the Earth's magnetic field in conjunction with its gyroscope to determine the relative orientation of its sensors. Since the $x, y$ and $z$ directions are mutually orthogonal, it will analyze how rotation along each of these axes affects the sensor measurement to determine how these axes are aligned relative to the device. 

During this step, it is important that we find an open space, free of electric and magnetic fields -- these can skew the calibration step and ultimately affect your data.

For calibration and experiments, an appropriate location may be a room with minimal electronic devices, or on top of a wooden/nonmetallic table. Be sure to remove any magnets and metals from the experiment area.

::: Question
Why would metal interfere with the calculation of magnetic field?
:::

####
::: Exercise 
Instructions for labs in this course will be in "excercise" boxes such as this one, with numbered steps to help you navigate the procedure. The easiest way to successfully complete these labs is to  tackle each step in order, taking observational notes on each numbered step so that you have a record of what you've done for your final write-up.

We will now describe the process you will  use to calibrate the iOLab device via the software. If you have not installed the iOLab software, please do so now. The software can be downloaded from the iOLab [website](http://www.iolab.science/running-application.html). After you have installed the sofware, plugging in the USB dongle and pressing the power button on the iOLab should connect it to your computer.

####

**Calibration Procedure:**
1. Open the software, click on the “setting” icon (![](imgs/settingicon.png) ), and highlight the "Calibration" menu. Select "Accel-magn-gyro" from the list and follow the instructions shown on the screen. 

:::Figure:Figure
   ![](imgs/calibration_step1.gif)
:::

2. Perform the calibration for the iOLab device’s $x, y, z$ axes separately. The image of the appropriate iOLab orientation is shown in the lower right corner of the Calibration window. Note that the longest side is the $x$-axis, the second longest side is the $y$-axis, and the shortest side is the $z$-axis. 
3.  After calibrating the three axes, press the “save” button.
####
After completing the above steps, you must now verify your calibration. We will do this in two ways, to ensure high-quality data for the analysis porition of your lab:
#### 
**Steps for Verification 1:**

Here we will check that the axes have been correctly identified, by rotating the device and viewing the response
1. Select “magnetometer” from the list on the left, and you will see that $B_x$, $B_y$, and $B_z$ are checked. Uncheck $B_z$ and be prepared to rotate the iOLab along its centered $z$-axis (*i.e.*, spin it on the table with the front facing up). 
2. Hit the “record” button to start recording, and rotate the iOLab for about three complete cycles (~360 degress for 3 times). You should see two trajectories with some repeated pattern on the plot. When you have three complete rotations, stop recording.

:::Figure:Figure
   ![](imgs/magverifyx.png)
:::
	 
3. Go to the “parametric plot mode” icon ( ![](imgs/parametricplotmodebutton.png) ) located in the middle of the top panel. On the lower panel, select the whole range of the data with your cursor. The default is plotting magnetometer (y) vs. magnetometer (x). Note that $y$ vs. $x$ means that $y$ is plotted on the $y$-axis. 
4. Click on the “tool bar” icon ( ![](imgs/toolbaricon.png) ) in the lower left region. Change the first setting to “$B_y$” and the second setting to “$B_x$”. Now you should see an elliptical trajectory on the plot. Make sure that 
- - the ellipse is centered around (0, 0). Note that, despite appearances, the plot should be circular. The elliptical shape is an artifact of the $x$ and $y$ axes having different scales on your screen. 
- - $\Delta x$ and $\Delta y$ (the width and height) are equal on the ellipse.
5. If these two criteria are met, you may move on to the next step. Otherwise, make a note of your issue, return to the calibration procedure and recalibrate your device, being sure that the area is clear of metal and magnetic objects.

:::Figure:Figure
  ![](imgs/xverfiyplot.png)
	Does this calibration satisfy the verification requirements?
:::
#### 
**Steps for Verification 2:**

For the second verification of the calibration, we will repeat the same procedure with a different axis of rotation. 
1. Click the “reset” button and go back to chart mode (  ![](imgs/chartmodebutton.png)). 
2. This time, unselect $B_x$ and put the iOLab on its $x$-axis (*i.e.*, the front face of the iOLab should be perpendicular to the table, and the bottom should be pointing to the side).
3. Hit the “record” button to start recording, and rotate the iOLab for about three complete cycles (~360 degress for 3 times). You should see two trajectories with some repeated pattern on the plot. When you have three complete rotations, stop recording.
4. Go to the “parametric plot mode” icon ( ![](imgs/parametricplotmodebutton.png) ) located in the middle of the top panel. On the lower panel, select the whole range of the data with your cursor. 
5. Click the “tool bar” icon ( ![](imgs/toolbaricon.png) ). Change the first setting to “$B_y$” and the second setting to “$B_z$”. You should see a similar ellipse to that in the previous verification.
6. Check that the two criteria are satisfied. If not, return to the calibration procedure and recalibrate your device, being sure that the area is clear of metal and magnetic objects.

::: Question
(a) Why is verification an important step of calibration?

(b) Assume the iOLab is functional. If the ellipse is off-center, what might be a possible reason?

(c) Why do you think the ellipse is not perfectly "smooth" ? Give some possible explanations.
:::
:::

####

####

####


## 3. Measure direction and strength of a magnetic field using the magnetometer

### Materials needed:
-  iOLab
- Neodymium magnet

The neodymium magnets, composed of various neodymium alloys, are permanent rare-earth magnets that are very strong. In this lab, they will provide an external magnetic field. Our first task is to characterize the magnet by measuring the *direction* and *magnitude* of this field.



::: Exercise
 To measure the direction of magnetic field from the Neodymium magnet we will use use the Magnetometer Probe located on the upper left corner of iOLab (next to the “M” label) and the Sensor in the software. 
####

**Measurement steps:**

1. Open the software and go to “chart mode”(  ![](imgs/chartmodebutton.png)). We can uncheck the $B_x$ and $B_y$ boxes on the plot, and keep only the $z-$component in this experiment.
2.  Start recording. You should see a horizontal line on the plot. 
3.  Hold the magnet above the "M" symbol, with one flat side facing up. Move it up and down above the magnetometer.
4.  Now flip the magnet over, and repeat the motion.
5.  Stop recording to view the collected data. You may need to use the zoom feature or change the axis scaling to see all of the data.

::: Question
(a)Why does $B_z$ change when you move the magnet vertically?

(b) At the point where you flipped the magnet, describe the difference you observe, and give a possible explanation.

:::
####


####

By observing how $B_z$ changes with the vertical motion of the magnet, you should be able to identify the direction of the magnetic field. Mark one side with “⨂” to indicate that the magnetic field is going into that side, and the other side with “⨀” to indicate                that the field is coming out of this side. You will use these magnets for other labs this quarter.

::: Question
(a) Explain how you determined the magnet's polarity from your data, *i.e.*, which sides represent the magnet's north (⨀) and south (⨂) poles. 
:::


:::

## 4. Measure the field around a magnetic source
### Materials needed:
-  iOLab
- Neodymium magnet
- Steel Screw
- Ruler and Tape

In the last exercise, we asked you to identify the poles of your permenant magnet and make some qualitative observations about how field strength behaves as you move the magnet above the iOLab sensor. We will now make a more quantitative measurement of the field surrounding the magnet.

::: Question

(a) Theoretically, how should the strength of the magnetic field depend on distance from the source? Your answer should be written in terms of an equation $F(r)=...$

(b) Devise a quick experiment that could verify this, and sketch a plot of the expected result. 

(c) Based on the relationship between strength and distance proposed in (a), say that you doubled the distance from $r$ to $2 r$.  How would this change the resulting force?
:::



::: Exercise
As your final exercise in getting familiar with the iOLab, you will attempt to verify your prediction quantitatively. 


:::Figure:Figure
  ![](imgs/magsetup.jpg)
	Example of Magnetic Field Measurement setup
:::
####

**Magnetic Force and Distance steps:**
1. Use the reset button to clear all measurements. On the magnetometer graph panel, uncheck all data except for $B_z$.
2. Tape the ruler to the edge of a table, and align the iOLab, with the $x$-axis pointing up, such that the $M$ symbol is  aligned with the 0 cm mark. 
3. Attach your magnet to the flat end of a steel screw to make handling easier. Align the magnet with the 1 cm mark on the ruler.
5. Record about 1 second of data and stop.
6. Double the distance to 2 cm, 4 cm and 8 cm, and record 1 second of data each.
7. For each measurement made above, highlight the 1-second interval over which you took data, and record the average and the distance of the measurement in a table.

AVOCADO: gifs demonstrating these steps

:::Question 
For each doubling, calculate the ratio of the magnetic force $F(2r)/F(r)$.  For example, calculate $F(2\:cm)/F(1\:cm)$

(a) Do the ratios match your expectations from Question 6c? 

(b) Do some ratios match better than others?

(c) Propose an explanation for part (b)
:::
:::
## Part III: Write-up
 - For Part I, give a short summary of the iOLab device. 
 - For Part II, write a short paragraph describing the procedure taken and any important observations for each Exercise. Be sure to summarize your results and reasons why you believe your data are precise and accurate. If you do not think your data are accurate, explain why, and how this could be fixed in a future lab.
 - You are encouraged to attach images of your plots,  data, and setup -- doing so may allow you to regain partial or full credit even if your experiment fails.
 - At the end of your write-up, please include the answers to all questions, clearly numbered. Show your work if applicable.

