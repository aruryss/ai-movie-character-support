![banner](assets/ai.png)

![GitHub last commit](https://img.shields.io/github/last-commit/aruryss/CodeGirlSummer2023Analytics)
![GitHub repo size](https://img.shields.io/github/repo-size/aruryss/CodeGirlSummer2023Analytics)

# AI Fictional Character Support Website
### Get encouraging message from your favourite movie/tv show/drama characters

## Authors

- [@aruryss](https://www.github.com/aruryss)
- This project was developed under the guidance of [build your own AI writing assistant w/ GPT-3](https://buildspace.so/builds/ai-writer) project from buildspace.

## Table of Contents

  - [Tech Stack](#tech-stack)
  - [Technical challenges](#technical-challenges)
  - [Assumptions and Limitations](#assumptions--limitations)
  - [How to run website locally](#How-to-run-website-locally)
  - [Future Improvements](#Future-Improvements)
  - [Repository structure](#Repository-structure)
##
I created a website that generates encouraging messages from your favourite movie / tv show / drama characters using OpenAI GPT-3.5.

## Tech Stack
- JavaScript
- HTML5
- CSS3
- OpenAI API
## Technical challenges

- 

## Assumptions & Limitations

Several **assumptions** that I made for the analysis were:

1. Applications were driven by Instagram influencers **solely** within **5-day-window** of them posting about camp
2. Educational institution indicated by applicants is their primary source of learning
3. Engagement is defined as the number of likes under the **last 6 Instagram posts** prior to the date of camp advertisement divided by the number of followers
4. Number of following of and Instagram account was regarded as of **September 3rd 2023**

Thus, **limitations** of the analysis are the following:

1. All those who indicated their source of traffic to be Instagram, were counted towards the amount of influencers’ traffic, if within the 1-day-window (lifespan of Instagram Stories used to advertise camp), as I could not tell for sure whether they learned about camp through their Explore page, native post or video.
2. Girls could be studying in other institutions for way longer before the one they indicated, but I cannot track all educational history, thus I refer to the one they indicated as primary one.
3. Engagement in Instagram is calculated with many factors in mind, but it is private to each user, thus I took available to me interactions with influencers’ permanent content to be engagement.
4. Due to Instagram limitations, there is no publicly and privately available information on follower count at certain date, thus I regarded follower count on [DATE TAKEN] for analysis.

## How to run website locally

## Future Improvements
- Track the audience engagement of our own Instagram account, as it is the main platform of our promo-campaign and should be reffered as primary source of traffic
- Implement Natural Language Processing model for Russian Language to process quality of the motivational letters to better assess biases during admissions and factors affecting acceptance rates
- All the conclusions derived from the analysis above will be implemented into our upcoming events to increase the quality and accessibility of tech events for girls in Kazahstan.

## Repository structure


```

├── assets
│   ├── ai.png                                    <- banner used in the README.
│   ├── acceptance-rates.png                      <- acceptance rate per educational institution plot used in the README.
│   ├── applications-timeline.png                 <- applications per day coming from Instagram plot used in the README.
│   ├── influencer-heat-map.png                   <- influencer metrics correlation heat map used in the README.
│   ├── track-rates.png                           <- acceptance rate per learning track plot used in the README.
│   ├── applicants-heat-map.png                   <- applicant attributes correlation heat map used in the README.
│   ├── participants-heat-map.png                 <- participant attributes correlation heat map used in the README.
│
├── datasets
│   ├── influencer.csv                    <- the dataset with Instagram Influencer profile information.
│   ├── participants.csv                  <- the dataset with participant information.
│   ├── registered.csv                    <- the dataset with applicant information.
│
│
├── README.md                                     <- this readme file.
```
