import React, { useState, createContext } from 'react';
import mockData from '@mock';

interface SnowBallContextType {
  snowBallData: SnowBallData;
  setSnowBallData: React.Dispatch<React.SetStateAction<SnowBallData>>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

interface UserData {
  id: number;
  main_snowball_id: number;
  message_count: number;
  nickname: string;
  snowball_count: number;
  snowball_list: Array<number>;
  user_id: string;
  username: string;
}

interface SnowBallData {
  title: string;
  id: number;
  is_message_private: boolean;
  main_decoration_color: string;
  main_decoration_id: number;
  bottom_decoration_color: string;
  bottom_decoration_id: number;
  message_list: Array<Message>;
}
interface Message {
  content: string | undefined;
  created: string;
  decoration_color: string;
  decoration_id: number;
  id: number;
  is_deleted: boolean;
  letter_id: number | undefined;
  location: number;
  opened: string | null;
  sender: string | undefined;
  snowball_id: number;
  user_id: number;
  sentiment: string;
  confidence: number;
}

const SnowBallContext = createContext<SnowBallContextType>({
  snowBallData: mockData.snowball_data,
  setSnowBallData: () => {},
  userData: mockData.user_data,
  setUserData: () => {}
});

const SnowBallProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [snowBallData, setSnowBallData] = useState<SnowBallData>(
    mockData.snowball_data
  );
  const [userData, setUserData] = useState<UserData>(mockData.user_data);
  return (
    <SnowBallContext.Provider
      value={{
        snowBallData,
        setSnowBallData,
        userData,
        setUserData
      }}
    >
      {children}
    </SnowBallContext.Provider>
  );
};

export { SnowBallContext, SnowBallProvider };
export type { SnowBallData, UserData };
