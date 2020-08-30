# Lab 4: RC Circuit
---
### All Materials needed:
- iOLab
- Wire Leads
- One 10-kΩ resistor
- One 2-kΩ resistor
- One 220-μF capacitor
- One 56-μF capacitor
---
# Part I: Circuit Elements
In this Part of the lab, we will review the concepts and mathematical descriptions of some common circuit elements.


## 1. Resistors and Ohm’s Law
If there is a potential difference, electrons (negatively charged) will move from low potential to high potential. The movement of electrons forms current. Current is defined as the rate at which charges move:

::: Figure:Equation
$$
I =  \frac{dQ}{dt}
$$
:::
Resistors will slow the rate at which charge flows. Current, resistance, and potential difference are related by Ohm’s Law:

::: Figure:Equation
$$
I =  \frac{\Delta V}{R}
$$
:::

where ΔV is the voltage across the resistor in Volts (V), R is the resistance of the resistor in Ohms (Ω), and I is the current in the resistor in Amperes (A).
######
Recall that for resistors in series, the equivalent resistance is given by

::: Figure:Equation
$$
R_{eq} =  R_{1}+R_{2}+R_{3}
$$
:::
And for resistors in parallel, the equivalent resistance is given by

::: Figure:Equation
$$
\frac{1}{R_{eq}} =  \frac{1}{R_{1}}+ \frac{1}{R_{2}}+ \frac{1}{R_{3}}
$$
:::

::: Question
A 5-kΩ resistor is placed in series with two 10-kΩ resistors in parallel. The entire circuit is connected to a power supply of 20 V. What is the voltage across each element?
:::

## 2. Capacitors

A capacitor is a device that stores energy by means of two closely spaced plates separated by an insulating material. By connecting a capacitor to a battery source, we will be able to collect charge on the capacitor. The energy is stored as an electrostatic field.

::: Figure:Figure
![antenna location](imgs/1.png)
:::

The voltage across a capacitor is directly related to the amount of charge on the plates. A larger amount of charge results in a larger potential difference across the capacitor. The relation between the voltage across and the amount of charges on the capacitor is given by

::: Figure:Equation
$$
V =  \frac{Q}{C}
$$
:::

where Q is the charge in Coulombs (C), C is the capacitance in Farads (F), and V is the voltage in Volts (V).
######
Using the definition of current (Equation 1), we have

::: Figure:Equation
$$
I =  \frac{d(CV)}{dt} = C \frac{dV}{dt}
$$
:::

which relates the current into a capacitor to the rate of change of the voltage. Note that it takes some time to build up charges. So the voltage across a capacitor cannot instantaneously increase.

::: Question
A 0.1-μF capacitor has 16 V across its terminals. How much change does it hold?
:::

::: Question
What is the current flowing into a 0.01-μF capacitor if the voltage across its terminals changes at a constant rate of 2 mV per second?
:::

::: Figure:Figure
![capacitor charge/discharge plot](imgs/2.png)
:::
Before the switch is closed, the capacitor initially begins without charge and thus carries 0 voltage. At the instant the switch is closed, the charging process begins, and charges start to build up on the plates. The voltage, however, cannot change instantaneously. At this moment, because there is no charge on the plates, it is easy for charges to pass through. Therefore, the greatest amount of current flows at this first instant.
######
As the current flows, the capacitor becomes charged, and its voltage builds up gradually. As the capacitor’s voltage increases, the voltage on the resistor decreases.  By  Ohm&rsquo;s Law, this means that less current flows through the resistor. Recall that the same current goes through all elements in series. Thus, less current through the resistor results in slower charging of the capacitor.
######
The charging process continues as the voltage on the capacitor asymptotically approaches that of the power source. At this point, the current decreases to 0, and voltage on the resistor goes to 0 as shown on the figure above.

::: Question
Why does the greatest amount of current flow initially? Why does it decrease as time passes?
:::

::: Question
Why does the voltage across the resistor decrease to 0 V later in time?
:::

Discharging a capacitor reverses the process. Say the fully charged capacitor has voltage $V_0$. When the circuit is closed, the voltage on the capacitor will be dropped across the resistor, causing a current to flow. As the charges leave the capacitor, the voltage on the capacitor asymptotically falls to zero.

::: Question
Comment on how voltage changes across capacitor and resistor separately during the discharging process. You may use words or plots or both.
:::

Combining equations (2) and (6) and rearranging, we get 

::: Figure:Equation
$$
\int_{V_0}^{V} \frac{dV}{V}=  - \frac{1}{RC}\int_{0}^{t} dt
$$
:::

