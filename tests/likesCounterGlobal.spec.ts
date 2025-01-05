import {test, expect, request} from '@playwright/test'

test('Like counter increase', async({page})=>{
    await page.goto("http://conduit.bondaracademy.com/")
    await page.getByText('Global Feed').click()
    const firstLikeButton = page.locator('app-article-preview').first().locator('button')

    await firstLikeButton.click()
})

