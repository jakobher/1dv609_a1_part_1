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

    test('isValidMonth Should Return True For 05 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidMonth('05')).toBe(true)
    })

    test('isValidMonth Should Return False For 00 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidMonth('00')).toBe(false)
    })

    test('isValidMonth Should Return False For 13 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidMonth('13')).toBe(false)
    })

    test('isValidDay Should Return True For 15 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidDay('15')).toBe(true)
    })

    test('isValidDay Should Return False For 32 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidDay('32')).toBe(false)
    })

     test('isValidDay Should Return False For 00 As Input', () => {
        const SSN = new SSNHelper()

        expect(SSN.isValidDay('00')).toBe(false)
    })

    test('luhnisCorrect Should Return True With Valid SSN', () => {
        const SSN = new SSNHelper()

        expect(SSN.luhnisCorrect('930101-1236')).toBe(true)
    })

    test('luhnisCorrect Should Return False With Non Valid SSN', () => {
        const SSN = new SSNHelper()

        expect(SSN.luhnisCorrect('930101-1234')).toBe(false)
    })
});