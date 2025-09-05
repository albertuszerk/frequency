/** Tailwind build for X-Frequency
 * Purges classes from .htm/.html/.js and keeps arbitrary values via safelist.
 */
module.exports = {
  content: [
    "./**/*.htm",
    "./**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    // Keep arbitrary size/color utilities that the JIT would generate at runtime
    { pattern: /^(min-w|max-w|w|h)-\[[^\]]+\]$/ },
    { pattern: /^(text|bg|shadow|drop-shadow|ring|outline)-\[[^\]]+\]$/ },
    // Common state/variant combos
    { pattern: /^(bg|text|ring)-(blue|red|green|yellow|gray|slate|emerald|violet)-(50|100|200|300|400|500|600|700|800|900)$/,
      variants: ["hover","focus","active","sm","md","lg"] }
  ]
};
