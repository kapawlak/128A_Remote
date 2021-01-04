# Lab 4: RC Circuit

::: Materials
- Wire Leads
- Breadbroad 
- Two 1-MΩ resistors
- One 100-μF capacitor
- One 10-μF capacitor
- A multimeter
:::

# Circuit Elements
In this part of the lab, we will review the concepts and mathematical descriptions of some common circuit elements.


## 1. Resistors and Ohm’s Law
If there is a potential difference, electrons (negatively charged) will move from low potential to high potential. The movement of electrons forms current. Current is defined as the rate at which charges move:

::: Equation
$$
I =  \frac{dQ}{dt}
$$
:::
Resistors will slow the rate at which charge flows. Current, resistance, and potential difference are related by Ohm’s Law:

::: Equation
$$
I =  \frac{\Delta V}{R}
$$
:::

where ΔV is the voltage across the resistor in Volts (V), R is the resistance of the resistor in Ohms (Ω), and I is the current in the resistor in Amperes (A).
######
Recall that for resistors in series, the equivalent resistance is given by

::: Equation
$$
R_{eq} =  R_{1}+R_{2}+R_{3}
$$
:::
And for resistors in parallel, the equivalent resistance is given by

::: Equation
$$
\frac{1}{R_{eq}} =  \frac{1}{R_{1}}+ \frac{1}{R_{2}}+ \frac{1}{R_{3}}
$$
:::

::: Question
A 5-kΩ resistor is placed in series with two 10-kΩ resistors in parallel. The entire circuit is connected to a power supply of 20 V. What is the voltage across each element?
:::

## 2. Capacitors

::: LFigure antenna s
![antenna location](../imgs/1.png)
:::

A capacitor is a device that stores energy by means of two closely spaced plates separated by an insulating material. By connecting a capacitor to a battery source, we will be able to collect charge on the capacitor. The energy is stored as an electrostatic field.



The voltage across a capacitor is directly related to the amount of charge on the plates. A larger amount of charge results in a larger potential difference across the capacitor. The relation between the voltage across and the amount of charges on the capacitor is given by

::: Equation
$$
V =  \frac{Q}{C}
$$
:::

where Q is the charge in Coulombs (C), C is the capacitance in Farads (F), and V is the voltage in Volts (V).
######
Using the definition of current (Equation 1), we have

::: Equation
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

::: Figure
![capacitor charge/discharge plot](../imgs/2.png)
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

::: Equation
$$
\int_{V_0}^{V} \frac{dV}{V}=  - \frac{1}{RC}\int_{0}^{t} dt
$$
:::

Solving this integral, we find out that the equation for the capacitor discharging is described by

::: Equation
$$
V=  V_0 e^{- \frac{t}{RC}}
$$
:::
This indicates that the voltage across the capacitor decreases exponentially as current passes through. The value RC is defined as the time constant 𝛕. Therefore, the quantity RC has units of time, and the equation becomes

::: Equation
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

::: Equation
$$
\frac{1}{C_{eq}} =  \frac{1}{C_1}+ \frac{1}{C_2}
$$
:::

The equation for the equivalent capacitance for capacitors in parallel is

::: Equation
$$
C_{eq} =  C_1+C_2
$$
:::
# Part II: Experiment
In this lab we will measure the time constant, $\tau$, of four different circuit configurations. The procedure for each of these labs is fairly quick and virtually identical. After the initial identification of your circuit components and the set-up of your first circuit, you will only have to switch out elements and record new data for each exercise.

## 0. Pre-lab Set-up

---
::: Materials

- Electronic Kit

:::

Even though the resistors are labeled in the electronic kit, it's useful to learn how the resistance is color coded. It is recommended to double check the 5-band code to make sure the resistors you are using is correct for the lab.

