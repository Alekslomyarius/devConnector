import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
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

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername:
        loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : bio.company,
      twitter: loading || !profile.social ? '' : profile.social.twitter,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading, getCurrentProfile]);

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
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>???????????????? ???????? ??????????????</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> ?????????????? ???????????????????? ?? ????????
      </p>
      <small>* = ?????????????????????? ?????? ????????????????????</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>* ?????? ???????????????????????????????? ????????????</option>
            <option value='Developer'>??????????????????????</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Middle Developer</option>
            <option value='Manager'>Senior Developer</option>
            <option value='Student or Learning'>??????????????</option>
            <option value='Instructor'>??????????????????????????</option>
            <option value='Intern'>????????????????</option>
            <option value='Other'>????????????</option>
          </select>
          <small className='form-text'>
            ?????????? ?????????????????????????? ?? ?????????? ?????????????? ??????????????
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='????????????????'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>???????????????? ?? ?????????????? ???? ??????????????????</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='????????'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>???????? ????????????????</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='??????????????????????????????'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small class='form-text'>??????????</small>
        </div>
        <div class='form-group'>
          <input
            type='text'
            placeholder='* ????????????'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            ?????????? ???????????????????????????????? ???????????????? ???? ????????????????
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='?????????? GitHub'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>?????????????? ?????? ?????????? ?? GitHub</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='???????????????????? ?? ????????'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>???????? ??????????????????</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            ???????????????????? ????????
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
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
