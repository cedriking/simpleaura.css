const fs = require("fs")
const version = require("./package.json").version

;(async () => {
  const files = fs.readdirSync("./dist")
  await Promise.all(
    files.map(async (file) => {
      if (file.endsWith(".css")) {
        const content = fs.readFileSync(`./dist/${file}`, "utf-8")

        // check if there's a comment at the top of the file
        let newContent = content
        if (!content.startsWith("/*")) {
          newContent = `/* SimpleAura.css v${version} - https://github.com/cedriking/simpleaura.css */\n${content}`
        } else {
          newContent = content.replace(
            /\*\//,
            `* @version ${version}\n * https://github.com/cedriking/simpleaura.css\n */`,
          )
        }

        fs.writeFileSync(`./dist/${file}`, newContent)
      }
    }),
  )
})()
