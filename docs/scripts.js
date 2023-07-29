const fileSizes = {
  dark: 3.5,
  light: 3.6,
  simpleaura: 3.7,
}

function changeTheme() {
  const theme = document.querySelector('input[name="theme"]:checked').value
  const stylesheet = document.getElementById("js-startup-stylesheet")
  stylesheet.href = `./css/${theme}.min.css`

  document.getElementById(
    "table-file-size",
  ).innerHTML = `${fileSizes[theme]} kb`
  document.getElementById("table-file-name").innerHTML = `${theme}.min.css`

  if (theme === "simpleaura") {
    document.getElementById(
      "table-theme",
    ).innerHTML = `Respects user-defined theme settings using <a style="--links: var(--code)" href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme" target="_blank" rel="noopener"><code>prefers-color-scheme</code></a>.<br>
    Light in browsers where the theme settings can't be detected.`
  } else {
    document.getElementById(
      "table-theme",
    ).innerHTML = `Theme is forced to ${theme}.`
  }

  // add attr hidden to all direct children of .link-snippet-container
  document.querySelectorAll(".link-snippet-container").forEach((container) => {
    container.querySelectorAll(":scope > *").forEach((child) => {
      child.setAttribute("hidden", "")
    })
  })

  // remove attr hidden to #link-snippet-[theme]
  document.getElementById(`link-snippet-${theme}`).removeAttribute("hidden")
  document.getElementById(`link-snippet-${theme}-min`).removeAttribute("hidden")
}

// on document ready
document.addEventListener("DOMContentLoaded", function () {
  // on change of the radio input, change the theme
  document.querySelectorAll('input[name="theme"]').forEach((input) => {
    input.addEventListener("change", changeTheme)
  })

  // on load, set the theme to auto
  changeTheme()

  document.getElementById("copy-button").addEventListener("click", () => {
    const copyButtonFeedback = document.getElementById("copy-button-feedback")

    const clipboard = navigator.clipboard || window.clipboard
    const theme = document.querySelector('input[name="theme"]:checked').value
    const snippetText = document.querySelector(
      `#link-snippet-${theme} code`,
    ).textContent

    clipboard
      .writeText(snippetText)
      .then(() => {
        copyButtonFeedback.textContent = "✔"
      })
      .catch(() => {
        copyButtonFeedback.textContent = "❌"
      })
      .finally(() =>
        setTimeout(() => {
          copyButtonFeedback.textContent = ""
        }, 1000),
      )
  })

  document.getElementById("copy-button-min").addEventListener("click", () => {
    const copyButtonFeedback = document.getElementById(
      "copy-button-feedback-min",
    )

    const clipboard = navigator.clipboard || window.clipboard
    const theme = document.querySelector('input[name="theme"]:checked').value
    const snippetText = document.querySelector(
      `#link-snippet-${theme}-min code`,
    ).textContent

    clipboard
      .writeText(snippetText)
      .then(() => {
        copyButtonFeedback.textContent = "✔"
      })
      .catch(() => {
        copyButtonFeedback.textContent = "❌"
      })
      .finally(() =>
        setTimeout(() => {
          copyButtonFeedback.textContent = ""
        }, 1000),
      )
  })

  document.getElementById("dialog-trigger").addEventListener("click", () => {
    document.getElementById("dialog-result").innerText = ""
    document.getElementById("dialog").showModal()
  })

  document.getElementById("dialog").addEventListener("close", (event) => {
    document.getElementById(
      "dialog-result",
    ).innerText = `Your answer: ${event.target.returnValue}`
  })
})
