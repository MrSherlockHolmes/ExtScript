//Thanks kvackkvack! :P
(function(ext) {
    var promptAnswer = "";
    ext._shutdown = function() {
    };
   
    ext._getStatus = function() {
        return {status: 2, msg: 'Thanks for installing!'};
    };
   
    var descriptor = {
        blocks: [
            ['b', '%s contains %s?', 'contains', 'hello world', 'hello'],
        ['r', 'letters %n to %n of %s', 'xToZ', 1, 5, 'hello world'],
            ['b', 'case sensitive %s = %s?', 'caseSense', 'A', 'a'],
            //['c', 'code section | %s', 'codeSection', 'code'], (C-blocks dont work right now :/)
   	    [' ', 'prompt %s with default value %s', 'prompt', "What's your name?"],
            ['r', 'prompt answer', 'promptAnswerBlock'],
            ['r', '%s in %m.lowerUpperCase', 'lowerUpperCase', 'scratch cat', 'all uppercase'],
            ['r', '%n / %n of %n', 'mathThing', 1, 2, 10],
            ['r', '%n % of %n', 'mathThing2', 50, 10],
            ['r', '%n ^ %n', 'mathThing3', "", ""],
            [' ', 'run javascript %s', 'runJS'],
            ['r', 'if %b then %n else %n', 'ifThenElse', '', '10', '5'],
            ['b', 'kvaxtension installed?', 'installed'],
            ['b', '%n %m.moreLessEqual %n', 'moreLessEquaal', '', '≥', ''],
            [' ', 'pop-up %s', 'alert', 'hello world!'],
            ['r', 'radius of circle where %m.calculateRadius is %n', 'calculateRadius', 'area', '20'],
	    ['r', '%m.calculateRadius of circle where radius is %n', 'calculateX', 'area', '2.523'],
            ['r', 'color %c', 'color', 0],
            ['r', 'R: %n G: %n B: %n', 'rgb', 255, 255],
            
        ],
        menus: {
        	lowerUpperCase: ['all uppercase', 'all lowercase'],
                moreLessEqual: ['≤', '≥'],
                calculateRadius: ['radius', 'diameter', 'circumference', 'area'], 
        },
    };
    ext.contains = function(string1,string2) {
        return(string1.indexOf(string2) > -1);
    };
    ext.xToZ = function(start,end,string) {
        return(string.substring(start-1,end));
    };
    //ext.codeSection = function() {}
    ext.prompt = function(string, defaultValue) {
	promptAnswer = prompt(string,defaultValue);
    };
    ext.promptAnswerBlock = function() {
	return(promptAnswer);
    };
    ext.lowerUpperCase = function(string, lowerUpper) {
    	if(lowerUpper == "all uppercase") {
        	return(string.toUpperCase());
        } else {
        	return(string.toLowerCase());
        }
    };
    ext.mathThing = function(n1, n2, n3) {
    	return(n3/n2*n1);
    };
    ext.mathThing2 = function(n1,n2) {
    	return(n2/100*n1);
    };
    ext.mathThing3 = function(n1,n2) {
    	return(Math.pow(n1,n2));
    };
    ext.runJS = function(javascript) {
    	eval(javascript);
    };
    ext.ifThenElse = function(boolean,True,False) {
   	if(boolean) {
     		return(True);
        } else {
     		return(False);
 	}
    };
    ext.installed = function() {
    	return(true);
    };
    ext.moreLessEquaal = function(number1, dropdown, number2) {
    	if(dropdown == '≥') {
     		return(number1>=number2);
        } else {
       		return(number1<=number2);
        }
    };
    ext.alert = function(string) {
    	alert(string);
    };
    ext.calculateRadius = function(menu2, menu2n) {
        	if(menu2 == 'radius') {
    			return(menu2n);
    		} else if(menu2=='diameter') {
    			return(menu2n/2);
                } else if(menu2=='circumference') {
              		return(menu2n/(2*Math.PI));
                } else {
			return(Math.sqrt(menu2n/Math.PI));
                }
    };
    ext.calculateX = function(menu,menun) {
    	if(menu == 'radius') {
    		return(menun);
        } else if(menu == 'diameter') {
  		return(menun*2);
        } else if(menu == 'circumference') {
       		return(Math.PI*(menun*2));
        } else {
      		return(Math.PI*Math.pow(menun,2));
        }
    };
    ext.caseSense = function(s1, s2) {
    	return(s1 === s2);
    };
    ext.rgb = function(r,g,b) {
    	if(r<=255 && g<=255 && b<=255) {
        	return(65536*Math.round(r) + 256*Math.round(g) + Math.round(b));
        }
    };
    ext.color = function(color) {
    	return(color);
    }
    ScratchExtensions.register("Kvaxtension", descriptor, ext);
})({});
