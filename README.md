<p align="center">
  <a href="https://www.npmjs.com/package/simpleaura.css"><img align="center" src="https://img.shields.io/npm/v/simpleaura.css.svg" alt="NPM page"></a>
  <a href="https://github.com/cedriking/simpleaura.css/blob/main/code_of_conduct.md"><img align="center" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg" alt="Contributor Covenant">
  <a href="https://github.com/cedriking/simpleaura.css/blob/main/LICENSE.md"><img align="center" src="https://img.shields.io/github/license/cedriking/simpleaura.css.svg" alt="MIT license"></a>
</p>

<br>

<h1 align="center">SimpleAura.css</h1>
<p align="center">📜 A drop-in collection of CSS styles to make simple websites look nicer.</p>

[![SimpleAura.css](docs/logo.png)](https://simpleaura.cedrik.dev/)

<br>

## Goals

- Responsive
- Themeable
- Good browser support
- Tiny size
- Beautiful
- No classes

## Why?

I commonly make quick demo pages or websites with simple content. For these, I don't want to spend time styling them but don't like the ugliness of the default styles.

simpleaura.css is a CSS framework that doesn't require any classes. You just include it in your `<head>` and forget about it, while it silently makes everything nicer.

## Who?

You might want to use simpleaura.css if you're making a simple static page or demo website that you don't want to spend time styling.

Although it originally wasn't built for more complex websites, many developers have used simpleaura.css as a base stylesheet and creatively applied custom styles to build out an entire app. Nothing is stopping you from doing the same!

## How?

Just stick this in your `<head>`:

### 🌙/☀ Automatic Theme:

`<link rel="stylesheet" href="https://unpkg.com/simpleaura.css@1/dist/simpleaura.min.css">`

### 🌙 Dark Theme:

`<link rel="stylesheet" href="https://unpkg.com/simpleaura.css@1/dist/dark.min.css">`

### ☀ Light Theme:

`<link rel="stylesheet" href="https://unpkg.com/simpleaura.css@1/dist/light.min.css">`

<br>

A **preview** of the different themes is available [on the **demo page**](https://watercss.cedrik.dev/#installation)! ⚡

#### How the "Automatic Theme" works

The main `simpleaura.css` file automatically switches between light and dark mode depending on the system preferences of a user's device. This detection is made possible through a CSS media query called [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). In browsers where the preference can't be detected, `simpleaura.css` will stick to the light theme.

If you want to avoid this behavior, use either `dark.css` or `light.css`.

#### Unminified builds

All versions are also available as unminified stylesheets, which can be handy during development.  
Simply remove the `.min` from the file name.

## Theming

Do you want to make some adjustments or build your own theme completely different from the official dark or light themes? Since simpleaura.css is built with CSS variables this is super easy to do! Here's a list list of all the variables you can change to your liking:

- `--background-body`
- `--background`
- `--background-alt`
- `--selection`
- `--text-main`
- `--text-bright`
- `--text-muted`
- `--links`
- `--focus`
- `--border`
- `--code`
- `--animation-duration`
- `--button-hover`
- `--scrollbar-thumb`
- `--scrollbar-thumb-hover`
- `--form-placeholder`
- `--form-text`
- `--variable`
- `--highlight`
- `--select-arrow`

### Runtime theming

simpleaura.css uses Custom Properties (_"CSS variables"_) to define its base styles such as colors. These can be changed and overwritten right in the browser.

Because of this, you can simply add your own stylesheet to the page and set your own CSS variables there. As long as your stylesheet comes after simpleaura.css in the HTML, your values will override the default ones and your theme is applied!

This short example will use simpleaura.css, but color all links red:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/simpleaura.css@1/dist/simpleaura.min.css"
/>
<style>
  :root {
    --links: red;
  }
</style>
```

If you want to change a value for dark or light mode only, use a media query like this:

```html
<style>
  :root {
    --links: blue; /* Always applied */
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --links: yellow; /* Only applied in dark mode (overrides blue) */
    }
  }
</style>
```

### Compiling your own theme

If you are targeting browsers without support for CSS Custom Properties such as Internet Explorer, runtime theming is not an option. To apply your own theming, you'll need to make your changes in the source files themselves, then re-compile the CSS files. This works like the following:

- Clone the repository to your machine
- Run `yarn` to install dependencies
- Make the theming changes you want in `src/*.css`
- Run `yarn build` to compile the CSS files
- Use the compiled files in the `dist/` directory on your site
