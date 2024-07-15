
import { redirect } from 'next/navigation'

const MainPage = () => {
    redirect('/user')
  return (
    <div>MainPage</div>
  )
}

export default MainPage