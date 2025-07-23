# personal-blog

This is a personal blog website inspired by the styles of Bill Gurley and Paul Graham. The blog features a clean and minimalistic design, focusing on content and readability.

## Project Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Reusable components for the blog.
    - `Header.js`: Navigation and title of the blog.
    - `Footer.js`: Footer information, including copyright and links.
    - `BlogPost.js`: Renders individual blog posts.
    - `Layout.js`: Wraps main content with `Header` and `Footer`.
  - **pages/**: Contains the pages of the blog.
    - `index.js`: Homepage displaying recent blog posts.
    - `about.js`: Information about the blog or the author.
    - `blog/[slug].js`: Dynamic route for individual blog posts.
    - `archive.js`: Lists all blog posts for browsing.
  - **styles/**: Contains global styles for the application.
    - `global.css`: Overall look and feel of the blog.
  - **content/**: Contains markdown content for the blog posts.
    - `posts/index.md`: Markdown content for the blog posts.

- **public/**: Directory for static assets (images, fonts, etc.).

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **next.config.js**: Configuration settings for Next.js.

## Getting Started

To get started with the blog, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-blog
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the blog in action.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.