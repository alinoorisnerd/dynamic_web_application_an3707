import {createContext, useState, useCallback} from 'react'
import {fetchProfile, saveProfile} from '../api'

const UserContext = createContext()

const UserProvider = (props) => {
  const {children} = props
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadName = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const profile = await fetchProfile()
      setName(profile.name || '')
    } catch (err) {
      console.error(err)
      setError('Could not reach the server. Is `npm run server` running?')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const saveName = async (newName) => {
    const profile = await saveProfile(newName)
    setName(profile.name)
  }

  const valuesToShare = {
    name,
    isLoading,
    error,
    loadName,
    saveName,
  }

  return (
    <UserContext.Provider value={valuesToShare}>
      {children}
    </UserContext.Provider>
  )
}

export {UserProvider}
export default UserContext
