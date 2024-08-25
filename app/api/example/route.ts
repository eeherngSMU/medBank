import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium-min";

export const POST = async (): Promise<void> => {
  try {
    console.log('POST request')

      const executablePath = await chromium.executablePath(
        "https://chromiumlaylayers.s3.ap-southeast-2.amazonaws.com/chromium-v127.0.0-layer.zip"
      );
  
      if (!executablePath) {
        throw new Error('Failed to download Chromium binary');
      }
      
    const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath,
        headless: chromium.headless,
      });
    
    console.log('browser')
      

    const page = await browser.newPage();

    await page.goto("https://www.example.com", { waitUntil: "networkidle0" });

    console.log("Chromium:", await browser.version());
    console.log("Page Title:", await page.title());

    await page.close();
    await browser.close();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unexpected error occurred");
  }
};

POST().then(() => console.log("Done"));
