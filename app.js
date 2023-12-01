// assigning the date in endDate constant
const endDate = "06 December 2023 10:00 PM";

// HTML document se end-date ki id k andar End Date likhwa deni he.
document.getElementById('end-date').innerText = endDate;

// querySelectorAll get array of all input elements as array
const inputs = document.querySelectorAll("input");

// Short way to define method, arrow function
// const clock = () => {

// }

// Simple clock method definition
function clock() {

    // Javascript Date method returns date in Times Tamp
    const end = new Date(endDate);

    // Javascript Date method returns now date as times tamp complete time
    const now = new Date();

    const diff = ( end - now ) / 1000; // seconds => Convert miliseconds to seconds by dividing on 1000

    // If Now is greater than End
    if( diff < 0 )
    {

        // return null;
        return;

    }

    // Calculation of Days
    inputs[0].value = Math.floor(diff / ( 60 * 60 * 24 ));

    // Calculation of Hours
    inputs[1].value = Math.floor( ( diff / ( 60 * 60 )) % 24 );

    // Calculation of Minutes
    inputs[2].value = Math.floor( ( diff / ( 60 )) % 60 );

    // Calculation of Seconds
    inputs[3].value = Math.floor( diff % 60 );

    // console.log(Math.floor( ( diff % 60 )));

    // console.log(end);

    // console.log(now);

    // console.log(diff)

    // Convert into days

}

// Call Clock Method after every Second
setInterval(() => {

    clock()

}, 1000);