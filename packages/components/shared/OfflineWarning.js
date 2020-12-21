import { useNetInfo } from '@react-native-community/netinfo';
import $t from 'i18n';
import React from 'react';
import { Text, View } from 'react-native';

const OfflineWarning = () => {
  const networkState = useNetInfo();

  return (
    !networkState.isConnected && (
      <View>
        <Text>{$t('common.offline')}</Text>
      </View>
    )
  );
};

export default OfflineWarning;
