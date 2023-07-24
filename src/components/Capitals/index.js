import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
    No: 0,
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
    No: 1,
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
    No: 2,
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
    No: 3,
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
    No: 4,
  },
]

class Capitals extends Component {
  state = {count: countryAndCapitalsList[0]}

  changeEvent = event => {
    const search = event.target.value
    const resultsList = countryAndCapitalsList.filter(
      each => each.capitalDisplayText === search,
    )
    this.setState({count: resultsList['0']})
  }

  render() {
    const {count} = this.state

    return (
      <div className="con">
        <div className="con1">
          <h1 className="head">Countries and Capitals</h1>
          <div className="con8">
            <select className="select" onChange={this.changeEvent}>
              {countryAndCapitalsList.map(each => (
                <option className="con-option" key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="span">is capital of which country</p>
          </div>
          <p className="para">{count.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
