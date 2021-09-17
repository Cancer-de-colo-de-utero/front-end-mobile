import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios'

export default AcoesList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios('https://raw.githubusercontent.com/knowledgefactory4u/Javascript/
            master/dummy.json')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (

    <View style={{ flex: 1, padding: 24, backgroundColor: 'purple' }}>
      {isLoading ? <Text>Loading...</Text> :
        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 
'space-between' }}>
          <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
Fetch content using Axios</Text>
          <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>
{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'white', textAlign: 'center', 
                     paddingBottom: 10 }}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{ color: 'white' }}>{item.id + '. ' + item.title}
                                 </Text>
            )}
          />
        </View>
        )}
    </View>
  );
};