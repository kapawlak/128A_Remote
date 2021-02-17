# Planck's Constant From LEDs
:::Materials
 - Battery
 - Red, Green, Blue, Yellow LEDs  @fa-wrench@
 - Potentiometer  @fa-wrench@
 - Breadboard and wires  @fa-wrench@
 - Multimeter

  @fa-wrench@: Included in kit
:::

# Introduction
Planck’s Constant is one of the most important values in physics, establishing the smallest unit of quantization for electromagnetic action. It's most fundamental appearance is in the Planck-Einstein relation:

:::Equation
$$
E = h \nu
$$
:::

which directly relates the frequency of a photon to its energy. In this project, we will attempt to measure the value of $h$ using simple electronics components. One of these devices will be the light emitting diode or LED, which directly converts energy carried by electrons into photons in a controlled way. 


The experiment has a fairly simple set up, but many factors involving the components can introduce error into your measurement. This experiment is a creative endeavor where you should push the limits of simple electronics and your knowledge of error analysis to refine results. Your goal in this experiment is simply to obtain **the most precise and accurate measurement of $h$ possible**.

# Basic Theory and Ideas

## Fermilevels and Transitions


:::RFigure fl s
![](../imgs/planck/fermilevels.png)
:::
The basic theoretical element at play in this experiment is the concept of Fermilevels. As fermions, electrons are incapable of occupying the same state due to the Pauli Principle. If we have an isolated system with a set of discrete energy levels, as we add electrons, they will tend to fill them up starting with the lowest energy. 


We can image such a system as a reservoir connected to a conducting wire that carries the electrons. When we apply a voltage to the wire, electrons will flow into the system until the energy required to fill the next state is greater than the energy of the electron in the electric potential. We call this limiting value the **chemical potential**, $\mu$.

:::Figure fl m
![](../imgs/planck/fermilevelsfill.png)
:::

In general, at zero temperature, the electrons will fill all available energy levels below $\mu$, with the highest energy level occupied called the Fermilevel (or fermisurface in solid-state systems). At finite temperature, the average occupation of a level is given by the Fermi-Dirac distribution:

:::::::::row

::::::col l2
:::Figure fd xs
![
Average occupation curve at different temperatures](../imgs/planck/FD.png)

:::
::::::
::::::col l10
::: Equation 
$$
\langle n_{E}\rangle = \frac{1}{e^{(E -\mu)/k_bT}+1}
$$

:::
::::::


:::::::::




Imagine now that we promote an electron to an energy level higher than the chemical potential.
:::RFigure fl l
![](../imgs/planck/decay.png)
::: 
This can be done, for example, by stimulation with a photon. After some amount of time, that electron will *decay* down to a lower energy state by releasing a photon equal to the difference in energy between the starting and final states.

This phenomenon, which is the reverse process of the photoelectric effect, is used in the construction of LEDs. The basic working principle of an LED is to cleverly force an electron into an excited state some energy $E_{gap}$ above the chemical potential, where it will later decay, releasing a photon with a specific frequency of light. In the next sections, we will discuss how LEDs achieve this. 



## LEDs
LEDs are semiconductor devices. Nearly all such devices are constructed from arrangements of doped semiconductor materials. It is the geometry and electronic structure of these doped regions that gives a particular device its operational characteristics. In the case of an LED, P-type and N-type semiconductors are arranged as shown in [Fi](#Fi-semiconductor).

:::RFigure semiconductor s
![PN-junction](../imgs/planck/semiconductor.png)
:::

An N-type semiconductor is doped with atoms with more valence electrons than the undoped material. A P-type semiconductor is doped with atoms with fewer valence electrons than the undoped material. For example, if silicon is doped with aluminum you
get a p-type semiconductor. If silicon is doped with phosphorous you get N-type. N-type semiconductors are “electron rich”, while p-type semiconductors are “hole rich”. Holes are simply empty orbitals. It is the movement of electrons (and holes) that is controlled by a semiconductor device.


There are two ways you can hook up a diode: forward biased or reverse biased. In the reverse bias configuration the p-type side is connected to negative voltage and the N-type side to positive.

When reverse biased the electrons in the N-type region are attracted to the positive potential away from the junction while the holes are attracted by the negative potential away from the junction

In the forward biased configuration the P-type side is connected to positive voltage and the N-type side to negative. When forward biased the electrons in the N-type region are repelled from by the negative potential towards the junction while the holes are repelled by the positive potential towards the junction. At the junction the holes and electrons meet and current flows. In certain cases the energy of this recombination of electrons and holes is released as light energy. Then you have a light emitting diode.

### Gap Energy

So, how much energy is released/does it take to recombine these electrons and holes? Well, one way to measure it is by Eq. 1; measure the frequency/wavelength of the photons and multiply by h to get E. But the purpose of this experiment is to measure h; so Eq. 1 in a sense has two unknowns: E and h.
When we have two unknowns we need two equations. Therefore we need another relationship here. That relationship is the band gap. The property that gives semiconductors their name is their band gap. The band gap is essentially the energy difference between the highest occupied orbital, AKA the valence band, (where the electrons live) and the lowest unoccupied orbital, AKA the conduction band (the holes). In a conductor the band gap is very small/zero; electrons move through the conduction band freely. In an insulator the band gap is very large; it takes a lot of energy (i.e., voltage difference) to put electrons up in the conduction band. A semiconductor has a small band gap.

With an LED we can measure the band gap. It is related to the minimum voltage required to
produce light, i.e., get the electrons and holes together. Different color LEDs have different band
gaps and there for have different minimum voltages before they “turn on”. If one measures this
threshold voltage, the band gap is then given by:

:::Equation
$$
E = e  V_{th} 
$$
:::
where $e$ is the charge on an electron and $V_{th}$ is the threshold voltage. We can now wave our hands a bit more than we have already and equate Eq. 1 and Eq. 2. By measuring $\nu$ (practically speaking $\lambda_{max}$, which is related simply to $\nu$ by $\lambda\nu = c$) and $V_{th}$ , and plugging in the appropriate value for $e$, our only unknown is $h$. Therefore, we can use a set of LEDs to measure Planck’s constant.


# General Experiment

:::LFigure simple l
![](../imgs/planck/SimpleSetup.jpg)

A simple set up used to test the threshold voltage of four colored LEDs
:::

For this experiment, you should set up a simple circuit that lights up an LED with a tunable voltage. The easiest way to accomplish this is to connect your LED in series with a potentiometer connected back to ground. You should also be sure to place a current-limiting resistor in series with your LED to prevent it from burning out. The value of the current limiting resistor can be calculated using the max voltage that the LED will be exposed to. For a 3.3V power source, I used a $220 \Omega$  resistor with a $10$k$\Omega$ potentiometer. 


A rudimentary first approach to calculating $h$ would be to slowly increase the voltage until the LED begins to turn on. You can then measure the voltage across the LED and record this for your calculation of $h$. A value obtained this way will likely have significant error: your eye's ability to detect photons, the IV characteristics of the LED, the internal resistance of your voltmeter, among other issues. Your project begins here: you should investigate, refine and improve your set up in any way you see fit. You are encouraged to research (and cite) online references, component datasheets, papers, etc in the process of improving your experiment.  

