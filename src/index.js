const url = 'http://localhost:5000'

class FetchData {
  constructor(url, query) {
    this.url = url
    this.query = query
  }

  get() {
    getIdeas = async () => {
      try {
        const response = await fetch(`${this.url}${this.query}`)
        const data = await response.json()
        return data
      } catch (error) {
        console.log(error)
      }
    }
    return getIdeas()
  }
}

const fetchData1 = new FetchData(url, '/')

fetchData1.get().then((data) => {
  const div = document.createElement('div')
  div.innerText = `${data}`
  document.getElementById('app').appendChild(div)
})

const fetchData2 = new FetchData(url, '/api/ideas')
fetchData2.get().then((data) => console.log(data))

const fetchData3 = new FetchData(url, '/api/technologies')
fetchData3.get().then((data) => console.log(data))
