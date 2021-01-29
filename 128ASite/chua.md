# Chua's Circuit

The best resource for building Chua’s Oscillator is the [instructional paper](https://people.eecs.berkeley.edu/~chua/papers/Chua93.pdf) written by Chua himself! In addition to making an experimental measurement of the [Feigenbaum Constant](https://en.wikipedia.org/wiki/Feigenbaum_constants#The_first_constant), we recommend reproducing one of the measurements suggested in this paper.  Another great resource is [http://www.chuacircuits.com/](http://www.chuacircuits.com/) , which gives a slower walkthrough of the building and tuning process, but does not discuss the chaos measurements in the depth needed to write a report. Furthermore, this [excellent pdf](https://ai.berkeley.edu/~ee129/fa07/handouts/ChuasCircuitForHighSchoolStudents-PREPRINT.pdf) includes step-by-step build instructions, breadboard diagrams and descriptions, where to purchase components, as well as a way to utilize your 3mm audio jack as an oscilloscope. 

:::Figure
![](../imgs/Chua/chaos.gif)
:::

In this manual, we will briefly summarize the basic build and list some component options. We also provide the equations for simulating Chua’s oscillator for convenience. 

:::Figure
![](../imgs/Chua/chuacircuit.png)
:::

# Theory
Chua’s oscillator is an ordinary circuit that can be built on a breadboard. The chaotic behavior of the circuit comes from Chua’s Diode ($v_R$ in the diagram), which has the unusual property of being a negative, nonlinear resistor. There are multiple ways to construct such a diode, with the most popular using two op-amp components, which must be powered by an external battery. The following diagram shows the two components, which should be connected in parallel.

The equations that describe Chua’s circuit are given by:

$$
\begin{aligned}
\frac{d v_1(t)}{dt} &= \frac{1}{C_1} \left(\frac{v_2(t) - v_1(t)}{R} - f(v_1(t)) \right)\\\\
\frac{d v_2(t)}{dt} &= \frac{1}{C_2} \left(\frac{v_1(t) - v_2(t)}{R} - i_3(t) \right)\\\\
\frac{d i_3(t)}{dt} &= - \frac{1}{L} \left( v_2(t) + R_0 i_3(t)\right)
\end{aligned}
$$

Where $f$ is the v-i characteristic of Chua’s Diode pictured below, given by the equation:

$$
f(v) = G_b v + \frac{1}{2}(G_a - G_b) (|v+E| + |v-E|) 
$$

:::Figure
![](../imgs/Chua/nlcharacteristic.png)
:::

You should simulate these equations to get an idea of the behavior you expect to see. Furthermore, your final presentation should compare your results to your simulation. There are multiple tutorials online which will aid you in simulating Chua’s Oscillator. 


Chua’s oscillator will require a few electronics components, which can either be purchased or requested from the department (please do so ASAP so we can set up mailing)


## Circuit Design 
Recommended (tested by us): We recommend using the circuit design on chuascircuit.com, but replacing the “gyrator” with a 12mH inductor. Our working test models used the following components, which we will be able to lend to you if needed (contact us ASAP):
- Breadboard +wires
- 9V Batteries
- 2k 10-turn potentiometer
- (2) 220 Ohm Resistors
- 2.2 kOhm Resistor
- (2) 22k Ohm Resistors
- 3.3 kOhm Resistor
- 100 nF NONCERAMIC capacitor
- (2) 5 nF NONCERAMIC capacitor
- 12 mH Inductor with less than 30 Ohm resistance 
- (2) LF Opamp 


:::Figure
![](../imgs/Chua/circuit.png)
:::

## Measurement Device 
A few options for measurement exist
- Oscilloscope if you have access to one
- Openscope if you took 127A (note there is no XY view as far as we are aware)
- Cheap headphones + USB sound card+ software
    - You can actually make a 48kHz oscilloscope with cheap $1 headphones. To get two channels simultaneously, you may need two. We will update this with a guide on making this soon, but note that there are multiple guides online if you want to get started on it!


