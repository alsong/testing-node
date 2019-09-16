const UserService = require('../user_service');
const sinon = require('sinon');

describe('UserService test', () => {
    it('has a module', () => {
        expect(UserService).toBeDefined();
    })

    describe("listUser test", () => {
        it("Lists Users", () =>{
            const MockModel = {
                find: sinon.spy()
            }

            const userService = UserService(MockModel);
            userService.listUsers();
            const expected = true;
            const actual = MockModel.find.calledOnce;
            expect(actual).toEqual(expected);
        })
    })

  
})