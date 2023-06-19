import { FolderIcon } from '../UI/Icons/FolderIcon';
import s from './user-profile-info.module.scss';

export const UserProfileInfo = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile__avatar}>
        <span className={s.profile__initials}>АС</span>
      </div>
      <div className={s.profile__about}>
        <h1 className={s.profile__name}>Андрей Смолин</h1>
        <ul className={s['profile__link-list']}>
          <li className={s['profile__list-item']}>
            <a
              href="https://t.me/rainbowisperfect"
              target="_blank"
              className={s.profile__link}>
              <FolderIcon />
              <span className={s['profile__link-text']}>Telegram</span>
            </a>
          </li>
          <li className={s['profile__list-item']}>
            <a
              href="https://github.com/RainbowIsPerfect"
              target="_blank"
              className={s.profile__link}>
              <FolderIcon />
              <span className={s['profile__link-text']}>GitHub</span>
            </a>
          </li>
          <li className={s['profile__list-item']}>
            <a className={s.profile__link}>
              <FolderIcon />
              <span className={s['profile__link-text']}>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
