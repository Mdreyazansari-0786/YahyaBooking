import React from 'react'
import Common from './Common'
import Card1 from './Card1'

const TipsAndArtical = () => {
  return (
    <div className='bg-white'>
        <Common title="Tips & Articles" des="Browse the latest articles from our blog" />
        <div className="flex justify-center items-center py-4 px-36">
      <div className="flex flex-row space-x-4">
      <Card1 img="https://yahya.xendekweb.com/wp-content/uploads/2018/10/13-6.jpg" title="In hac habitasse platea" des="Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut" />
      <Card1 img="https://yahya.xendekweb.com/wp-content/uploads/2018/12/11-7.jpg" title="In hac habitasse platea" des="Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut"  />
      <Card1 img="https://yahya.xendekweb.com/wp-content/uploads/2016/02/10-6.jpg" title="In hac habitasse platea" des="Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut" />
      </div>
    </div>

  </div>
  )
}

export default TipsAndArtical