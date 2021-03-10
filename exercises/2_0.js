// String & string literals
const name = 'Marco David';
const lastName = "Martinez Reyes";
const phrase = "Hola buenos \"dias\" \n a todos";//Hola buenos "dias" a todos
const fullName = name + lastName;//concatenate 2 vars of type string
const newPhrase = `Hola buenos dias ${name} ${lastName}
como estas?`;




// if  else if else switch
function main(age, sexo){
    if(age < 6){ // se es menor a 6 años
        return 'Es un bebe';
    }
    else if(age == 15 && sexo == 'F'){// si no es menor a 6 y se es menor a 18 años
        return 'quinceañera';
    }
    else if(age < 18){// si no es menor a 6 y se es menor a 18 años
        return 'Es un niño';
    }
    else{// Todo lo demas
        return 'Es un adulto';
    }
}


function main2(sexo){
    switch(sexo){
        case 'F':
            return 'Eres una niña'
            break;
        case 'M':
            return 'Eres un niñ0'
            break;
        default:
            return 'No eres binario';
    }
}

console.log(main2(''));

//1 - Execise will using persons object
//Hola señor Marco David Martinez Reyes
// Como esta usted?



const persons = [
    {
        name: 'Marco David',
        lastName: 'Martinez Reyes',
        sex: 'M'
    },
    {
        name: 'Liliana Ines',
        lastName: 'Salazar Benavides',
        sex: 'F'
    },
]

/**
 * Returns string
 *
 * @param {object} person The person to evaluate
 * @return {string} welcome phrase
 */