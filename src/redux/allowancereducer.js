function allowanceData(){
    const data = JSON.parse(localStorage.getItem('allowances'));
    if(data)
    return data
    else
    return null
}


const allowancePopup = (state = allowanceData(),action)=>{
    switch(action.type){
        case "ALLOWANCE_DATA" : return action.payload;
        default: return state;
    }
    
}
export default allowancePopup;