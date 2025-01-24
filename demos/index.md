---
title: Demos
layout: base
---
<br>
<br>
<br>

# Web-based interactive demos

For tutorials and explanation

<br>
<br>



<div class="wide-show">
<!-- SAMPLING -->
<div style="width:90%; border:1px solid black;border-radius:20px 0 0 20px;margin:20px 0 20px 0;">
  <table>
  <tr>
  <td>
  <div class="column-box" style="width: 300px; margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Sampling</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
        <div class="card-body">
          <p><strong>Statistics:</strong> <a class="reference external" href="./Stats/sampling" target="_blank">For Sampling/Inferencing</a></p>
          <a class="reference external image-reference" href="./Stats/sampling" target="_blank">
          <img alt="sampling" src="./GIFs/stats_sampling_demo.gif" target="_blank" style="width: 300px;"/></a>
      </div>
    </div>
  </div>
  </td>
  <td style="vertical-align:top;">
  <!-- <hr> -->
  <br>
  <!-- <br> -->
  This widget allows you to change underlyig mean and variance of three three sources; namely; population, group 1, and group 2. The widget help is desgined to understands following concepts:
    <ul >
    <li>• <b>Distribuation of means</b>: By sampling multiple time from selected groups (+ population), it can be shown how distributation of means depends on the variability (variance of the original source)</li>
    <li>• <b>Confidence Interverval</b>:  By sampling multiple times from sources, it can be shown how confidence intervel depends on the smaple size (N)</li>
    <!-- <li>• Machine Learning</li> -->
    </ul>
  </td>
  </tr>
  </table>
</div>

<!-- ROC -->
<div style="width:90%; border:1px solid black;border-radius:20px 0 0 20px;margin:20px 0 20px 0;">
  <table>
  <tr>
  <td>
  <div class="column-box" style="width: 300px;margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>ROC: Receiver Operating Characteristics</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
      <div class="card-body">
      <p><strong>Machine Learning:</strong> <a class="reference external" href="./ML/roc_v3.html" target="_blank">For Understanding ROC</a></p>
      <a class="reference external image-reference" href="./ML/roc_v3.html" target="_blank">
          <img alt="ml_roc_demo"
          src="./GIFs/ml_roc_demo.gif" target="_blank"  style="width: 300px;"/></a>
      </div>
    </div>
  </div>
  </td>
  <td style="vertical-align:top;">
  <!-- <hr> -->
  <br>
  <!-- <br> -->
  In Machine Learning, ROC Curve is one of approches to evaluate the quality of a trained model by computing the AUC (Area under the curve) of ROC Curve. Although, it is straightforword to understand that higher the AUC, better it is, which is good enough to compare two or more models for the purpose of model selection. However, unlike accuracy, the interpretation of the value of AUC is not so intutive. The objective of this web-based interative widget is to help develop the missing intutive insight of AUC of ROC Curve.
In addition, this widget helps to undertand the tuning of a threshold for a trained model, in order to accommondate the cost of misclassification of classes.
  </td>
  </tr>
  </table>
</div>

<!-- Sinusodal Player -->
<div style="width:90%; border:1px solid black;border-radius:20px 0 0 20px;margin:20px 0 20px 0;">
  <table>
  <tr>
  <td>
  <div class="column-box" style="width: 300px;margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Sinusoidal Player</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
      <div class="card-body">
      <p><strong>Singal Processing:</strong> <a class="reference external" href="./SP/sinusoidal_player.html" target="_blank">Sinusoidal Player</a></p>
      <a class="reference external image-reference" href="./SP/sinusoidal_player.html" target="_blank">
          <img alt="Sinusoidal Player"
          src="./GIFs/sinusoidalplayer_demo.gif" target="_blank"  style="width: 300px;"/></a>
      Sinusoidal wave with sounds
      </div>
    </div>
  </div>
  </td>
  <td style="vertical-align:top;">
  <!-- <hr> -->
  <br>
  <!-- <br> -->
  This widget is designed to understand the frequency of signal (specifically for audio). Although, the 'term' frequency is intitutive, and it is very easy to understand, how how frequency sounds differently than low frequency, however, the manifestation of frequency and it's sound is not that intitutive. For example, high frequency signal sounds like something at high level is constant, where is it is so high fluctuation, that we perceive it as if it is continuese. 

  The hope is, that this widget, let's learners to understand, how high frequency is created and perceived.
  </td>
  </tr>
  </table>
</div>

<!-- Hypothesis -->
<div style="width:90%; border:1px solid black;border-radius:20px 0 0 20px;margin:20px 0 20px 0;">
  <table>
  <tr>
  <td>
  <div class="column-box" style="width: 300px; margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Hypothesis Testing</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
        <div class="card-body">
          <p><strong>Statistics:</strong> <a class="reference external" href="./Stats/hypothesis" target="_blank">For Hypothesis Testing and T-test</a></p>
          <a class="reference external image-reference" href="./Stats/hypothesis" target="_blank">
          <img alt="sampling" src="./GIFs/stats_sampling_demo.gif" target="_blank" style="width: 300px;"/></a>
      </div>
    </div>
  </div>
  </td>
  <td style="vertical-align:top;">
  <!-- <hr> -->
  <br>
  <!-- <br> -->
  In Statistics, Hypothesis testing is one of the tool used to decide if a claim has any scientific merits. 
  The widget help is desgined from 'Sampling' widgted by adding addtional features to understands following concepts:
    <ul >
    <li>• <b>Meaning of p-value</b>: By sampling multiple time for 2 groups and testing, it can be seen, than even with fixed prior of distributation, sometimes, p-value suggestes to falsely reject/accept null hypothesis.</li>
    <li>• <b>Effect of sample size</b>:  By adjusting two groups close enough, it can be shown, if we have large sample size,t-test can detect the small difference. This is bases of <b>computation of Power and minimum required sample size</b></li>
    <li>• Effect/meaning of alpha (cut-off): By changing 0.01, 0.05, 0.001</li>
    </ul>
  </td>
  </tr>
  </table>
