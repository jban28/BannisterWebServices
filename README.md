# Bannister Web Services
This repository is for the 
[bannisterwebservices.co.uk](https://www.bannisterwebservices.co.uk) website.

## Frontend app structure
The front end app for this site is a React SPA. The pages are stored in 
subfolders within the `/src/pages` directory. Each page corresponds to a single
route (url). The compents that are used within the pages are stored in 
`/src/components`. Again, there is  one subfolder per component. All components 
return a single DOM node (unlike pages which may return multiple nodes wrapped 
in a JSX fragment). `/src/config` contains any configuration data used by 
pages or components. All pages and components have a separate `.css` file and 
`.jsx` file, with the css imported into the `.jsx` file. CSS classes conform to
the BEM syntax, where a block represents exactly one page or component, and 
where a page or component contains only on block within it's `jsx`. 