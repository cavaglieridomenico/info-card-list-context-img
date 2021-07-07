📢 Use this project, [contribute](https://github.com/vtex-apps/info-card-list-context) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# INFO CARD LIST

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

An extension to [List Context](https://github.com/vtex-apps/list-context) that enables users to create lists of info cards that can be editable via Site Editor

## Configuration 

- Add this app as a theme dependency in the `manifest.json` file

```json
"dependencies": {
    "vtex.info-card-list": "0.x"
}
```

- Declare the app's main block `list-context.info-card-list` in a given theme template or inside another block from the theme
```json
"list-context.info-card-list#demo": {
    "children": [
      "slider-layout#demo-infocards"
    ],
    "props": {
      "infoCards": [
        {
          {...props}
        },
        {
          {...props}
        }
      ]
    }
  },
```
- For this list to work, you must now declare the app who will consume the list context, for i.e `slider-layout`

```json
"slider-layout#demo-infocards": {
    "props": {
      "itemsPerPage": {
        "desktop": 1,
        "tablet": 1,
        "phone": 1
      },
      "infinite": true
    }
  },
```

### `list-context.info-card-list` props

| Prop name    | Type            | Description    | Default value     |
| ------------ | --------------- | -------------- | ---------- | 
| `infoCards`      | `array`       | Array of `objects` declaring info cards        | null        |


- `infoCards` array:

This array is composed of objects with the properties defined in [Info Card](https://github.com/vtex-apps/store-components/blob/master/docs/InfoCard.md)

## Customization

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
