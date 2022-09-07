import React from 'react'
import {FaLink, FaInfo ,FaStar ,FaEye ,FaUtensilSpoon} from 'react-icons/fa'
import PropTypes from 'prop-types'

function RepoItem({repo}) {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        wacthers_count,
        stargazers_count,
    } = repo;

  return (
    <div className='mb-2 rounded-md card bg-base-200 hover:bg-base-300'>
        <div className="card-body">
            <h3 className='mb-2 text-xl font-semibold'>
                <a href={html_url}>
                    <FaLink className='inline mr-1' /> {name}
                </a>
            </h3>
            <p className="mb-3">{description}</p>
            <div>
                <div className="mr-2 badge bg-gradient-to-br text-white text-sm font-medium from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 badge-lg">
                    <FaEye className='mr-2' /> {wacthers_count}
                </div>
                <div className="mr-2 badge bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white text-sm font-medium badge-lg">
                    <FaStar className='mr-2' /> {stargazers_count}
                </div>
                <div className="mr-2 badge bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium text-sm text-white badge-lg">
                    <FaInfo className='mr-2' /> {open_issues}
                </div>
                <div className="mr-2 badge bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium text-sm text-gray-900 badge-lg">
                    <FaUtensilSpoon className='mr-2' /> {forks}
                </div>
            </div>
        </div>
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
