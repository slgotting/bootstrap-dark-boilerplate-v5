This boilerplate was derived from:

# [Bootstrap NPM Starter](https://github.com/twbs/bootstrap-npm-starter/tree/v5)

see that for initialization details



## For production:

    1. CSS (and all other static assets) should be ideally served by NGINX if you are using that

    2. The purge command should definitely be used with this as the file size goes from 272.8kB to around 40kB
        - the dark mode addition of every class is the reason this is so necessary
        - update your purge command to include any html templates you have

        - use with $ npm run css-purge

## Issues:

    1. Updating $border-color (along with others, link-color, not sure what else) does not work when applied to the dark mode wrapper class
        This doesn't seem like a site ruining issue, although it is a limiting factor, and more limiting factors may be discovered

    2. Some things may not make any sense due to my lack of knowledge on how bootstrap uses its color variables.


## Questionable (potentially better ways of implementation):

    1. I use bg-1 through bg-5 to define background colors


## Copyright

&copy; @slgotting 2020-2021 and licensed MIT.
