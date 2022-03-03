import axios from 'axios'

const API_URL = 'https://api.covid19api.com/summary'

// Get Covid Data Summary
const getCovidSummary = async () => {

  const response = await axios.get(API_URL)

  return response.data
}

export default getCovidSummary
