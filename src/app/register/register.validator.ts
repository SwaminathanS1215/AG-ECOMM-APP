export function checkPasswordValid(password: string) {
  const passwordRegex = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  if (passwordRegex.test(password)) {
    return true;
  }
  return false;
}

export function checkPasswordAndConfirmPasswordValid(
  password: string,
  confirmPassword: string
) {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}
