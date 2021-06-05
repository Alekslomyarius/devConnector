import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Создайте свой профиль</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Напишите информацию о себе для создания
        профиля
      </p>
      <small>* = обязательно для заполнения</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* Ваш профессиональный статус</option>
            <option value='Developer'>Разработчик</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Middle Developer</option>
            <option value='Manager'>Senior Developer</option>
            <option value='Student or Learning'>Студент</option>
            <option value='Instructor'>Преподаватель</option>
            <option value='Intern'>Аспирант</option>
            <option value='Other'>Другое</option>
          </select>
          <small className='form-text'>
            Дайте представление о своем текущем статусе
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Компания'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Компания в которой вы работаете</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Сайт'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Сайт компании</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Местонахождение'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small class='form-text'>Город</small>
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='* Умения'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Языки программирования которыми вы владеете
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Логин GitHub'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Введите ваш логин в GitHub</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Информация о себе'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>Ваша биография</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Социальные сети
          </button>
          <span></span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='dashboard.html'>
          Назад
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
