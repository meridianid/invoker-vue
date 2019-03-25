# vue-starter

This is a starter-kit for Vue.js projects

## Tokens

This starter-kit already loaded with invoker-base, invoker-layouts, and invoker-tokens so you jump right into it. We also provide it locally for better customization based on your project.

#### Easier way to import invoker-tokens to your `<style/>` tag

You can add this snippet to your global vs-code snippet so you can import the tokens faster. Just type `ima` and press `tab`.

```code-snippets
  "Simple vue local tokens import": {
    "prefix": "ima",
    "body": [
    "@import '@/assets/scss/invoker-tokens/index.scss';",
    "",
    ".root {",
      "\t${0:Write your component here}",
    "}"
    ],
    "description": "Simple vuejs local invoker-tokens"
  },
```

#### SCSS & CSS-modules

We use css-modules and SCSS as standard styling for our css files. We use module instead of the default scoped because the default scoped leaked the styles properties to their children element. And we don't want that.

---

## Pimitives

Here are some primitives components included in this starter kit. A more detailed documentation about this primitives is coming up soon.

1. Text `<ptext/>`
2. Field Input `<pinput/>`
3. Textarea `<parea/>`
4. Button `<pbutton />`
5. Dropdown `<pdropdown />`
6. Container `<pcontainer />`

## Packages

We already includes some useful packages such as `axios` and `vue-axios` in this starter-kit. Check the `package.json` for more.