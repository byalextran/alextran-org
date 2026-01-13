---
title: "What is Course Variability Index (CVI) and CVI+net?"
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css">

CVI is a metric created by Steve Palladino ([Palladino Power Project](https://www.facebook.com/groups/PalladinoPowerProject/)) that loosely conveys how hilly a route or course is. It’s a quick and dirty way of knowing how much uphill running to expect and is useful in [advanced race planning](/race-planning/) (particularly CVI+net).

$$\text{CVI} = \frac{\text{elevation gain (in feet)}}{\text{distance (in miles)}}$$

Keep in mind, elevation gain is not the same as max elevation. Elevation gain measures how much uphill running was done. Max elevation is the highest elevation reached.

As an example, let's say a half marathon has 500 ft of elevation gain. CVI would be 38.

$$\text{CVI} = \frac{\text{500 ft}}{\text{13.1 miles}} = \text{38}$$

Based on my experience, here's how I'd describe various CVI ranges.

<figure class="table-wrapper">

| **CVI Range** | **Description** |
| --- | --- |
| < 25 | Flat |
| 26-35 | Slightly Hilly |
| 36-50 | Somewhat Hilly |
| 51-75 | Moderately Hilly |
| 76-100 | Very Hilly |
| 101+ | Extremely Hilly |

</figure>

If I'm targeting a PR, I'm looking for courses with a CVI under 25 (and as low as possible). For context, the Berlin Marathon, universally considered a flat course, has a CVI of 15. Generally, I'm also good racing courses in the 26-35 range. The 36-50 range is tolerable. Anything over 50 and I know hills will be a factor.

## CVI Shortcomings

While CVI is easy to calculate and provides useful high level information, it does have some downsides.

Namely, two routes with the same CVI could race and feel drastically different. That's because CVI doesn't capture elevation loss.

Imagine two routes that have the same climb to start. Route A is then flat to the finish. Route B is downhill to the finish. Both have the same CVI, but Route B will be faster.

## CVI+net

The lack of elevation loss represented in CVI is what prompted the introduction of CVI+net by Steve Palladino. As the name suggests, it takes CVI and adds the net elevation change.

$$\text{CVI+net} = \frac{2 * \text{elevation gain (in feet)} - \text{elevation loss (in feet)}}{\text{distance (in miles)}}$$

CVI+net is meant to be used in tandem with CVI.

Where CVI provides a general idea of how much uphill running a course has, comparing CVI+net to CVI tells you how much uphill running vs downhill running to expect. Will there be more uphill running, more downhill, or equal amounts?

<figure class="table-wrapper">

|  | Expectation |
| --- | --- |
| CVI+net > CVI | More uphill running than downhill |
| CVI+net < CVI | More downhill running than uphill |
| CVI+net = CVI | Similar amounts of uphill/downhill running |

</figure>

Let's look at CVI+net for three hypothetical half marathons, all three starting with the same climb (500 ft) for the first half.

- Race A finishes flat
- Race B is an out and back so finishes downhill with 500 ft of elevation loss
- Race C finishes downhill with 750 ft of elevation loss.

<figure class="table-wrapper">

|  | CVI | CVI+net |
| --- | --- | --- |
| Race A (+500 ft then flat) | 38 | 76 (more uphill) |
| Race B (+500 ft then -500 ft) | 38 | 38 (equal) |
| Race C (+500 ft then -750 ft) | 38 | 19 (more downhill) |

</figure>

The addition of CVI+net compared to CVI gives us a much better feel for a course depending on if CVI+net is greater than, less than, or about the same as CVI.

Also note the degree of difference between CVI+net and CVI tells you the degree of difference between uphill and downhill running. If CVI+net is drastically lower than CVI then there's a lot more downhill running than if CVI+net was only slightly lower.

As useful as these two metrics are, it's still a good idea (especially in a race context) to look at an elevation profile to gain a more holistic picture of a course's elevation profile. It'll let you know where to expect challenging climbs/descents and whether or not elevation gain/loss is from steep, short sections or more gradual, longer sections.
