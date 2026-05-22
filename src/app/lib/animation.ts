export function fadeUpClass(
  isVisible: boolean,
  delay = "",
  distance = "translate-y-8",
): string {
  return `
    transition-all duration-700 ease-out
    ${delay}
    ${isVisible ? "translate-y-0 opacity-100" : `opacity-0 ${distance}`}
  `;
}
