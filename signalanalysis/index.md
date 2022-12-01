---
title: Mathematical Methods for Signal Analysis
layout: base
---
<!--<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=default'></script> -->
<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script> -->

<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<div class="divider-10"></div>
<br><br><br>
# Mathematical Methods for Signal Analysis
<br>

The objective of this e-book or set of tutorials is to not just go through the mathematical details of approaches but discuss the interpretation in great details to have it on finger-tips. We will dive into details, with a little informal way, see the rigorous math behind and most importantly, we would write a small piece of code for understanding the concept. I will try to make it fun to learn about all this, Not for you, for me (at least) and hope you might enjoy too ;).

<br>
### Table of Contents (in progress...)
* [Chapter 1: Linear Algebra](#chapter-1)
* [Chapter 2: Least Square](#chapter-1)
* [Chapter 3: Principle Component Analysis](#chapter-1)
* [Chapter 4: Independent Component Analysis](#chapter-1)
* [Appendix: Proofs](#appendix)
<br>
<hr>
<div class="divider-10"></div>
## Chapter 1:  Linear Algebra
<hr>
Linear Algebra is one of my favorite topic of mathematics (or of any subject ..). My hope is to make it as interesting for you as it is for me. Once you understand it, you would see, that it works like a **magic!!** (it is, at least to me). The most useful thing, that I think is, any idea that you could visualize or develop for 2D graphs and plots, can be extended to higher dimensions and they works exactly same (most of the time).

<br>
### Vector, Matrice,  

<br><br><br><br><br>


<br>
### Spaces

<br><br><br><br><br>


<br><br><br><br><br><br><br><br><br><br><br>


<br>
### Covariance Matrix
Consider a matrix $$X \in R^{n\times m}$$, where $$X$$ has $$n$$ samples of $$m$$-different measurements, i.e. $$m$$-channels signals. Typically, $$n>m$$. In other domain, $$m$$ is typically known as features, sources, independent variables etc. So, X is an Matrix with m features (measurements).

Then Covariance Matrix $$C_x$$ is computed as:

$$C_x =  \frac{1}{n} X^TX$$

which will be a $$m \times m$$ matrix. In estimation theory, $$n-1$$ is used i.e. $$C_x =  \frac{1}{n-1} X^TX$$, as to estimate statistics from sample, rather than from population.

Now the question is, what it is, and what does it tell us. To understand, this let's take a small example and go through it. Let's consider a $$X$$ as
The choice of X is very specific at this time (i.e. mean of each column is zero), which will be clear in short.

<br>
<br>

<center>
$$X =
  \left[\begin{array}{rrrr}
  -2&  2& -4&  1 \\
  -1&  1& -4& -1 \\
   0&  0&  1&  2 \\
   1& -1&  3& -2 \\
   2& -2&  4&  0 \\
  \end{array}\right]
\rightarrow C_x =
  \left[\begin{array}{rrrr}
2.0 & -2.0 & 4.6 & -0.6 \\
-2.0 & 2.0 & -4.6 & 0.6 \\
4.6 & -4.6 & 11.6 & -0.8\\
-0.6 & 0.6 & -0.8 & 2.0 \\
  \end{array}\right]
$$
</center>

<br>
<br>

In python it is super easy to compute, assuming X is a numpy array
<br>

Python:
  ```Cx = X.T@X/X.shape[0]
  ```

<br>
If look into details, what is happening is, we are computing dot product of every column of $$X$$ with every row of $$X^T$$ (which is actually the column of $$X$$).
So, we have dot-product of each column with each other column, including it self. Lets name each column of $$X$$ as $$x_i$$ then


<p style="text-align:center">...</p>


$$X^T = \left[\begin{array}{r}x_1^T\\
                            x_2^T\\
                            x_3^T\\
                            x_4^T\\ \end{array}\right]$$  and $$X = \left[x_1, x_2, x_3, x_4\right]$$

<br>
$$X^T = \left[\begin{array}{crc}
                        - & x_1^T & -\\
                        - & x_2^T & -\\
                        - & x_3^T & -\\
                        - & x_4^T & -\\ \end{array}\right]$$ and $$X = \left[\begin{array}{cccc}
                        |   & |   &  |   &  |\\
                        x_1 & x_2 & x_3  & x_4\\
                        |   & |   &  |   &  |\\  \end{array}\right]$$

<br><br>

 $$C_x =
    \frac{1}{n} X^TX = \frac{1}{n} \left[\begin{array}{rrrr}
 x_1^Tx_1 & x_1^Tx_2 & x_1^Tx_3 & x_1^Tx_4  \\
 x_2^Tx_1 & x_2^Tx_2 & x_2^Tx_3 & x_2^Tx_4  \\
 x_3^Tx_1 & x_3^Tx_2 & x_3^Tx_3 & x_3^Tx_4  \\
 x_4^Tx_1 & x_4^Tx_2 & x_4^Tx_3 & x_4^Tx_4  \\
  \end{array}\right]
$$

<br>
<br>
Notice that $$C_x$$ is symmetric, infect, Covariance Matrix is always Symmetric (Theorem A.1), Check Proof in Appendix. Now observing diagonal elements of $$C_x$$, they are dot-product of a column with it-self divided by **n**. Since each column has zero mean, this value $$\frac{1}{n} x_i^Tx_i$$ is nothing but *variance* of $$x_i$$.
<br>
<center>
$$\frac{1}{n} x_i^Tx_i = \frac{1}{n}\sum_k x_i(k)^2 = \frac{1}{n}\sum_k ( x_i(k)-\tilde{x}_i )^2 = \sigma_{x_i}^2$$
</center>
<br>

where $$\tilde{x}_i$$ is mean of $$x_i$$ which is zero in our chosen matrix. On the other hand, off-diagonal elements are #**cross-variance** or **covariance** between  
two columns (two different measurements, two different features), that is: $$\sigma_{x_i,y_j}^2 = \frac{1}{n} x_i^Tx_j $$.

<br>
<br>
#### **Covariance and Correlation**
There is direct relation between covariance and cross-correlation. Cross-correlation (typically called as correlation, unless it is computed for same measurement, then it is called as autocorrelation) between two measurements (x, and y ) is defined as:
<br><br>
* Correlation:  $$P_{xy} = \frac{1}{n}\sum_k ( x(k)-\tilde{x} )( y(k)-\tilde{y})/(\sigma_{x}\sigma_{y})$$

* Covariance:   $$C_{xy} = \frac{1}{n}\sum_k ( x(k)-\tilde{x} )( y(k)-\tilde{y})$$,

<br>
So for $X \in R^{n\times m}$, $Corr(X) = diag(C_x)^{-1/2} C_x diag(C_x)^{-1/2}$
<br>
<br>
For Covariance, denominator terms is not there. Due to normalizing factor in cross-correlation, its value is bounded by -1 and 1, however, same can be be said for covariance. Still the interpretation of Covariance can be drawn from Correlation. If value is high and positive, x and y are linearly correlated, which means, if x increases, y increases. On the other side, if value is negatively high, the opposite is true, that is, if x increases, y decreases.
<br>
<br>
**Note that, ZERO Covariance or Correlation only stats that there is no linear association between two given measurements, however, there could be a non-linear relationship, that exist.**







<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<hr>

# Appendix

<hr>
-->

<!--
###-------------Commented
<p style="border:2px; border-style:solid; border-color:#3377FF; padding: 1em;">  

<b>Theorem</b>: <i>Covariance matrix is always symmetric</i>
<br>
<b>Proof</b>: lets ignore <b>n</b>

$$C_x^T = (X^TX)^T = X^T(X^{T})^T = X^TX = C_x$$

<i>QED</i>
</p>
<!--
###-------------Commented
<p style="border:2px; border-style:solid; border-color:#3377FF; padding: 1em;">
<table>
<tr>
<td>
<p>
<b>Theorem</b>: <i>Covariance matrix is always symmetric</i>
<br>
<b>Proof</b>: lets ignore <b>n</b>

$$C_x^T = (X^TX)^T = X^T(X^{T})^T = X^TX = C_x$$

<i>QED</i>
</p>
</td
<td>
$$(AB)^T = B^TA^T$$
</td>
</tr>
</table>
</p>
-->
<!--
<table width="90%">
  <tr>
  <td><p style="border:2px; border-style:solid; border-color:#3377FF; padding: 1em;">
    <b>Theorem A.1</b>: <i>Covariance matrix is always symmetric</i>
    <br><b>Proof</b>: lets ignore <b>n</b>
      $$C_x^T = (X^TX)^T = X^T(X^{T})^T = X^TX = C_x$$
    <i>QED</i></p></td>
  <td>using $$(AB)^T = B^TA^T$$</td>
  </tr>
</table>
-->

<table width="100%">
  <tr>
    <td><b>Theorem A.1</b>: <i>Covariance matrix is always symmetric</i>
    <br><b>Proof</b>: lets ignore <b>n</b>
    $$C_x^T = (X^TX)^T = X^T(X^{T})^T = X^TX = C_x$$
    <i>QED</i></td>
    <td> using $$(AB)^T = B^TA^T$$ $$(A^T)^T = A$$</td>
    <td>.</td>
  </tr>
</table>

<!--
###-------------Commented
<hr>
# Chapter 2
-->
