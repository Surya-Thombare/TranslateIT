import { Stack, Link } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />

      {/* Language selectori */}
      <View className='flex-row justify-around p-5 '>
        <Text className='font-semibold color-blue-600'>English</Text>
        <FontAwesome5 name="exchange-alt" size={16} color="gray" />
        <Text className='font-semibold color-blue-600'>Spanish</Text>
      </View>

      {/* Inout container */}
      <View className='p-5 border-y border-gray-300'>
        <View className='flex-row gap-5'> 

          {/* input */}
          <TextInput 
          placeholder='Enter your text'
          multiline
          maxLength={5000}
          className='text-xl flex-1 min-h-32'
          />

          {/* send button */}
          <FontAwesome6 name="circle-arrow-right" size={24} color="royalblue" />
        </View>
        <View className='flex-row justify-between'>

          {/* mic icon */}          
          <FontAwesome6 name="microphone" size={18} color="dimgray" />

          {/* Text count */}
          <Text className='color-gray-500'>0 / 5000</Text>
        </View>
        
      </View>
      {/* OutPut container */}
      <View className='p-5 gap-5 bg-gray-300'>
        {/* output */}
        <Text className='min-h-32 text-xl'>OutPut</Text>
          <View className='flex-row justify-between'>
          {/* mic icon */}          
          <FontAwesome6 name="volume-high" size={18} color="dimgray" />

          {/* Text count */}
          <FontAwesome5 name="copy" size={18} color="dimgray" />
        </View>
      </View>
    </>
  );
}
