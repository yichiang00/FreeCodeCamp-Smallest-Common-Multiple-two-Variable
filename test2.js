
function smallestCommons(arr) {
  arr=arr.sort(function(a,b){return a-b;});
  console.log(arr);
  var primeArr=generatePrime(arr[1]);
  var resultPower=[];
  var finalResult=[];
console.log(primeArr);
  for (var i = 0; i <=primeArr.length; i++)
  {
      for (var j = 0; j < arr[1]; j++) {
        if(Math.pow(primeArr[i], j)<=arr[1]&&Math.pow(primeArr[i],j+1)>=arr[1])
        {


          console.log(primeArr[i]+" "+j);
          resultPower.push(Math.pow(primeArr[i], j));
        }
      }
  }

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
