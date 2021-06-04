import React from "react";
import Profile from "./social-profile/Profile";
import FriendList from "./friend-list/FriendList";
import Statistics from "./statistics/Statistics";
import TransactionHistory from "./transaction-history/TransactionHistory";

import user from "./social-profile/user.json";
import statisticalData from "./statistics/statistical-data.json";
import friends from "./friend-list/friends.json";
import transactions from "./transaction-history/transactions.json";

const App = () => (
  <>
    <Profile user={user} />
    <FriendList friends={friends} />
    <Statistics title="File upload" stats={statisticalData} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
