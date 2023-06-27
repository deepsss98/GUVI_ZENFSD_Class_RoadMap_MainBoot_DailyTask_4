        //Arrow Function
       //Print odd numbers in an array
       let arr_1=[1,24,45,68,75,99,101,100,204,401];
        let result_1=()=>{
            let res=[];
            for(i=0;i<arr_1.length;i++)
            {
                (arr_1[i]%2!==0)?res.push(arr_1[i]):"";
            }
            return res;
        }
        console.log("Original Array: "+ arr_1);
        console.log("Array of Odd Numbers: "+result_1(arr_1));

       //Convert all the strings to title caps in a string array

       let arr_2=["hello world","zen class","guvi geeks","road map","deepika"];
        let result_2=()=>{
            let res=[];
            for(y in arr_2)
            {
                arr_2[y]=arr_2[y].split(" ").map((element)=>(element[0].toUpperCase()+element.substr(1).toLowerCase()));
                res.push(arr_2[y].join(" "));
            }
            return res;
        }
        console.log("Original Array: "+ arr_2);
        console.log(result_2(arr_2));

       //Sum of all numbers in an array
        let arr_3=[1,2,-3,4,5,6,7,0,-1,5]
        let result_3=()=>{
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
        let result_4=()=>{
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

       let result_5=()=>{
       let res=[];
       arr_5.forEach(element => {
         element.toLowerCase()==element.toLowerCase().split("").reverse().join("")?res.push(element):""; 
         });
       return res;
        }
       console.log("Original Array: "+ arr_5);
       console.log("Array of Palindromes: "+result_5(arr_5));
 