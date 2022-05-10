import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

const Accordion = () => {
  return (
    <Collapse isExpanded>
      <CollapseHeader>
        <View style={styles.accordionHeader}>
          <Text style={styles.accordionText}>Dinner</Text>
          <Entypo name="chevron-down" size={18} color="black" />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <ScrollView>
          <FoodCard
            name="Wali Maharage"
            image={require('../assets/food.jpg')}
            price="4000"
          />
          <FoodCard
            name="Wali Maharage"
            image={require('../assets/food.jpg')}
            price="4000"
          />
        </ScrollView>
      </CollapseBody>
    </Collapse>
  );
};

const styles = StyleSheet.create({
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  accordionText: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Accordion;
