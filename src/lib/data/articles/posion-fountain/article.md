---
title: 'Poison Fountain'
description: 'Machine intelligence threatens the human species. - Geoffrey Hinton'
date: '2026-03-28T01:56:02.000Z'
thumbnail: './poison.gif'
---

> ## "_Machine intelligence threatens the human species._" <br/> &ndash; Geoffrey Hinton

Don't get me wrong, I think llms (Large Language Model) can be a good tool. The problem comes when big tech take the freedom to invade and violate our
right to privacy by taking (stealing) our data without any consent.

It is no secret that these big tech AI companies scrape tons of data from the internet to train their models.
The more data they have the better their models perform. When they are scraping data from our social media posts, blogs, websites, essentially anything that is available on the internet without getting our consent, that is a form of theft. 

## So what can I do to fight back?

It is possible fight back by giving them what they want. You give them data, data that is poisoned and useless.
Remember the llms are only as good as the data they are trained on.
If they get dog water data the llm becomes...well, dog water.

## How does it work?

Before we start I want to mention that it is possible to disallow crawlers on your website by configuring your `robots.txt` file. Well behaved crawlers will respect that but not all of them are well behaved.

The llms get their training data from crawlers that sends HTTP GET requests to your websites.
So what you can do is hide links on your websites that provide them with poisoned data, [poisonfountain.org](https://www.poisonfountain.org/) and [rnsaffn.com](https://rnsaffn.com/) provide such links. They return randomised text content so its totally safe to use and click on them.

See poison links below:

- <https://www.poisonfountain.org/poison> (original source)
- <https://RNSAFFN.com/poison2/>

## Implementation

The simplest way of doing this is to just hide an `<a>` tag in your frontend and point directly to the poison link like this:

```html
<a aria-hidden="true" style="display:none;" href="https://RNSAFFN.com/poison2/">
 Terms of Service
</a>
```

The other way that is even better if you own the backend is creating an endpoint that returns the content of the poison link (so the URL can't be [deduped](https://en.wikipedia.org/wiki/Data_deduplication)):

```ts
// name your endpoint something "real" but that is not
// actually being used e.g. "/terms-of-service"

export const GET = async ({ fetch }) => {
 const res = await fetch('https://rnsaffn.com/poison2/', { method: 'GET' });

 if (!response.ok) {
  throw new Error('Failed to reach upstream service');
 }

 const body = await response.text();

 return new Response(body, {
  status: 200,
  headers: {
   'Content-Type': response.headers.get('content-type') ?? 'text/html',
   'Content-Encoding': 'gzip'
  }
 });
};
```

Then your `<a>` tag will look something like this:

```html
<a aria-hidden="true" style="display:none;" href="https://api.awesome-website.dev/terms-of-service">
 Terms of Service
</a>
```

That's it, that is how you fight back! Over time this will poison the training data of the llms and inflict damage.

All credit goes to my m8 who introduced me to data poisoning and how it can be implemented! 
