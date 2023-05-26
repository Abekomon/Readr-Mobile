export default function fetchArticles(filters = 'home') {
  const apiKey = 'XCAwGeTk3lPxdD1AXwJIvXP1h2UEuEGU'
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${filters}.json?api-key=${apiKey}`)
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      console.log("error")
      throw new Error("Api Response Error")
    }
  })
}