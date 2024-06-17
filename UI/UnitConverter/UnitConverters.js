//inch to mm [done] // mm to inch [done] 
//inch to sut [not required] // sut to inch [not required] 
//mm to sut [done] // sut to mm [done]

const fractions = ["0","1/16","1/8","3/16","1/4","5/16","3/8","7/16","1/8","9/16","5/8","11/16","3/4","13/16","7/8","15/16"]


function MMtoInchandSut (mm) {
    let Pri = parseInt(mm/25.4)
    let SecIndex = (mm%25.4)/1.5875
    
    return [Pri,parseInt(SecIndex)]
}

function InchandSuttoMM ([pri,SecIndex]){
    const split = fractions[SecIndex].split('/')
   
    return 25.4*(pri + parseFloat(split[0])/parseFloat(split[1]))
}


export {MMtoInchandSut , InchandSuttoMM}




