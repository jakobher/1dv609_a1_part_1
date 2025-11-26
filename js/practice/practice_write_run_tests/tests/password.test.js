
// Select one of the Password versions to test

// import { Password } from '../src/BugDoesNotHash'
// import { Password } from '../src/BugDoesNotTrim'
// import { Password } from '../src/BugisPasswordAlwaysSame'
// import { Password } from '../src/BugMissingNumberCheck'
// import { Password } from '../src/BugMissingPasswordCheck'
// import { Password } from '../src/BugNeverContainsNumbers'
// import { Password } from '../src/BugToShortPassword'
// import { Password } from '../src/BugVeryShort'
// import { Password } from '../src/BugWrongHashingAlgorithm'
// import { Password } from '../src/BugWrongMessage'
// import { Password } from '../src/Correct'
import { Password } from '../src/BugMyCustomBug'

describe('Password class, test suite', () => {
        const validPassword = 'Password12345'
        const passwordWithSpaces = ' Password12345 '
        const differentPassword = 'Password23456'
        const noNumberPassword = 'PasswordWithoutNumber'
        const shortPasswordWithNumber = 'Pass1'
        const tooShortPassword = 'Password123'

    test('simpleHash Should Return Number For Valid Password', () => {
        const pw = new Password(validPassword)

        expect(typeof pw.getPasswordHash()).toBe('number')
    })

    test('constructor Should Trim Whitespace For Password With Spaces', () => {
        const pw1 = new Password(validPassword)
        const pw2 = new Password(passwordWithSpaces)

        expect(pw1.getPasswordHash()).toBe(pw2.getPasswordHash())
    })

    test('isPasswordSame Should Return False For Different Passwords', () => {
        const pw3 = new Password(validPassword)
        const pw4 = new Password(differentPassword)
        
        expect(pw3.isPasswordSame(pw4)).toBe(false)
    })

    test('constructor Should Throw Error For Password That Does Not Contain A Number', () => {

        expect(() => new Password(noNumberPassword)).toThrow('No number found')
    })

    test('constructor Should Throw Error For Too Short Password', () => {

        expect(() => new Password(shortPasswordWithNumber)).toThrow('Too short password')
    })

    test('constructor Should Accept Valid Password With Numbers And Sufficient Length', () => {

        expect(() => new Password(validPassword)).not.toThrow()
    })

    // Catches both BugToShortPassword and BugVeryShort
    test('constructor Should Throw Error For Password With 11 Characters', () => {

        expect(() => new Password(tooShortPassword)).toThrow('Too short password')
    })

    test('getPasswordHash Should Return Correct Hash Value For Valid Password', () => {
        const pw5 = new Password(validPassword)

        // Expected hash for 'Password12345'
        expect(pw5.getPasswordHash()).toBe(236497871505720570000)
    })

    // BugWrongMessage is covered already 


});