</div>

</div>


<!-- Nueral Network -->
<div style="width:90%; border:1px solid black;border-radius:20px 0 0 20px;margin:20px 0 20px 0;">
  <table>
  <tr>
  <td>
  <div class="column-box" style="width: 300px; margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Neural Networks</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
        <div class="card-body">
          <p><strong>Neural Network:</strong> <a class="reference external" href="../mldl101/cover.gif" target="_blank">For Deeplearning</a></p>
          <a class="reference external image-reference" href="../mldl101/cover.gif" target="_blank">
          <img alt="sampling" src="../mldl101/cover.gif" target="_blank" style="width: 300px;"/></a>
      </div>
    </div>
  </div>
  </td>
  <td style="vertical-align:top;">
  <!-- <hr> -->
  <br>
  <!-- <br> -->
  In Deeplerning, often a question comes up, how many layers should I have, and/or how many nodes/neurons I have have in my artchitecture. The answer rely on the complexity of the problem and available data.
  This widget is desgined understand, how adding a layer of neuron increase the complexity of the decision boundary.
   In given GIF, you could identify 
    <ul >
    <li>• the cases, where layers are adding the complexity of of boundary that is required. requored complexity.</li>
    <li>• the cases, where some on nodes/neurons are learning same things -  reducndancy of nodes.</li>
   </ul>
    
<!--     <ul >
    <li>• <b>Meaning of p-value</b>: By sampling multiple time for 2 groups and testing, it can be seen, than even with fixed prior of distributation, sometimes, p-value suggestes to falsely reject/accept null hypothesis.</li>
    <li>• <b>Effect of sample size</b>:  By adjusting two groups close enough, it can be shown, if we have large sample size,t-test can detect the small difference. This is bases of <b>computation of Power and minimum required sample size</b></li>
    <li>• Effect/meaning of alpha (cut-off): By changing 0.01, 0.05, 0.001</li>
    </ul> -->
  </td>
  </tr>
  </table>
</div>



<div class="narrow-show">

<div style="width:90%">
  <div class="column-box" style="width: 300px; margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Sampling</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
        <div class="card-body">
          <p><strong>Statistics:</strong> <a class="reference external" href="./Stats/sampling" target="_blank">For Sampling/Inferencing</a></p>
          <a class="reference external image-reference" href="./Stats/sampling" target="_blank">
          <img alt="sampling" src="./GIFs/stats_sampling_demo.gif" target="_blank" style="width: 300px;"/></a>
      </div>
    </div>
  </div>
  <div class="column-box" style="width: 300px;margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>ROC: Receiver Operating Characteristics</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
      <div class="card-body">
      <p><strong>Machine Learning:</strong> <a class="reference external" href="./ML/roc_v3.html" target="_blank">For Understanding ROC</a></p>
      <a class="reference external image-reference" href="./ML/roc_v3.html" target="_blank">
          <img alt="ml_roc_demo"
          src="./GIFs/ml_roc_demo.gif" target="_blank"  style="width: 300px;"/></a>
      </div>
    </div>
  </div>
  <div class="column-box" style="width: 300px;margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Sinusoidal Player</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
      <div class="card-body">
      <p><strong>Singal Processing:</strong> <a class="reference external" href="./SP/sinusoidal_player.html" target="_blank">Sinusoidal Player</a></p>
      <a class="reference external image-reference" href="./SP/sinusoidal_player.html" target="_blank">
          <img alt="Sinusoidal Player"
          src="./GIFs/sinusoidalplayer_demo.gif" target="_blank"  style="width: 300px;"/></a>
      Sinusoidal wave with sounds
      </div>
    </div>
  </div>
  <div class="column-box" style="width: 300px; margin:10px;">
    <div class="card" style="height: 280px;padding-top:5px;">
    <center><b>Hypothesis Testing</b></center>
    <hr style="margin-top:5px;margin-bottom:0px;">
        <div class="card-body">
          <p><strong>Statistics:</strong> <a class="reference external" href="./Stats/hypothesis" target="_blank">For Hypothesis Testing and T-test</a></p>
          <a class="reference external image-reference" href="./Stats/hypothesis" target="_blank">
          <img alt="sampling" src="./GIFs/stats_sampling_demo.gif" target="_blank" style="width: 300px;"/></a>
      </div>
    </div>
  </div>
</div>

</div>

<br>
<br>
<br>

  <h2>List of demos</h2>
  <hr>
  <h3 id="about"><a href='./Stats/sampling' target="_blank">1. Statistics - Sampling and Inferencing.</a></h3>
  <h3 id="about"><a href='./ML/roc_v1.html' target="_blank">2. ROC for PML Course (V1).</a></h3>
  <h3 id="about"><a href='./ML/roc_v2.html' target="_blank">3. ROC for PML Course (V2).</a></h3>
  <h3 id="about"><a href='./ML/roc_v3.html' target="_blank">4. ROC for PML Course (V3).</a></h3><p> V3 includes more details and explanation of the widget</p>
  <h3 id="about"><a href='./SP/sinusoidal_player.html' target="_blank">5. Sinusoidal Player.</a></h3>
  <h3 id="about"><a href='./Stats/hypothesis' target="_blank">6. Hypothesis Testing (with T-test).</a></h3>
  <hr>






