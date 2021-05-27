class LabError extends Error {
    constructor(message) {
        super(message);
        this.name = "LabError";
    }
}

window.TrackJS && TrackJS.install({ 
    token: "49093eaae19c4880bde0b89df60d03de"
    // for more configuration options, see https://docs.trackjs.com
});

let calculateBtn = document.getElementById('calculate')
let errorBtns = document.getElementById('error-btns');
let buttons = document.getElementById('error-btns')
let logDemo = document.getElementById('log-demo')
let errorDemo = document.getElementById('error-demo')
let dir = document.getElementById('dir')
let dirxml = document.getElementById('dirxml')
let groupStart = document.getElementById('group-start')
let groupEnd = document.getElementById('group-end')
let table = document.getElementById('table')
let startTimer = document.getElementById('start-timer')
let endTimer = document.getElementById('end-timer')
let trace = document.getElementById('trace')
let globalErr = document.getElementById('global-err')


calculateBtn.addEventListener('click', () => {
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    //console.log(`${firstNum}`);
    if(firstNum == '' || secondNum == ''){
        throw new LabError('check your input to calculator')
    }
    try{
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }catch(err){
        console.error('error occured in calculator');
    }
    
    
  });

errorDemo.addEventListener('click', () => {
    console.error('An error is occurring')
})

logDemo.addEventListener('click', () =>{
    console.log('This is a demo for console.log')
})

dir.addEventListener('click', () => {
    console.dir(errorBtns);
})

dirxml.addEventListener('click', () => {
    console.dirxml(document);
})

groupStart.addEventListener('click', () => {
    let label = 'Demo label starts here'
    console.group(label);
    console.info('1');
    console.info('2');
    console.info('3');
    console.info('4');
})

groupEnd.addEventListener('click', () => {
    let label = 'Demo label ends here'
    console.groupEnd(label)
})

table.addEventListener('click', () => {
    console.table([
        {
          type: 'Task',
          content: 'Finish Lab9',
        },
        {
          type: 'Event',
          content: "Noah's birthday",
          date: '05/26'
        },
        {
          type: 'Note',
          content: 'Get milk',
        }
      ]);
})

startTimer.addEventListener('click', () => {
    console.log('timer started...')
    console.time();
})

endTimer.addEventListener('click', () => {
    console.timeEnd();
})

trace.addEventListener('click', () => {
    const first = () => { 
        console.log('first function called')
        console.log('calling second function')
        second();
    };
    const second = () => { 
        console.log('second function called')
        console.log('calling third function')
        third(); 
    };
    const third = () => { console.trace(); };
    first();
})

globalErr.addEventListener('click', () => {
    throw new LabError('custom error thrown');
    
})

window.addEventListener('error', () => {
    console.log('an error has occured somewhere')
})

// try {  
//     //there is a type in the element's ID
//     let mistake = document.getElementById('errors-demo')
//     mistake.addEventListener('click', () => {
//         console.log('this will not get logged')
//     })
//     alert('End of try (never reached)');
//   } catch (err) {
//     console.error(err);
// }

