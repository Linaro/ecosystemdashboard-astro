# Linaro Arm Ecosystem Dashboard Astro Site

This is the git repository for the [https://ecosystemlandscape.linaro.org](https://ecosystemdashboard.linaro.org/) static Astro website.

Hosted in this repo are the markdown content files associated with the website. Feel free to [submit a PR](https://github.com/Linaro/ecosystemlandscape-astro/pulls) / [Issue](https://github.com/Linaro/ecosystemlandscape-astro/issues/new) if there is anything you would like to change.

---

## Rules to add a new project to the top level

The project can be added to the top level if it can fit the one of the following conditions:

1. The project officially released Arm supported releases.

2. The project itself does not release Arm supported releases(some project only release source code), but they officially claimed that they can run on.

3. The project neither released Arm supported releases, nor officially claimed to have Arm support, but some of the mainstream OS distribution provided packages(CentOS, Ubuntu, openEuler, etc), we can probably also provide the information, because those OS distributions can provide support for the software.

## Pull Requests

When a Pull Request is created, GitHub Actions are used to automatically build a test version of the proposed modified site and then check that any links in the pages are valid.

If there are any questions or problems with the GitHub Actions, please contact [Linaro IT Services](https://servicedesk.linaro.org/servicedesk/customer/portal/3/create/50).

## Project Details Structure

Directory "src/content/projects/" contains all the sub-page info using yaml, so please refer to existing files to filling in the content.

| Field                            | Details                                                                                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| category\*                       | Filling the category filed, e.g. "storage", "database", "big data"                                                      |
| project - type\*                 | Coding language of the project                                                                                          |
| project - logo\*                 | Better to find the png logo without any background. Store it at public/assets/projectLogos/                             |
| project - overview\*             | Project introduction                                                                                                    |
| support_release\*                | All support arm64 release                                                                                               |
| user_stories(if have) - optional | The user stories, please check with user before public the cases. Reference to [Hadoop User story][1]                   |
| work_items                       | Patch, PR, Jira Items which is related to this project support and status on Arm64, the status can be DONE, TODO or WIP |
| Events - optional                | All the presentations, talks, demo which is related to this project support and status on Arm64                         |

\* required field

\*\* offer a “not available” option so we can flag it.

[1]: https://github.com/Linaro/ecosystemlandscape/blob/main/_posts/2021-08-31-ApacheHadoop.md?plain=1#L32

## Dependencies

The website is developed with the following tools:

- [Astro](https://astro.build/) - UI meta-framework used to develop and build the website.
- [Tailwind](https://tailwindcss.com/) - css framework used to do the majority of the styling.
- [Solid.js](https://www.solidjs.com/) - client-side UI framework used for highly interactive elements.
- [Pagefind](https://pagefind.app/) - fully static search library used to create search indexes from built website files.

## Project Structure

The high-level folder structure of the project is as follows:

```text

├── src/

│   └── components/

│   └── content/

│   └── layouts/

│   └── lib/

│   └── pages/

│   └── styles/


```

**_components_** contains `.astro` and `.tsx` (for solid.js) UI component files that are reused throughout the website to build pages.

**_content_** contains `.md`, `yaml` and other text files that provide the content of the website. [Go to content section](#content).

**_layouts_** contains reusable [Astro layout files](https://docs.astro.build/en/basics/layouts/) that describe the overall layout of a page, including html headers, scripts etc.

**_lib_** contains `.ts` typescript files with helper functions that are used throughout the website for formatting, fetching images etc.

**_pages_** contains [Astro page files](https://docs.astro.build/en/basics/astro-pages/) that describe the individual pages within the website. This folder uses file based routing to determine urls in the built site.

**_styles_** contains css files. Due to the use tailwind, there is only one global css file to extend tailwind where necessary (alongside the [tailwind configuration file](https://tailwindcss.com/docs/configuration)). Further stylesheets might be added where necessary if required for specific dependencies.

## Content

The content of the website is located in the `src/content` folder of the repo, spread across various folders, referred to as "collections". See [Astro content collections](https://docs.astro.build/en/guides/content-collections/) for more info.

```text


├── content/

│   └── authors/

│   └── blogs/

│   └── data/

│   └── events/

│   └── news/

│   └── pages/

│   └── rows/

│   └── sections/

│   └── tags/

```

### Pages

Pages can be edited via the relevant `.md` files in the `src/content/pages` folder. The `slug` property of the frontmatter determines the resulting url of the page.

New layouts can be built by adding rows and sections to the `flow` property of a page's frontmatter. This property defines a series of row components that contain section components to build the page. The `row` property of `flow` and the `component` property of a `sections` item must both reference a filename (without extension) within the `row` and `section` collections respectively.

```yaml
- flow:
    - row: container_row
      sections:
        - component: cards
```

`container_row` here references `src/content/rows/container_row.md` and `cards` references `src/content/sections/cards.md`

If a new row or section component is required, please contact [it-support@linaro.org](mailto:it-support@linaro.org).

**Developer note:** Pages are built from the pages collection by the `src/pages/[...slug].astro` file.

### Local Development

Running the site locally will require `Node.js` (>=18) and the `yarn` package manager.

First, install dependencies with `yarn install`.

The following commands can then be used to build and run the site locally.

| Command        | Description                                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn build`   | Builds the site in the `dist` folder of the root directory.                                                                                                                             |
| `yarn start`   | Runs the site in a development server, with hot module replacement to reflect updates to the code as soon as they are saved.                                                            |
| `yarn preview` | Runs the most recent build files in a development server. Unlike `yarn dev` this won't have live updates, but will be a closer representation of the site as it would be in deployment. |

## Questions?

If you have any questions about updating or building this website, please contact Linaro IT Support at [it-support@linaro.org](mailto:it-support@linaro.org).
