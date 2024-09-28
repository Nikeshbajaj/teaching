var maximJs;

var maxiSynth = function() {
var that = this;
this.frequency = 0;
this.dcoOut=0;
this.dcfOut=0;
this.dco = new maximJs.maxiOsc();
this.lfo = new maximJs.maxiOsc();
this.dcf = new maximJs.maxiFilter();
this.adsr = new maximJs.maxiEnv();
this.adsr.setAttack(1);
this.adsr.setDecay(1);
this.adsr.setSustain(1);
this.adsr.setRelease(150);
this.lfoFrequency = 1;
this.lfoPitchMod = 0;
this.lfoFilterMod = 0;
this.lfoAmpMod = 0;
this.adsrAmpMod = 1;
this.adsrPitchMod = 0;
this.adsrFilterMod = 0;
//woah filter is exploderising
this.cutoff = 9350;
this.Q = 1;
this.gain = 1;
this.noise=false;
this.sine=false;
this.saw=false;
};

maxiSynth.prototype.play = function() {


var envOut = this.adsr.adsr(1,this.adsr.trigger);
var lfoOut = this.lfo.sinebuf(this.lfoFrequency);

    
if (this.cutoff>9000) {
    this.cutoff=9000;
}

if (this.cutoff<40) {
    this.cutoff=40;
}


if (this.noise) {
    

this.dcoOut=this.dco.noise()*(envOut*this.adsrAmpMod*(lfoOut*this.lfoAmpMod));    
    
this.dcfOut=this.dcf.lores(this.dcoOut,this.cutoff+(envOut*this.adsrFilterMod)+(lfoOut*this.lfoFilterMod),this.Q)*this.gain;  
}

if (this.sine) {

this.dcoOut=this.dco.sinebuf(this.frequency+(this.adsrPitchMod*envOut))*(envOut*this.adsrAmpMod+(lfoOut*this.lfoAmpMod));    
    
this.dcfOut=this.dcf.lores(this.dcoOut,this.cutoff+(envOut*this.adsrFilterMod)+(lfoOut*this.lfoFilterMod),this.Q)*this.gain; 

}

if (this.saw) {

this.dcoOut=this.dco.sawn(this.frequency+(this.adsrPitchMod*envOut))*(envOut*this.adsrAmpMod+(lfoOut*this.lfoAmpMod));    
    
this.dcfOut=this.dcf.lores(this.dcoOut,this.cutoff+(envOut*this.adsrFilterMod)+(lfoOut*this.lfoFilterMod),this.Q)*this.gain; 

}


//One you lock the target
//Two you bait the line
//Three you slowly spread the net
//And four you cath the NaN

if (isNaN(this.dcfOut)) {
    
    return 0;
    
} else {

    return this.dcfOut;
    
}
    
    
};
