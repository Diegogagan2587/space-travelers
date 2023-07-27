test('placeholder test sum(1+,2) should return 3', ()=> {
    const sum = (a,b)=> {
        return a+b;
    }
    expect(sum(1,2)).toBe(3);
})