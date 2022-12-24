/*
alert("Welcome!");

var x = 23;
let y = 23;
const z = 65; //cannot be changed late

'1' == 1 //true
'1' === 1 //false

console.log('1' == 1)
console.log('1' === 1)

if (x===y){
    console.log('Hello')
}
else{
    console.log('Bye')
}

const fruit = ['apple','banana','peach']
console.log(fruit.length)
console.log(fruit.toString())
console.log(fruit.pop())


for (let step = 0; step<5;step++){
    console.log(step);
}

function area1(width,length){
    return length*width
}

console.log(area1(5,6));*/

const form = document.querySelector('#contact-form')
console.log(form)

form.addEventListener("submit", 
    function submit(event){
        const name = event.target.name.value
        const email = event.target.email.value
        const message = event.target.message.value
        const rate = event.target.rate.value
        console.log(name,email,message,rate)

        const errorSpot = document.querySelector('#error')

        let messages = []

        if (name === "" || name === null){
            messages.push('Name is required!')
        }

        if (email.includes('@') === false || email.includes('.') === false){
            messages.push('Valid email is required!')
        }

        if (message === "" || message === null){
            messages.push('Message is required!')
        }

        if (rate === ""){
            messages.push('Rating required!')
        }

        if(messages.length > 0){
            event.preventDefault()
            errorSpot.style.display = 'inline'
            errorSpot.innerText = messages.join(',\n ')
        }
    }
)



