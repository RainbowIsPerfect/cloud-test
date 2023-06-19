import { UserForm } from '../../components/Forms/UserForm';
import { UserProfileInfo } from '../../components/UserProfileInfo';
import s from './profile.module.scss';

export const Profile = () => {
  return (
    <div className={s.profile}>
      <UserProfileInfo />
      <hr className={s.profile__divider} />
      <UserForm />
    </div>
  );
};
