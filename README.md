# AI Haiku Poem Generator

The AI Haiku Poem Generator is a web application that automatically generates haiku poems using artificial intelligence. It leverages the SheCodes AI API to create unique and creative haikus on demand.

## Demo

Check out the live demo of the AI Haiku Poem Generator: [https://haiku-poem-generator.netlify.app/](https://haiku-poem-generator.netlify.app/)

## Features

- Generates haiku poems using AI technology
- Simple and intuitive user interface
- Error handling for improved experience on the API route and client-side
- Typewriter effect for displaying the generated haikus
- Responsive design for optimal viewing on various devices

## Technologies Used

- HTML
- CSS
- React / Next.js
- [axios](https://github.com/axios/axios) - Promise-based HTTP client for making API requests
- [SheCodes AI API](https://www.shecodes.io) - API for generating haiku poems
- [Typewriter Effect](https://github.com/tameemsafi/typewriterjs) - JavaScript library for creating typewriter effects
- [Font Awesome](https://fontawesome.com/) - Icon library and toolkit
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development

## Setup

To set up the AI Haiku Poem Generator locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/emceekoenig/haiku-generator
   ```

2. Navigate to the project directory:

   ```bash
   cd haiku-generator
   ```

3. Bootstrap your project with React via Next.js

   ```bash
   create-next-app
   ```

4. Obtain and save your API key in an .env\* file in the root of your project. More documentation re:API Key below.

5. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

   You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

   This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

6. Start generating haiku poems!

## API Key

To use the SheCodes AI API, you need to obtain an API key. Follow these steps:

1. Sign up for an account at [SheCodes](https://www.shecodes.io/).
2. Retrieve your API key from the SheCodes dashboard.
3. Add your API key to the `NEXT_PUBLIC_API_KEY` defined in your .env\* file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features, API, and loading environtment variables.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Acknowledgements

- [SheCodes](https://www.shecodes.io/) for providing the AI API
- [axios](https://github.com/axios/axios) for simplifying API requests
- [Typewriter Effect](https://github.com/tameemsafi/typewriterjs) for the typewriter animation
- [Font Awesome](https://fontawesome.com/) for the icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework

## Contact

For any inquiries or feedback, please contact [hello@chelseakoenig.com](mailto:hello@chelseakoenig.com).
