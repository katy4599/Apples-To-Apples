import input from 'input';

async function main() {
    const drivingAge = 18
    let toContinue = true;
    
    while (toContinue) {
        const myAge = await input.text('What is your Age?');

            if (myAge >= drivingAge) {
            const hasLicense = await input.confirm('Do you have your license?')
            
                if (!hasLicense) {
                    console.log('Go get your license!')   
                } else {
                    console.log('You can drive!')
                } 
            } else  {
                const n = (drivingAge - myAge);
                console.log(`Wait ${ n } years!`)
            } 
        
        let toContinue = await input.confirm('Do you want to continue?');
    
            if (toContinue == false) {
              break;
            }
    }
}   

main()