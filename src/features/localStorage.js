// can't send data directly in array format so need to change into string 
export const setUser = (user)=>{
    localStorage.setItem('user', JSON.stringify(user));
}

// can't fetch data so need to convert into array from string
export const getUser = ()=>{
    const data = localStorage.getItem('user');
    return data === null? []: JSON.parse(data);
}