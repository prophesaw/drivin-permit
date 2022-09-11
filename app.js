const form = document.forms['register'];
var error = document.getElementById('message');
const numValue = form.querySelector('#mobile-num').value;
const firstName = form.querySelector('#first-name').value;
const lastName = form.querySelector('#last-name').value;
const file = form.querySelector('#file').value;
var message =[];
var testArr = ['1','2','3','4','5','6','7','8','9','0'];
var state = form.querySelector('#state');
var zip = form.querySelector('#zip');
var local = form.querySelector('#local');
var resident = form.querySelector('#resident');
var originLga = form.querySelector('#origin-lga');

form.addEventListener('submit', function(e){
    e.preventDefault();

    var count = 0;

    if(numValue!=null && numValue.length ==11){
        if((numValue.charAt(0)=='0')&&(numValue.charAt(1)=='8'||numValue.charAt(1)=='9'||numValue.charAt(1)=='7')){
            if(numValue.charAt(2)=='1' || numValue.charAt(2)=='0'){
                for(var s of numValue){
                    for(i=0; i<testArr.length;i++){
                        if(s==testArr[i]){
                            count += 1;

                        }else{
                            message.push('number cannot contain alphabet or special characters');
                        }
                    }
                }
            }

        }else{
            message.push('Number format not valid');
        }

    }else{
        message.push('number not valid');
    }

    if(state==null||zip==null||local==null){
        if(resident==null||originLga==null){
            message.push('all field is required');
        }
    }
   

    if(firstName===null||lastName===null){
        message.push('Name Required');

    }

    if(file===null||file.indexOf('.')===-1){
        message.push('file cant be empty');
    }else{
        var pdf =file.slice(file.indefOf('.'));
        var pdfString = pdf.toLowerCase();
        if(pdfString!='pdf'){
            message.push('certificate should be pdf format');
        }else{

        }
    }

   
    if(message.length >0){
       
        error.innerText = message.join(', ');
    }
});








