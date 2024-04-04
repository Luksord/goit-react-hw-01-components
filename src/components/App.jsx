import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const appStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={appStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      >
        <p>tekst</p>
      </Profile>
      <Statistics title={data.title} stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory transactions={transactions}></TransactionHistory>
    </div>
  );
};
