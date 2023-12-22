// Write your code here
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {languagesData: [], activeLanguageId: languageFiltersData[0].id}

  componentDidMount() {
    this.getLanguages()
  }

  getLanguages = async () => {
    const {activeLanguageId} = this.state
    const apiURL = `https://apis.ccbp.in/popular-repos?language${activeLanguageId}`
    const response = await fetch(apiURL)
    const data = await response.json()
    console.log(data)
    const updatedData = data.popular_repos.map(
      ({
        name,
        id,
        issues_count: issuesCount,
        forks_count: forksCount,
        stars_count: startsCount,
        avatar_url: avatarURL,
      }) => ({
        name,
        id,
        issuesCount,
        forksCount,
        startsCount,
        avatarURL,
      }),
    )

    this.setState({languagesData: updatedData})
  }

  onActiveImage = activeLanguageId => {
    this.setState({activeLanguageId}, this.getLanguages)
  }

  render() {
    const {languagesData, activeLanguageId} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Popular</h1>
        <div className="list-container">
          {languageFiltersData.map(item => (
            <LanguageFilterItem
              itemDetails={item}
              key={item.id}
              activeLanguageId={activeLanguageId}
              onActiveImage={this.onActiveImage}
            />
          ))}
        </div>
        <ul className="language-list">
          {languagesData.map(eachItem => (
            <RepositoryItem eachItemDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default GithubPopularRepos
