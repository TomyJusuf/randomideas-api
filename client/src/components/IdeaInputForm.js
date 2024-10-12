class IdeaInputForm {
  constructor() {
    this.userName = document.getElementById('username')
    this.textArea = document.getElementById('idea-text')
    this.tag = document.getElementById('tag')
    this.submitBtn = document.getElementById('submit')
    this.delete = document.querySelector('.delete')
    this.card = document.querySelectorAll('.card')
    this.ideas = document.querySelector('.ideas')
    this.addEventListener()
  }

  addEventListener() {
    this.submitBtn.addEventListener('click', this.handleSubmit.bind(this))
    window.addEventListener('load', this.getIdeas.bind(this))

    this.ideas.addEventListener('click', this.deleteIdea.bind(this))
  }

  async handleSubmit(e) {
    e.preventDefault()
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', this.userName.value)
    }

    if (this.userName.value) {
      localStorage.setItem('username', this.userName.value)
    }
    const name = this.userName.value || localStorage.getItem('username')

    if (!name || this.textArea.value.trim() === '') {
      alert('Please fill all inputs.')
      return
    }

    const idea = {
      username: name,
      text: this.textArea.value,
      tags: this.#tagIdea(),
      date: new Date().toISOString().split('T')[0],
      author: this.userName.value.trim(),
    }
    try {
      this.textArea.value = ''
      this.userName.value = localStorage.getItem('username')
      this.tag.value = ''

      const response = await fetch('http://localhost:5000/api/ideas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(idea),
      })

      if (!response.ok) throw new Error('Failed to suibmit to idea')

      await this.getIdeas()
    } catch (error) {
      console.error('Error submitting the idea:', error)
      alert('An error occurred while submitting the idea. Please try again.')
    }
  }

  async getIdeas() {
    try {
      const response = await fetch('http://localhost:5000/api/ideas')

      if (!response.ok) throw new Error('Failed to fetch ideas')

      const data = await response.json()
      const getData = data.data

      const ideaList = document.getElementById('idea-list')
      ideaList.innerHTML = ''
      let ideaHTML = ''
      getData.forEach((idea) => {
        const { _id, text, username, date, tags } = idea

        const ideaDate = new Date(date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        const formattedDate = ideaDate.toLocaleDateString('en-US', options)
        const formattedTags = Array.isArray(tags) ? tags.join(', ') : tags
        ideaHTML = `
          <div class="card" id="${_id}">
            ${
              localStorage.getItem('username') === username
                ? '<button class="delete"> <i class="fas fa-times"></i></button>'
                : ''
            }
            <h3>${text}</h3>
            <p class="tag tag-${tags}">${formattedTags}</p>
          <p>
          Posted on <span class="date">${formattedDate}</span> by
          <span class="author">${username}</span>
          </p>
          </div>
          `
        ideaList.innerHTML += ideaHTML
      })
    } catch (error) {
      console.error('Error submitting the idea:', error)
      alert('An error occurred while submitting the idea. Please try again.')
    }
  }

  async deleteIdea(e) {
    e.preventDefault()

    if (
      e.target.classList[1] === 'fa-times' ||
      e.target.parentElement.classList[1] === 'delete'
    ) {
      try {
        const id = e.target.parentElement.parentElement.id
        await fetch(`http://localhost:5000/api/ideas/${id}`, {
          method: 'DELETE',
        })

        return this.#remove(id)
      } catch (error) {
        console.error(`Error deleting idea with ID ${id}:`, error)
      }
    }
  }

  #remove(id) {
    const idea = document.getElementById(id)
    if (idea) {
      idea.remove()
    }
  }

  #tagIdea() {
    const idea = []
    if (this.tag.value === '') {
      return 'blog'
    } else {
      this.tag.value.split(',').forEach((tag) => {
        idea.push(tag.trim())
      })
      return idea
    }
  }
}

export default IdeaInputForm
