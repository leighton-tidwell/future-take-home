# Future take home assessment

## Instructions

1. Clone the repo
2. Run `npm install`
3. run `npm run dev`

You need to have a .env file with the following:

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Or you can view the live site [here](https://future-take-home.vercel.app/)

## Notes

- To keep things modern, this app uses Next.js 15.1.6 along with React 19.
  - Next.js was chosen instead of just CRA as it has more performance benefits such as:
    - lower bundle size
    - abstracted suspense boundaries (loading pages)
    - easily supports server components (so we can fetch data on the server)
  - The application could easily be converted to CRA by just taking the react code from the View component and moving it into a project that uses CRA and doing the fetching client side instead of recieving props from the server. You would additionally need to use React Router for the URL based state management.
- This app uses typescript.
- This app is styled with TailwindCSS.
- This app was deployed on Vercel.
- The linter being used is ESLint.
- The code was documented with comments to point out some intentional decisions.
- The total time to complete this assessment was 3 hours.

## If I had more time/this was a real product

- I would probably have a better design, right now it is basic but to demonstrate functionality.
- I would have done some fancy speedometer design for the skill level instead of just a progress bar.
- The audio by the title would be an icon that just plays the audio.
- I would have broken out more components into their own files.
- I would have added proper react testing library tests.
- If the constraint was not a 'single page app', I would have taken better advantage of the routing in Next.js to make use of more under the hood caching. For example: I would have made each exercise detail page its own route and used the layout system to make it feel like a single page app. I just didn't want to go out of the project requirements and kept it a SPA once you hit the entry point.
- I would have spent more time on the mobile design.
- I would have used something like Emotion or PandaCSS for styling (I chose tailwind for the convienence and speed).
- I would have split my commits up into more logical commits.
