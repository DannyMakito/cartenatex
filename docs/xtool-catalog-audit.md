# XTOOL Catalog Audit and Cleanup Notes

## What we did

- Expanded the XTOOL catalog in `constants.ts` using official XTOOL source data.
- Added missing official products that were previously flagged as `unavailable` / `ayikho`:
  - `X₂PROG SERIES`
  - `X100PAD ELITE2 (2026)`
  - `X100PADS EV`
  - `InPlus IK618E`
  - `KC501`
  - `AnyToyo SK1`
  - `InPlus IP819TP`
  - `XTireProbe`
  - `TS100 BT`
  - `ASCT-1000`
- Normalized existing `Compass` / `Compass Master` images to the official XTOOL source.
- Fixed the flagged `BEC2440` image so it now points to the correct official BEC2440 asset.
- Updated the seed-generated XTOOL products to use verified primary image URLs from the official catalog instead of synthetic `.../{slug}.webp` paths.
- Removed the old seed ID collision risk by renumbering the generated seed entries away from the `xtool-15` to `xtool-21` range.
- Cleaned up visible naming/casing in the shop display for a few entries so the product labels read more consistently.

## How we did it

1. Opened the official XTOOL catalog page and product pages.
2. Extracted the official product-card `data-src` image values and product page links from the HTML.
3. Matched each catalog seed entry to its official XTOOL product page.
4. Replaced the generated placeholder image URLs in `constants.ts` with official primary image URLs.
5. Added the missing official products as full `Product` entries with:
   - product name
   - category
   - primary image URL
   - description
   - feature list
   - supporting specs or packing list where available
   - official detail link
   - `badgeLabel: 'On Request'` for the added items that are available on request
6. Verified that the revised catalog no longer has duplicate XTOOL IDs in the generated seed block.

## Source of truth used

- Official XTOOL catalog page:
  - [https://www.xtooltech.com/products/xtooltech-online-product/](https://www.xtooltech.com/products/xtooltech-online-product/)
- Official product pages used during the audit:
  - [Compass / Compass Master](https://www.xtooltech.com/products/gasoline-diagnostic-tools-compass-compass-master/)
  - [D9HD](https://www.xtooltech.com/products/d9hd/)
  - [N9EV 2](https://www.xtooltech.com/products/n9ev-2/)
  - [BEC2440](https://www.xtooltech.com/products/bec2440-battery-balancer/)
  - [V1000](https://www.xtooltech.com/products/v1000/)
  - [AT02](https://www.xtooltech.com/products/at02/)
  - [AD20 Pro](https://www.xtooltech.com/products/obd2-code-reader-ad20-pro/)
  - [A30M](https://www.xtooltech.com/products/obd2-code-reader-a30m/)
  - [X₂PROG SERIES](https://www.xtooltech.com/products/key-programmers-x2prog-series/)
  - [X100PAD ELITE2](https://www.xtooltech.com/products/key-programmers-x100pad-elite2/)
  - [X100PADS EV](https://www.xtooltech.com/products/x100pads-ev-key-programmer/)
  - [InPlus IK618E](https://www2.xtooltech.com/english/ProductsView/IK618E.html)
  - [KC501](https://www.xtooltech.com/products/key-programmers-kc501/)
  - [AnyToyo SK1](https://www.xtooltech.com/products/key-programmers-anytoyo-sk1/)
  - [InPlus IP819TP](https://en.xtooltech.com/products/tpms-tools-inplus-ip819tp/)
  - [XTireProbe](https://en.xtooltech.com/products/tpms-tools-xtireprobe/)
  - [TS100 BT](https://www.xtooltech.com/products/tpms-tools-ts100-bt/)
  - [ASCT-1000](https://en.xtooltech.com/products/adas-calibration-system-asct-1000/)

## What is still left

- The remaining open task is video-link cleanup.
- We still need to scrape or verify the actual YouTube review links for each product and replace any placeholder or non-YouTube `reviewVideo` values in `constants.ts`.
- Once those links are verified, the catalog will be much closer to a fully source-verified XTOOL section.

## Notes

- The app already handles broken image URLs with a fallback placeholder, but this audit replaced the problematic URLs at the data layer instead of relying on the fallback.
- The broader project still has unrelated TypeScript issues outside the XTOOL work, so those remain separate from this catalog pass.
