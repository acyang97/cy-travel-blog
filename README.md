This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to write a post

1. Create the markdown file in the `Post` folder, inside the `Country` folder where the post of the country belongs to. Create the `Country` folder if necessary
2. Add the title of post in the `countryData.ts` file. The title of the post should be the name of the `.md` file. For example, if there is a post written in a `md` file titled `3-Reasons-To-Travel-To-Albania.md`, should add `3-Reasons-To-Travel-To-Albania` into the array of the `posts` property in the respective country
3. Ensure that the `md` file contains all the required metadata of `title`, `subtitle`, `date`, `previewPhoto`, `time`
4. The template for adding a photo is below. Replace the

```
<figure style="text-align:center">
  <center><img src="https://imagedelivery.net/zHaoQUqTgVRyao5aPR7rcg/<imageId>/<variant>" alt="<INSERT ALT TEXT>" style="width:100%;margin:0" align="center"></center>
  <figcaption align="center" style="font-weight:200;color:black"><b>INSERT SUBTITLE</b></figcaption>
</figure>
```

5. If it is a new country, add visited label to the mapData.ts and countryData.ts. We also need to add a picture for the countryPreview
