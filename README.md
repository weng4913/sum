# sum

# ---WORK IN PROGRESS---
## Summary
A web application to give homeless individuals a unique identifier to fast-track getting resources and facilitate case worker communication, and for community organizations to track supply inventory
## Inspiration
We both volunteered in the past for community organizations that help the homeless get food, showers, and toiletries. What we noticed was that a lot of the food would go to waste because there would either too much or the client would be particular about their food, and people would often not know of the resources around them in regards to shelters, showers, or food. We also noticed that a lot of the homeless would have access to smartphones or computers during the day, so we thought that if they had a common portal outlining the resources around them, then they would be less ostracized from society since they would have access to the basic needs that the housed do. We were also inspired by the problems statements of DCMH and AggieHouse and realized to better serve the homeless, the clients, organizations, and case workers have to be on the same page. 
## What it does
Sum provides a common portal for case workers, community organizations, and clients to keep track of the essentials that the clients need, the supplies that the organizations need to support them, and the progress of each case worker's clients. Each client can either pull up their profile on their phone or have a printed badge with unique, AI generate artwork of their choice and a QR code. They can also select their needs for that particular day and have it sent to a nearby organization for fulfillment. Volunteers at those organizations can then scan the client's QR code to update their inventory of supply and verify the client's request. Clients also can schedule appointments with their case worker, for showers, or for regular checkups. Case workers can keep digitized notes on each client and track their progress.
## How we built it
We built this site with a JavaScript frontend and Django backend. We also integrated PropelAuth for user verification and liked the ability to assign roles to each member in the organization, which would work well with giving clients, volunteers, and case workers their own view of the application.
## Challenges we ran into
The Django/Python implementation for PropelAuth was relatively recent, so there was very little documentation on it from other users. Also, since we are both beginners, and since we are working in a team of 2, we definitely bit off more than we can chew in regards to the site functionality.
## Accomplishments that we're proud of
We are proud of participating in our first hackathon, and although it was exhausting and stressful at times, we were able to make something that works somewhat and were able to make a good looking concept.
## What we learned
We learned a lot about the pipeline for building an app, especially one on extremely short notice. We also learned to keep trying even if we're new and even if the prospect of making a somewhat functioning app was incredibly daunting.
## What's next for Sum
Fleshing out the rest of the site is definitely a need, as well as developing both an Android and iOS version of the app. Since most homeless individuals have cheaper Android phones, the Android implementation is more pressing than the iOS one.
