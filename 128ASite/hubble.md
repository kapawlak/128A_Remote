# Hubble constant from gravitational waves

<center><b>Main contact: Diandian Wang (diandian@physics.ucsb.edu)</b></center>

# Introduction
Before the era of gravitational waves, measurements of the Hubble constant relied on only EM wave observations because gravitational waves are much, much, much weaker. However, with tremendous effort put into the design and development of gravitational wave detectors, scientists are now able to detect them. Huge amounts of information are stored in these gravitational waves. Most famously, we can tell when and where two compact objects (such as black holes) collide and how heavy (and how “spinning”) each of them is. As an introduction to this exciting field, in this project you will do something not as hard but just as interesting - extracting the Hubble constant from gravitational wave signals (perhaps together with EM signals).

## Prerequisites
- No knowledge of General Relativity is needed
- Basic understanding of binary systems at the level of Newtonian physics 
- Basic understanding of Fourier Transformation
- Some familiarity with terms like black holes, gravitational waves, expansion of the universe and etc. at the level of popular science helps a lot

# Instructions
1. The Hubble constant is defined as $H_0=v/D$, where $v$ is recession velocity and $D$ is distance. In principle, we can take any two galaxies, then the ratio of the velocity at which they move away from each other and the distance between them will be the Hubble constant. This constant is independent of which two galaxies we choose. For our convenience, we will choose one of these two galaxies to be our own, and the other will be a source of gravitational waves. We will use gravitational wave data to determine the distance, and EM wave data to determine the recession velocity.
2. The recession velocity should be easy to determine. Due to Doppler effect, there will be a redshift for the spectral lines. The velocity can be estimated from $z=\frac{\Delta \lambda}{\lambda}=\frac{\lambda^{\prime}-\lambda}{\lambda} \approx \frac{v}{c}$ where $z$ is called the redshift, $c$ is the speed of light, $\lambda$ is the rest frame spectral line wavelength, and $\lambda^\prime$ is the observed wavelength. For the sodium D absorption line, $\lambda=5896$ Angstrom. You should now plot the spectrum, and find the observed wavelength. The spectrum is provided in a csv file. You can use any programming language you want, but I recommend Python. The benefit of using Python will be apparent in later steps when we need to perform a Fourier Transform. To complete this step, give a value of the recession velocity with your estimate of the error. 
3. Next, we will need to find the distance using gravitational wave data. You will be given raw data for the strain, $h$, as a function of time, $t$. Gravitational waves cause objects to contract and expand, so when it passes through the detector, the detector contracts and expands as a function of time. The event that produced this data is a binary neutron star merger. What happens in such an event is that two neutron stars orbits around each other many times. During this process, just like two charges orbiting around each other will emit EM waves, gravitational waves will be emitted. The frequency of the signal is the same as that of the spiral motion. As energy is dissipated during this process, the two neutron stars gets closer and closer and moves faster and faster. The frequency of the emitted signal also changes with time as a consequence of this speeding up. Finally, the two objects collide violently, producing a final burst of energies. This final moment is denoted $t=0$ in the data. You will need to use data for negative $t$ because that is when the signal still has nice patterns. To do this, we use the formula for calculating the distance, $D=\frac{4 c}{|h|}\frac{5}{96 \pi^{2}} \frac{\dot f_{\mathrm{gw}}}{f^3_{\mathrm{gw}}}$, where $f$ denotes frequency, dot denotes time derivative, and $|h|$ is the amplitude of the signal. This should be valid at a range of values of $t$ before $t=0$, i.e. the inspiral stage. To obtain the values, you need to first choose a reasonable $t$. You can easily find the local amplitude of oscillations near this $t$, so you have $|h|$. To find $f$ and $\dot{f}$, it is a little more complicated. You are given the strain as a function of time, but you want the frequency of function of time. If you perform a complete Fourier transform of $h(t)$, the result will not be a function of time. The trick here is to realize that the motion is quasi-periodic: locally the function $h(t)$ looks like some periodic oscillations, but for longer time it is not. This local oscillatory motion is exactly what gives us $f(t)$. Therefore, you should write codes to find, for any $t$, the frequency of a few oscillations around that $t$. This sounds very easy, but if you are not good with coding it may be hard. Alternatively, you can realize that this is actually a standard procedure called spectrogram and Python knows how to do it. If you do it this way, your spectrogram should look like [this picture](https://en.wikipedia.org/wiki/Spectrogram#/media/File:GW170817_Gravitational_Wave_Chirp_Spectrogram.jpg). One you have the spectrogram, you can find $f$ and $\dot{f}$ at your chosen $t$ easily by looking at that bright curve: this tells you the dominant frequency as a function of $t$, i.e. $f(t)$. You should also estimate your errors. It is your job to figure out how, but you don't have to be fancy. Any rough method that is justified suffices.
4. Calculate $H_0$ along with its error. (Finish before 2nd meeting of 2nd week where you need to present your results to the group.)
5. Think about systematic errors. I understand that it is hard to do this if you do not understand where the equations come from, but you can try to give reasonable guesses, including any suspicions of the equations.
6. Write a report, with careful data analysis and description of the method.

## Comments
- Data are fake so the results should not be taken seriously, but you should pretend that they are not and perform analyses. 

# A weekly plan
**We will have two meetings each week.**
- Meeting 1
	- Introduction
	- Group assignment
	- Resources to start the project
- Meeting 2
	- Questions about the physics
	- Questions about the procedures
	- Since this is a new project, I may need to make changes to the manual at this point, especially if there is any mistake or if any task turns out unrealistic. 
- Meeting 3
	- Check progress of each group
	- One-to-one support if needed
- Meeting 4
	- Each group gives a presentation on their results
	- Other groups give feedback
- Meeting 5
	- Questions about writing the report
- Meeting 6
	- Feedback on your drafts