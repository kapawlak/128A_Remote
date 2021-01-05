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

In Statsistical Physics, one is concerned with the study of parametrically large numbers of "particles", and the behavior of these under different internal and external conditions. The qualifier "parametrically large numbers" is critical here -- while the classical mechanics equations of few body systems are a woefully inadequet framework, large numbers of particles allow us to apply the principles of *statistics* to look at average behavior with high levels of confidence.
 
**Imagine the following scenerio.** Working in a lab, you are handed a helium balloon and asked to quantitatively describe the state of gas it contains. Intuitively, you know that describing the state of every particle in the gas would be a fruitless undertaking; not only would this cost you many lifetimes of tabulation and measurement, but also the information you ultimately collect would be so large and complex that it wouldn't be *useful* for predictive science. Instead, your first instinct is likely to make a few *macroscopic* measurements: its temperature, pressure, volume, and/or mass. From these, you know that you can use the fundamental equations of an ideal gas to specify its state, the average energies of the particles, and predict how the gas would react to environmental changes.

Though developed for the study of particulate matter, the techniques of Statistical Physics are widely applicable to *any* system involving large numbers of "particles" that interact with one another and their environment through a well-defined set of rules. Specifically, in Epidemiology, the particles involved are far larger and more complex: they are living organisms!

**Imagine the following scenerio.** Working in a lab, you are handed a table of data documenting the number of COVID19 infections, hospitalizations and deaths by date in NYC and are asked to quantiatively report on the projected need for hospital beds. Intuitively, you know that describing the health information (age, sex, conditions), daily routines, and number of contacts of every individual would be a fruitless undertaking; not only would this cost you many lifetimes of tabulation and measurement, but also the information you ultimately collect would be so large and complex that it wouldn't be *useful* for predicticting trends. Instead, your first instinct is likely to make a few *macroscopic* calculations: the number infected per day, the day-to-day change in infection rates, broad age ranges, the degree of social distancing in the city, and/or population densities. From these, you know that you can apply mathematical models to estimate the infection trajectory, the average infectiousness, and predict how the trends will react to vaccination programs and distancing orders.


## Modeling Overview


When deciding on a simulation algorithm, there are two main varieties of modeling to consider – deterministic or
stochastic. Each method has it’s own benefits and drawbacks, and they are appropriate for different situations:
tochastic. Each method has it’s own benefits and drawbacks, and they are appropriate for different situations:
### Differential Equations (The SIR Model)

For large scale simulations (think cities of 100k+), you can numerically integrate the SIR model ODE(and any
generalization of it). As you will derive, the Susceptible-Infectious-Removed model is described by the coupled differential
equations:

::: Equation SIR

$$
\begin{aligned}
\frac{d S}{dt} &= -k\tfrac{S}{N}I \\\\
\frac{d I}{dt} &= k\tfrac{S}{N}I - g I\\\\
\frac{d R}{dt} &= gI
\end{aligned}
$$

:::

where γ, β represent infection, recovery rate respectively. This kind of model will provide an easier route to fitting real
data. Moreover, Once up and running, there are many ways to improve the realism of this model, including, but not limited
to: letting γ vary due to seasons, quarantine or random noise, introducing diffusion of individuals through space (diffusion
via PDE’s), adding in-well known extensions such as the Exposed class, or even investigating the spread of mutants. Once
you choose the question you want to answer, I can help you build your model.
3
### Random Event Generators (Markov Model)

For smaller-scale simulations (think cities < 100k or small numbers of initially infected), it is far more accurate to
write a so-called markov model. This version of the simulation, unlike the ODE, is stochastic, meaning events like infection
happen – or don’t happen – at random. There are multiple ways to implement this, with the markov chain the simplest.
For a chain based algorithm, the idea is to calculate the probability of an event occurring that takes you from one state
to another, P(event), in a very small time interval, and then run a simulation by metaphorically “rolling dice” to advance
to the next time step. If we are currently in a state with S susceptible, I infected and R recovered, then the probability
distribution for the next state looks like



## The SIR Model


## Markov Model

# Fitting models to data

## Getting k

## Getting r

# Extensions

# Write-Up


