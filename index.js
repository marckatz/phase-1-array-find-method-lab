function isAWin(bowl, index, array){
    return bowl.result === "W";
}

function superbowlWin(record){
    const y =  record.find(isAWin);
    return y ? y.year : y;
}