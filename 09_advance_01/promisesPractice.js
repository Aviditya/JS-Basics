console.log('---Promises---')

const promiseFour=new Promise(function(res,rej){
    setTimeout(() => {
        let error = false;
        if(!error){
            res({username:'admin',password:'pass@123'})
        } else {
            rej('Error - user not found!')
        }
    }, 1000);
});

console.log('Consuming the promise...');

    promiseFour.then((user)=>{console.log(user.username)})
    .catch((error)=>console.log(error))
    .finally(()=>console.log('Promise completed!'));

console.log('Using async await');

async function fetchData() {
    // promise
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 4000);
  });
    
  let result = await promise; // Wait until the promise resolves
    console.log('Before result');
  console.log(result); // Outputs: "done!"
    console.log('After result');
};

fetchData();

(async ()=>{
    let ipromise=new Promise((res)=>{
        setTimeout(()=>res("Done IIFE!"),1000)
    });
    let result= await ipromise;
    console.log(result);
})();
// fetchData();