Solving this integral, we find out that the equation for the capacitor discharging is described by

::: Figure:Equation
$$
V=  V_0 e^{- \frac{t}{RC}}
$$
:::
This indicates that the voltage across the capacitor decreases exponentially as current passes through. The value RC is defined as the time constant 𝛕. Therefore, the quantity RC has units of time, and the equation becomes

::: Figure:Equation
$$
V(t)=  V_0 e^{- \frac{t}{\tau}}
$$
:::
It is important to note that for one circuit, 𝛕 is constant.


::: Question
Write down the equation for a charging capacitor. You can assume that the fully charged capacitor has voltage $V_0$.
:::

In this lab, we will build the described RC circuit with a switchable battery source (iOLab device). When the battery source is turned on, the capacitor will charge up according to the equation above. When the battery is turned off, the capacitor will discharge instead.
######
In addition to calculating the time constant for different circuits, we will be wiring the capacitors in both series and parallel configurations. The equation for the equivalent capacitance for capacitors in series is

::: Figure:Equation
$$
\frac{1}{C_{eq}} =  \frac{1}{C_1}+ \frac{1}{C_2}
$$
:::

The equation for the equivalent capacitance for capacitors in parallel is

::: Figure:Equation
$$
C_{eq} =  C_1+C_2
$$
:::
# Part II: Experiment
In this lab we will measure the time constant, $\tau$, of four different circuit configurations. The procedure for each of these labs is fairly quick and virtually identical. After the initial identification of your circuit components and the set-up of your first circuit, you will only have to switch out elements and record new data for each exercise.

## 0. Pre-lab Set-up

---
Materials needed:

- Elements from the iOLab E&M kit


---

Our first task is simply identifying the elements shipped with the iOLab kit. We will need to find the resistors and capacitors required for this lab.

### Resistors
Learning to read and identify resistors is a crucial skill in real laboratory work. Resistors are the small capsule-shaped elements with wires on either side. You should notice that each resistor has a set of four colored bands around its body. The order and color of these bands indicate the element&rsquo;s resistance and *tolerance* -- i.e. its margin of error in percent.
####
In a 4-band resistor, the first three bands tell you the value of $R$, and the $4^{\rm th}$ band gives you the tolerance. To read your resistor, first we need to determine the correct reading direction. For 4-band resistors, there should be a larger gap between the $3^{\rm rd}$ and $4^{\rm th}$ (tolerance) bands.
####
There are two ways you can use the colors to assign values -- either by using the lookup table below or by using an [online calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code-4-band).

:::Figure:Figure

![](imgs/color-chart.jpg)

:::

Prior to starting the experiments, you should use the color bands on each packet of resistors to identify and label their values. In total, you should have:

- this
- this
- this
- this


### Capacitors

The capacitors, which are black cylindrical elements with wires coming from the bottom, are much easier to identify: simply read off the values printed on the side. You should find:

- this
- this

:::Question:
In the following exercises, we will need:
- One 10-kΩ resistor
- One 2-kΩ resistor

Using the tolerance band, write down the values of these resistors with their uncertainty in the form:
- ($10 \pm \delta_R$) kΩ
- ($2.0 \pm \delta_R$) kΩ

Here $\delta_R$ should be an *absolute* uncertainty, not a percent. For example, if your tolerance was 1% on your 10-kΩ resistor, you would record the value as  ($10 \pm 0.1$) kΩ. We will use this later for error analysis.
:::

Now let’s set up 4 RC circuits. For each setup, you will measure the time constant and compare it to the theoretical value.
## 1. A 220-μF capacitor and a 10-kΩ resistor in series

---
Materials needed:
- iOLab
- Wire Leads
- One 10-kΩ resistor
- One 220-μF capacitor


---

For the first exercise, we are going to place a 220-μF capacitor in series with a 10-kΩ resistor. In addition, a voltmeter needs to be placed across the capacitor in order to visualize both charge-up and discharge situations. In this lab, our iOLab is both our voltmeter *and* power supply.

::: Figure:Figure
![setup](imgs/C1.png)
:::


::: Question
a) Calculate the theoretical value of the time constant for this RC circuit. 

b) Using the uncertainty bounds of you capacitor and resistor AVOCADO: teach them to propagate uncertainty in a product 
:::

::: Exercise

We will be using our wires, elements, iOLab and breadboard to create the circuit. The instructions here look long only because there is no elegant way to explain circuit construction in words. It is suggested that you refer to the photo of a complete circuit (below  step 5)  while following the instructions. After you have set everything up, the wiring should make sense.


Set-up:

