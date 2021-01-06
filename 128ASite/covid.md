# COVID 19 Data Analysis Project


:::Materials 
- Computer
- Your programming language of choice
:::

# Introduction to Epidemics

The 2020 SARSCov2 pandemic has resulted in mandatory remote instruction of all courses at UCSB until at least June 2021, including all instructional physics laboratories. The educational silver-lining of this event is the opportunity to learn about both Statistical Physics and Biophysics!

While generally considered to be within the field of biology, epidemiology depends on the pillars of statistical physics and employs many of the same techniques, mathematics and analysis strategies. In fact, many of the early and best performing models for COVID19 spread were published by Physicists[fn]See, for example, [Covid19 Scenerios](https://covid19-scenarios.org/) run by the Neher Lab in Basel and also [work](https://arxiv.org/abs/2006.02036) by renouned Statistical Physicist Nigel Goldenfeld[/fn]. 

Students who choose this project will learn about various modeling frameworks to understand epidemics.  They will use real data to initialize and evaluate models, investigate the meaning of vocabulary such as “curve flattening”, and the feasibility of approaches like "herd immunity"

This project is very open ended: Students are strongly encouraged to ask questions they are interested in! 

## COVID19: History

This is a placeholder for background on history

# The Statistical Physics of Epidemics

In Statsistical Physics, one is concerned with the study of parametrically large numbers of "particles", and the behavior of these under different internal and external conditions. The qualifier "parametrically large numbers" is critical here -- while the classical mechanics equations for few body systems are a woefully inadequet framework here, large numbers of particles allow us to apply the principles of *statistics* to look at average behavior with high levels of confidence.
 
**Imagine the following scenerio.** Working in a lab, you are handed a helium balloon and asked to quantitatively describe the state of gas it contains. Intuitively, you know that describing the state of every particle in the gas would be a fruitless undertaking; not only would this cost you many lifetimes of tabulation and measurement, but also the information you ultimately collect would be so large and complex that it wouldn't be *useful* for predictive science [fn]A balloon typically contains $\sim\mathcal O (10^{25})$ atoms. Assume we record each atom's velocity, truncating the precision to a single 32-bit floating point number. To *store* this information, you would need 40 yottabytes of memory, or $4 \times 10^{13}$ gigabytes -- it would require a SSD the size of New Jersey to store. [/fn] . Instead, your first instinct is likely to make a few *macroscopic* measurements: its temperature, pressure, volume, and/or mass. From these, you know that you can use the fundamental equations of an ideal gas to specify its state, the average energies of the particles, and predict how the gas would react to environmental changes.

Though developed for the study of particulate matter, the techniques of Statistical Physics are widely applicable to *any* system involving large numbers of "particles" that interact with one another and their environment through a well-defined set of rules. Specifically, in Epidemiology, the particles involved are far larger and more complex: they are living organisms!

**Imagine the following scenerio.** Working in a lab, you are handed a table of data documenting the number of COVID19 infections, hospitalizations and deaths by date in NYC and are asked to quantiatively report on the projected need for hospital beds. Intuitively, you know that describing the health information (age, sex, conditions), daily routines, and number of contacts of every individual would be a fruitless undertaking; not only would this cost you many lifetimes of tabulation and measurement, but also the information you ultimately collect would be so large and complex that it wouldn't be *useful* for predicticting trends. Instead, your first instinct is likely to make a few *macroscopic* calculations: the number infected per day, the day-to-day change in infection rates, broad age ranges, the degree of social distancing in the city, and/or population densities. From these, you know that you can apply mathematical models to estimate the infection trajectory, the average infectiousness, and predict how the trends will react to vaccination programs and distancing orders.

## Macroscopic v.s. Microscopic

In your courses, you have likely encountered **Thermodynamics**, which focuses on the *equations of state* (e.g. $PV=NRT$ ) governing *macroscopic variables* that describe bulk matter in *equilibrium*. You may have found the topic boring, if not an excercise in memorization [fn]Even as a Ph.D. in statistical physics, I certainly did![/fn]. Thermodynamics is, ultimately, a byproduct of the far richer field of **Statistical Mechanics**, where one uses their knowledge of the "microscopic rules" governing individual particles, along with statistical principles, to develop models and equations for their collective behavior from the ground up.

In this project, we will be taking the Statistical Mechanics route to develop our epidemic models: From a microscopic picture of how disease is transmitted between individuals, we will generate macroscopic equations that should capture the essential features of COVID19 progression in populations. There is a catch, however: unlike thermodyanmics, our system is *out-of-equilibrium*, and hence constantly evolving in time. This means our equations will appear, naturally, in the form of time-dependent differential equations. 


# Building Models from Scratch

We will now start framing the problem quantitatively. To set the stage for mathematics, we first have to think really hard about disease spread and how to characterize it.

Disease spread is an exponential process. In fact, the current pandemic began with a single virus, in a single cell, in a single animal somewhere, sometime in 2019. It's worth while to understand how and why this wirus was able to spread so rapidly across the entire planet.

## The Life Cycle of a Virus

Viruses are inanimate, and passively move about in gases and liquids until encountering a suitable cell. On contact, a COVID19 virus infects a cell by attaching to and penetrating its membrane with a spike protein. Within the membrane, the cell's enzymes mistakenly disolve the viral protein coating, releasing large amounts of RNA material. This RNA (and mRNA) material is essentially a set of instructions that reprogram the structures of the call to start *manufacturing* new viruses using the host's resources. The cell will continue constructing and leaching copies of the virus  for the remainder of its life [fn]many times until it becomes so full that it literally *bursts*[/fn], releasing about 10000 new viruses. This entire process takes about 8-10 hours once a virus has entered the host.

Aside from the malformed and mutated clones, most of these viral copies have the potential to go on and infect new cells, *repeating* the entire process. Even if only a fraction of them are sucessful, the numbers of infected cells stack quickly. Soon, enough cells in the animal have succumbed to infection to cause illness.

::: Question

Assume that each time a virus infects a cell, it produces 10000 copies of itself over 0.5 days. If 10% of these go on to infect new cells, how many days would it take for the virus to infect 1 trillion cells ?

:::

Once illness begins, the virus can be readily transmitted between individuals -- coughing, sneezing and secreation of muscous lead to safe, efficient travel for the virus. The transmissibilty of the virus continues until either the host recovers or succumbs. During this time, however, small numbers of the virus that make it into a new succeptible host start the process all over. 


::: Question

Assume that over a total infectious period of one week, each infected person transmits the virus to three new indivduals. About how many total infections will occur by the end of three months?

:::

In the case of a highly transimissible virus like COVID19, the exponential growth continues until it reaches global scales -- our current pandemic has infected 86,703,058 at the time of writing. The lesson here is that what began as exponential growth at the microscopic level eventually manifests as exponential growth on the macroscopic level. Our focus in the following technical sections will start at the intermediate scale -- the transmission between individuals -- and build up a macroscopic model. 




## The SIR Model

We start with a simple picture of an isolated town where, somehow, one person becomes infected with an extremly contagious virus. We will assume that, on average, each infected person comes into sufficiently close contact to transmit the virus to k new individuals per day.


### Infected

Let's define $I(t)$ as the number of infections at time $t$, where $t$ is in units of days. In the beginng ($t=0$ days), there is a single infected individual, $I(0) = 1$. We know that each day, infected indivuals pass the virus along to k others on average. We can express this rule in continous time as:

::: Equation

$$
\begin{aligned}
\frac{d I(t)}{dt} &= k I(t)
\end{aligned}
$$

:::

Where the constant $k$ has units which are *extremely* important: the proportionality constant $k$ is a **rate**, and it is telling you how many new infections result per infected individual *per day* [fn]If we expressed $k$ as a weekly rate instead, we would have $ k_w = 7*k \frac{\text{infections}}{\text{infected} \times \text{week}} $ ![/fn].

You're probably familiar with this equation from an ODE class -- we can easily integrate it to obtain an expression:

:::Equation
$$
I(t) = I_0 e^{k t}
$$
:::

This expression, however, is incredibly wrong under comparison to reality. This equation predicts that after 10 days, the number of people infected would exceed the total population of earth! This isn't suprising, since we didn't include this information anywhere, however, the fundamental error made is not superficial. The root of the problem is that we forgot to consider how many people in the population are *susceptible*, or otherwise able to contract the virus, and how this changes over time.

### Susceptible

Returning to our scenerio, we now consider how many people in the town are *susceptible* to the virus at a given time, which will be defined as $S(t)$. We go ahead and define someone as being susceptible if they don't already have it. E.g. if the town has a total population of $N$, then on day 0, $S(0)=N-1$ people are capable of becoming infected. Since the number of people in the town is assumed to be constant, we can simply write $S(t)  = N - I(t)$ 

We now need to think about what being susceptible means in our model. We have made the assumption that each infected person comes into sufficiently close contact to transmit the virus to 1 new individual per day. **However**, now we have to consider if this contact is susceptible. If an infected person comes into contact with someone in the town chosen at random, the probability they are susceptible is $S(t)/N$. This enters our differential equation
 
::: Equation simodel

$$
\begin{aligned}
\frac{d I(t)}{dt}
                  &=  k \frac{S(t)}{N} I(t) 
\end{aligned}
$$

:::
 

This equation is slightly less trivial to integrate, and is left as a excercise. We use the fact that the total population in the town remains constant, hence $S(t) = N - I(t)$, in [Eq](#Eq-simodel) to obtain a nonlinear differential equation in $I(t)$, which can be solved to obtain:

::: Equation sisolution

$$
I(t) = \frac{I_0 N}{I_0+ S_0 e^{-kt}}
$$

and

$$
\begin{aligned}
S(t) &= N - I(t) \\\\
&= \frac{S_0 N}{I_0+ S_0 e^{-kt}}
\end{aligned}
$$
:::


With all this work, we might hope that our new equation bears semblance to reality. While improved, it is still wrong! We are missing one final core feature, which is *removal* from the infectious pool: we have to account for the fact that individuals *do not* remain indefinitely infectious, and either recover or pass away. This means that they have a *finite* amount of time to infect others.


::: Question
Show that the result given in [Eq](Eq-sisolution) obeys the conservation law $N= S(t) + I(t)$
:::

### Removed

## Markov Model

# Fitting models to data

## Getting k

## Getting r

# Extensions

# Write-Up


