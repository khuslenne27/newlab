import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={
        {
          // Here to apply for all tabs
        }
      }>
      <Tabs.Screen
        name="index"
        options={
          {
            // Or here to apply for one tab
          }
        }
      />
      
    </Tabs>
  );
}
