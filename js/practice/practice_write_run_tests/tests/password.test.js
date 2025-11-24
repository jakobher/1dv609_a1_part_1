
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'

describe('Password class, test suite', () => {
    //put constants here to increase readability
        const validPassword = 'Password12345'
        const passwordWithSpaces = ' Password12345 '
        const differentPassword = 'Password23456'
        const noNumberPassword = 'PasswordWithoutNumber'

    //Add your tests here
    test('simpleHash should return a number', () => {
        const pw = new Password(validPassword)

        expect(typeof pw.getPasswordHash()).toBe('number')
    })

    test('constructor should trim whitespace', () => {
        const pw1 = new Password(validPassword)
        const pw2 = new Password(passwordWithSpaces)

        expect(pw1.getPasswordHash()).toBe(pw2.getPasswordHash())
    })

    test('isPasswordSame should return false for different passwords', () => {
        const pw3 = new Password(validPassword)
        const pw4 = new Password(differentPassword)
        
        expect(pw3.isPasswordSame(pw4)).toBe(false)
    })

    test('constructor should check if password contains a number', () => {

        expect(() => new Password(noNumberPassword)).toThrow('No number found')
    })

});