
const soletrar = ( string: string ): string => {
    return string.split( '' ).join( '-' )
}

console.log( soletrar( 'programador' ) )