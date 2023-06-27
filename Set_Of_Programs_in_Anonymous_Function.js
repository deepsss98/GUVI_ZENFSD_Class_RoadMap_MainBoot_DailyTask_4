       //Anonymous function
       //Print odd numbers in an array
       let arr_1=[1,24,45,68,75,99,101,100,204,401];
        let result_1=function(){
            let res=[];
            for(i=0;i<arr_1.length;i++)
            {
                (arr_1[i]%2!==0)?res.push(arr_1[i]):"";
            }
            return res;
        }
        console.log("Original Array: "+ arr_1);
        console.log("Printed Odd Numbers from Original Array: "+result_1(arr_1));

       //Convert all the strings to title caps in a string array

       let arr_2=["hello world","zen class","guvi geeks","road map","deepika"];
        let result_2=function(){
            let res=[];
            for(y in arr_2)
            {
                arr_2[y]=arr_2[y].split(" ").map((element)=>(element[0].toUpperCase()+element.substr(1).toLowerCase()));
                res.push(arr_2[y].join(" "));
            }
            return res;
        }
        console.log("Original String Array: "+ arr_2);
        console.log("Converted all the strings to title caps in a string array: "+result_2(arr_2));

       //Sum of all numbers in an array
        let arr_3=[1,2,-3,4,5,6,7,0,-1,5]
        let result_3=function(){
            let res=0;
            for(z of arr_3)
            {
                res+=z;
            }
            return res;
        }
        console.log("Original Array: "+ arr_3);
        console.log("Sum of all numbers in array: "+result_3(arr_3));

       //Return all the prime numbers in an array
       let arr_4=[-2,-14,0,1,2,3,4,9,12,24,11,17,19,147];
        let result_4=function(){
            let res=[];
         arr_4.forEach(element => {
            let flag=false;
            if(element<0 || element==0 || element==1)
        {
          flag=true;
        }
        else
        {
            for(i=element-1;i>=2;i--)
            {
              if(element%i==0)
              {
                flag=true;
                break;
              }  
            }
        }
        flag==false? res.push(element):"";
         });  
         return res; 
        }
        console.log("Original Array: "+ arr_4);
        console.log("Array of Prime Numbers: "+result_4(arr_4));
        
       //Return all the palindromes in an array
       let arr_5=["Madam","Deepika","Welcome","Refer","Civic","Hello","level","racecar"]

       let result_5=function(){
       let res=[];
       arr_5.forEach(element => {
         element.toLowerCase()==element.toLowerCase().split("").reverse().join("")?res.push(element):""; 
         });
       return res;
        }
       console.log("Original Array: "+ arr_5);
       console.log("Array of Palindromes: "+result_5(arr_5));

       //Return median of two sorted arrays of the same size.

       let arr_6=[1,12,15,26,38];
       let arr_7=[2,13,17,30,45];
       let result_6=function(){
        let res=arr_6.concat(arr_7).sort(function(a,b){
        return a-b;
       });
        let final=(res[(res.length/2)-1]+res[(res.length/2)])/2;
        return final;  
        }
        console.log("Array 1: "+ arr_6);
        console.log("Array 2: "+ arr_7);
        console.log("Median of two sorted arrays of the same size: "+result_6(arr_6,arr_7));

        //Remove duplicates from an array

        let arr_8=[1,0,1,0,2,34,45,54,34,2,-1,4,-1,1,34];

        let result_7=function(){
           for(i=0;i<arr_8.length;i++)
           {
            for(j=i+1;j<arr_8.length;j++)
            {
                if(arr_8[i]==arr_8[j])
                {
                     arr_8[j]="";
                }
            }
           }
           let res=arr_8.filter((element)=>element!=="");
           return res;
        }
        console.log("Original Array: "+ arr_8);
        console.log("Removed duplicates from original array: "+result_7(arr_8));

        //Rotate an array by k times
         
       let arr_9=[1,2,3,4,5],k=3;
        let result_8=function(){
            let len=arr_9.length;
            for(i=0;i<k;i++)
            {
                arr_9=arr_9.slice(len-1).concat(arr_9.slice(0,len-1));
            }    
            return arr_9;
        }
        console.log("Original Array: "+ arr_9);
        console.log("Rotating an array by k times where k is 3: " +result_8(arr_9,k));         


 