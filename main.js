import input from 'input';

async function main() {
    const drivingAge = 18
    const myAge = await input.text('What is your Age?');
    const n = (drivingAge - myAge);

    if (myAge > drivingAge) {
        const hasLicense = await input.confirm('Do you have your license?')
        if (myAge < drivingAge || !hasLicense) {
            console.log(`Wait ${ n } years!`)
        } if (myAge >= drivingAge && !hasLicense) {
            console.log('Sorry Loser!')   
        } if (myAge >= drivingAge && hasLicense) {
            console.log('You can drive!')
        }
    }   
}   

main()