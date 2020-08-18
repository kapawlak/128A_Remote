# Lab 2: Magnetic Field
---
### Materials needed for entire lab:
-  iOLab
- A ~1-m long wire
- AAA or AA battery
- Two wires with clips at one end
- Some vertical support (e.g., paper, tape, a book…)
- Paper and ruler

---
# Part I: The Biot-Savart Law

In the previous lab, we looked at how moving electric charges feel force in the presence of external electric and magnetic fields. Continuing with the theme of electrodynamics, we will look at the fields and forces caused by moving charges *themselves*.

As you may know, moving charges not only have electric fields, $\vec E$ associated with them, but also produce magnetic fields, $\vec B$ in directions tangent to their velocity. The characterization of such $\vec B$ fields for a single moving charged particle is actually trickier than you would expect -- the motion of the point-like charged particle and constant generation of a magnetic field at every point in time requires relativity to describe correctly -- and will be dealt with in a more advanced course.

It turns out, however, that a *line* of moving charges, such as a current-carrying wire, is much simpler to work with: the resulting magnetic field has a static and well-defined description in terms of the Biot-Savart Law:

:::Figure:Equation

$$
\vec B = -\frac{\mu_0 I}{4\pi} \int_C    \frac{\vec r \times d\vec\ell }{|\vec r|^3}
$$

:::



In this lab, we will explore the Biot-Savart law by indirectly determining *the current* in a wire by *measuring the magnetic field*  it produces. We will focus on two simple setups, a long straight wire and a loop of current,  whose integrals result in a simple expression for the magnetic field.

### Long Straight Wire

::: Figure:Simulation
`<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/BiotSavart_Current_Line/Biot_Savart.html" width= "100%" height="650" style="border:none;"></iframe>`
:::

Recall that for a long straight wire, the magnetic field wraps around the line of current according to the right- hand rule:

:::Figure:Figure
![](imgs/RHR.png)
:::
Analyzing the integral of the Biot Savart Law,  it can be shown that the strength of the magnetic field at a distance $R$ from the wire is given by the equation:

::: Figure:Equation
$$
B = \frac{\mu_0 I}{2 \pi R} 
$$
:::
where the magnetic permeability of free space is $\mu_0 = 4\pi\times 10^{-7}$ T&middot;kg/A

### Loop of Wire
::: Figure:Simulation
`<iframe src="https://kapawlak.github.io/PhDemoJS/Apps/BiotSavart_Current_Loop/Biot_Savart.html" width= "100%" height="650" style="border:none;"></iframe>`
:::

For a  loop of wire, the magnetic field looks very similar to that of a dipolar magnet. When the loop is large, the mangnetic field in the center of the loop looks approximately like a straight line piercing the loop, with a direction determined by the right hand rule. The strength of this field depends on the radius of the loop and the height, given by the relation:

::: Figure:Equation
$$
B = \frac{\mu_0 I}{2} \frac{R^2}{(R^2+z^2)^{3/2}}
$$
:::


# Part II: Experiment


## 1. Prelab setup

Since we are making direct and quantitative measurements of a magnetic field in this lab, it is important to know the exact location of the magnetometer in the iOLab device -- recall that in Lab 0, this offset resulted in a deviation from expected behavior when you were doubling the distance to your magnet! We know from the previous lab that the magnetometer is more or less under the “M” label printed on the top left corner. Figure 3 shows an image of the iOLab without the top cover.

::: Figure:Figure
![iOLab](imgs/3and4.png)
:::

These diagrams  illustrate the exact location of the magnetometer. As you conduct the experiment, you will need to use the coordinates ($x, y, z$) of its position. Keep these measurements in mind while performing the experiment and doing the calculation. 
######
As in Lab 0, we must calibrate the magnetometer to verify the accuracy of the measurements. As emphasized in the previous lab, be sure to do the calibration away from steel objects (e.g., the frame under many desks) since these will distort the Earth’s magnetic field, whose vertical component is used in the calibration process.

####

:::Note

**Note**: The long wire provided in your iOLab kit is *enameled*. This enamel must be scraped off at the contact points, else the circuit will **NOT** conduct. The safest way to do this is to grip the ends of each wire with the alligator clips, squeeze them closed, and pull. Doing this a few times should scrape off enough enamel to allow sufficient conduction.

:::Figure:Figure

![iOLab](imgs/stripwire_small.gif)

:::


:::



## 2. Long straight wire

### Materials needed:
- iOLab
- A ~1-m long wire
- AAA or AA battery
- Two wires with clips at one end
- Some vertical support (e.g., paper, tape)



::: Exercise
In this geometry, the wire is sitting flat on the desk, parallel to the iOLab $x$-axis. It is displaced from the magnetometer in both the $y$ and the $z$ direction. This means that the magnetic field at the magnetometer will have both $y$ and $z$ components. Therefore, you will need to turn on both $B_z$ and $B_y$ on the plot.

