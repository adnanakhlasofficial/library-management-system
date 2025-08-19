export default function generateISBN(): string {
  // First 3 digits are the EAN prefix for books (978 or 979)
  const prefix = Math.random() < 0.8 ? "978" : "979";

  // Registration group: pick a common one (0 or 1 = English language)
  const group = String(Math.floor(Math.random() * 2));

  // Generate the next 9 random digits
  const body = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");

  // Compute check digit using ISBN-13 checksum rule
  const digits = (prefix + group + body).split("").map(Number);
  const sum = digits.reduce((acc, d, i) => acc + d * (i % 2 === 0 ? 1 : 3), 0);
  const checkDigit = (10 - (sum % 10)) % 10;

  return prefix + group + body + checkDigit;
}
