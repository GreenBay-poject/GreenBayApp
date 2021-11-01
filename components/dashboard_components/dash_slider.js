import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Paragraph, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import IntroCard from '../../atoms/card';
import { PRIMARY, SECONDARY } from '../../shared/colors';

export default function DashboardSlider() {
  const data = [
    {
      "key": "0",
      "image": 'https://ak.picdn.net/shutterstock/videos/1607116/thumb/7.jpg?ip=x480',
      "title": 'View Q & A',
      "paragraph": 'You can view the answeres supplied by ministry officers to arising questions. You can ask questions thorugh our website.'
    },
    {
      "key": "1",
      "image": 'https://stofstil.azureedge.net/v-637633768959592660/a6/55/5f46-6436-4a34-9a14-c818d1da426c/250690_pack_solid.jpg',
      "title": 'View Posts',
      "paragraph": 'The authorities publish posts in this platform. You can observe them and update your knowledge'
    },
    {
      "key": "2",
      "image": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAA1BMVEUwMi/FsLFiAAAASElEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC3AcUIAAFkqh/QAAAAAElFTkSuQmCC',
      "title": 'View Notes',
      "paragraph": 'View private notes by you and public notes by authority users'
    },
    {
      "key": "3",
      "image": 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcICAgHBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExMYHCggGCYxJxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDy0ZFRktNysrKystNysrKys3NystKysrKysrLSsrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EABgQAQEBAQEAAAAAAAAAAAAAAAABEQIS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8A8aEiu90Bi4uKPEwxvFw8Py5+V8t4vk/J+XPyY6YYfkeXLDHTDB5Hlzwx0ww/JY54Y6YmDwWMYY3iYPAxjDGsKm8kyAmwAgRAAMAAAAAAgogAqAAADQADQRqMxqFDjUWQjUaRpISLIsjUi5FSM4uNYuLkVjGGN4mKwYziY3hh+U4xhjWGH5KxjDGsMPymxjExtC8pYqVqs1FhMotSsbCRKqIpAIRKIEFEAFEUGAAAiloABoABoWNxzjpByuNxqJGo25ayNSNSJGo0jSQXBWkhpiY0isCYYoqRLOJjSHiamIoeIrLNbZosTWazWqzWXSaxWa1Waw6SlRUY0gQIlECCiACiBGogAogWhRFGmAFoXl05c+XTk+WnLpG45xuN+a1jcajMajaNIqoq4YAsCKiokQFJqIqGipUqs0qis1it1isekVms1azWHSKlQqMaSiCQqAQAAaiBBRABQCMAIwAgvLpy58unKuV8ukbjnG425raNxqMRqNpVxsZVpKppAVKQILlTRBDTRFRSKjNVKVRWaxWqxWPSKlYrVYrDpFSotRhSAEgAAFQBqIAKARgBGAEAAjajfLny6cq5Xy6RqMRuNea1jcajEajWVpGhFaSmoguUKgipU0QRWoqogeopWaVmi1FSs1axWPVRUrNWs1h1UVKhUY1KiCTURQAAGogDUAgogDUQSaiBBqNxz5dIcXy3G4xG41jaNRqMxY0lXGlQaSmoC5QIIqVNEEVqKIJp6zpWatrNFqKlYrVYrHqoqVmrWax6qalQoxtSKgQURQYqRQYADFQBqARgBGAJC8unLny6cqi+W43GI3GsbRqLEixcXGgFxQAuUhBD1FRKtZp6ilqWlZtPWdLUtNZotZ1KzVrNZdVNSs1alY9VNRAZ0hUCCqkWAxRTVEUxcB4guGA8QXAjxBQgiKiaGuXTlz5dOTi+W43GI3GsbRqNRmNRpGkUFUpAFFUrNWpT1nWalKzaNZUtZtLWbRrO1bUtS1NK9ItKzS1KztTUqUSsrUiAikRUig1iwjUNUhiyEjUilyJi4uLh4uRnDGsMGDGcMawwsPGBrETSxlmtVmoqavLry5cuvJ8r5bjcYjcaxtGo1GY1GkaRVBSxFqAqzWa1WKNZdM1mrWKWsei1m0rNLWVpqWpqam1GqzVSotSIJUWkAhBViRqBUWNxmNxUaSLI3Ikjci41kTFxqRZFYucsYY6YmHh+WMTG7EsTYVjnYljdjNTU2MVit1isqzr/2Q==',
      "title": 'Generate Report',
      "paragraph": 'Get deforestation report on selected area. To generate report we use AI techniques'
    }
  ]
  const image = { uri: 'https://reactjs.org/logo-og.png' };

  const cards = []
  data.forEach(element => {
    //console.log(element.image);
    cards.push(<IntroCard key={element.title} imagelink={element.image} title={element.title} paragraph={element.paragraph}></IntroCard>)
  })

  return (

    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

      {cards}

    </ScrollView>
  );
}