::: Figure:Figure
![geometry#1-1](imgs/6and7.png)
:::
1. On a piece of paper, draw 10 iOLab locations spaced 1 cm apart in the $y$ direction. These will be the locations you will measure the $B$ field strength. Note that it is easier to align the iOLab and correct your distances for the magnetometer offset after collecting data -- the correction will be the same for each distance measurement.  Once everything is set up correctly, as shown, you may begin taking data. 
3. Align the iOLab to a given measurement line.  
4. Make sure that the software is open, and your device is calibrated (see Lab 0).
5. Begin recording data from your magnetometer.
6. Briefly touch the wires to the battery terminals for no more than 1 second. This prevents overheating and battery drain. 
7. Stop recording.
8. You should see a narrow dip on both of the components, similar to the following clip:

:::Figure:Figure

![](imgs/dip_gif_small_cropped.gif)

:::

9. Repeat steps 5-8 for the remaining 9 measurement lines.
######

**Note**: If you are doing the experiment on a desk with a steel frame, the baseline $B$ field will shift as the iOLab is moved over different regions of the desk (why?).  If you are unable to find an alternate location to perform the experiment, it is possible to correct for the error by measuring the $B$ field components both before and during each current pulse, and then finding the difference. This difference will be the field due to just the current. 




::: Question
Review your data and make a table like the one below with appropriate units.

:::Figure:Table

|Offset  $y$  | $\:R\:$ |$1/R$  |Measured $B_y$  |Measured $B_z$  | Field strength $B$ |
| ------|------|------|------|------|------|
|$\:$        |         |          |          |        |           |           

:::

Hint: Don't forget to consider the height of the magnetometer in your calculation of $R$!
:::

::: Question
(a) Plot B vs. 1/R. 

(b) Why should the slope of this curve give you a measure of the current, I?

(c) Determine the current $I$ from this slope. Report it in the correct units and to a reasonable number of significant figures.

(d) From Ohm&rsquo;s law and the voltage of your battery, estimate the resistance of your setup. 

(e) Does it seem reasonable? Why or why not?
:::


::: Question
(a) Assuming that you performed the experiment correctly, what do you think is your largest source of *uncertainty*? 

(b) Estimate how much might it affect your results.
:::


:::


::: Exercise
Now we will repeat the procedure for a similar setup. In this geometry, the wire is parallel to the iOLab $x-$axis, but it is raised in the $z-$direction so that it is at the same height as the magnetometer. In this case, the magnetic field should have only an appreciable $z-$component. 

::: Figure:Figure
![geometry#1-2](imgs/8and9.png)
:::

Repeat Exercise 1 with the raised wire to produce a second measurement for the current. 

:::Question
Review your data for this run and make a table like the one below with appropriate units.

:::Figure:Table

|$\:R\:$ | $1/R$    |Measured $B_z$  | Field strength $B$ |
| ------|------|------|------|
|$\:$        |         |          |          |        |  

:::
:::
::: Question
(a) Plot B vs. 1/R for your second set of data. 

(b) Determine the current $I$ from this slope. Report it in the correct units and to a reasonable number of significant figures.

(c) From Ohm&rsquo;s law and the voltage of your battery, estimate the resistance of your setup. 

(d) Does it seem reasonable? Why or why not?

:::

:::

:::Question
Do your two measurements of the current (from exercises 1& 2) agree? Why or why not?
:::


## 3. Loop of wire

### Materials needed:
- iOLab
- A ~1-m long wire
- An AAA or AA battery
- Two wires with clips at one end
- Some vertical support (e.g., a book)

::: Exercise
We will now measure the magnetic field induced by a loop of current.
::: Figure:Figure
![geometry#2](imgs/10and11.png)
:::

1. Tape your long wire to a table so that it forms a closed loop. Try to make the loop as circular as possible. Record the radius of the loop.
2. Align your iOLab such that the magnetometer is centered within the loop.
3.  Make sure your iOLab software is running and that the device is calibrated.
4.  Start recording.
5.  Briefly touch the wires to the battery terminals for no more than 1 second. This prevents overheating and battery drain.  You should see two step pulses with different magnitudes. Then use equation 2 to calculate the current from the measured B field.
7. Stop recording.
8. Change the $z-$coordinate of your magnetometer by placing a book or similar object beneath it.
9. Record the height of this object and repeat steps 4-7.


::: Question
Make a table with the loop radius $R$ , magnetometer height $z$ , $r=\frac{R^2}{(R^2+z^2)^{3/2}}$  , and the measured field strength in the $z$ direction, with appropriate units. 

:::Figure:Table
 
| $R$|$z$ | $r$ | $B_z$|
| ------| ------| ------ |------| 
|$\:$       |        |         |        |
|$\:$       |        |         |        |

:::
:::

::: Question
(a) Calculate the current for both heights using the formula for the magnetic field due to a loop of wire.

(b) Do they agree? If yes, explain why you think this. If no, try to identify the cause of the *discrepancy*.

:::

:::

::: Question
(a) By how much do your results for the current differ between exercises 1, 2 and 3? 

(b) Propose sources of the *discrepancy* between your measured values of the current in the previous question.

(c) How could you improve these experiments to minimize the discrepancy in the future?
:::

## Part III: Write-up
 - For Part I, give a short summary of the Biot-Savart Law, and describe how a current generates a magnetic field.
 - For Part II, write a short paragraph describing the procedure taken and any important observations for each Exercise. Be sure to summarize your results, and reasons why you believe your data are precise and accurate. If you do not think your data are accurate, explain why, and how it could be fixed in a future lab.
 - You are encouraged to attach images of your plots,  data, and setup -- doing so may allow you to regain partial or full credit even if your experiment fails.
 - At the end of your write-up, please include the answers to all questions, clearly numbered. Show your work if applicable.

 
