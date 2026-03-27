# DealNexus Production Package

## Structure
- index.html -> Landing page
- demand-signals.html -> Market demand evidence brief
- robots.txt -> Blocks crawler indexing
- _headers -> Sends X-Robots-Tag on static hosts
- assets/ -> Optional images/icons
- data/ -> Optional source snapshots

## Deploy
1. Upload all files in this folder to your static host root.
2. Confirm 
obots.txt is accessible.
3. Confirm response headers include X-Robots-Tag for pages.
4. Share only with intended recipients (internal/prospect).

## Confidentiality
All pages include noindex meta directives + robots disallow + X-Robots-Tag header rules.
