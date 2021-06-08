import React from "react";
import Profile from "./components/social-profile/Profile";
import FriendList from "./components/friend-list/FriendList";
import Statistics from "./components/statistics/Statistics";
import TransactionHistory from "./components/transaction-history/TransactionHistory";

import user from "./components/social-profile/user.json";
import statisticalData from "./components/statistics/statistical-data.json";
import friends from "./components/friend-list/friends.json";
import transactions from "./components/transaction-history/transactions.json";

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <FriendList friends={friends} />
    <Statistics title="File upload" stats={statisticalData} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
