# First header: is the title

### Material List
Generate your Material List

``` 
::: Materials 
- item1
- item 2
- item 3
:::
```

::: Materials
- Computer
- Brains
- Grit
:::



# Header 2 becomes Part I


Typically this should be an introduction section. Since it is the first thing that students will read, they will be less mentally fatigued and recall more of this information. It should summarize the 'big-picture' of the lab, and use visual elements such as images, videos and figures.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Second Level Headers

Are earmarked on the left navigation screen. This means that students can quickly navigate between parts and the subsections. Second level sections should thus be used to delinate important chunks of information. Unlike this,

### Third Level Headers

and beyond will not generate a link, so they should be used to draw attention to important subcontent in  the section. 

# Special Elements

## @fa-line-chart@ Figures

Figures generally contain images and have three types. The simplest will generate a full length figure.
``` 
::: Figure:Figure  optional-name
![This is an image](imgs/Balls2.png)
:::
``` 
::: Figure:Figure  
![This is an image](imgs/Balls2.png)
:::

To improve visual variety you can also make right and left floating figures, respectively. These will float to the right(left) of any text that *follows* it.


Right:
``` 
::: Figure:RFigure
![This is a right floating image](imgs/phyphox.png)
:::
``` 



Left: 
``` 
::: Figure:LFigure
![The relationship between x and t is constant](imgs/Constant.png)
![The relationship between x and t is linear](imgs/Linear.png)
![The relationship between x and t is quadratic](imgs/Quad.png)
:::
``` 


**The figure will not float next to this text because the text is placed above the image.**

*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.* 

::: Figure:RFigure  
![This is a right floating image](imgs/phyphox.png)
:::

**It will, however, float to the right of text that follows. Floating figures are best used for tall images, or a figure containing multiple images.**

*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.*

*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?*

*Molestie nunc non blandit massa enim nec. Donec ac odio tempor orci dapibus ultrices in. Maecenas pharetra convallis posuere morbi. Dignissim suspendisse in est ante. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. In hendrerit gravida rutrum quisque non tellus orci ac. Sit amet dictum sit amet. Urna nec tincidunt praesent semper feugiat nibh sed. Id volutpat lacus laoreet non curabitur gravida. Iaculis urna id volutpat lacus laoreet non curabitur. Elementum nibh tellus molestie nunc non. Sagittis aliquam malesuada bibendum arcu. Senectus et netus et malesuada fames ac turpis egestas. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Consequat nisl vel pretium lectus quam id leo in vitae.*

:::Figure:LFigure
![The relationship between x and t is constant](imgs/Constant.png)
![The relationship between x and t is linear](imgs/Linear.png)
![The relationship between x and t is quadratic](imgs/Quad.png)
:::

**You might worry that the images appear too small when multiple are in a figure, but the website automatically compiles *modals*. These are frames that pop up to show full-size media when clicked. Go ahead and click on of the images.**

*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.*

*Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?*

*Molestie nunc non blandit massa enim nec. Donec ac odio tempor orci dapibus ultrices in. Maecenas pharetra convallis posuere morbi. Dignissim suspendisse in est ante. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. In hendrerit gravida rutrum quisque non tellus orci ac. Sit amet dictum sit amet. Urna nec tincidunt praesent semper feugiat nibh sed. Id volutpat lacus laoreet non curabitur gravida. Iaculis urna id volutpat lacus laoreet non curabitur. Elementum nibh tellus molestie nunc non. Sagittis aliquam malesuada bibendum arcu. Senectus et netus et malesuada fames ac turpis egestas. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Consequat nisl vel pretium lectus quam id leo in vitae.*

### Figures: Advanced

In order to accomodate a row of images, the site makes use of W3.CSS standard columnization. Each full figure generates a row div class containing 12 equally sized columns. These are visualized in the figure below

::::::Figure:Figure

:::col l1 w3-theme-l1
C1
:::
:::col l1 w3-theme-l2
C2
:::
:::col l1 w3-theme-l3
C3
:::
:::col l1 w3-theme-l4
C4
:::
:::col l1 w3-theme-l5
C5
:::
:::col l1 w3-theme-l6
C6
:::
:::col l1 w3-theme-l5
C7
:::
:::col l1 w3-theme-l4
C8
:::
:::col l1 w3-theme-l3
C9
:::
:::col l1 w3-theme-l2
C10
:::
:::col l1 w3-theme-l1
C11
:::
:::col l1 w3-theme-l2
C12
:::






