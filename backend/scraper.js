import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import UserAgent from "user-agents";

puppeteer.use(StealthPlugin());

const CHUNK_SIZE = 10; // You can tune this (5–15 is usually safe)

export async function scrapeRGPV(
  deptUrl = "https://www.rgpvonline.com/btech-cse-question-papers.html#list"
) {
  const userAgent = new UserAgent();
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.setUserAgent(userAgent.toString());

  const result = [];

  try {
    await page.goto(deptUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
    page.setDefaultTimeout(5000);

    const paperPages = await page.$$eval(
      'a[href^="https://www.rgpvonline.com/be/"]',
      (links) =>
        links.map((link) => ({
          title: link.textContent.trim(),
          url: new URL(link.getAttribute("href"), window.location.origin).href,
        }))
    );

    console.log(`🔍 Found ${paperPages.length} paper links`);

    // Process in chunks
    for (let i = 0; i < paperPages.length; i += CHUNK_SIZE) {
      const chunk = paperPages.slice(i, i + CHUNK_SIZE);

      const chunkResults = await Promise.all(
        chunk.map(async (paper) => {
          const paperPage = await browser.newPage();
          await paperPage.setUserAgent(userAgent.toString());

          try {
            await paperPage.goto(paper.url, {
              waitUntil: "domcontentloaded",
              timeout: 15000,
            });

            const pdfLinks = await paperPage.$$eval('a[href$=".pdf"]', (links) =>
              links.map((link) => ({
                title: link.textContent.trim(),
                url: new URL(link.getAttribute("href"), window.location.origin).href,
              }))
            );

            await paperPage.close();
            return pdfLinks;
          } catch (err) {
            console.warn(`❌ Failed to load ${paper.url}:`, err.message);
            await paperPage.close();
            return [];
          }
        })
      );

      // Flatten and add to result
      result.push(...chunkResults.flat());

      console.log(`✅ Processed ${i + chunk.length} / ${paperPages.length}`);
    }

    return result;
  } catch (error) {
    console.error("❌ Scraping failed:", error);
    return [];
  } finally {
    await browser.close();
  }
}
