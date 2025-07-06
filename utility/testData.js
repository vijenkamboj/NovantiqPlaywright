module.exports = {
  valid: { username: 'student', password: 'Password123' },
  invalid: {
    wrongUser: { username: 'invalidUser', password: 'Password123' },
    wrongPass: { username: 'student', password: 'wrongPass' },
    blankBoth: { username: '', password: '' },
    blankUser: { username: '', password: 'Password123' },
    blankPass: { username: 'student', password: '' }
  },
};