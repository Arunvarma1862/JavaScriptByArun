sessionStorage.setItem('name',"helooo");

window.onstorage=(e)=>{
    alert("changed")
    console.log(e);  
}


// // Storing data in localStorage
// localStorage.setItem('user', 'John Doe');

// // Retrieving data from localStorage
// let user = localStorage.getItem('user');
// console.log(user); // Output: John Doe


// // Storing data in sessionStorage
// sessionStorage.setItem('token', 'abc123');

// // Retrieving data from sessionStorage
// let token = sessionStorage.getItem('token');
// console.log(token); // Output: abc123




// let userData = { name: 'Alice', age: 25 };

// // Storing a complex object in localStorage
// localStorage.setItem('userData', JSON.stringify(userData));

// // Retrieving and parsing the complex object from localStorage
// let storedData = JSON.parse(localStorage.getItem('userData'));
// console.log(storedData); 
// // Output: { name: 'Alice', age: 25 }