// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, onActiveImage, activeLanguageId} = props
  const {language, id} = itemDetails
  const onClickTab = () => {
    onActiveImage(id)
    console.log(id)
  }
  return (
    <ul className="tabs-container">
      <li className="list-items" value={activeLanguageId}>
        <button className="button" type="button" onClick={onClickTab}>
          {language}
        </button>
      </li>
    </ul>
  )
}
export default LanguageFilterItem
