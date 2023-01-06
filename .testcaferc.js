module.exports ={
    browsers: "chrome",
    src:[
        'test/1-login.js',
        'test/2-home.js'

],
    reporter: [
        {
            name: "spec"
        },
        {
            name: "json",
            output: "allure/report.json"
        },
        {
            name: "allure"
          }
    ],
    screenshots: {
        takeScreenshotsOnFails: true,
        takeOnFails: true,
        pathPattern: "${DATE}_${TIME}/${BROWSER}/screenshot-${FILE_INDEX}.png",
        path:"allure/screenshots",
        fullPage: true
    },
    skipJsErrors: true,
    videoPath: "allure/screen-capture-video",
    videoOptions: {
        singleFile: false,
        failedOnly: true,
        pathPattern: "${DATE}_${TIME}/${BROWSER}/screen-video-${FILE_INDEX}.mp4"
    },
    concurrency: 1,
    selectorTimeout: 3000,
    assertionTimeout: 1000,
    pageLoadTimeout: 3000,
    speed: 1,
    hooks: {
        test: {
          before: async (t) => {
           //
          },
        },
      }
}