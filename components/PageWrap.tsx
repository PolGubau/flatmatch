import { SafeAreaView } from "react-native-safe-area-context";

export function PageWrap({ children }: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView className='bg-white text-black p-6 h-full'>
      {children}
    </SafeAreaView>
  )
}