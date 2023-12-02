// https://www.sitepoint.com//delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function BubbleSortAsc() {
    let elementArray = document.querySelectorAll('#container .thing');

    // Loops until sorted
    for (let i1 = elementArray.length - 1; i1 > 0; i1--) {
        swapOccurred = false;

        // Loop to compare and swap elements
        for (let i2 = 0; i2 < elementArray.length - 1; i2++) {
            let e1 = elementArray[i2];
            let e2 = elementArray[i2 + 1];
            if (e2 == undefined) continue;

            // Switch 2 elements if greater
            if (parseInt(e1.innerHTML) > parseInt(e2.innerHTML)) {

                //console.log(e1.innerHTML + ' was > ' + e2.innerHTML);

                let placeHolder = e2.innerHTML;
                e2.innerHTML = e1.innerHTML;
                e1.innerHTML = placeHolder;

                swapOccurred = true;
            }
        }
        UpdateChart(Array.from(elementArray).map(e => parseInt(e.innerHTML)));
        await sleep(0.1);

        // No swaps mean everything sorted
        if (swapOccurred == false) {
            document.getElementById('container').style.background = 'blue';
            console.log('Finished')

            // Show modal with gif/emoji


            break;
        }
    }
}

async function BubbleSortDesc() {
    let elementArray = document.querySelectorAll('#container .thing');

    // Loops until sorted
    for (let i1 = elementArray.length - 1; i1 > 0; i1--) {
        swapOccurred = false;

        // Loop to compare and swap elements
        // From right to left
        for (let i2 = elementArray.length - 1; i2 > 0; i2--) {
            let e1 = elementArray[i2];
            let e2 = elementArray[i2 - 1];
            if (e2 == undefined) continue;

            // Switch 2 elements if lesser
            // Swapped operator
            if (parseInt(e1.innerHTML) > parseInt(e2.innerHTML)) {
                let placeHolder = e2.innerHTML;
                e2.innerHTML = e1.innerHTML;
                e1.innerHTML = placeHolder;

                swapOccurred = true;
            }
        }
        UpdateChart(Array.from(elementArray).map(e => parseInt(e.innerHTML)));
        await sleep(0.1);

        // No swaps mean everything sorted
        if (swapOccurred == false) {
            document.getElementById('container').style.background = 'blue';
            console.log('Finished')

            // Show modal with gif/emoji


            break;
        }
    }
}

// Create Div elements with random #s, add random # to container
function CreateThings(numberToCreate, maxNumberValue) {
    for (let i1 = 0; i1 < numberToCreate; i1++) {
        let randomNumber = Math.floor(Math.random() * maxNumberValue);
        let ourDiv = document.createElement('div');
        ourDiv.classList.add('thing')
        let ourTxt = document.createTextNode(randomNumber);
        ourDiv.appendChild(ourTxt);
        document.getElementById('container').appendChild(ourDiv);
    }
}

// Create initial 100
window.addEventListener('load', (event) => {
    console.clear()
    CreateThings(250, 100);
    CreateChart();
});
