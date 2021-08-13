const array = ['Olho', 'Faca', 'Dado', 'Zebra', 'Wellington'];

//Cria uma cópia do array
function copiarArray(array, arrayAuxiliar) {
    for (let i = 0; i < array.length; i++) {
        arrayAuxiliar.push(array[i]);
    }

    return arrayAuxiliar;
} 

function ordenar(array, option) {
    let arrayAuxiliar = [];
    switch (option) {
        case 'c':
            let menor;

            copiarArray(array, arrayAuxiliar);

            //Verificando qual é o menor e removendo ele da lista
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < arrayAuxiliar.length; j++) {
                    if (j == 0) {
                        menor = arrayAuxiliar[j];
                    }
                    if (arrayAuxiliar[j] < menor) {
                        menor = arrayAuxiliar[j];
                    }
                    if (j == arrayAuxiliar.length - 1) {
                        array[i] = menor;
                        arrayAuxiliar.splice(arrayAuxiliar.indexOf(menor), 1);
                    }
                }
            }
            return array;

        case 'd':
            let maior;

            copiarArray(array, arrayAuxiliar);
            //Verificando qual é o maior e removendo ele da lista
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < arrayAuxiliar.length; j++) {
                    if (j == 0) {
                        maior = arrayAuxiliar[j];
                    }
                    if (arrayAuxiliar[j] > maior) {
                        maior = arrayAuxiliar[j];
                    }
                    if (j == arrayAuxiliar.length - 1) {
                        array[i] = maior;
                        arrayAuxiliar.splice(arrayAuxiliar.indexOf(maior), 1);
                    }
                }
            }
            return array;
    }
}

console.log(ordenar(array, 'c'));
console.log(ordenar(array, 'd'));