### Resistors
Learning to read and identify resistors is a crucial skill in real laboratory work. Resistors are the small capsule-shaped elements with wires on either side. You should notice that each resistor has a set of four colored bands around its body. The order and color of these bands indicate the element&rsquo;s resistance and *tolerance* -- i.e. its margin of error in percent.
####
In a 5-band resistor, the first four bands tell you the value of $R$, and the $5^{\rm th}$ band gives you the tolerance. To read your resistor, first we need to determine the correct reading direction. There should be a larger gap between the $4^{\rm th}$ and $5^{\rm th}$ (tolerance) bands.
####
There are two ways you can use the colors to assign values -- either by using the lookup table below or by using an [online calculator](https://www.digikey.com/en/resources/conversion-calculators/conversion-calculator-resistor-color-code).

:::Figure

![](../imgs/resistor-color-chart.png)

:::

Prior to starting the experiments, you should find the resistors for this lab and double check the resistance. In total, you should have:

- 10/100/220/330 Ω
- 1/2/5.1/10/100 kΩ
- 1 MΩ


### Capacitors

The capacitors, which are black cylindrical elements with wires coming from the bottom, are much easier to identify: simply read off the values printed on the side. You should find:

- 10/100 μF

:::Question:
In the following exercises, we will need:
- Two 1-MΩ resistors

Using the tolerance band, write down the values of these resistors with their uncertainty in the form:
- ($1 \pm \delta_R$) MΩ
- ($100 \pm \delta_C$) μF
- ($10 \pm \delta_C$) μF

Here $\delta_R$ should be an *absolute* uncertainty, not a percent. For example, if your tolerance was 1% on your 1-MΩ resistor, you would record the value as  ($1 \pm 0.01$) MΩ. For both capacitors, use the tolerance of 20% to calculate the uncertainty. We will use this later for error analysis. 
:::

Now let’s set up 4 RC circuits. For each setup, you will measure the time constant and compare it to the theoretical value.
## 1. A 10-μF capacitor and a 1-MΩ resistor in series

::: Materials
- Wire Leads and breadboard
- One 1-MΩ resistor
- One 10-μF capacitor
- A multimeter
:::


For the first exercise, we are going to place a 10-μF capacitor in series with a 1-MΩ resistor. In addition, a voltmeter needs to be placed across the capacitor in order to visualize both charge-up and discharge situations. In this lab, the multimeter is both our voltmeter *and* power supply.

::: Figure
![setup](../imgs/circuit1.png)
:::


::: Question
a) Calculate the theoretical value of the time constant for this RC circuit. 

AVOCADO
b) c) missing for this version
:::

:::::: Exercise

We will be using our wires, elements, multimeter and breadboard to create the circuit. The instructions here look long only because there is no elegant way to explain circuit construction in words. Feel free to check with the above circuit diagram while following the instructions. After you have set everything up, the wiring should make sense.

Set-up:
AVOCADO !
1. set up power supply and voltmeter.
2. Insert the resistor and capacitor into the breadboard. Note that rows (horizontal) within a given column are connected to each other, so the resistor should end in the same row in which the capacitor starts, to ensure they are connected together.
3. connect power supply to the circuit
4. connect the voltmeter across the capacitor.
######
This diagram shows how to connect elements in series and/or parallel. Note that all spots on the same row on breadboard are connected.

:::Figure

![](../imgs/circuit.png)

:::



######
Once you have wired the circuit, you are ready to collect data. 

5. record the time it takes to charge the capacitor to ~0.63 of the maximum voltage. (Is a test run needed to find the max voltage?)
6. Use the recorded time to estimate 𝛕.

######
::: Question
### !  measure only the charging time?
What are the values calculated from charge and discharge curves? Are they close? Is it sufficient to measure 𝛕 from only one of the curves? Explain your reasoning.
:::
::: Question
(a) What is the experimental value of 𝛕 measured? 

(b) Calculate the discrepancy with the theoretical value.

(c) Is the discrepancy within your error bounds? If not, propose some reasons for this. (Name possible sources of systematic error, *e.g.*, external factors like humidity or poor contact, that might lead to shorter discharge times, dying batteries, etc.)

:::
::::::

## 2. A 10-μF capacitor and two 1-MΩ resistors in series
:::LFigure s
![setup](../imgs/circuit2.png)
:::
:::::: Exercise
Repeat the procedure described in exercise 1 with two 1-MΩ resistors connected in series . This is now a new circuit with a new time constant.

::: Question
Calculate the theoretical value of the time constant for this RC circuit.
:::

::: Question
Compare the experimental value of 𝛕 to the theoretical value.
:::

::: Question
How is the discharge process different compared to that for the setup in 3.1?
:::
::::::

## 3. A 10-μF capacitor, a 100-μF capacitor, and a 1-MΩ resistor in series
::: Figure
![setup](../imgs/circuit3.png)
:::
:::::: Exercise
Repeat the procedure in 3.1 by adding a 100-μF capacitor in series in the circuit. You need to make sure that the voltmeter will be measuring the voltage across both capacitors.

::: Question
Calculate equivalent capacitance and the theoretical value of the time constant.
:::

::: Question
Compare the experimental value of 𝛕 to the theoretical value.
:::

::: Question
How is the discharge process different compared to that for the setup in 3.1?
:::
::::::

## 4. A 10-μF capacitor and a 100-μF capacitor in parallel, in series with two parallel 1-MΩ resistors
::: Figure
![setup](../imgs/circuit4.png)
:::
:::::: Exercise
Repeat the procedure in 3.1 by connecting two capacitors in parallel, and two resistors in parallel, and the two components in series in the circuit. Make sure the voltmeter  is measuring the voltage across both capacitors.

::: Question
Calculate equivalent capacitance and the theoretical value of the time constant.
:::

::: Question
Compare the experimental value of 𝛕 to the theoretical value.
:::

::: Question
How is the discharge process different compared to that for the setup in 3.3? What can you infer about the equivalent capacitance in both circuits?
:::
::::::




# Write up

:::Summary
:::


