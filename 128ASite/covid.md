# COVID 19 Data Analysis Project


:::Materials 
- Computer
- Your programming language of choice
:::

# Introduction to Epidemics

The 2020 SARSCov2 pandemic has resulted in mandatory remote instruction of all courses at UCSB until at least June 2021, including all instructional physics laboratories. The educational silver-lining of this event is the opportunity to learn about both Statistical Physics and Biophysics!

While generally considered to be within the field of biology, epidemiology depends on the pillars of statistical physics and employs many of the same techniques, mathematics and analysis strategies. In fact, many of the early and best performing models for COVID19 spread were published by Physicists. 

Students who choose this project will learn about various modeling frameworks to understand epidemics.  They will use real data to initialize and evaluate models, investigate the meaning of vocabulary such as “curve flattening”, and the feasibility of approaches like "herd immunity"

This project is very open ended: Students are strongly encouraged to ask questions they are interested in! 

## COVID19: History

This is a placeholder for background on history

# The Statistical Physics of Epidemics

When deciding on a simulation algorithm, there are two main varieties of modeling to consider – deterministic or
stochastic. Each method has it’s own benefits and drawbacks, and they are appropriate for different situations:
tochastic. Each method has it’s own benefits and drawbacks, and they are appropriate for different situations:
### Differential Equations (The SIR Model)

For large scale simulations (think cities of 100k+), you can numerically integrate the SIR model ODE(and any
generalization of it). As you will derive, the Susceptible-Infectious-Recovered model is described by the coupled differential
equations

::: Equation SIR
SIR
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


