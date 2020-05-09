// console.log(eval(1+2+3+4));
// console.log(eval(a+b));
            function insert(num){
                // Runs when user click "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, _, *, /"
                document.getElementById('textView').value += num;
                console.log(document.getElementById('textView').value);
            }
            //  insert(999);
            function clean(){
                // Runs when user click "clear input box"
                // Use Validation and show message when input box is empty
                document.getElementById('textView').value ='';
            }
            function back(){
                // console.log("got to");
                // Runs when user click "backspace"
                // Use Validation and show message when input box is empty
                var exp=document.getElementById('textView').value;
                var exp=exp.substring(0,exp.length-1);
                document.getElementById('textView').value=exp;
                console.log(document.getElementById('textView').value);
               
            }
            function equal(){
                // Runs when user cick "="
                var exp=document.getElementById('textView').value;
			
                if(exp){
                    // Runs when there is some value in input box and you click "="
                    // Use error handling try-catch block to log errors in log file.
                    // Use validation and show Proper message in case of errors.
                    document.getElementById('textView').value=eval(exp);
                    console.log(eval(exp));
                }
                else{
                    //Runs when there is no value in input box and you click "="
                   console.log("Error");
                }
				
            }
			
			
			/* 
							try{
                if(exp){
                    // Runs when there is some value in input box and you click "="
                    // Use error handling try-catch block to log errors in log file.
                    // Use validation and show Proper message in case of errors.
                    document.getElementById('textView').value=eval(exp);
                    console.log(eval(exp));
                }
                else{
                    //Runs when there is no value in input box and you click "="
                   console.log("Error");
                }
				}
				catch(err){
					txt="There was an error on this page.\n\n";
					  txt+="Error description: " + err.message + "\n\n" ;
					  txt+="Click OK to continue.\n\n";
					  alert(txt);
				}
			*/