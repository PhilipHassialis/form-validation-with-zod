# Purpose

The code in this mini project is a typical example of a react application that has a form with some validations.

The form control is performed through react-hook-form and the validations are performed using zod.

The custom components are used to demonstrate how one can use react-hook-form with custom components.

Some theming of the datepicker and the select components allows for a demonstration on how to incorporate these libraries with some custom themed components.

## Usage

`git clone` this repo

`npm install`

`npm run dev`

## Libraries used

- [react-hook-form](https://react-hook-form.com/) - form control
- [zod](https://zod.dev/) - validations
- [react-bootstrap](https://react-bootstrap.github.io/) - custom controls and components
- [react-select](https://react-select.com/) - drop down
- [react-datepicker](https://reactdatepicker.com/) - datepicker
- [use-swr](https://swr.vercel.app/) - custom granular fetcher with cache capabilities

## Notes

The project has some refactored controls to make the form more concise (see `components` directory) Additionally, the data are fetched through a custom hook in `hooks` directory while the schema is placed in the `schemas` directory. This approach should be considered a good practice in order to avoid code bload and allow for easier testing.
