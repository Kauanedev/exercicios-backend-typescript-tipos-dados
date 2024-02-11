
const tabuada = ( array: number[] ): string => {
    let resultado: string = ''

    array.map( ( num ) => {
        let n = num
        for ( let i = 0; i < 11; i++ ) {
            resultado += `${n} x ${i} = ${n * i}\n`
            if ( i === 10 ) {
                resultado += '------------\n'
            }
        }
    } )

    return resultado
}

console.log( tabuada( [ 1, 5 ] ) )