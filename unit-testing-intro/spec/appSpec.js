// tworzymy pierwszy test

describe('DialCodeFinder', function(){
    it('should return 48 when Poland is given', function(){
        expect(findPrefixCode('Poland')).toEqual(48);
    });
});