let data = [
    {
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'Single',
        city: 'Jakarta'
    }
]

let array = data.map(array1 => {return {...array1}})
array.find(array1 => array1.name === 'Tatas').status = 'Merried'
array.find(array1 => array1.name === 'Tatas').city = 'Jakarta'
array.find(array1 => array1.name === 'Pratama').company = 'Arkademy'
array.find(array1 => array1.name === 'Pratama').city = 'Jogja'

console.log(array)
