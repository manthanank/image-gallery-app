# Angular Image Gallery with Tailwind CSS and Unsplash API

This project is an image gallery built with Angular and styled with Tailwind CSS. It fetches images from the Unsplash API and allows users to filter images based on their orientation (horizontal or vertical).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetch images from the Unsplash API
- Display images in a responsive grid
- Filter images based on orientation (all, horizontal, vertical)
- Styled with Tailwind CSS

## Prerequisites

- Node.js (v12 or higher)
- Angular CLI (v11 or higher)
- Unsplash API Access Key

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/image-gallery.git
   cd image-gallery
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Tailwind CSS:**
   - Install Tailwind CSS and its peer dependencies:

     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```

   - Generate the Tailwind CSS configuration files:

     ```bash
     npx tailwindcss init
     ```

   - Configure Tailwind to remove unused styles in production by updating `tailwind.config.js`:

     ```javascript
     module.exports = {
       content: [
         "./src/**/*.{html,ts}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```

   - Create a `postcss.config.js` file at the root of your project:

     ```javascript
     module.exports = {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     }
     ```

   - Include Tailwind in your CSS by updating `src/styles.css`:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Set up Unsplash API:**
   - Create an Unsplash Developer Account at [Unsplash Developer](https://unsplash.com/developers).
   - Create a new application to get your Access Key.
   - Update `unsplash.service.ts` with your Unsplash Access Key:

     ```typescript
     private accessKey = 'YOUR_UNSPLASH_ACCESS_KEY';
     ```

## Usage

1. **Run the project:**

   ```bash
   ng serve
   ```

   The app will be served at `http://localhost:4200`.

2. **Filter images:**
   - Use the dropdown to filter images by orientation (all, horizontal, vertical).

## Project Structure

```plaintext
image-gallery/
├── src/
│   ├── app/
│   │   ├── image-gallery/
│   │   │   ├── image-gallery.component.css
│   │   │   ├── image-gallery.component.html
│   │   │   ├── image-gallery.component.ts
│   │   │   ├── image-gallery.component.spec.ts
|   |   |   services/
│   │   │   ├── unsplash.service.ts
│   │   |   ├── models/
│   │   │   ├── image.model.ts
│   │   |   ├── unsplash.model.ts
│   │   ├── app.component.scss
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets/
│   ├── styles.scss
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── angular.json
├── README.md
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the content to better fit your project's specifics, such as repository URL, contribution guidelines, and any additional features.
