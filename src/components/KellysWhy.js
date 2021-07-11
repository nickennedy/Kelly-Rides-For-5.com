import whyTitle from '../images/whyTitle.png'


const KellysWhy = () => {
    return(
        
        <div id="why-container" className='card'>
            <img src={whyTitle} id='why-title'/>
            <iframe id="why-vid" scrolling="no" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen" src="https://w3.cdn.anvato.net/player/prod/v3/anvload.html?key=eyJtIjoiY2JzIiwidiI6IjU3MDgwNjkiLCJhbnZhY2siOiI1VkQ2RXlkNmRqZXdiQ21Od0JGbnNKajE3WUF2R1J3bCIsInNoYXJlTGluayI6Imh0dHBzOi8vY2JzbG9jLmFsLzNxZ25McGUiLCJwbHVnaW5zIjp7ImNvbXNjb3JlIjp7ImNsaWVudElkIjoiMzAwMDAyMyIsImMzIjoiZ29vZGRheXNhY3JhbWVudG8uY2JzbG9jYWwuY29tIn0sImRmcCI6eyJjbGllbnRTaWRlIjp7ImFkVGFnVXJsIjoiaHR0cDovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP3N6PTJ4MiZpdT0vNDEyOC9jdy5nZGF5JmNpdV9zenMmaW1wbD1zJmdkZnBfcmVxPTEmZW52PXZwJm91dHB1dD14bWxfdmFzdDImdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZ1cmw9W3JlZmVycmVyX3VybF0mZGVzY3JpcHRpb25fdXJsPVtkZXNjcmlwdGlvbl91cmxdJmNvcnJlbGF0b3I9W3RpbWVzdGFtcF0iLCJrZXlWYWx1ZXMiOnsiY2F0ZWdvcmllcyI6IltbQ0FURUdPUklFU11dIiwicHJvZ3JhbSI6IltbUFJPR1JBTV9OQU1FXV0iLCJzaXRlU2VjdGlvbiI6ImZlYXR1cmVkIn19LCJsaWJyYXJ5UmVxdWVzdGVkIjp0cnVlfSwiaGVhcnRiZWF0QmV0YSI6eyJhY2NvdW50IjoiY2JzbG9jYWwtZ2xvYmFsLXVuaWZpZWQiLCJwdWJsaXNoZXJJZCI6ImNic2xvY2FsIiwiam9iSWQiOiJzY192YSIsIm1hcmtldGluZ0Nsb3VkSWQiOiI4MjNCQTAzMzU1Njc0OTdGN0YwMDAxMDFAQWRvYmVPcmciLCJ0cmFja2luZ1NlcnZlciI6ImNic2RpZ2l0YWxtZWRpYS5oYi5vbXRyZGMubmV0IiwiY3VzdG9tVHJhY2tpbmdTZXJ2ZXIiOiJjYnNkaWdpdGFsbWVkaWEuZDEuc2Mub210cmRjLm5ldCIsImNoYXB0ZXJUcmFja2luZyI6ZmFsc2UsInZlcnNpb24iOiIxLjUiLCJwYXJlbnRQYWdlVVJMIjoiaHR0cHM6Ly9nb29kZGF5c2FjcmFtZW50by5jYnNsb2NhbC5jb20vMjAyMS8wNi8yMS9sb2RpLWN5Y2xpbmctY3Jvc3MtY291bnRyeS1iaWtlLXJpZGUtY2F1c2VzLyIsInBhcmVudFRpdGxlIjoi4oCYSXTigJlzIEdvaW5nIFRvIFRha2UgQSBCaXTigJk6IExvZGkgQ3ljbGlzdCBQbGFubmluZyBDcm9zcy1Db3VudHJ5IEJpa2UgUmlkZSBGb3IgR29vZCBDYXVzZXMg4oCTIEdvb2QgRGF5IFNhY3JhbWVudG8iLCJwSW5zdGFuY2UiOiJwMCIsInByb2ZpbGUiOiJjYnMiLCJjdXN0b21UcmFja2luZ1NlcnZlclNlY3VyZSI6ImNic2RpZ2l0YWxtZWRpYS5kMS5zYy5vbXRyZGMubmV0In0sImhlYWx0aEFuYWx5dGljcyI6e319LCJodG1sNSI6dHJ1ZSwidG9rZW4iOiJkZWZhdWx0In0%3D"  width ="640" height="360"></iframe>
            <i><h5 id='why'>Why?</h5></i>
            <p className='kellys-why'>To serve.  To build community.  To help because I can. I ride because I am able.  I work in the animal health field for an incredible company, Boehringer Ingelheim.  My passion is animals and helping others.  I am lucky to have a job that is not “work” because it offers the opportunity to do both of these things.  Some veterinarians are affected by depression and suicide.  Family, friends, neighbors and people I will never meet affected by the devastating diagnosis and affects of cancer.</p> 
            <p className='kellys-why'> This ride offers the same opportunity to help those I love—My wife, Shelley, my friend JD and one of my best friend’s mothers, growing up. Finally, with every pedal stroke I am able to help individuals living with the destructive neuromuscular effects of amyotrophic lateral sclerosis, when they are not able to help themselves.</p>
            <p className='kellys-why'>This ride is a ride for life.  A “Ride for 5” causes that can save a life, extend a life, change a life.  Luckily, mine will undoubtedly be one of those.</p>
        </div>
    )
}

export default KellysWhy;