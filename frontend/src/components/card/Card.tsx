import React from 'react';
import ICard from '../../interfaces/ICard';
import './Card.scss';
interface Props {
  card: ICard;
}

const Card = ({ card: { id, animation, img, title, content } }: Props) => {

  return (
    <>
      <div key={id} className={`${animation} card`}>
        <div className='card-inner'>
          <div className='card-front'>
            <div className="card-image">
              <figure className="image is-square">
                <img src={img.path} alt="Placeholder" />
              </figure>
            </div>
          </div>
          <div className='card-back'>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="card-title">{title}</p>
                </div>
              </div>

              <div className="card-content">
                {content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;