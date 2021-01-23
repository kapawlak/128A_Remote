# Cosmic Muon Flux: Is the Earth Flat or Round?

--------


<center><b>TA: Carl Padgett (cpadgett@ucsb.edu)</b></center>

# Introduction
This project consists of simulating the passage of muons through the earth’s atmosphere. You will create two side-by-side models, one that simulates this process for a flat earth and one that does the same for a spherical earth. Each model will use a random number generator to generate “data” in the form of muons counted per zenith angle. The goal of the project is to distinguish between the results of the two models by finding a statistically significant difference between the muon flux rates for the round earth model and the flat earth model. If this is accomplished, we will claim that we can prove that the earth is round!

To do this, we will break up into three subgroups. Each subgroup (2-3 people) will be assigned to work on one part of this simulation during the first week. During the second week, these parts will be combined into a complete, working simulation. In the third week, each person will give a short presentation on their work, results, and analysis. Then, each subgroup will write a report together that is due at the end of the week. The schedule is outlined below:


|| Week 1 | Week 2 | Week 3 |
| ------- | ------ | ------ | ------ |
| Tuesday or Wednesday | Subgroup meeting on individual progress on simulation piece | Subgroup meeting to finalize simulation piece | Ten minute presentation  on project, begin working on report |
| Friday | Whole-group meeting to discuss progress, understand other groups’ work | Full group meeting to finalize full simulation. Begin collecting and analyzing data | Report due at 11:59 pm |

In the subgroup meetings, you will describe what you are working on and share your progress so far. I will ask questions, and you will collaborate with your group members in completing the tasks. In the whole-group meeting at the ends of weeks 1 and 2, each subgroup will give a brief presentation on what they’ve done so far for the other groups, so that everyone understands the simulation as a whole. This is important, because you will be expected to understand the whole simulation for both your short presentation and your report.

To get acquainted with the material we’ll be working with, everyone should read the following over the weekend before week 1: 

