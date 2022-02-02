import input from 'input';

async function main() {
    const drivingAge = 18
    const myAge = await input.text('What is your Age?');

    if (myAge >= drivingAge) {
        console.log('You can drive!')
    } else {
        console.log('Sorry Loser!')
    }
    
}

main()