1. First, let&rsquo;s set up the iOLab software. To enable turning the power supply on and off, we will use the D6 digital output pin from the lower right corner of the iOLab. To get to this functionality, go to “settings” on the top toolbar and select “expert mode” then “output configurations.” On the left side of the software, below all the sensors, will be a new heading “Output.” You will find the D6 output underneath that with an “on/off” button. You will make the voltmeter by using the analog input pin A7 and the Analog 7 Sensor.
2. Insert your resistor and capacitor into the breadboard. Note that rows (horizontal) within a given column are connected to each other, so the resistor should end in the same row in which the capacitor starts, to ensure they are connected together.
3. The D6 output a will be the positive lead of this circuit: connect D6 to your resistor by using the alligator clip
4. The D6 output and the Ground (GND) on the iOLab will be the  negative lead of this circuit: connect GND to the capacitor by using the alligator clip, similarly.
5. Finally, in order to use the voltmeter functionality of the iOLab, we need to probe the voltage (relative to ground) of the circuit between the resistor and capacitor elements, using the A7 input: Connect A7 to the internal wire of either the resistor or the capacitor.

:::Figure:Figure

![](imgs/RC.jpg)

####
A picture is worth 1k words!

:::



######
Once you have wired the circuit, you are ready to open the software and collect data. 

6. On the Analog 7 plot, go to “settings” on the top panel, then “output config,” and click “Remote 1.” If you select the “on” button for D6 output, you will see a “0 V/3.3 V” button next to it. Make sure it is at 0 V.
7. Start recording.
8. Switch to 3.3 V. You should see a charge curve. 
9. Once the charge curve appears to have saturated, switch to 0 V again. 
10. After the voltage has dropped to 0 again (or close to it), stop recording. 
11. You should get a similar plot to the one below, except that your plot will have a horizontal line between the two phases, corresponding to the time lapse before you switched to discharge mode.

::: Figure:Figure
![capacitor charge/discharge](imgs/tplot.png)
:::
Now use “zoom mode” to zoom in horizontally on the discharge curve, and then change back to “analysis mode” and pick two points on the curve. Note that we want to avoid picking up points very close to the two ends, which may not be as accurate as the data in the middle region.
######
Once you have chosen your two points, plug them into equation (9) and solve for 𝛕. Repeat the procedure for the charge curve. Note that you will use your answer for Q7 for the charging process.
::: Question
What are the values calculated from charge and discharge curves? Are they close? Is it sufficient to measure 𝛕 from only one of the curves? Explain your reasoning.
:::
::: Question
(a) What is the experimental value of 𝛕 measured? 

(b) Calculate the discrepancy with the theoretical value.

(c) Is the discrepancy within your error bounds? If not, propose some reasons for this. (Name possible sources of systematic error, *e.g.*, external factors like humidity or poor contact, that might lead to shorter discharge times, dying batteries, etc.)

:::
:::

## 2. A 220-μF capacitor and a 2-kΩ resistor in series

::: Figure:Figure
![setup](imgs/C2.png)
:::
::: Exercise
Repeat the procedure described in exercise 1 with a 2-kΩ resistor instead. This is now a new circuit with a new time constant.

::: Question
Calculate the theoretical value of the time constant for this RC circuit.
:::

::: Question
Compare the experimental value of 𝛕 to the theoretical value.
:::

::: Question
How is the discharge process different compared to that for the setup in 3.1?
:::
:::

## 3. A 56-μF capacitor, a 220-μF capacitor, and a 10-kΩ resistor in series

::: Figure:Figure
![setup](imgs/C3.png)
:::
::: Exercise
Repeat the procedure in 3.1 by adding a 56-μF capacitor in series in the circuit. You need to make sure that the voltmeter will be measuring the voltage across both capacitors.

::: Question
Calculate equivalent capacitance and the theoretical value of the time constant.
:::

::: Question
Compare the experimental value of 𝛕 to the theoretical value.
:::

::: Question
How is the discharge process different compared to that for the setup in 3.1?
:::
:::

## 4. A 56-μF capacitor and a 100-μF capacitor in parallel, and a 10-kΩ resistor in series

::: Figure:Figure
![setup](imgs/C4.png)
:::
::: Exercise
Repeat the procedure in 3.1 by adding a 56-μF capacitor in parallel in the circuit. Again, the voltmeter should be measuring the voltage across both capacitors.

::: Question
Calculate equivalent capacitance and the theoretical value of the time constant.
:::

::: Question
Compare the experimental value of 𝛕 to the theoretical value.
:::

::: Question
How is the discharge process different compared to that for the setup in 3.3? What can you infer about the equivalent capacitance in both circuits?
:::
:::







