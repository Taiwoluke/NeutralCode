import React from 'react' 

const Nav = () => {

  return (
    <nav className='bg-black min-w-10 h-20'>
        <img src="" alt="logo" />

        <ul className='flex flex-row justify-center gap-5.5 m-auto'>
            <li className='text-white'><a href="">TheNeutralcodeExperience</a></li>
            <li className='text-white'><a href="">Stacks</a></li>
            <li className='text-white'><a href="">TheTeam</a></li>
            <li className='text-white'><a href="">ChitChat</a></li>
            <li className='text-white'><a href="">Studentship</a></li>
            <li className='text-white'><a href="">Mentorship</a></li>
        </ul>
    </nav>
  )
}

export default Nav