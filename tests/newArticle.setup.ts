import { test as setup, expect} from '@playwright/test'

setup('create new article', async({request})=>{
  const articleResponse = await request.post(
    "https://conduit-api.bondaracademy.com/api/articles/",
    {
      data: {
        article: {
          title: "Likes title article",
          description: "this is a test description",
          body: "This is test body",
          tagList: [],
        },
      },
    }
  );

      expect(articleResponse.status()).toEqual(201);
      const response = await articleResponse.json()
      const slugId = response.article.slug
      process.env['SLUGID'] = slugId
})