import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Panel from '../../../sharedComponents/Panel';
import {Container} from '../Trips.elements';

import {iTrip} from '../../../types/trips';

interface TripsProps {
  trip: iTrip;
}

function TripDetailComponent({trip}: TripsProps): React.ReactElement {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Panel title={trip.name} detailList={trip.destinations} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default TripDetailComponent;
