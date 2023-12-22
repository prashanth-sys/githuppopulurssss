// Write your code here
import {IoStarSharp} from 'react-icons/io5'
import {FcGenericSortingDesc} from 'react-icons/fc'
import {MdPermIdentity} from 'react-icons/md'

import './index.css'

const RepositoryItem = props => {
  const {eachItemDetails} = props
  const {
    avatarURL,
    name,
    startsCount,
    forksCount,
    issuesCount,
  } = eachItemDetails
  return (
    <li className="list-item">
      <img src={avatarURL} alt={name} className="image" />
      <h1 className="language-name">{name}</h1>
      <div className="starts">
        <IoStarSharp />
        <p className="star">{startsCount} stars</p>
      </div>
      <div className="starts">
        <FcGenericSortingDesc />
        <p className="star">{forksCount} forks</p>
      </div>
      <div className="starts">
        <MdPermIdentity />
        <p className="star">{issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
