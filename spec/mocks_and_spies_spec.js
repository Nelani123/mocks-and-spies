describe('Should toString() test', function() {

    it('call the function getNumber()', function() {
        var user = new SendMessage( '0681203162', 'changed');

        spyOn(user, "getNumber");

        user.toString();

        expect(user.getNumber).toHaveBeenCalled();
    })

    it('call the function getMessage() with a variable', function() {
        var user = new SendMessage( '0681203162', 'changed');

        spyOn(user, "getMessage");

        user.toString();

        expect(user.getMessage).toHaveBeenCalledWith();
        
    })
})

