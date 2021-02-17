# Chua's Circuit

:::Materials
- Circuit Kit
    - 2k 10-turn potentiometer
    - (2) 220 Ohm Resistors
    - 2.2 kOhm Resistor
    - (2) 22k Ohm Resistors
    - 3.3 kOhm Resistor
    - 100 nF NONCERAMIC capacitor
    - (2) 5 nF NONCERAMIC capacitor
    - 12 mH Inductor with less than 30 Ohm resistance 
    - (2) LF411 Op-amp 
- 9V Batteries
- PicoScope
- Various Circuit Components
:::
# Introduction 

:::RFigure dscroll m
![The Double Scroll Attractor on an Oscilliscope](../imgs/Chua/chaos.gif)
:::

Chua's Circuit is a special non-linear circuit that exhibits chaotic behavior for a closed range of parameter values. It is one of the few easily constructed examples of [Chaos theory](https://en.wikipedia.org/wiki/Chaos_theory), and is therefore an important experiment for students interested in many of the field's  results and applications.

In this lab, you will both simulate and construct Chua's circuit, and investigate some of the features of its phase space. In particular, you should use your circuit to probe the [Hopf Bifurcations](https://en.wikipedia.org/wiki/Hopf_bifurcation) as you reduce the resistance into the critical regime, and experimentally measure [Feigenbaum's Constant](https://en.wikipedia.org/wiki/Feigenbaum_constants#The_first_constant), which is a universal number that relates the parameter distances between bifurcation points in single-parameter Chaotic systems.






## Selected Resources
The best resource for building Chua’s Oscillator is the [instructional paper](https://people.eecs.berkeley.edu/~chua/papers/Chua93.pdf) written by Chua himself! In addition to making an experimental measurement of the Feigenbaum Constant, we recommend reproducing one of the measurements suggested in this paper.  Another great resource is [http://www.chuacircuits.com/](http://www.chuacircuits.com/), which gives a slower walkthrough of the building and tuning process, but does not discuss the chaos measurements in the depth needed to write a report. Furthermore, this [thesis](https://lup.lub.lu.se/luur/download?func=downloadFile&recordOId=4499949&fileOId=4499963) provides some ideas for experimentation, including a description of a possible [Lyapunov Exponent](https://en.wikipedia.org/wiki/Lyapunov_exponent) to investigate.

# Theory

## Circuit Overview
:::LFigure chuaall s
![](../imgs/Chua/chuacircuit.png)
:::
Chua’s oscillator is an ordinary circuit that can be built on a breadboard. The general circuit diagram is shown in [Fi](#Fi-chuaall). In this experiment our resistor, $R$, will be a potentiometer that will allow us to vary the current. The secondary resistance, $R_0$ has been added to account for the fact that our inductor, $L$, is not an ideal inductor and has some internal resistance.  


:::RFigure nl s
![](../imgs/Chua/nonlinear.png)
:::
The chaotic behavior of the circuit comes from Chua’s Diode ($v_R$ in the diagram), which has the unusual property of being a negative nonlinear resistor (NNR). 

There are multiple ways to construct such a diode, with the most popular (and simple) using two op-amp components, which must be powered by an external battery. [Fi](#Fi-nl) shows the two components, which should be connected in parallel. One of these components applies a non-linear amplification to the forward current such that the current amplification is increased beyond some threshold voltage. The second component applies a negative amplification to the current proportional to the voltage.




When properly connected, the NNR produces the IV characteristic given in in [Fi](#Fi-ivc). One of your first tasks in the experimental portion of this project should be to verify the IV curve of your NNR and characterize its knee-points. The values your obtain from the characterization should be applied to your numerical simulation of the equations



:::Figure ivc m
![](../imgs/Chua/nlcharacteristic.png)
:::

## Equations

The equations that describe Chua’s circuit can be worked out using standard circuit analysis. For convenience, we provide them here:

$$
\begin{aligned}
\frac{d v_1(t)}{dt} &= \frac{1}{C_1} \left(\frac{v_2(t) - v_1(t)}{R} - f(v_1(t)) \right)\\\\
\frac{d v_2(t)}{dt} &= \frac{1}{C_2} \left(\frac{v_1(t) - v_2(t)}{R} - i_3(t) \right)\\\\
\frac{d i_3(t)}{dt} &= - \frac{1}{L} \left( v_2(t) + R_0 i_3(t)\right)
\end{aligned}
$$

In these equations, $f$ is the VI characteristic of Chua’s Diode pictured in [Fi](#Fi-ivc). In the ideal case, this curve is given by the equation:

$$
f(v) = G_b v + \frac{1}{2}(G_a - G_b) (|v+E| + |v-E|) 
$$


In order to compare your experiment to data, as well as trouble shoot various issues, you should simulate these equations. It is advised that you begin this while you are waiting for your kit to get an idea of the behavior you expect to see. Furthermore, your final presentation should compare your results to your simulation. There are multiple tutorials online which will aid you in simulating Chua’s Oscillator. We recommend applying a straight-forward 4th order Runge-Kutta method to the coupled differential equations.




# Circuit Design 

## Base Circuit
**Tested Design**: We recommend using the circuit design on chuascircuit.com, but replacing the “gyrator” with a 12mH inductor. Our working test models used the following components, which we can mail to you in a kit:

::::::Hider Recommended Build Materials
- Breadboard + wires
- (2) 9V Batteries*
- Picoscope
- 2k 10-turn potentiometer
- (2) 220 Ohm Resistors
- 2.2 kOhm Resistor
- (2) 22k Ohm Resistors
- 3.3 kOhm Resistor
- 100 nF NONCERAMIC capacitor
- (2) 5 nF NONCERAMIC capacitor
- 12 mH Inductor with less than 30 Ohm resistance 
- (2) LF411 Op-amp 

*Due to mailing restrictions, we cannot ship these to you so you must purchase them yourself. 

:::Figure exchua l
![](../imgs/Chua/circuit.png)
:::
::::::






## Measurement Device 
Along with your kit, you will receive a PicoScope 2000. Please download the appropriate software and follow the instructions for setup. You will likely have to play around with the settings to get a clear image. It is possible, however, to get fairly accurate and precise logging: In [Fi](#Fi-demo), you can see the period-doubling behavior as we tune the resistance across the first and second Hopf Bifurcation points. Here you will notice that I am also viewing the frequency spectrum of my curve to watch for the appearance of the associated peak. 

:::Figure demo
![Demonstration of two period doubling transitions on the picoscope as the resistance is lowered](../imgs/Chua/picochua.gif)
:::



If you are unable to receive a package for some reason, a few other options for measurement exist
- Oscilloscope if you have access to one
- Openscope if you took 127A (note there is no XY view as far as we are aware)
- Cheap headphones + USB sound card+ software
    - You can actually make a 48kHz oscilloscope with cheap $1 headphones. To get two channels simultaneously, you may need two. We will update this with a guide on making this soon, but note that there are multiple guides online if you want to get started on it!



# General Direction

Your first goal should be to get the circuit up and running. You will know the circuit is achieving a chaotic regime by the obvious appearance of the double-scroll attractor. From there, your initial goal should be to find the resistances at as many Hopf Bifurcation points as possible. This information can be organized into a bifurcation diagram, as is typical for chaotic systems. You should also attempt to calculate Feigenbaum's Constant from these values.
