This is a mobile-first SPA that allows users to calculate their monthly mortgage payments, personal expenses, property expenses and salary after tax. As the user fills in these details they will be given the dollar amount in real time that they will be able to add to their savings per month and year, or if they’re likely to lose money based on this budget. Users can save these details to LocalStorage so they can add more details later, adjust the amounts based on changes to their circumstances, or refer to the budget they’ve given themselves while they’re house hunting. It also provides useful links to external resources that would help people understand the housing market in more detail.

It utilises React Routes, LocalStorage and helper functions that update an object stored to state for its functionality, and conditional classnames, media queries and more advanced CSS concepts like ‘has’ to provide an intuitive and friendly UI.

The site was then added to an S3 bucket for static site hosting. Route53 was used to connect it to an external domain name (purchased from CrazyDomains) using Name Servers, and CloudFront to provide SSL Certification for secure browsing. A yaml file integrated with AWS CLI allows for GitHub actions to provide CI/CD on push.

Having previously been a writer and editor for a communications agency, the copy on the site was also written by its developer (me).

This is currently live on [mortgagebudget.com.au](mortgagebudget.com.au) for any who want to see it in action.
