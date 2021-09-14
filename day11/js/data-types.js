
export const dataTypes = {
    primitive: {
        string: 'text / labels / names',
        number: 1.27,
        boolean: true,
    },
    compound: {
        array: [1, '', true, {}, []],
        object: {
            number: 1,
            string: 'i am a string',
            boolean: true,
            array: [],
            object: {},
        }
    }
}
export const moduleName = 'Data Types'