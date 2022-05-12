import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

/* Icon imports */
import { Entypo } from '@expo/vector-icons';

/* Component Imports */
import FoodCard from '../../components/AppCards/FoodCard';

const Accordion = ({ item }) => {
  return (
    <Collapse style={styles.accordionContainer} isExpanded>
      <CollapseHeader>
        <View style={styles.accordionHeader}>
          <Text style={styles.accordionText}>{item.category_name}</Text>
          <Entypo name="chevron-down" size={18} color="black" />
        </View>
      </CollapseHeader>
      <CollapseBody>
        <FoodCard
          name={item.name}
          image={{ uri: `https://development.aa.am${item.image}` }}
          price={item.price}
          id={item.id}
        />
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
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Accordion;
