/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  let strength;
  let checked = 0;

  if (password.length >= 8) checked++;
  if (Array.from(password).map(e => e.charCodeAt()).map(e => e >= 65 && e <= 90).includes(true)) checked++;
  if (Array.from(password).map(e => e.charCodeAt()).map(e => e >= 97 && e <= 122).includes(true)) checked++;
  if (Array.from(password).map(e => e.charCodeAt()).map(e => e >= 48 && e <= 57).includes(true)) checked++;
  if (password.match(/[^a-zA-Z0-9\s]/)?.[0]) checked++;

  if (password.trim().length <= 0 || typeof password !== 'string' || checked <= 1) {
    strength = 'weak';
  } else if (checked <= 3) {
    strength = 'medium';
  } else if (checked === 4) {
    strength = 'strong';
  } else {
    strength = 'very strong';
  }
  return strength;
}