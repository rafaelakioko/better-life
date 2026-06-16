import { tokens } from "./tokens"
import { tokenKeyToCssVar, sidebarKeyToCssVar } from "./utils"
import fs from "fs"
import path from "path"

const START = "/* DESIGN-TOKENS:START */"
const END = "/* DESIGN-TOKENS:END */"

function generateBlock(): string {
  const lines: string[] = [START, ":root {"]

  for (const [key, value] of Object.entries(tokens.colors)) {
    lines.push(`  ${tokenKeyToCssVar(key)}: ${value};`)
  }

  for (const [key, value] of Object.entries(tokens.sidebar)) {
    lines.push(`  ${sidebarKeyToCssVar(key)}: ${value};`)
  }

  for (const [key, value] of Object.entries(tokens.radius)) {
    lines.push(`  --radius-${key}: ${value};`)
  }

  lines.push("}", END)
  return lines.join("\n")
}

const cssPath = path.join(__dirname, "../src/app/globals.css")
const css = fs.readFileSync(cssPath, "utf-8")

const newBlock = generateBlock()
const isCheck = process.argv.includes("--check")

if (css.includes(START) && css.includes(END)) {
  const updated = css.replace(new RegExp(`${START}[\\s\\S]*?${END}`), newBlock)
  if (isCheck) {
    if (updated !== css) {
      console.error("❌ globals.css is out of sync. Run: npm run tokens")
      process.exit(1)
    }
    console.log("✅ globals.css is in sync with tokens.ts")
  } else {
    fs.writeFileSync(cssPath, updated)
    console.log("✅ globals.css updated from tokens.ts")
  }
} else {
  const updated = css + "\n" + newBlock + "\n"
  if (!isCheck) {
    fs.writeFileSync(cssPath, updated)
    console.log("✅ Design tokens injected into globals.css")
  }
}
