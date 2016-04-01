
# How to override properties to simplify development

Create a copy of core.properties and add the following:

```
progressiveWebsite.web.freemarkerPath=file:/PATH-TO/htmlsample/experiments/progressive/progressive-static-content/freemarker
brikar.dev.overrideStaticPath=/PATH-TO/htmlsample/experiments/progressive/progressive-static-content/target/release/progressiveWebsite/web/static

brikar.settings.gracefulShutdownMillis=100
```

Then add VM property: ``-Dbrikar.settings.path=file:/PATH-TO-YOUR/progressive-website.properties`` pointing to your custom properties.
