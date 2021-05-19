---
klass: "about"
layout: documentation
lang-ref: 
title: How to
description:
background: assets/images/Crimson_crowned_fruit_dove.png
imageLicense: Photo by Stuart Chape
parallax: true # OPTION - default is false
toc: true # OPTIONAL - default is false. Should the page have a Table of Contents
height: 75vh
parallax: true
#overlayColor: "#ffffffbb"
hasTextShadow: true
hasBlackText: false
composition:
- type: heroImage
- type: pageMarkdown
- type: heroImage
  data: example.compose.overlay.heroHeadlineA
- type: markdown
  data: example.compose.overlay.text
- type: heroImage
  data: example.compose.overlay.heroHeadlineB
- type: markdown
  data: example.compose.overlay.text
---

## How do I use GBIF to find data?
<br>The site [www.gbif.org](https://www.gbif.org) contains over one billion records of species, specimens, observations, and
samples. Each record will have information about how to download and cite the data. Try exploring
the site!
Start by searching from the homepage or clicking on “Get Data” in the top panel. You can look for
occurrence data, search by species, look for whole datasets, and more.

![Image of How-to-1](/assets/images/How-to/1.png)

You can search for whole datasets using keywords. In this example, we’re looking for datasets with
titles that include “invasive”. (Note that you might not find all the data available about invasive
species this way. You will only find datasets that have been labelled using that exact word.)

![Image of How-to-1](/assets/images/How-to/2.png)

You can search for datasets by region, called “Publishing country or area” in the left panel. You can
search for multiple countries at a time and combine with other filters: each checked box will be
included in your search.

![Image of How-to-1](/assets/images/How-to/3.png)

For those of us in the Pacific, a useful way to find related datasets from our region is to look at the
datasets hosted by the SPREP Node. Here, we searched using “Secretariat of the Pacific Regional
Environment Programme” as the Host. There were 52 results at the time, and this number is
growing as you and your colleagues publish more data!

![Image of How-to-1](/assets/images/How-to/4.png)

Click on a dataset name to find out more. You can also download the whole dataset if you want, in
a few different formats:

![Image of How-to-1](/assets/images/How-to/5.png)

There are many ways to search, using filters, keywords, and more. One of the most common ways
to search is for a single species, and you can use either the scientific name (Latin name) or the
common name (vernacular) to search. However, it is important to remember that the vernacular
name might be different in different places, or the same name might be used for different species.
For example, here is a search for “crown of thorns”. The search results include the sea star or starfish
called “crown of thorns” but also include a plant, a fish, an insect, and more. For best results, you
may want to search a few times using different names.

![Image of How-to-1](/assets/images/How-to/6.png)

You can also choose to search “everything” (occurrences, species, whole datasets, and more) by
entering a search, then clicking on the top left arrow here:

![Image of How-to-1](/assets/images/How-to/7.png)

## How do I publish data on GBIF?
First, you must register your organisation to GBIF, indicating that you’ll be using the SPREP
Integrated Publishing Tool (see below). After you have registered as a data publisher, you can
follow this step-by-step process to publish data on GBIF:
<br>
1. Enter metadata for your dataset on the SPREP IPT.
2. Have your source dataset Darwin Core ready (see below: “How do I prepare data for publishing”).
3. Upload dataset to the IPT.
4. Map your dataset to Darwin Core Terms, either as a Checklist Dataset or Occurrence Dataset (as appropriate for your data)
5. Publish.
6. Validate the dataset with the GBIF Data Validator, prior to registering the dataset [www.gbif.org/tools/data-validator](https://www.gbif.org/tools/data-validator).
7. Register the dataset with GBIF (first time-only).
8. Receive feedback from GBIF and users.
9. Update your source data.
10.Repeat from step 4. Note that the responsibility for maintaining datasets falls on the data publisher.

### What if my data were published by another institution?
Datasets have unique Identifiers. If the dataset you want to share is already on GBIF,
it is recommended that you don’t re-publish because GBIF will identify the dataset as
redundant. A better solution, as a publisher, would be to link to that data already uploaded
by the other institution.
Remember, the publisher is not necessarily the only or original owner of the dataset, as
defined in the metadata, they are just the one who did the work to publish it through GBIF.
If another institution has already done that for you, go ahead and use it as an asset!

## Pathways to data publishing
How do you decide what to publish? First, consider the type of species data that you most need and use. 
Sharing that data can help provide you a stable, recorded copy, and those data are also likely to be
useful to others.
Consider the goals of your active projects. In addition
to new data, are there older data you would need
to compare with any new findings? During project
development, did someone have to dig up old files to
try to identify the scope of the problem? Those data
may be worth sharing.
While data about endemic species or new areas
are always interesting, it’s also true that data about
species found in common areas are helpful to identify
and plan for potential species invasions.
Data that are already in tables or spreadsheets are ideal, but data in any format can be extracted
and put into columns and rows. For example, you may have a report that verbally describes
encounters with certain species in a particular area or areas. You can convert that into a dataset
with the species name matched to the area, year of observation, and so on.
You can decide whether it is occurrence data, checklist data, or sample event data. Each of these
types requires different amounts and details of data. For more information, see [http://rs.tdwg.org/dwc/terms/](http://rs.tdwg.org/dwc/terms/) and [www.gbif.org/data-quality-requirements](www.gbif.org/data-quality-requirements).

## How do I register as a data publisher on GBIF?
The first step to sharing data with GBIF is to register, identifying your organisation as one that has
quality data to share. Once you are registered, you can publish as many datasets as you like.
The GBIF requirement for registration is that you have access to a node – in the Pacific islands,
this means access to the SPREP node and Integrated Publishing Toolkit (IPT). You can register
to become a publisher at any time, you do not need to have data ready. A publisher can also be
registered to provide access to metadata, even if they are not ready to publish a dataset.
A publisher may be a ministry, institute, organisation, and so on. For simplicity, we will use the
term “institution” throughout these instructions.

1. Access the GBIF website at www.gbif.org. Click on Share tab – Become a Publisher and search for your institution to confirm whether or not your institution is already registered. If your institution is not registered, proceed to Step 2.
2. There is a data publisher agreement to consider. Agree to continue.
3. Fill in the details requested (e.g., name of institution, primary contact, website address, description of organisation, map location, etc.). 
<br>Remember to select that the endorsing node, as well as access to an IPT, will be through the SPREP node. 
<br>The site will ask whether you need help in publishing – the answer here is “No” because there is already assistance available to you via the SPREP Node Manager. 
<br>Contact Information: Provide your contact details within your institution. It is a good idea to also provide a general contact email for the institution (i.e. info@..............) that will last even if a staff member leaves. The Technical Point of Contact will require the contact information of the Node Manager at SPREP. Note that if contact information changes, you may contact the GBIF Help Desk directly to update the contact information. 
<br>Provide a short description of your institution. 
<br>Select “No” to the question “Are you planning to install and run publishing software (such as the [Integrated Publishing Toolkit – IPT](https://www.gbif.org/ipt)) to publish your data directly to [GBIF.org](https://www.gbif.org/)?”
4. Submit
6. A notification email will be sent to the contact person (Data Publisher) and a notification email will be sent to SPREP as the GBIF Participant Node.
7. Once the Participant Node has endorsed the institution for GBIF, the registration will be complete and now has a new publisher added to the GBIF site.
8. GBIF will send the contact person a password for the newly registered institution. This password will be required by the Node Manager to assist with registering new datasets to GBIF in the IPT.
