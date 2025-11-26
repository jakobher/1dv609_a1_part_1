// import { SSNHelper } from '../src/correct/SSNHelper' 
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowDayUpTo30'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth0'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperIncorrectFormat'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperMessyLuhn'
// import { SSNHelper } from '../src/bugs/BuggySSNHelperWrongLength'
import { SSNHelper } from '../src/bugs/BuggySSNHelperAllowMonth13'


describe('SSNHelper Tests', () => {

    test('isCorrectLength Should Return False For 12 Characters', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectLength('930101-12345')).toBe(false)
    })

    test('isCorrectFormat Should Return False For 11 Characters Without -', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectFormat('93010111234')).toBe(false)
    })

    test('isCorrectFormat Should Return False For 11 Characters With A Letter', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectFormat('X3010111234')).toBe(false)
    })

    test('isValidMonth Should Return False For 00 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidMonth('00')).toBe(false)
    })

    test('isValidMonth Should Return False For 13 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidMonth('13')).toBe(false)
    })

    test('isValidDay Should Return True For 31 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidDay('31')).toBe(true)
    })

    test('luhnisCorrect Should Return True With Valid SSN', () => {
        const SSN = new SSNHelper()

        expect(SSN.luhnisCorrect('930101-1236')).toBe(true)
    })
});