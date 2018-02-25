function SmartCalculator(initialValue) {
 
return {  
	initialValue: initialValue,
	res: 0,
	lastPow: 0,
	lastDigit: initialValue,
	
  add: function(number) {
    // your implementation
	this.lastPow=0;  
	this.initialValue+='+'+number;
	this.res=eval(this.initialValue);
	this.lastDigit = number;
	return this;
  },
  
  subtract: function(number) {
	// your implementation
	this.lastPow=0;  
	this.initialValue+='-'+number;
	this.res=eval(this.initialValue);
	this.lastDigit = number;
	return this;
  },

  multiply: function(number) {
    // your implementation
	this.lastPow=0;  
	this.initialValue+='*'+number;
	this.res=eval(this.initialValue);
	this.lastDigit = number;
	return this;
  },

  devide: function(number) {
    // your implementation
	this.lastPow=0;  
	this.initialValue+='/'+number;
	this.res=eval(this.initialValue);
	this.lastDigit = number;
	return this;
  },

  pow: function(number) {
    // your implementation
	if (!this.lastPow) {
	var restxt = this.initialValue.toString();
	var lastid = restxt.lastIndexOf(this.lastDigit);
	this.initialValue=restxt.substring(0,lastid); 
	this.initialValue=this.initialValue + 'Math.pow(' + this.lastDigit + ',' + number + ')';
	this.lastDigit = number;
	this.lastPow++;
	this.res=this.initialValue;
	} else {
	var regex1 = /[,](\d+)[)+]$/;
	this.initialValue = this.initialValue.replace(regex1, ', Math.pow(' + this.lastDigit + ',' + number + '))');
	this.lastPow++;
	this.res=this.initialValue;
	}
	return this;
  },
  
  valueOf: function(){
        return Number(eval(this.res));
  },
  toString: this.valueOf
}


}

module.exports = SmartCalculator;
