import React from 'react';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class Details extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
		  title: navigation.getParam('name', 'Details of Item'),
		};
	  }

	render() {

		const name = this.props.navigation.getParam("name", "Item Name")
		const likes = this.props.navigation.getParam("likes", "Likes")
		
		return (

			<Container>
				<Content padder>
					<Text>This is the Details Page</Text>
					  <Text>Item Name: {name}</Text>
					  <Text>Likes: {likes}</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Details
