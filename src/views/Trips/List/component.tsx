import React from 'react';
import {SafeAreaView, ScrollView, Pressable} from 'react-native';
import Button from '../../../sharedComponents/Button';
import Card from '../../../sharedComponents/Card';

import {Container} from '../Trips.elements';
import {iTrip} from '../../../types/trips';

interface TripsProps {
  trips: iTrip[];
  onClick: (trip: iTrip) => void;
  resetClick: () => void;
  isHighlighting: boolean;
}

function TripsComponent({
  trips,
  onClick,
  resetClick,
  isHighlighting,
}: TripsProps): React.ReactElement {
  console.log(isHighlighting)
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          {trips.map((tripItem: iTrip, index: number) => {
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
          <Button onPress={resetClick}>Reset (clean persist trips)</Button>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TripsComponent;
