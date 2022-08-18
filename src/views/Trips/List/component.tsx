import React from 'react';
import {SafeAreaView, ScrollView, Pressable} from 'react-native';
import Button from '../../../sharedComponents/Button';
import Card from '../../../sharedComponents/Card';
import Loading from '../../../sharedComponents/Loading';

import {Container} from '../Trips.elements';
import {iTrip} from '../../../types/trips';
interface TripsProps {
  trips: iTrip[];
  onClick: (trip: iTrip) => void;
  resetClick: () => void;
  isHighlighting: boolean;
  isLoading: boolean;
}

function TripsComponent({
  trips,
  onClick,
  resetClick,
  isHighlighting,
  isLoading = false,
}: TripsProps): React.ReactElement {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          {!isLoading &&
            trips.map((tripItem: iTrip, index: number) => {
              return (
                <Pressable key={index} onPress={() => onClick(tripItem)}>
                  <Card
                    title={tripItem.name}
                    detail={`${tripItem.startDate} - ${tripItem.endDate}`}
                    footer={tripItem.status}
                    highlight={
                      isHighlighting && tripItem.status === 'NOT_STARTED'
                    }
                  />
                </Pressable>
              );
            })}
          {isLoading && <Loading />}
          <Button onPress={resetClick}>
            {trips.length > 0 ? 'Reset' : 'Reload'}
          </Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TripsComponent;
