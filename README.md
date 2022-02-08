# H2D2-Shopicons

Essential E-Commerce icon pack for free. Designed by H2D2.
Thanks for downloading!

<p align="center">
  <img width="80%" src="https://www.h2d2.de/wp-content/uploads/2020/11/shopicons-github-grafik.svg">
</p>

## SVG & PNG files

All icons can be downloaded as [SVG](https://github.com/H2D2-Design/h2d2-shopicons/tree/master/SVG) and [PNG](https://github.com/H2D2-Design/h2d2-shopicons/tree/master/PNG). Each icon is available in **Light**, **Regular**, **Bold** and **Filled** style.

## Web Components

We also publish our icons as web components for easy-use in your web project. Simply place this markup at the position in your HTML where the icon should appear.

```html
<!-- naming format -->
<shopicon-[STYLE]-[NAME]></shopicon-[STYLE]-[NAME]>
```

Replace `[NAME]` with the your desired icon name. You find a [list of all icons here](https://www.h2d2.de/en/downloads/the-essential-ecommerce-iconset/). Note that special characters or whitespaces must be removed. Icon `Center-Justified` e.g. becomes `centerjustified`.

Replace `[STYLE]` with your icon style of choice. Possible values are `light`, `regular`, `bold`, `filled`.

```html
<!-- examples -->
<shopicon-light-bed></shopicon-light-bed>
<shopicon-bold-stars></shopicon-bold-stars>
```

_Caution: Web Components always need a separate closing-tag as seen above. Writing them self-closing (like this `<shopicon-light-bed />`) will cause issues. Don't do that._

**Sizes**

The icons come in four sizes which can be controlled via the `size` attribute on the web component.

```html
<!-- small (24px) DEFAULT -->
<shopicon-regular-search size="s"></shopicon-regular-search>
<!-- medium (32px) -->
<shopicon-regular-search size="m"></shopicon-regular-search>
<!-- large (48px) -->
<shopicon-regular-search size="l"></shopicon-regular-search>
<!-- extra large  (64px) -->
<shopicon-regular-search size="xl"></shopicon-regular-search>
```

**Colors**

Icons adopt the font color of the surrounding HTML. This way it's easy to fit the icons into your web page design and you can change the icon color via CSS.

```html
<a href="#">
  <shopicon-regular-search></shopicon-regular-search>
  SEARCH
</a>
<style>
  a {
    color: darkblue;
  }
  a:hover {
    color: hotpink;
  }
</style>
```

In the example above the text and the icon will be shown darkblue. Hovering the link will change both to hotpink.

### Include JavaScript via CDN bundles

For the web componets to work you need to include the associated JavaScript in your page. We've created four bundle files that you can directly reference from the jsdeliver CDN. Each bundle file includes all icons for a specific icon style. The bundles are optimized and have a file size of 30-40kb (gzip) each.

In practice we assume you would only use one (or two) icon styles at once, but its technically possible to use all styles in one page.

```
https://cdn.jsdelivr.net/npm/@h2d2/shopicons@1.2.0/umd/light.js
https://cdn.jsdelivr.net/npm/@h2d2/shopicons@1.2.0/umd/regular.js
https://cdn.jsdelivr.net/npm/@h2d2/shopicons@1.2.0/umd/bold.js
https://cdn.jsdelivr.net/npm/@h2d2/shopicons@1.2.0/umd/filled.js
```

Here an example for using the star icon in bold.

```html
<script src="https://cdn.jsdelivr.net/npm/@h2d2/shopicons@1.2.0/umd/bold.js"></script>

<shopicon-bold-stars></shopicon-bold-stars>
```

### Include individual icons via NPM

If you need more control and only want to include the icons into your software that you really use we offer a NPM package.

```
npm install @h2d2/shopicons
```

Install the package and import the icons that you want to use in your JavaScript.

```javascript
import "@h2d2/shopicons/es/bold/star";
import "@h2d2/shopicons/es/bold/heart";
import "@h2d2/shopicons/es/filled/heart";

const html = `
  ...
  <shopicon-bold-stars size="large"></shopicon-bold-stars>
`;
```

This way only the icons you specify will end up in your final JavaScript bundle.

## License

Our icons are free for everyone to use.
Please don’t try to sell them.
Available under [Apache license version 2.0](http://www.apache.org/licenses/LICENSE-2.0.html).

## Feedback & sharing

• If you have questions about this icon set, please sent us an email to: hallo@h2d2.de

• Share your work with this icon set and tag us on instagram [@h2d2_design](https://www.instagram.com/h2d2design/) #h2d2_design

• More infos about this icon set: https://www.h2d2.de/en/downloads/the-essential-ecommerce-iconset/

## Contribution & development

### Development

The web components are derived at build time from the icons in the SVG folder. Adding, removing or altering a SVG icon will automatically propagate to the web components. This is done on every push to GitHub via Actions. You can also test the generation locally.

Installing build environment

```
npm install
```

_Note: You should have node v16 installed._

Generating Web Components (`/dist`) and optimized bundles (`/umd`, `/es`)

```
npm run build
```

There is demo page which loads all individual icons and automatically shows them in different variations (styles, colors, sizes) in your browser.

```
npm start
```

### Publishing

Publishing is also done by the GitHub Actions pipeline in this repository. Therefore you must increment the package version and push the changes.

The below code would increment the last digit of the version string (`1.0.2` > `1.0.3`) and push to GitHub. This triggers the creation of a new NPM package an also makes the new release available via the jsdelivr CDN.

```
npm version patch
git push
```
## Shopicons on Figma

Download Shopicons as a [Figma library](https://www.figma.com/community/file/1066366818982322609) for easy re-use.

## Thanks 💚

H2D2
Your UX and UI
Agency in
Berlin
[www.h2d2.de](https://www.h2d2.de)

<p align="center">
  <img width="15%" src="https://www.h2d2.de/wp-content/themes/h2d2/media/icons/h2d2-logo-2020-mark.svg">
</p>
