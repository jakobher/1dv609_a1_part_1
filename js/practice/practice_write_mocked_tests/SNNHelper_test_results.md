| Version | Correct | AllowDayUpTo30 | AllowMonth0 | IncorrectFormat | MessyLuhn | WrongLength |
| --- | --- | --- | --- | --- | --- | --- |
| isCorrectLength false 12       | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ |
| isCorrectFormat false no dash  | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| isCorrectFormat false letter   | ✅ | ✅ | ✅ | ❌ | ✅ | ✅ |
| isValidMonth false 00          | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ |
| isValidMonth false 13          | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| isValidDay true 31             | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ |
| luhnisCorrect true valid       | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| Coverage | 100% | 100% | 100% | 100% | 100% | 100% |