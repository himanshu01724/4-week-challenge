const arr = [100,23,96,5,89,1,-1,3]

const twoSum = (num,sum) =>{
    const res = []
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if (num[i]+num[j] == sum){
                res.push(num[i],num[j])
            }
            
        }
    }
    return res
    
}

const bubbleSort = (num) =>{
    let res = 0;
    for(let i=0;i<num.length;i++){
        for(let j=0;j<num.length-1;j++){
            if (num[j+1]<num[j]){
                res = num[j+1]
                num[j+1]=num[j]
                num[j]=res
            }
        }
    }
    return num;
}
const sorted = bubbleSort(arr);

const twoSumTwo = (num,inp) =>{
    //two pointer method or binary search algorithm
    l = 0;
    h = num.length-1;
    while(l<h){
        if (num[l]+num[h]===inp){
            return [num[l],num[h]]
        }
        else if(num[l]+num[h]>inp){
            h -=1;
        }
        else{
            l+=1;
        }
    }
}


const inp = [-1,0,1,2,-1,-4]

//3sum pending...