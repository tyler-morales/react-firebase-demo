import { Link } from 'react-router-dom'

function PageHeader() {
  return (
    <div>
      <h1 class="text-3xl py-4 bg-red-500 text-white">
        Demo Project & Practice
      </h1>

      <nav class="text-blue-300 text-lg mt-4">
        <Link to="/firebase" class="px-2">
          🔥 Firebase
        </Link>
        |
        <Link to="/testing" class="px-2">
          🃏 Testing
        </Link>
        |
        <Link to="/state" class="px-2">
          🪐 State Management
        </Link>
      </nav>
    </div>
  )
}

export default PageHeader
