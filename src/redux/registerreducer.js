function Data(){
    const data = JSON.parse(localStorage.getItem('register'));
    if(data)
    return data
    else
    return null
}


const registerData = (state = Data(),action)=>{
    switch(action.type){
        case "REGISTER_DATA" : return action.payload;
        default: return state;
    }
    
}
export default registerData;