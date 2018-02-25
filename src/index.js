class SmartCalculator {

  constructor(initialValue) {
    // your implementation
	this.initialValue = initialValue;
	this.res=0;
  }
  add(number) {
    // your implementation
	this.initialValue+='+'+number;
	this.res=eval(this.initialValue);
 // console.log(this.initialValue);
 // console.log(this);
  //console.log('res: ' + res);
return this;
  }
  
  subtract(number) {
    // your implementation
	this.initialValue+='-'+number;
	this.res=eval(this.initialValue);
	return this;
  }

  multiply(number) {
    // your implementation
	this.initialValue+='*'+number;
	this.res=eval(this.initialValue);
	return this;
  }

  devide(number) {
    // your implementation
	
	this.initialValue+='\/'+number;
	this.res=eval(this.initialValue);
	return this;
  }

  pow(number) {
    // your implementation
	//console.log(this.initialValue);
	this.res=eval(this.initialValue);

	this.initialValue='Math.pow('+this.res+','+number+')';
		//console.log(this.initialValue);

	this.res=eval(this.initialValue);
	return this;
  }
  
  ans() {
  return this.res;
}
}


module.exports = SmartCalculator;
