import { jest } from '@jest/globals'
// import { SwedishSocialSecurityNumber } from '../src/correct/SwedishSocialSecurityNumber'
import { SwedishSocialSecurityNumber } from '../src/bugs/BuggySwedishSocialSecurityNumberNoLenCheck'



//NOTE THESE TESTS SHOULD NOT BE DEPENDENT ON SSNHelper BUT USE MOCKING
describe('SwedishSocialSecurityNumber Tests', () => {
    //put constants here to increase readability

    test('constructor Should Throw Exception For Incorrect Length', () => {
        const mockHelper = {
            isNotCorrectLength: jest.fn().mockReturnValue(true),
            isCorrectFormat: jest.fn().mockReturnValue(true),
            isValidMonth: jest.fn().mockReturnValue(true),
            isValidDay: jest.fn().mockReturnValue(true),
            luhnisCorrect: jest.fn().mockReturnValue(true)
        }

        expect(() => {
            new SwedishSocialSecurityNumber('123', mockHelper)
        }).toThrow('To short, must be 11 characters')
    })

});