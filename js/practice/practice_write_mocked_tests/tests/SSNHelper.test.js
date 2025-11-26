import { SSNHelper } from '../src/correct/SSNHelper'; 



describe('SSNHelper Tests', () => {
    

    test('isCorrectLength Should Return True For 11 Characters', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectLength('930101-1234')).toBe(true)
    })

    test('isCorrectLength Should Return False for 10 Characters', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectLength('930101-123')).toBe(false)
    })

    test('isCorrectLength Should Return False For 12 Characters', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectLength('930101-12345')).toBe(false)
    })

    test('isCorrectFormat Should Return True For 11 Characters In Correct Format', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectFormat('930101-1234')).toBe(true)
    })

    test('isCorrectFormat Should Return False For 11 Characters Without -', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectFormat('93010111234')).toBe(false)
    })

        test('isCorrectFormat Should Return False For 11 Characters With A Letter', () => {
        const SSN = new SSNHelper()

        expect(SSN.isCorrectFormat('X3010111234')).toBe(false)
    })

});