- Read “Introduction”, “Our Muon Source”, and “Muon Decay Time Distribution” in the [128AL Muon Physics Lab Manual](http://web.physics.ucsb.edu/~phys128/experiments/muonphysics/muonphysics_TeachSpin.pdf) for some basic background on muon physics.
- Read “[Zenith angle dependence of Cosmic muons](https://icd.desy.de/sites/sites_conferences/site_icd/content/e12688/e13082/e80711/Cosmic@Web_engl.pdf)” to begin to understand how muon flux changes as a function of zenith angle. Pay special attention to secs. 1 and 4, though make sure to understand how the experiment works as this is exactly the type of experiment that we will be simulating. 
- Read “[Energy and angular distributions of atmospheric muons at the Earth](https://arxiv.org/abs/1606.06907v3)” to see a treatment of this same problem we are trying to solve. Your goal is to understand what is shown in Fig. 9.

Here’s a summary of the project, followed by a week-by-week breakdown of the work:

1. Write code that simulates the appearance of muons in the atmosphere. This model should also generate a velocity for each muon so that its path towards the detector is defined. Note that not all muons would reach the earth’s surface even if there were no atmosphere to slow them down. 
2. Create a model of the atmosphere that reflects its stopping power for muons. The model should take into account factors such as atmospheric density, temperature, charge to mass ratio, humidity. Decide the altitude to which the model should extend. For more background, see: “Atmospheric muons: experimental aspects”: [arXiv:1208.1171](https://arxiv.org/abs/1208.1171) 
3. Write code that models the loss of energy of a muon as it travels through a medium. There is one equation that will be central to this process, which should be used to calculate the energy lost by a muon in discrete steps. Using this equation requires the result of 2) as an input, but while writing the code, just leave this as an unknown. 
4. Collect the code produced in parts 1, 2 and 3. Add any additional features necessary for running a simulation of muon generation, passage through the atmosphere, and potential arrival at a detector. Run the full simulation a sufficient number of times, carefully recording the results. 
5. Analyze the data, draw conclusions about the work done on this project, and prepare a summary of the project. You should discuss thoroughly the effectiveness of the simulation, especially whether or not your simulation shows a statistically significant difference between the round earth and flat earth models. Discuss where your model falls short and how you would improve it given more time. If your resources and time were unlimited, what else could be improved? 

Recommended software: Python 3.7


# Week 1
------
## Group 1  
Start by understanding the Bethe formula, and then answer the following questions in your lab notebook:
1. What scenarios does the Bethe formula describe? Is it applicable to muons traveling through the atmosphere? 
2. Will you need to consider the relativistic version of the formula? 
3. Which variables in the formula are properties of the particle whose change in energy we are calculating?
4. Which variables in the formula are properties of the medium through which the particle travels?
5. Now, consider a muon to be the particle and the atmosphere to be the medium it travels through. What do you need to know about the atmosphere to know the numerical value of the variable(s) in the previous question?


## Group 2 
Consult the sources at the beginning of the lab manual and do the following tasks in your lab notebook:
1. Typically, you’ll see the altitude at which muons tend to appear in the atmosphere quoted as 15 kilometers. However, this is only an average.  What information can you find about the appearance of muons in the atmosphere, e.g., is there a distribution of heights at which they tend to appear?)
2. Depending on the event that creates it, a muon may have many different energies when it appears in the atmosphere. Find a way to represent the relative prevalence of muons as a function of initial energy. 
3. Assume a muon appears somewhere in the atmosphere, and is headed directly toward a detector placed somewhere on the earth’s surface. Determine how far the particle has to travel in order to reach the detector. Your result will be a function of the angle between the line normal to the surface at the detector and a line drawn from the detector to the starting point of the muon. Do this for both a round earth and a flat earth.

## Group 3 
Your goal for the first week is to understand how muons propagate through a medium. Like group 1, your starting point will be understanding the Bethe formula. Answer the following questions in your lab notebook. 
1. How can you use this equation to understand how a particle slows down as it travels? 
2. If you were to write a program that simulates this process, how would you go about doing it? Create with an outline for how you’d write this code. Hint: think about breaking the particle’s path down into discrete steps in time and/or distance traveled. 
3. Keeping in mind that muons travel at relativistic speeds, will the muon’s behavior be the same in its own rest frame and the reference frame of the detector? How might you take this into account in your code?

# Week 2
------
## Group 1
1. How high should your model of the atmosphere extend?
2. Collect the information about the atmosphere in order to calculate the parameter required to evaluate Bethe’s formula as a function of altitude.
3. Using python, write a function that takes an altitude as an input and outputs the above parameter. 
## Group 2
1. Using your answers for the previous week, write code that generates a list of muons. For each muon, you should randomly sample your distribution of initial energies to pick an energy, and randomly sample your distribution of starting altitudes to pick an initial height. Your code should choose an angle at random, and then calculate the total distance the muon would have to travel to reach the detector. The final result of your code should be a list of muons with specified  initial energy, distance to the detector (for both the flat earth and round earth models), and zenith angle. This list will be fed into the code that group 3 writes, which will model each muon’s energy loss according to the Bethe formula and determine if the muon reaches the detector.
## Group 3
1. Finalize your outline by writing the code. The initial energy and distance from the starting point to the detector for the flat earth and round earth models will be provided for each muon by group 2. Your code should output a histogram that shows the number of muons that reached the detector as a function of zenith angle for both models. 
-------
Getting each group’s code to work together may take some troubleshooting. It is also worth spending time trying to make your code as simple as possible so it runs quickly and efficiently.  Once each group has finished their task, group 3’s code should produce a plot that shows the flux of cosmic muons at a single detector as a function of zenith angle (similar to Fig. 9 of "Energy and angular distributions of atmospheric muons at the Earth"). Your goal now is to be able to distinguish between the curve for a flat earth, and the curve for a round earth. To do this, you will need to analyze the data. Each person should answer the following questions in their manual: 

# Error Analysis Questions: 
1. In this simulation, we have modeled the appearance of muons in the atmosphere as a random process. Can we treat individual detections of muons at the earth’s surface as uncorrelated events?
2. What is the uncertainty associated with a measurement of some number of muons counted?
3. Say you are counting the number of muons detected coming to the detector from a zenith angle between 75 and 80 degrees. Using the flat earth travel distance, you detect 65 muons, and using the round earth travel distance, you detect 80 muons. Using the estimation of uncertainty from the previous question, are the results from the two models distinct?
4. Now, consider what you read about the normal distribution in chapter 5 of Taylor’s Error Analysis. Does the number of muons counted in a specific angle range satisfy the assumptions of the normal distribution? 
5. Using the measurements from question 3 and the results from chapter 5, calculate the probability that the measurements corresponding to the different models are distinct. 
Suppose now that instead of 80 muons, you count N muons using the round earth travel distance. How large must N be in order for there to be a 95% chance that the measurements corresponding to the two models are distinct?

Using these previous questions as guidance, determine whether the results of the simulation show a clear distinction between the two models at any range of angles. Make use of the above ideas in error analysis in order to make an argument about the relationship between the two models. If you don’t see a distinction between the two in any range of angles, estimate how much more data you need to simulate in order to find the difference between the models for multiple angles. Re-run the experiment to collect the data you need. 

# Week 3
-----
This week, each person will give a short, 10 minute presentation on either Monday or Tuesday. These presentations will be summarizing the work you have done so far on the project. THe presentation should:

- Include an overview/introduction to the project, including botht the part you worked on as well as the other parts. You should be able to describe how each group’s piece fits into the puzzle, creating the full simulation. 
- Describe in more detail what you did, including specific tasks you completed, strategies you took to solve problems, and show the final product of what you and your group worked on. 
- Show the results of running the simulation and present your analysis of the results. You be sure to use error analysis to reach a conclusion about the project as a whole.

More details will be provided closer to the presentation. Once you’ve presented, you will begin working on a lab report that hits on all the above requirements in more detail. The presentation should be the basis for the lab report, but the report will be a much more complete exposition of the project. Again, more details about the report will be provided as we get close to week 3.  

# Code Samples
_______
## Group 1
Here's a barebones example of something you might write. The concepts and math are wrong. 

```    
    # Using units of meters
    # Above 3 km altitude, the density decreases quadratically
    # Below 3 km altitude, density decreases linearly

    def electron_density(h):
        if h <= 3000:
            density = (3200-h)*5.3
        else: 
            density =  0.5 * (36089-h)**2
    
    # To calculate electron density, multiply by Avogadro's number 
    # Then multiply by molar mass constant
        e_density = 6.022 * 10**(-26) * 9.5 * 10**(-3) * density
        return e_density
```

## Group 2 
Sample with incorrect concepts just to help get started

```
    import math
    import random
    R_earth = float(6371000)
 
    # function that computes cosine with a degrees argument
    def cos_degrees(angle) :
    return math.cos(math.radians(angle))
 
    # function that computes the path length that the Muon will travel 
    # in the round Earth model given the initial angle (in degrees) and 
    # initial height (in meters)
    def path_length_round(angle_i, height_i) :
        return (R_earth**(1/2) + (cos_degrees(angle_i)) + height_i) 
 
    # function that computes the path length that the Muon will travel 
    # in the flat Earth model given the initial angle (in degrees) and 
    # initial height (in meters)
    def path_length_flat(angle_i, height_i) :
        return cos_degrees(angle_i) / (height_i)**2
 ```   
    
## Group 3 
Sample with incorrect concepts just to help get started

    coming soon