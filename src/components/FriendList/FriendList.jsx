import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

/*
export const FriendList = ({ friends, index }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id || index}>
          <span
            className={
              friend.isOnline ? css['statusOnline'] : css['statusOffline']
            }
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
*/
/*
FriendsList.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    isOline: PropTypes.bool,
  };
*/
