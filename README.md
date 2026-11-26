# Elements Martial Arts | Modern V8

Three-site static HTML, CSS and JavaScript prototype. Same static stack as before: no frameworks, no build step, no Next.js. V6 is a full modern premium redesign layer, V7 is the polish pass on top and V8 is the structure pass that turns bare content dumps into designed layouts. All three layers are applied without changing the client content.

## Run
Extract the ZIP. Open `index.html` in the project folder, or start a local server using `python -m http.server 8080`. Open `project-index.html` to browse all 134 website routes.

## Modern V6 design layer
`assets/modern.css` (loaded last) and `assets/modern.js` restyle every route without touching the content or the markup. All page text, routes, images and features are unchanged. The layer delivers:

- Contemporary type system: Archivo display and Inter body via Google Fonts, with system font fallbacks.
- New premium palette: ink navy, electric accent blue, soft neutral surfaces, layered shadows and a 12 to 28px radius scale.
- Glass header with blur, animated nav underlines, pill CTA with glow, and a full screen mobile menu.
- Full colour photography (the old grayscale treatment is retired) with hero scrims, slow Ken Burns drift and entrance motion that respects reduced motion.
- Pill buttons and ghost pill text links with hover lift and sliding arrow micro interaction.
- Rounded image cards, pricing cards, FAQ accordions, segmented pill tabs, article cards and service panels.
- Sticky glass section jump bar, scroll progress indicator and smart header that hides on scroll down and returns on scroll up.
- Unicode separators and bullets replaced with proper inline SVG dots; em and en dashes removed from all page copy.
- Legacy variable aliases keep any surviving prior layer rules on the new palette.

The V3, V4 and V5 files remain in place as the underlying component system; V6 and V7 override them in the cascade.

## V7 polish pass
The final block of `assets/modern.css` (marked "V7 POLISH PASS") repairs issues surfaced in review:

- Split media photos on lead, wide, side, long and portrait story sections had square corners because V4 rules with higher specificity forced `border-radius: 0`. All split photos now use the 22px radius scale. Full bleed hero and callout bands stay edge to edge by design.
- The partner logos composite image now sits in a white rounded framed card with padding and shadow instead of floating raw on the dark band.
- Contrast hardening: stronger hero and header scrims, darker eyebrow and tile index chips with blur, brighter dark section body copy and footer meta, readable pricing unit labels. Pixel sampled text regions measure 10:1 or better.
- The affiliate CTA band renders as a full blue gradient band again; the previous flat white override made it read as an orphaned empty strip.
- Coach directory repair: a V5 leftover four column grid made coach photos overlap names and bios on both instructors pages. Reset to a two column card grid that drops to one column below 920px.
- Empty footer columns no longer occupy a column.

## V8 structure pass
The final blocks of `assets/modern.css` (marked "V8 STRUCTURE PASS") rebuild the pages that previously dumped raw content with no layout. Every sentence is preserved verbatim and only regrouped into designed components:

- Instructors (Brighton): the fourteen coach text wall in the lead section becomes a two column grid of photo coach cards, each with portrait, name, blue belt rank pill and full bio. The duplicate roster below is folded into the cards so nothing repeats.
- Membership (both locations): the booking note becomes an app panel with phone icon and styled App Store and Google Play buttons, the pricing feature list becomes a two column check grid panel, the student discount note becomes a blue gradient promo band with check list and the Haywards Heath terms list becomes a panel.
- Corporate courses (all three locations): the five numbered partner points become numbered card grids, the gateway benefits, approach and why choose us lists become icon card grids, the closing chapter becomes a blue CTA panel with a Contact us button, and the short prose chapters get a centred composed focus layout.
- Referral programme (both locations): key benefits become four icon benefit cards, eligibility becomes a check list note panel with a join button, the four steps become numbered step cards, the six Q and A chapters merge into one FAQ accordion, and the sign up form and member reviews become separate service stages with a working partner-signup-form anchor.
- Service embeds site wide (18 files): the old placeholder card is replaced by a designed service panel with an icon, clean title (Enquiry form, Live Glofox timetable, Member reviews and so on), a clear note and the same provider buttons. Form field bullet lists become small field chips.
- Blog listings: the first article becomes a horizontal featured card with a flush edge to edge photo, and hover states link titles to the accent blue.

## V5 note
The earlier refined responsive layer lives in `assets/refined.css` with `assets/refined.js`.

## Audit
Read `qa/audit-summary.md` and the three CSV logs. The separately supplied evidence ZIP includes full-page before/after screenshots for each page and both viewport sizes, contact sheets and a searchable HTML report.

## Production limitations
Live Glofox, Google Reviews, external forms, maps, video availability and custom AI chat provider integration still require verification. This is a noindex/nofollow design-review prototype. Some campaign copy is draft and needs approval; original pricing, coach qualifications, membership terms and schedules may have changed. No new licensed stock photography was added. Some related pages reuse original photos. No production WordPress migration has been performed. The source archives were not fully reconciled against every page's content, and full accessibility and cross-browser audits remain outstanding.
