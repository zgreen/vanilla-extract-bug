This is a reproduction of https://github.com/vanilla-extract-css/vanilla-extract/issues/654.

STR:

1. `npm i`
2. `npm run dev`
3. Observe that the global styles are not applied, and note this error in console: `Warning: Prop `className` did not match. Server: "Home_margin_0_auto__nl8u7q0" Client: "Home__nl8u7q1 Home_margin_0_auto__nl8u7q0"`.
4. Edit the `Home.css.ts` file (it doesn't matter what you change, it just needs to be edited and saved). See that the styles are applied.
