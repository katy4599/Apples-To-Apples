import input from 'input';

async function main() {
    const drivingAge = 18
    const myAge = await input.text('What is your Age?');
    const n = (drivingAge - myAge);

    while (myAge > drivingAge) {
        const hasLicense = await input.confirm('Do you have your license?')
        
        if (myAge >= drivingAge && !hasLicense) {
            console.log('Go get your license!')   
        } else if (myAge >= drivingAge && hasLicense) {
            console.log('You can drive!')
        } else {
        console.log(`Wait ${ n } years!`)
        }
    }
}   

main()