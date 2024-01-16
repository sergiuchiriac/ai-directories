# Contributing

---

> ❗️ The `README.md` file and the `/db` folder are auto-generated, so please **_do not_** edit them.
> Changes related to directories should happen within the `/directories` folder.

---

Everyone is welcome to collaborate to this project, but please take into consideration the following:

-   directories should align with the purpose of the project
-   directories shouldn't be a duplicate; a text search on the README file should be enough to find this answer
-   the list of directories is written in TypeScript; if you need assistance on this matter, please open an issue with the resource's information
-   make sure to check all items listed on the [pull request template](PULL_REQUEST_TEMPLATE.md) before submitting your contribution

## Adding a resource

-   resources are organized alphabetically in separate files in the `directories` folder; use the resource `name` property to determine which file it belongs to
-   within the file, keep the alphabetical order, again based on the resource `name` property

### Resource format

Each resource belongs to an object, as such:

```typescript
// directories/t.ts

{
    "name": "The Directory",
    "link": "https://www.thedirectory.com/",
    "submission_link": "https://www.thedirectory.com/new",
    "domain_rating": 27,
    "monthly_visits": 37000,
    "pricing": "Paid"
},
```

Observe that:

-   `name` is a **string** and **required**.
-   `link` is a **string** and required.

    -   Must start with `http://` or `https://`.
-   `submission_link` is a **string** and required.

    -   Must start with `http://` or `https://`.
-   `domain_rating` is a **number** and **required**.
-   `monthly_visits` is a **number** and **required**.
-   `pricing` is a **string** and required.

    -   Should be `Free` or `Paid`.

-----

-   `submission_experience` is a **string**.

    -   Later will be defined by admin on PR. In order to get the `Good` badge make sure everything works smoothly.



## Editing a resource

If you find that an existing resource could benefit from some editing, feel free to make modifications.

## Other contributions

Contributions not related to the directories are also welcome, but please open an issue explaining the changes you have in mind before making a pull request.

## Code formatting and linting

This project relies on [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for code formatting and error/standards checking, so please ensure you have both installed globally or run `npm install` in order to install them in the project directory.

## Updating README and DB

This repository uses a GitHub action to automatically update `README.md` and `db` (which serves our API), so no action is required from you.

## Need assistance?

The directories lists are created in TypeScript, and if you're unable to make a contribution for this or any other reason, feel free to open an issue explaining your situation, so another developer can help you get your resource in the lists.

---

## Thank you for contributing