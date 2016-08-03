
function smallestCommons(arr) {
  arr=arr.sort(function(a,b){return a-b;});
  console.log(arr);
  var primeArr=generatePrime(arr[1]);
  var resultPower=[];
console.log(primeArr);
  for (var i = 0; i <=primeArr.length; i++)
  {
      for (var j = 0; j < arr[1]; j++) {
        var tempOne=Math.pow(primeArr[i], j);
        var tempTwo=Math.pow(primeArr[i],j+1);
        if(Math.pow(primeArr[i], j)<=arr[1]&&Math.pow(primeArr[i],j+1)>=arr[1])
        {
          var isMulity=false;
          for (var k = arr[0]; k <=arr[1]; k++) {
            if(k%tempOne==0)
            {
              console.log(Math.pow(primeArr[i], j));
              isMulity=true;
              resultPower.push(Math.pow(primeArr[i], j));
              break;
            }

          }

          if(isMulity==false)
          {
            var temp=0;
              var stop=false;
              for (var z = j-1; z >= 0; z--) {
                for (var g = arr[0]; g <arr[1]; g++) {
                  console.log("g is"+ g+"z index is"+z+"Prime is "+primeArr[i] +"Consier num"+Math.pow(primeArr[i], z));
                if(g%Math.pow(primeArr[i], z)===0)
                {
                  resultPower.push(Math.pow(primeArr[i], z));
                  stop=true;
                  break;
                }
              }
              if(stop)
              {
                break;
              }

            }

          }
              // resultPower.push(Math.pow(primeArr[i], j));

        }
      }

  }
  console.log(resultPower);
  return mulityAllitem(resultPower);
}

// smallestCommons([1,5]);
function mulityAllitem(arr)
{
  var result=1;
  arr.forEach(function(n){
    result*=n;
  });
  return result;
}

function generatePrime(num) {
  var myArr=[];
  for (var i = 2; i <=num; i++) {
    var isPrime=true;
    for (var j = 2; j <i; j++) {
      if (i%j===0) {
        isPrime=false;
        }
    }
    if(isPrime)
    {
      myArr.push(i);
    }
  }
  return myArr;
}
smallestCommons([23, 18]);//26 divided by each prime
