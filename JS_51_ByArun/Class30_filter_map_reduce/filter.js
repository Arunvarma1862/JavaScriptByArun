// Method-1


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )                      // not possible for each to return

// console.log(values);
 
const nums=[1,2,3,4,5,6];
// const num=nums.filter((value)=>{
//     return value%2==0
// })
// const num= nums.filter((value)=> value%2==0)
const num= nums.filter((value)=> (value%2==0))

console.log(num)


// Method -2

const arr=[];
const numy=[1,2,3,4,5,6,7,8,9];
const newNum=numy.forEach((value)=>{
    if(value%2==0){
        arr.push(value)
    }
})
console.log(arr)

// Method-3

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let  userBooks=books.filter((bk)=>{
    return   bk.publish> 1990 &&  bk.genre === "History"
  })

  userBooks= books.filter((value)=> value.publish>=2000);


  console.log(userBooks)