const firstRepeatedChar=require('./mercado');

test('firstRepeatedChar', () => {
    const cadena = 'ndfdfddfg';
    expect(firstRepeatedChar(cadena)).toBe('d');
});

test('firstRepeatedChar', () => {
    const cadena = '7Eih4KAwQynz5Q555oPj';
    expect(firstRepeatedChar(cadena)).toBe('Q');
});
test('firstRepeatedChar', () => {
    const cadena = 'rXiImvibjbC7nwBsFkoJ';
    expect(firstRepeatedChar(cadena)).toBe('i');
});
test('firstRepeatedChar', () => {
    const cadena = 'ZzvjEiQviJCBPsgpKPFc';
    expect(firstRepeatedChar(cadena)).toBe('v');
});


test('firstRepeatedChar', () => {
    const cadena = 'hhoshdof';
    expect(firstRepeatedChar(cadena)).toBe('h');
});

test('firstRepeatedChar', () => {
    const cadena = 'asdpoi';
    expect(firstRepeatedChar(cadena)).toBe(false);
});
test('firstRepeatedChar', () => {
    const cadena = 'sZNxWRLqAi8yLlisL37a';
    expect(firstRepeatedChar(cadena)).toBe('L');
});
test('firstRepeatedChar', () => {
    const cadena = '';
    expect(firstRepeatedChar(cadena)).toBe(false);
});

test('firstRepeatedChar', () => {
    const cadena = '1230971';
    expect(firstRepeatedChar(cadena)).toBe('1');
});