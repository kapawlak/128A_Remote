# Planck's Constant From LEDs
:::Materials
 - Battery
 - Red, Green, Blue, Yellow LEDs
 - Potentiometer
 - Breadboard and wires
 - Multimeter
:::

# Introduction
Planck’s Constant relates the energy of photons to their frequency. It also shows up in de Broglie’s relation for the wavelength of matter waves and Schrödinger’s Equation. Thus, the number is of fundamental importance in 20th Century physics. A common device, the light emitting diode or LED, could be designed only because some engineers understood quantum science. Thus, knowledge of the value of Planck’s constant is “hidden” in the LED. This short tutorial will show you how you can determine a value for Planck’s Constant by using LEDs.

:::Equation
$$
E = h \nu
$$
:::

# Methodology

LEDs are semiconductor devices. Nearly all such devices are constructed from arrangements of doped semiconductor materials. It is the geometry and electronic structure of these doped regions that gives a particular device its operational characteristics. In the case of an LED, p-type and n-type semiconductors are arranged as shown in [Fi](#Fi-semiconductor).

:::RFigure semiconductor xs
![PN-junction](../imgs/LED/semiconductor.png)
:::

An N-type semiconductor is doped with atoms with more valence electrons than the undoped material. A P-type semiconductor is doped with atoms with fewer valence electrons than the undoped material. For example, if silicon is doped with aluminum you
get a p-type semiconductor. If silicon is doped with phosphorous you get n-type. N-type semiconductors are “electron rich”, while p-type semiconductors are “hole rich”. Holes are simply empty orbitals. It is the movement of electrons (and holes) that is controlled by a semiconductor device.
There are two ways you can hook up a diode: forward biased or reverse biased. In the reverse bias configuration the p-type side is connected to negative voltage and the n-type side to positive.

When reverse biased the electrons in the n-type region are attracted to the positive potential away from the junction while the holes are attracted by the negative potential away from the junction

In the forward biased configuration the p-type side is connected to positive voltage and the n-type side to negative. When forward biased the electrons in the n-type region are repelled from by the negative potential towards the junction while the holes are repelled by the positive potential towards the junction. At the junction the holes and electrons meet and current flows (see top of
Figure 2). In certain cases the energy of this recombination of electrons and holes is released as light energy. Then you have a light emitting diode.

## Gap Energy

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