::::::


Within this, we can designate how many columns each part of the figure should take up large screens. The example below shows two images that each take up half of the horizontal space = 6 columns Note: all columns take up the full width on mobile and tablet sized screens.

```
::::::Figure:Figure
:::col l6
![Part A: Unobstructed view](imgs/HP_MotionGraphs_Download.png)
Part A: This figure takes up 6 of 12 rows
:::
:::col l6 
![](imgs/HP_MotionGraphs_Annotated.png)
Part B:This figure takes up 6 of 12 rows
:::
::::::
```
::::::Figure:Figure
:::col l6
![Part A: Unobstructed view](imgs/HP_MotionGraphs_Download.png)
Part A: This figure takes up 6 of 12 rows
:::
:::col l6 
![](imgs/HP_MotionGraphs_Annotated.png)
Part B:This figure takes up 6 of 12 rows
:::
::::::

## @fa-superscript@ Equations

Just as important as figures, equations get their own box. Each equation is automatically numbered. Moreover, equations can be named and linked to later (see linking Section). 

```
:::Figure:Equation equation_name
$$
\int_M K dA+\int_{\partial M}k_g ds=2\pi\chi(M)
$$
:::
```

:::Figure:Equation gbt
$$
\int_M K dA+\int_{\partial M}k_g ds=2\pi\chi(M)
$$
:::


Equation markup uses standard KaTeX. For less important equations, KaTeX may be rendered in-line with single dollar signs `$a=\tfrac{1}{2}\pi r^2$`, e.g. : For our purposes [Eq](#gbt) can be reduced to the more familiar $a=\tfrac{1}{2}\pi r^2$

## @fa-question-circle@ Questions

Question boxes contain graded action items for students, and are brightly colored to draw attention to them. They are automatically numbered and may be linked to.

```
:::Question
Are you following along with this tutorial?
:::
```

:::Question
Are you following along with this tutorial?
:::

Questions with multiple subparts are automatically labeled with lower-case letters.

```
:::Question
1. Using [Eq](#gbt) for the case of $d=2$ , derive the result $a=\tfrac{1}{2}\pi r^2$
2. How would this result change if $M$ was a manifold of genus 2? Discuss
:::
```

:::Question
1. Using [Eq](#gbt) for the case of $d=2$ , derive the result $a=\tfrac{1}{2}\pi r^2$
2. How would this result change if $M$ was a manifold of genus 2? Discuss
:::

## @fa-sitemap@ Exercises

Exercises are another important call-to-action for students. They act as a stand alone prompt with step-by-step instructions for completing part of a lab. They are automatically numbered and occur in full-width boxes so that any figures or questions within have sufficient readability.

```
:::::: Exercise
Firstly, let's measure the direction of magnetic field from the  magnet.
**Measurement steps:**
1. Put your phone on the table and open the phyphox app and go to “magnetometer”. You can see there are three plots, representing $B_x$,  $B_y$ and $B_z$.
2. Start recording. You should see some random fluctuations on the plot. 
3. Hold the magnet above the magnetomer, with one flat side facing up. Move it up and down above the magnetometer.
4.  Now flip the magnet over, and repeat the motion.
5.  Stop recording to view the collected data. 

::: Question
1. Why does $B_z$ change when you move the magnet vertically?
2. At the point where you flipped the magnet, describe the difference you observe, and give a possible explanation.
:::
::::::
```

:::::: Exercise
Firstly, let's measure the direction of magnetic field from the  magnet.
**Measurement steps:**
1. Put your phone on the table and open the phyphox app and go to “magnetometer”. You can see there are three plots, representing $B_x$,  $B_y$ and $B_z$.
2. Start recording. You should see some random fluctuations on the plot. 
3. Hold the magnet above the magnetomer, with one flat side facing up. Move it up and down above the magnetometer.
4.  Now flip the magnet over, and repeat the motion.
5.  Stop recording to view the collected data. 

::: Question
1. Why does $B_z$ change when you move the magnet vertically?
2. At the point where you flipped the magnet, describe the difference you observe, and give a possible explanation.
:::
::::::


## @fa-video-camera@ Videos

## @fa-space-shuttle@ Simulations

## @fa-warning@ Notes, Warnings, Expanded Info

# Other Features

## Linking

## Nested Elements

## Iconography

## HTML



