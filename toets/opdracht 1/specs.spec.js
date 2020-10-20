describe('Testje 1', function() {
    it('should have the correct title', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Testje 2', function () {
    it('should test', function () {
        expect(unitTest.item).toBe('item');
    });

    it('should test', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});

describe('Testje 3', function () {
    it('should test', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});

describe('Testje 4', function () {
    it('should test', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});
